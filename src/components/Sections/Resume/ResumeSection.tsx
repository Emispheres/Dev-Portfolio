import {FC, memo, PropsWithChildren, ComponentType} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string; icon?: ComponentType<any>}>> = memo(({title, children, icon: Icon}) => {
  return (
    <div className="flex flex-col gap-y-4 py-8 first:pt-0 last:pb-0">
      <div className="flex justify-center pb-4 md:justify-start">
        <div className="relative h-max flex items-center gap-x-3">
          {Icon && <Icon className="h-6 w-6 text-orange-500 hover:animate-pulse" />}
          <h2 className="text-2xl font-bold uppercase text-neutral-800">{title}</h2>
          {/*<span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />*/}
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
