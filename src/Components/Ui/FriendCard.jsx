import React from 'react';
import { Link } from 'react-router';
import { getDaysSinceContact } from '../../utils/dateUtils';

const FriendCard = ({ friend }) => {
    const tagBadgeStyle = 'bg-[#DDFCE7] text-[#2F6E53]';

    // for all friend
    const { id, name, picture, avatar, days_since_contact, lastContactDate, tags = [], status } = friend;
    let daysSinceContact = days_since_contact;

    if (daysSinceContact === undefined) {
        daysSinceContact = getDaysSinceContact(lastContactDate);
    }

    let profileImage = picture;

    if (!profileImage) {
        profileImage = avatar;
    }

    // Badge colors for relationship status.
    const statusStyles = {
        overdue: 'bg-[#FE4A49] text-white',
        'almost due': 'bg-[#F59E0B] text-white',
        'on-track': 'bg-[#22C55E] text-white',
    };

    return (
        // Each card links to that friend's details page.
        <Link to={`/friendsdetails/${id}`} className='interactive-card group block rounded-2xl border border-[#EEF2F6] bg-white p-6 text-center shadow-sm'>
            <div className="pb-3">
                <img src={profileImage} alt={name} className='mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white' />
            </div>
            <div className="space-y-2">
                <h1 className='text-xl font-semibold '>{name}</h1>
                <p className='text-[12px] text-[#64748B]'>{daysSinceContact}d ago</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {tags.map((friendTag) => (
                        <p
                            key={`${id}-${friendTag}`}
                            className={`block w-fit rounded-full px-3 py-1 text-[12px] font-medium uppercase shadow-sm  group-hover:shadow-md ${tagBadgeStyle}`}
                        >
                            {friendTag}
                        </p>
                    ))}
                </div>
                <p className={`mx-auto block w-fit rounded-full px-3 py-1 text-[12px] font-medium uppercase text-white shadow-sm group-hover:shadow-md ${statusStyles[status]}`}>{status}</p>
            </div>
        </Link>
    );
};

export default FriendCard;
