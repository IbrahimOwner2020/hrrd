import React from 'react';
import GlobalStyles from '../theme/globalStyle';
import Features from '../components/features/feature';
import Hero from '../components/Hero/hero';
import Nav from '../components/Hero/Navigation/nav';
import HeroTypo from '../components/Hero/Typo/heroTypo';
import Subscribe from '../components/subscribe/subscribe';
import PlanSponser from '../components/plan/planSponser';
import Testimony from '../components/testimony/testimony';
import Footer from '../components/footer/footer';
import Collaboration from '../components/collaboration/collaboration';
import Faq from '../components/faq/faq';
import ResponsiveNav from '../components/Hero/Navigation/responsiveNav';



const IndexPage = () => {
  return(
    <main>
      <title>Home || HrrD</title>
      <GlobalStyles />
      <Hero>
        <Nav />
        <ResponsiveNav />
        <HeroTypo />
      </Hero>
      <Features />
      <Faq />
      <Collaboration />
      <PlanSponser />
      <Testimony />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default IndexPage;