import {FC, memo, PropsWithChildren, ComponentType} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string; icon?: ComponentType<any>}>> = memo(({title, children}) => {
  return (
    <div className="flex flex-col gap-y-4 py-8 first:pt-0 last:pb-0">
      <div className="flex justify-center pb-4 ">
        <div className="relative h-max flex items-center mb-8 gap-x-3">
          {/*Icon && <Icon className="h-8 w-8 text-orange-500 hover:animate-pulse" />*/}
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
