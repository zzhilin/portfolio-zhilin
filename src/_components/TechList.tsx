"use client";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/_components/Bounded";
import Heading from "@/_components/Heading";

gsap.registerPlugin(ScrollTrigger);

type TechItem = {
 tech_color: string;
 tech_name: string;
};

type TechListProps = {
 title: string;
 techList: TechItem[];
};

const TechList = ({ title, techList }: TechListProps) => {
 const component = useRef(null);

 useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert();
 }, []);
// const component = useRef(null);

// useEffect(() => {
//    // Dynamic imports for gsap and ScrollTrigger
//    import('gsap').then(gsapModule => {
//      const gsap = gsapModule.gsap; // Access gsap from the module
//      import('gsap/ScrollTrigger').then(ScrollTriggerModule => {
//        gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

//        let ctx = gsap.context(() => {
//          const tl = gsap.timeline({
//            scrollTrigger: {
//              trigger: component.current,
//              pin: true,
//              start: "top bottom",
//              end: "bottom top",
//              scrub: 4,
//            },
//          });

//          tl.fromTo(
//            ".tech-row",
//            {
//              x: (index) => {
//                return index % 2 === 0
//                  ? gsap.utils.random(600, 400)
//                  : gsap.utils.random(-600, -400);
//              },
//            },
//            {
//              x: (index) => {
//                return index % 2 === 0
//                  ? gsap.utils.random(-600, -400)
//                  : gsap.utils.random(600, 400);
//              },
//              ease: "power1.inOut",
//            },
//          );
//        }, component);
//        return () => ctx.revert();
//      });
//    });
// }, [techList]); // Dependency array, re-run if techList changes

 return (
    <section
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {title}
        </Heading>
      </Bounded>

      {techList.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                 "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                 color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
