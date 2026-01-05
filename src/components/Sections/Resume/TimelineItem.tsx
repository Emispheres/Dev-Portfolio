import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="relative border-b border-l border-gray-400 py-4 pl-4 last:border-b-0">
      {/* Date et Lieu - Positionnés absolument pour dépasser de la ligne gauche */}
      <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
        <span className="whitespace-nowrap rounded-full border border-orange-400 bg-white px-2 py-1 text-xs font-bold text-orange-700">
          {date}
        </span>
        <span className="text-xs font-medium text-neutral-700">{location}</span>
      </div>

      {/* Titre et Description */}
      <div className="flex flex-col pt-9">
        <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
      </div>
      <div className="text-sm text-neutral-700 prose prose-sm max-w-none pt-2">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;

{/*import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
*/}