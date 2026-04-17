import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { BookContext } from '../../Context/Context';

const Stats = () => {
    const { timeline } = useContext(BookContext);

    // Build chart data by counting interaction types from the shared timeline state.
    const statsData = [
        {
            name: 'Text',
            value: timeline.filter((item) => item.type === 'text').length,
            color: '#7C3AED',
        },
        {
            name: 'Call',
            value: timeline.filter((item) => item.type === 'call').length,
            color: '#1F5D4B',
        },
        {
            name: 'Video',
            value: timeline.filter((item) => item.type === 'video').length,
            color: '#2FA866',
        },
    ];

    // Total interactions shown in the summary card on the right.
    const totalInteractions = statsData.reduce((total, item) => total + item.value, 0);

    return (
      <div className=" bg-[#F8FAFC] min-h-screen px-5 py-5 lg:px-0">
        <div className="container mx-auto max-w-5xl space-y-8">
          <div className="space-y-3 text-center">
           
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2937]">
              Friendship Analytics
            </h1>
            <p className=" text-base leading-7 text-[#64748B]">
              A quick snapshot of how your recent check-ins are distributed
              across calls, texts, and video conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 ">
            <div className="  h-full overflow-hidden rounded-3xl border border-[#E7EDF3] bg-white p-6 shadow-sm hover:bg-[#00B0FF10] duration-150">
              <div className="absolute " />
              <p className="text-xl font-medium text-[#244D3F]">
                By Interaction Type
              </p>
              {/* ResponsiveContainer keeps the chart responsive inside the card. */}
              <div className="h-90 ">
                {totalInteractions > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statsData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={92}
                        outerRadius={132}
                        paddingAngle={4}
                        stroke="none"
                      >
                        {statsData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          borderRadius: '16px',
                          border: '1px solid #E7EDF3',
                          boxShadow: '0 16px 40px rgba(36,77,63,0.10)',
                        }}
                      />
                      <Legend verticalAlign="bottom" iconType="circle" />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#DDE6EE] bg-[#F8FAFC] text-3xl text-[#244D3F]">
                      0
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-[#1F2937]">
                        No interactions yet
                      </h2>
                      <p className="max-w-sm text-sm leading-6 text-[#64748B]">
                        Start with a Call, Text, or Video from a friend details
                        page to populate this chart.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stats;
