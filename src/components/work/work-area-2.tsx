"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Kashtech Doyel",
    image: "/assets/imgs/project/image-7.webp",
  },
  {
    title: "Saudi Lime Green",
    image: "/assets/imgs/project/image-8.webp",
  },
  {
    title: "Panda Automap",
    image: "/assets/imgs/project/image-9.webp",
  },
  {
    title: "Saudi Venture Capital",
    image: "/assets/imgs/project/image-10.webp",
  },
];

export const WorksWrapperTwo = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      width: '100%',
      margin: '0 auto'
    }}>
      {projects.map((project, index) => (
        <div key={index} style={{
          width: '100%'
        }}>
          <div className="work-box">
            <div className="thumb" data-cursor-text="View Project">
              <Link href="/portfolio-details">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                />
              </Link>
            </div>
            <div className="content">
              <h3 className="title">
                <Link href="/portfolio-details">{project.title}</Link>
              </h3>
              <div className="meta">
                <span className="date">2025</span>
                <span className="tag">Design</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const WorkAreaTwo: React.FC = () => {
  return (
    <section className="work-area-2">
      <div className="container large">
        <div className="work-area-2-inner section-spacing-top">
          <div className="works-wrapper-box">
            <div className="works-wrapper-head">
              <div className="text-wrapper">
                <p className="text">
                  Selected <span className="d-xxl-none">Work</span>
                </p>
              </div>
              <div className="total-count">
                <p className="text">
                  <Link href="/portfolio">browse more (20)</Link>
                </p>
              </div>
            </div>

            {/* works wrapper */}
            <WorksWrapperTwo />
            {/* works wrapper */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreaTwo;
