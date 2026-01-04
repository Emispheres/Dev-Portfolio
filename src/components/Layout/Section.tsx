import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string; maxWidth?: string}>
> = memo(({children, sectionId, noPadding = false, className, maxWidth}) => {
  return (
    <section className={classNames(className, 'px-4 py-16 md:py-24 lg:px-8')} id={sectionId}>
      <div className={classNames({'mx-auto': !noPadding}, {[maxWidth || 'max-w-screen-lg']: !noPadding})}>{children}</div>
      {/*<div className={classNames({'mx-auto max-w-screen-lx': !noPadding})}>{children}</div>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>*/}

    </section>
  );
});

Section.displayName = 'Section';
export default Section;
