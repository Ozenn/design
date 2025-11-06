import Image from 'next/image'
import shape_3 from '@/assets/imgs/shape/shape-3.webp';
import shape_2 from '@/assets/imgs/shape/shape-2.webp';

export default function HeroTwo() {
  return (
    <section className="hero-area">
      <div className="container large">
        <div className="hero-area-inner section-spacing-top">
          <div className="hero-content section-spacing-bottom">
            <div className="award-wrapper">
              {/* Award badge verwijderd - wrapper behouden voor layout */}
            </div>
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2
                    className="section-title font-sequelsans-romanbody char-anim"
                    data-delay="0.45"
                  >
                    Transforming Ideas Into Digital Excellence
                  </h2>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="features-wrapper-box fade-anim" data-delay="0.75">
                <div className="features-wrapper">
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">98%</span>
                      <p className="text">
                        Average clients satisfied and repeating
                      </p>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">120+</span>
                      <p className="text">
                        Successfully projects done in 24 countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper fade-anim" data-delay="0.75">
                <p className="text">
                  We're a digital products design & development agency that works
                  passionately with the digital experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="big-text-wrapper">
            <h2 className="big-text">Redox</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
