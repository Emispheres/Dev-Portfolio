import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
      </div>
      <div className="flex flex-col gap-y-4">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
