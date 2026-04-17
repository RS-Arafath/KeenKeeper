import React, { use } from 'react';
import FriendCard from '../Ui/FriendCard';

// Shared friends dataset used by the home page cards and summary metrics.
const friendsPromise = fetch("/FriendsData.json").then((res) => res.json());

const AllFriends = () => {

    const friends = use(friendsPromise);

    // Top summary cards on the homepage.
    const totalFriends = friends.length;
    const onTrackFriends = friends.filter((friend) => friend.status === 'on-track').length;
    const needAttentionFriends = friends.filter((friend) => friend.status !== 'on-track').length;

    const currentDate = new Date();
    let interactionsThisMonth = 0;

    friends.forEach((friend) => {
        if (typeof friend.days_since_contact === 'number') {
            const interactionDate = new Date(currentDate);
            interactionDate.setDate(currentDate.getDate() - friend.days_since_contact);

            if (
                interactionDate.getMonth() === currentDate.getMonth()
                && interactionDate.getFullYear() === currentDate.getFullYear()
            ) {
                interactionsThisMonth = interactionsThisMonth + 1;
            }
        }
    });

    return (
        <div className='container mx-auto space-y-10 pb-20'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-[#E9E9E9] pb-10">
                <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-8 text-center shadow-sm">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>{totalFriends}</h1>
                    <p className='text-[#64748B] text-lg'>Total Friends</p>
                </div>
                <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-8 text-center shadow-sm">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>{onTrackFriends}</h1>
                    <p className='text-[#64748B] text-lg'>On Track</p>
                </div>
                <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-8 text-center shadow-sm">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>{needAttentionFriends}</h1>
                    <p className='text-[#64748B] text-lg'>Need Attention</p>
                </div>
                <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-8 text-center shadow-sm">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>{interactionsThisMonth}</h1>
                    <p className='text-[#64748B] text-lg'>Interactions This Month</p>
                </div>
            </div>
            <div id="friends-list" className="space-y-4">
                <h1 className='text-2xl font-semibold'>Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        friends.map((friend) => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFriends;
