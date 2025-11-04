import Link from "next/link";

export default function AboutTwo() {
  return (
    <section className="about-area">
      <div className="container large">
        <div className="about-area-inner section-spacing">
          <div className="section-content">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
            <div className="shape-4"></div>
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">Redox</h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text">
                We help brands and people be part of the solution. As a
                cause-led branding and communications agency, we harness the
                power of technology and creativity to drive positive changes.
                Whether your inquiries are big or small, {"we're"} prepared to
                engage, focusing on complex problems
              </p>
            </div>
            <div className="btn-wrapper">
              <Link href="/contact" className="rr-btn btn-text-fli hover-bg-theme">
                <span className="btn-wrap">
                  <span className="text-one">Learn More</span>
                  <span className="text-two">Learn More</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



