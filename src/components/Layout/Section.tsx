import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  return (
    <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={sectionId}>
      <div className={classNames({'mx-auto max-w-[1200px]': !noPadding})}>{children}</div>
      {/*<div className={classNames({'mx-auto max-w-lx': !noPadding})}>{children}</div>
      <div className={classNames({'mx-auto max-w-lg': !noPadding})}>{children}</div>*/}

    </section>
  );
});

Section.displayName = 'Section';
export default Section;
