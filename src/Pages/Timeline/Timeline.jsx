import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/Context';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const Timeline = () => {
    const { clearAllInteractions, timeline } = useContext(BookContext);
    const [filterTimeline, setFilterTimeline] = useState('all');
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');

    // Picks the matching image icon for each interaction type.
    const getIcon = (type) => {
        if (type === 'call') {
            return <img src={callIcon} alt="Call" className="h-4 w-4" />;
        }

        if (type === 'text') {
            return <img src={textIcon} alt="Text" className="h-4 w-4" />;
        }

        if (type === 'video') {
            return <img src={videoIcon} alt="Video" className="h-4 w-4" />;
        }

        return <img src={textIcon} alt="Interaction" className="h-4 w-4" />;
    };

    const makeTitleText = (text) => {
        const words = text.split(' ');
        const firstWord = words[0] || '';
        const otherWords = words.slice(1).join(' ');

        return (
            <>
                <strong>{firstWord}</strong>
                {otherWords ? ` ${otherWords}` : ''}
            </>
        );
    };

    // First filter by type from the dropdown.
    let filteredTimeline = timeline;

    if (filterTimeline !== 'all') {
        filteredTimeline = timeline.filter((friend) => friend.type === filterTimeline);
    }

    // Then search by friend name or interaction type.
    filteredTimeline = filteredTimeline.filter((friend) => {
        const textToSearch = searchText.toLowerCase();
        const friendName = (friend.name || '').toLowerCase();
        const interactionType = (friend.type || '').toLowerCase();

        return friendName.includes(textToSearch) || interactionType.includes(textToSearch);
    });

    // Finally sort timeline by date.
    filteredTimeline = [...filteredTimeline];

    filteredTimeline.sort((a, b) => {
        const firstDate = new Date(a.createdAt).getTime();
        const secondDate = new Date(b.createdAt).getTime();

        if (sortOrder === 'oldest') {
            return firstDate - secondDate;
        }

        return secondDate - firstDate;
    });

    return (
      // Timeline page shows all saved interactions
      <div className="bg-[#F8FAFC] min-h-screen px-5 py-5 lg:px-0">
        <div className="container mx-auto flex flex-col gap-6 pb-8">
          <h1 className="text-5xl font-bold">Timeline</h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by name or type"
                className="input interactive-button w-full border border-[#E7EDF3] bg-white text-sm text-[#64748B] focus:outline-none sm:w-64"
              />
              <select
                value={filterTimeline}
                onChange={(e) => setFilterTimeline(e.target.value)}
                className="select interactive-button border border-[#E7EDF3] bg-white text-sm text-[#64748B] focus:outline-none"
              >
                <option value="all">Filter timeline</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
              </select>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="select interactive-button border border-[#E7EDF3] bg-white text-sm text-[#64748B] focus:outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
            <button
              type="button"
              onClick={clearAllInteractions}
              className="btn  self-start rounded-xl border border-red-400 bg-white px-4 py-3 text-sm font-semibold text-[#EF4444] sm:self-auto hover:border-none hover:bg-[#EF4444] hover:text-black duration-250"
            >
              Clear Timeline
            </button>
          </div>
        </div>
        <div className="container mx-auto space-y-6">
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((friend) => {
              const titleText = friend.title || friend.name || '';

              return (
                <div
                  key={friend.id}
                  className="interactive-card flex items-center gap-3 rounded-2xl border border-[#E7EDF3] bg-white px-4 py-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#DDE6EE] bg-[#F8FAFC]">
                    {getIcon(friend.type)}
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-[16px] font-medium leading-none text-[#1E3A5F]">
                      {makeTitleText(titleText)}
                    </h1>
                    <p className="mt-2 text-[14px] leading-none text-[#8AA0BA]">
                      {friend.date || friend.displayDate || 'No date'}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-sm border border-[#E7EDF3] bg-white px-4 py-6 text-sm text-[#64748B] shadow-sm">
              {timeline.length === 0
                ? 'No interactions yet.'
                : 'No matching interactions found.'}
            </div>
          )}
        </div>
      </div>
    );
};

export default Timeline;
