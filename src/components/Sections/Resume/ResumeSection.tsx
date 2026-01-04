import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="flex flex-col gap-y-4 py-8 first:pt-0 last:pb-0">
      <div className="flex justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
