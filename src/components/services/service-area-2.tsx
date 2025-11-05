"use client";
import Image from "next/image";
import Link from "next/link";
import shape_2 from '@/assets/imgs/shape/shape-8.svg';

const services = [
  {
    number: "01",
    title: "Art Direction",
    features: [
      "Design Strategy",
      "Prototyping & Wireframe",
      "Design system",
      "Usability testing",
    ],
  },
  {
    number: "02",
    title: "Interaction Design",
    features: [
      "User Research",
      "Interface Design",
      "Motion Design",
      "User Experience",
    ],
  },
  {
    number: "03",
    title: "Web & Mobile Development",
    features: [
      "Frontend Development",
      "Backend Development",
      "Mobile Apps",
      "API Integration",
    ],
  },
  {
    number: "04",
    title: "Digital Marketing",
    features: [
      "SEO Optimization",
      "Social Media",
      "Content Strategy",
      "Analytics",
    ],
  },
];

export default function ServiceAreaTwo() {
  return (
    <section className="service-area-4" style={{
      marginTop: '-650px', 
      paddingTop: '200px',
      backgroundColor: '#111111',
      color: '#ffffff'
    }}>
      <div className="container large">
        <div className="service-area-4-inner">
          <div className="services-wrapper-box">
            <div className="services-wrapper-4">
              {services.map((service, index) => (
                <div className="service-box fade-anim" key={index} style={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <span className="number" style={{color: '#ffffff'}}>{service.number}</span>
                  <h2 className="title" style={{color: '#ffffff'}}>
                    <Link href="/service-details" style={{color: '#ffffff'}}>{service.title}</Link>
                  </h2>
                  <div className="feature-list">
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{color: 'rgba(255, 255, 255, 0.7)'}}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
              {/* Circular shape als laatste slide */}
              <div className="service-circular" style={{backgroundColor: '#111111'}}>
                <div className="shape-thumb">
                  <Image src={shape_2} alt="circular shape" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}