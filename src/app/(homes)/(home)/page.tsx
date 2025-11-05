"use client";

import Image from "next/image";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import CreativeAgencyWrapper from "../creative-agency/_components/creative-agency-wrapper";
import HeroTwo from "@/components/hero/hero-two";
import AboutIntro from "@/components/about/about-intro";
import AboutTwo from "@/components/about/about-two";
import WorkAreaTwo from "@/components/work/work-area-2";
import ActuallyArea from "@/components/actually/actually-area";
import ServiceAreaTwo from "@/components/services/service-area-2";
import TestimonialArea from "@/components/testimonial/testimonial-area";
import ClientSliderTwo from "@/components/client/client-area-2";
import AwardArea from "@/components/award/award-area";
import TeamArea from "@/components/team/team-area";
import CtaAreaTwo from "@/components/cta/cta-area-2";
import FooterTwo from "@/layout/footer/footer-two";
import shape from '@/assets/imgs/shape/shape-9.webp';
import shape_2 from '@/assets/imgs/shape/shape-8.svg';
import CustomCursor from "@/components/common/custom-cursor";
import PauseAtAbout from "@/components/scroll/pause-at-about";

export default function HomePage() {
  return (
    <>
      {/* custom cursor start */}
      <CustomCursor />
      {/* custom cursor end */}

      {/* Header area start */}
      <HeaderTwo />
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper bodyCls={['body-wrapper','body-creative-agency', 'font-heading-sequelsans-romanbody']}>
        <CreativeAgencyWrapper>
          <div>

            {/* body bg start */}
            <div className="body-bg">
              {/* Images verwijderd - we gebruiken nu CSS grid pattern */}
            </div>
            {/* body bg end */}

            <main>

              {/* Hero area start */}
              <HeroTwo />
              {/* Hero area end */}

              {/* about area start - where Redox animates to */}
              <AboutTwo />
              <PauseAtAbout />
              {/* about area end */}

              {/* about intro area start */}
              <AboutIntro />
              {/* about intro area end */}

              {/* work area start */}
              <WorkAreaTwo />
              {/* work area end */}

              {/* actually area start */}
              <ActuallyArea />
              {/* actually area end */}

              {/* service area start */}
              <ServiceAreaTwo />
              {/* service area end */}

              {/* team area start */}
              <TeamArea />
              {/* team area end */}

              {/* cta area start */}
              <CtaAreaTwo />
              {/* cta area end */}

            </main>


            {/* Footer area start */}
            <FooterTwo />
            {/* Footer area end */}
          </div>

        </CreativeAgencyWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
