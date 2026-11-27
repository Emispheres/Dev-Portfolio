import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import {useScrollAnimation} from '../../hooks/useIntersectionObserver';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {description, aboutItems, softSkills} = aboutData;

  const {ref: titleRef, animationClass: titleAnim} = useScrollAnimation('fadeIn', 100);
  const {ref: descRef, animationClass: descAnim} = useScrollAnimation('fadeIn', 200);
  const {ref: infoRef, animationClass: infoAnim} = useScrollAnimation('fadeIn', 300);
  const {ref: skillsRef, animationClass: skillsAnim} = useScrollAnimation('fadeIn', 400);
  const paragraphs = description.trim().split(/\n\s*\n/);

  return (
    <Section className="relative overflow-hidden bg-slate-50" maxWidth="max-w-6xl" sectionId={SectionId.About}>
      {/* Décoration de fond de la section About */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="relative flex flex-col gap-y-10">
        {/* En-tête : badge de profil et titre principal */}
        <header className={`text-center ${titleAnim}`} ref={titleRef}>
           <div className="mb-3 inline-flex items-center gap-x-2 rounded-full border border-white-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-700 animate-blink"  />
            Mon profil
          </div> 
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl" style={{fontFamily: '"Noto SD 500", Arial, sans-serif'}}>
            À propos de moi
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)]">
          {/* Présentation et parcours */}
          <article className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] sm:p-9 ${descAnim}`} ref={descRef}>
            <div className="mb-6 flex items-center gap-x-3">
              {/** Décoration : <span aria-hidden="true" className="h-10 w-1.5 rounded-full bg-orange-500" />*/}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Mon parcours</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">Curieux de comprendre, motivé à construire</h3>
              </div>
            </div>
            <div className="space-y-5 text-left text-base leading-7 text-slate-600 sm:text-[17px] sm:leading-8" style={{fontFamily: '"Roboto", sans-serif'}}>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </article>

          {/* Repères personnels : localisation, âge et nationalité */}
          {aboutItems && aboutItems.length > 0 && (
            <aside className={`rounded-3xl p-6 sm:p-8 ${infoAnim}`} ref={infoRef}>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">En bref</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">Quelques repères</h3>
              </div>
              <ul className="space-y-3">
                {aboutItems.map(({label, text, Icon}) => (
                  <li className="flex items-center gap-x-4 rounded-2xl border border-slate-200 bg-white shadow-sm p-4 transition-colors duration-300 hover:bg-white/10" key={label}>
                    {Icon && <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-orange-400" />}
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
                      <p className="mt-0.5 truncate text-sm font-semibold  sm:text-base">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div aria-hidden="true" className="mt-7 flex items-center gap-x-2 text-xs font-medium text-slate-400">
                <span className="h-px flex-1 bg-white/15" />
                <span>Développement & curiosité</span>
                <span className="h-px flex-1 bg-white/15" />
              </div>
            </aside>
          )}
        </div>

        {/* Savoir-être et qualités professionnelles */}
        {softSkills && softSkills.length > 0 && (
          <section className={skillsAnim} ref={skillsRef}>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Ma façon de travailler</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">Ce qui me caractérise</h3>
              </div>
              <p className="text-sm text-slate-500">Des qualités que je cultive dans chaque projet.</p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {softSkills.map((skill) => (
                <li className="group flex min-h-20 items-center justify-center gap-x-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-950/5" key={skill.title}>
                  {skill.Icon && <skill.Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-orange-300" />}

                  <span className="text-sm font-semibold leading-5 text-slate-800 sm:text-base">{skill.title}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
