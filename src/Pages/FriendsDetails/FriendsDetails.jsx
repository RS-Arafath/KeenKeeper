import React, { useContext } from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { IoArchiveOutline } from 'react-icons/io5';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { Link, useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/Context';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { getDaysSinceContact } from '../../utils/dateUtils';

const FriendsDetails = () => {
    const tagBadgeStyle = 'bg-[#DDFCE7] text-[#2F6E53]';

    const { id } = useParams();
    const friends = useLoaderData();
    const { clearFriendInteractions, handleInteraction, timeline } = useContext(BookContext);

    // Find the friend that matches the current URL parameter.
    const expectedFriend = friends.find((friend) => String(friend.id) === id);

    if (!expectedFriend) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm">
                    <h1 className="text-2xl font-semibold text-[#1F2937]">Friend not found</h1>
                    <p className="mt-2 text-[#64748B]">This profile is not available in the current data.</p>
                </div>
            </div>
        );
    }

    const {
        picture,
        avatar,
        name,
        status,
        tags = [],
        bio,
        note,
        email,
        preferredContact,
        days_since_contact,
        lastContactDate,
        goal,
        goalDays,
        next_due_date,
        nextDueDate,
    } = expectedFriend;

    let daysSinceContact = days_since_contact;

    if (daysSinceContact === undefined) {
        daysSinceContact = getDaysSinceContact(lastContactDate);
    }

    let relationshipGoal = goal;

    if (relationshipGoal === undefined) {
        relationshipGoal = goalDays;
    }

    let dueDate = next_due_date;

    if (!dueDate) {
        dueDate = nextDueDate;
    }

    let preferredContactLabel = preferredContact;

    if (!preferredContactLabel) {
        preferredContactLabel = email;
    }

    if (!preferredContactLabel) {
        preferredContactLabel = 'Not specified';
    }

    let profileImage = picture;

    if (!profileImage) {
        profileImage = avatar;
    }

    let aboutText = bio;

    if (!aboutText) {
        aboutText = note;
    }

    const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const statusStyles = {
        overdue: 'bg-[#FE4A49] text-white',
        'almost due': 'bg-[#F59E0B] text-white',
        'on-track': 'bg-[#22C55E] text-white',
    };

    // Only show the latest interactions for the current friend on this page.
    const recentInteractions = timeline
        .filter((item) => item.friendId === expectedFriend.id)
        .slice(0, 4);

    // Reuse the same interaction icons in the recent activity list.
    const getInteractionIcon = (type) => {
        if (type === 'call') {
            return <img src={callIcon} alt="Call" className="h-4 w-4 object-contain" />;
        }

        if (type === 'text') {
            return <img src={textIcon} alt="Text" className="h-4 w-4 object-contain" />;
        }

        if (type === 'video') {
            return <img src={videoIcon} alt="Video" className="h-4 w-4 object-contain" />;
        }

        return <img src={textIcon} alt="Interaction" className="h-4 w-4 object-contain" />;
    };

    return (
      // Profile layout with friend summary
      <div className=" container mx-auto px-5 lg:px-0 py-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[304px_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="interactive-card overflow-hidden rounded-[28px] border border-[#EEF2F6] bg-white p-6 text-center shadow-sm hover:bg-[#00B0FF10] duration-200 cursor-no-drop">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-[#DDFCE7] via-white to-[#DBEAFE] p-1">
                <img
                  src={profileImage}
                  alt={name}
                  className="mx-auto h-16 w-16 rounded-full object-cover ring-4 ring-white "
                />
              </div>
              <h1 className="mt-4 text-[18px] font-semibold text-[#1F2937]">
                {name}
              </h1>
              <div className="mt-3 space-y-2">
                <p
                  className={`mx-auto w-fit rounded-full px-3 py-1 text-xs font-semibold capitalize shadow-sm  ${
                    statusStyles[status] || 'bg-slate-500 text-white'
                  }`}
                >
                  {status}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {tags.map((friendTag) => (
                    <p
                      key={`${expectedFriend.id}-${friendTag}`}
                      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase shadow-sm  ${tagBadgeStyle}`}
                    >
                      {friendTag}
                    </p>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-[15px] italic text-[#64748B]">
                "{aboutText}"
              </p>
              <p className="mt-2 text-[15px] text-[#64748B]">
                Preferred: {preferredContactLabel}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="interactive-button flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#E9E9E9] bg-white py-4 text-lg font-medium hover:border-[#244D3F80] hover:bg-[#16ad7b20] ">
                <RiNotificationSnoozeLine color="green" /> Snooze 2 Weeks
              </button>
              <button className="interactive-button flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#E9E9E9] bg-white py-4 text-lg font-medium hover:border-[#FFE66D80]  hover:bg-[#FFE66D10]">
                <IoArchiveOutline color="gold" /> Archive
              </button>
              <button className="interactive-button flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#FEE2E2] bg-white py-4 text-lg font-medium text-[#EF4444] hover:border-[#EF444480] hover:bg-[#FFF5F5]">
                <RiDeleteBinLine /> Delete
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-7 text-center shadow-sm">
                <h2 className="text-[28px] font-semibold text-[#244D3F]">
                  {daysSinceContact}
                </h2>
                <p className="mt-1 text-lg text-[#64748B]">
                  Days Since Contact
                </p>
              </div>
              <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-7 text-center shadow-sm">
                <h2 className="text-[28px] font-semibold text-[#244D3F]">
                  {relationshipGoal}
                </h2>
                <p className="mt-1 text-lg text-[#64748B]">Goal (Days)</p>
              </div>
              <div className="interactive-card rounded-2xl border border-[#EEF2F6] bg-white p-7 text-center shadow-sm">
                <h2 className="text-[28px] font-semibold text-[#244D3F]">
                  {formattedDate}
                </h2>
                <p className="mt-1 text-lg text-[#64748B]">Next Due</p>
              </div>
            </div>

            <div className=" rounded-2xl border border-[#EEF2F6] bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-[18px] font-semibold text-[#244D3F]">
                    Relationship Goal
                  </h2>
                  <p className="mt-4 text-[16px] text-[#64748B]">
                    Connect every{' '}
                    <span className="font-semibold text-[#1F2937]">
                      {relationshipGoal} days
                    </span>
                  </p>
                </div>
                <button className="btn btn-outline">Edit</button>
              </div>
            </div>

            <div className=" rounded-2xl border border-[#EEF2F6] bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-[18px] font-semibold text-[#244D3F]">
                Quick Check-In
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="">
                  <button
                    onClick={() => handleInteraction(expectedFriend, 'call')}
                    className="interactive-button flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#E9E9E9] bg-[#F8FAFC] p-5 text-2xl hover:bg-[#16ad7b90] cursor-pointer "
                  >
                    <LuPhoneCall className="text-4xl " /> Call
                  </button>
                </div>
                <div className="">
                  <button
                    onClick={() => handleInteraction(expectedFriend, 'text')}
                    className="interactive-button flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#E9E9E9] bg-[#F8FAFC] p-5 text-2xl hover:bg-[#1F6CD090] cursor-pointer "
                  >
                    <BsChatLeftText className="text-4xl" /> Text
                  </button>
                </div>
                <div className="">
                  <button
                    onClick={() => handleInteraction(expectedFriend, 'video')}
                    className="interactive-button flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#E9E9E9] bg-[#F8FAFC] p-5 text-2xl hover:bg-[#F87DA990] cursor-pointer "
                  >
                    <LuVideo className="text-4xl" /> Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendsDetails;
