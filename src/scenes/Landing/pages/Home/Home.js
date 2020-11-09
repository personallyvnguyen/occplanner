import React from 'react';
import PageMeta from './PageMeta/PageMeta';
import Hero from './Hero/Hero';
import Content from './Content/Content';
import Footer from 'landing/components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <PageMeta />
      <Hero />
      {/* <Content /> */}
      {/* <Footer /> */}
    </div>
  );
};