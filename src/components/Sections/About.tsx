import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems, strengths = []} = aboutData;
  return (
    <Section className="bg-neutral-800 " sectionId={SectionId.About}>
      {/* Profile Section with Text Box and Image */}
      <div className="rounded-lg shadow-xl shadow-black/30 bg-neutral-700/50 border border-neutral-600 p-8 transition-all hover:border-cyan-500/50">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="flex-1">
            {/* Description */}
            <div className="flex flex-col gap-y-4 mb-6">
              <h2 className="text-3xl font-bold text-white">À propos de moi</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
              <p className="prose prose-sm max-w-none text-gray-300 sm:prose-base leading-relaxed">{description}</p>
            </div>

            {/* About Items */}
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li
                  className="col-span-1 flex items-center gap-x-3 rounded-lg bg-neutral-600/50 px-4 py-3 transition-all hover:bg-neutral-600 border border-neutral-500"
                  key={idx}>
                  {Icon && <Icon className="h-5 w-5 flex-shrink-0 text-cyan-400" />}
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">{label}</span>
                    <span className="text-sm text-gray-200">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Image */}
          {!!profileImageSrc && (
            <div className="flex-shrink-0">
              <div className="group relative h-48 w-48 md:h-56 md:w-56">
                {/*<div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>*/}
                <div className=" relative overflow-hidden rounded-xl bg-neutral-900">
                  <Image
                    alt="about-me-image"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    src={profileImageSrc}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Strengths Section */}
      {strengths.length > 0 && (
        <div className="mt-16 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Points forts</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({title, description: desc, Icon}, idx) => (
              <div
                className="group rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 p-6 border border-neutral-600 transition-all hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                key={idx}>
                {Icon && (
                  <div className="mb-4 inline-block rounded-lg bg-cyan-500/10 p-3 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                )}
                <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </Section>
  );
});

About.displayName = 'About';
export default About;
