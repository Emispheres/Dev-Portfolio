import {FC, memo, PropsWithChildren, ComponentType} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string; icon?: ComponentType<any>}>> = memo(({title, children, icon: Icon}) => {
  return (
    <div className="flex flex-col gap-y-4 py-8 first:pt-0 last:pb-0">
      <div className="flex justify-center pb-4 ">
        <div className="relative h-max flex items-center mb-8 gap-x-3">
          <span className="flex h-10 w-10 items-center shadow-sm justify-center rounded-full bg-white border border-white-200 bg-clip-padding backdrop-filter backdrop-blur-sm  text-orange-500/90">
            {Icon && <Icon aria-hidden="true" className="h-5 w-5" />}
          </span>
          <h2 className="self-center text-3xl font-bold text-neutral-700  " style={{fontFamily: '"Noto SD 500", Arial, sans-serif', letterSpacing: '0.02em'}}>{title}</h2>
          {/*<span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />*/}
        </div>
      </div>
      <div className="flex flex-col ">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
