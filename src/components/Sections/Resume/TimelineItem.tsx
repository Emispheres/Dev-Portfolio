import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="group rounded-lg bg-neutral-700/50 border border-neutral-600 p-6 transition-all hover:border-cyan-500 hover:bg-neutral-700">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <div className="flex flex-col gap-y-1 text-sm">
            <div className="flex items-center gap-x-2 flex-wrap">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                📍 {location}
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                📅 {date}
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-300 prose prose-sm max-w-none">{content}</div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
