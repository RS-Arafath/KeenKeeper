import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
    getStoredTimeline,
    getValidTimelineItems,
    saveTimelineToStorage,
} from '../utils/dateUtils';

export const BookContext = createContext();

const FriendProvider = ({ children }) => {

    // Shared interaction list used by timeline, stats, and recent activity UI.
    const [timeline, setTimeline] = useState(() => getStoredTimeline());

    useEffect(() => {
        // Drop expired items first, then store the cleaned list.
        const validTimeline = getValidTimelineItems(timeline);

        if (validTimeline.length !== timeline.length) {
            setTimeline(validTimeline);
            return;
        }

        saveTimelineToStorage(validTimeline);
    }, [timeline]);

    // Creates a single interaction entry whenever Call/Text/Video is clicked.
    const handleInteraction = (expectedFriend, type) => {
        const now = new Date();
        const labelMap = {
            call: 'Call',
            text: 'Text',
            video: 'Video',
        };
        const subtitleMap = {
            call: 'Had a quick phone check-in',
            text: 'Sent a thoughtful message',
            video: 'Shared a face-to-face catch-up',
        };

        const timelineItem = {
            id: `${expectedFriend.id}-${type}-${now.getTime()}`,
            friendId: expectedFriend.id,
            name: expectedFriend.name,
            type,
            title: `${labelMap[type]} with ${expectedFriend.name}`,
            subtitle: subtitleMap[type],
            createdAt: now.toISOString(),
            date: now.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }),
        };

        setTimeline((prev) => [timelineItem, ...prev])
        toast.success(`${labelMap[type]} With ${expectedFriend.name}`, {
            position: "top-center"
        })
    };

    // Removes all interactions for a single friend from shared state and storage.
    const clearFriendInteractions = (friendId) => {
        setTimeline((prev) => prev.filter((item) => item.friendId !== friendId));
        toast.info('Recent interactions cleared.', {
            position: "top-center"
        });
    };

    // Removes every saved interaction from shared state and storage.
    const clearAllInteractions = () => {
        setTimeline([]);
        toast.info('Timeline cleared.', {
            position: "top-center"
        });
    };

    // Context value exposed to any page/component that needs interaction data.
    const data = {
        clearAllInteractions,
        clearFriendInteractions,
        handleInteraction,
        timeline
    };


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider> 
};

export default FriendProvider;
