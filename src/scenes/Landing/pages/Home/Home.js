import React from 'react';
import Hero from './Hero/Hero';
import PageMeta from './PageMeta/PageMeta';
// import {Content} from './Content/Content';
// import {HeroContent} from './HeroContent/HeroContent';

export default function Home() {
  return (
    <div>
      <PageMeta />
      <Hero>
        {/* <Header /> */}
        {/* <HeroContent /> */}
      </Hero>
      {/* <Content /> */}
      {/* <Footer /> */}
    </div>
  );
};