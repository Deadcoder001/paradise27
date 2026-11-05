import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ onOpenMenu }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll animations for the food SVGs on left and right
      gsap.to('.user-food-svg-1', {
        y: -170,
        rotation: 26,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      gsap.to('.user-food-svg-2', {
        y: 150,
        rotation: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      gsap.to('.user-food-svg-3', {
        y: -190,
        rotation: 34,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      gsap.to('.user-food-svg-4', {
        y: 130,
        rotation: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.8,
        },
      });

      gsap.to('.user-food-svg-5', {
        y: -160,
        rotation: -32,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.3,
        },
      });

      gsap.to('.user-food-svg-6', {
        y: 140,
        rotation: 28,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.6,
        },
      });

      // Continuous subtle ambient bobbing for all icons
      gsap.to('.user-food-svg-ambient', {
        y: '+=10',
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.35,
          from: 'random',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const HIGHLIGHTS = [
    {
      title: 'Authentic Assamese Cuisine',
      desc: 'Traditional regional delicacies and our signature Swargadeo Thali, celebrating Assam’s culinary heritage.',
    },
    {
      title: 'Diverse Global Flavours',
      desc: 'Popular Indian and multi-cuisine favourites curated for families, travellers, and local food enthusiasts.',
    },
    {
      title: 'NH 27 Highway Destination',
      desc: 'Conveniently situated at Nagaon Bypass with peaceful seating and easy parking for a relaxing journey pause.',
    },
    {
      title: 'Warm Hospitality',
      desc: 'Attentive, friendly service ensuring every guest feels truly welcomed, comfortable, and valued.',
    },
  ];

  const AMBIENCE_GALLERY = [
    {
      src: '/images/ambience/img1.jpeg',
      alt: 'Paradise 27 Ambience',
    },
    {
      src: '/images/ambience/img2.jpeg',
      alt: 'Paradise 27 Seating & Decor',
    },
    {
      src: '/images/food/WhatsApp Image 2026-10-26 at 17.44.05.jpeg',
      alt: 'Authentic Assamese Cuisine & Thali',
    },
    {
      src: '/images/food/WhatsApp Image 2026-10-26 at 17.44.02.jpeg',
      alt: 'Paradise 27 Dining Experience',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#BF2A2E] text-white pt-24 xs:pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden font-sans"
    >
      {/* Subtle Warm Hearth Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(251, 98, 24, 0.22) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 85%)',
        }}
        aria-hidden="true"
      />

      {/* ========================================================= */}
      {/* LEFT & RIGHT FOOD-RELATED FLOATING SVGS (GSAP ANIMATED) */}
      {/* ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        
        {/* --- LEFT SIDE FOOD SVGS --- */}

        {/* 1. Roasted Poultry / Meat Cut (Left Top) */}
        <div className="user-food-svg-1 absolute top-[12%] left-2 xs:left-4 sm:left-6 lg:left-10 opacity-45 hover:opacity-85 transition-opacity">
          <div className="user-food-svg-ambient w-12 h-12 xs:w-16 xs:h-16 lg:w-20 lg:h-20 text-amber-200/80 drop-shadow-[0_4px_16px_rgba(251,191,36,0.25)]">
            <svg
              viewBox="0 -3.84 122.88 122.88"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
            </svg>
          </div>
        </div>

        {/* 2. Soup Bowl / Feasting Dish (Left Mid) */}
        <div className="user-food-svg-3 absolute top-[46%] left-3 xs:left-5 sm:left-8 lg:left-12 opacity-45 hover:opacity-85 transition-opacity">
          <div className="user-food-svg-ambient w-14 h-14 xs:w-16 xs:h-16 lg:w-22 lg:h-22 text-amber-100/75 drop-shadow-[0_4px_16px_rgba(254,240,138,0.2)]">
            <svg
              viewBox="0 0 511 511"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M509.956,195.683c-1.35-2.282-3.804-3.683-6.456-3.683H7.5c-2.652,0-5.106,1.4-6.456,3.683 c-1.35,2.283-1.394,5.108-0.116,7.432c9.115,16.573,34.091,37.352,65.181,54.228c19.151,10.395,55.829,27.4,93.891,29.453v8.705 c0,12.958,10.542,23.5,23.5,23.5h144c12.958,0,23.5-10.542,23.5-23.5v-8.705c38.062-2.053,74.74-19.058,93.891-29.453 c31.09-16.876,56.066-37.655,65.181-54.228C511.35,200.791,511.306,197.965,509.956,195.683z M327.5,304h-144 c-4.687,0-8.5-3.813-8.5-8.5V287h161v8.5C336,300.187,332.187,304,327.5,304z M343.5,272h-176c-52.233,0-119.003-36.655-145.105-65 h466.211C462.503,235.345,395.734,272,343.5,272z" />
              <path d="M295.5,255h48c7.969,0,16.552-0.931,25.509-2.768c4.058-0.832,6.672-4.796,5.84-8.854s-4.802-6.67-8.854-5.84 C358.028,239.172,350.459,240,343.5,240h-48c-4.142,0-7.5,3.358-7.5,7.5S291.358,255,295.5,255z" />
              <path d="M399.505,242.548c0.929,0,1.875-0.174,2.79-0.542c2.854-1.145,5.757-2.375,8.629-3.658 c3.782-1.688,5.479-6.124,3.791-9.906c-1.688-3.783-6.124-5.481-9.906-3.791c-2.698,1.205-5.423,2.359-8.099,3.434 c-3.845,1.542-5.71,5.909-4.168,9.753C393.716,240.768,396.53,242.548,399.505,242.548z" />
            </svg>
          </div>
        </div>

        {/* 3. Whisk & Culinary Fork Tool (Left Bottom) */}
        <div className="user-food-svg-5 absolute top-[76%] left-2 xs:left-4 sm:left-6 lg:left-10 opacity-45 hover:opacity-85 transition-opacity">
          <div className="user-food-svg-ambient w-12 h-12 xs:w-16 xs:h-16 lg:w-20 lg:h-20 text-amber-200/80 drop-shadow-[0_4px_16px_rgba(251,191,36,0.25)]">
            <svg
              viewBox="0 0 511 511"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M303.5,0c-4.142,0-7.5,3.358-7.5,7.5v104c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5V7.5c0-4.142-3.358-7.5-7.5-7.5 S264,3.358,264,7.5v104c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5V7.5c0-4.142-3.358-7.5-7.5-7.5S232,3.358,232,7.5v104 c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5V7.5c0-4.142-3.358-7.5-7.5-7.5S200,3.358,200,7.5v138.985 C200,162.208,212.792,175,228.548,175c2.336,0,4.514,0.928,6.132,2.613c1.618,1.685,2.457,3.899,2.361,6.233l-12.056,295.368 c-0.342,8.387,2.67,16.34,8.483,22.396c5.813,6.055,13.638,9.39,22.032,9.39c8.394,0,16.218-3.335,22.031-9.39 s8.825-14.008,8.483-22.395l-12.056-295.368c-0.095-2.334,0.744-4.548,2.361-6.233c1.618-1.685,3.795-2.613,6.165-2.613 C298.208,175,311,162.208,311,146.485V7.5C311,3.358,307.642,0,303.5,0z M266.711,491.222c-2.958,3.082-6.939,4.778-11.211,4.778 c-4.271,0-8.252-1.697-11.21-4.778c-2.958-3.081-4.491-7.128-4.316-11.396L247.843,287h15.314l7.87,192.827 C271.202,484.094,269.668,488.141,266.711,491.222z M282.452,160c-6.459,0-12.479,2.566-16.953,7.225 c-4.473,4.659-6.791,10.779-6.528,17.233L262.545,272h-14.089l3.573-87.542c0.263-6.454-2.055-12.574-6.528-17.233 c-4.473-4.659-10.494-7.225-16.986-7.225c-7.452,0-13.515-6.063-13.515-13.515v-13.083c2.638,1.027,5.503,1.597,8.5,1.597 c6.177,0,11.801-2.399,16-6.31c4.199,3.911,9.823,6.31,16,6.31s11.801-2.399,16-6.31c4.199,3.911,9.823,6.31,16,6.31 c2.997,0,5.862-0.57,8.5-1.597v13.083C296,153.938,289.938,160,282.452,160z" />
            </svg>
          </div>
        </div>

        {/* --- RIGHT SIDE FOOD SVGS --- */}

        {/* 4. Fine Dining Plate with Egg, Cutlery & Table Settings (Right Top) */}
        <div className="user-food-svg-2 absolute top-[18%] right-2 xs:right-4 sm:right-6 lg:right-10 opacity-55 hover:opacity-90 transition-opacity">
          <div className="user-food-svg-ambient w-14 h-14 xs:w-18 xs:h-18 lg:w-24 lg:h-24 drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)]">
            <svg
              viewBox="0 0 1024 1024"
              className="w-full h-full"
            >
              <path d="M548.897755 535.191003m-347.776985 0a347.776985 347.776985 0 1 0 695.55397 0 347.776985 347.776985 0 1 0-695.55397 0Z" fill="#FFFFFF" />
              <path d="M548.899803 893.131073c-197.368231 0-357.942118-160.568768-357.942118-357.938023s160.573888-357.942118 357.942118-357.942118S906.837826 337.82482 906.837826 535.19305 746.268034 893.131073 548.899803 893.131073z m0-695.556017c-186.163854 0-337.617995 151.454141-337.617995 337.617994 0 186.158734 151.454141 337.612875 337.617995 337.612876 186.158734 0 337.612875-151.454141 337.612876-337.612876 0-186.163854-151.454141-337.617995-337.612876-337.617994z" fill="#4D5152" />
              <path d="M548.897755 535.191003m-296.37487 0a296.37487 296.37487 0 1 0 592.74974 0 296.37487 296.37487 0 1 0-592.74974 0Z" fill="#FFFFFF" />
              <path d="M548.899803 841.727934c-169.025037 0-306.540004-137.509847-306.540003-306.534884S379.874766 228.653047 548.899803 228.653047s306.534884 137.514966 306.534884 306.540003-137.510871 306.534884-306.534884 306.534884z m0-592.74974c-157.82066 0-286.214856 128.39522-286.214856 286.214856 0 157.815541 128.39522 286.209737 286.214856 286.209737 157.815541 0 286.209737-128.39522 286.209737-286.209737 0-157.82066-128.394196-286.214856-286.209737-286.214856z" fill="#4D5152" />
              <path d="M433.635913 432.607932s14.181836-126.157006 90.839106-78.940535c59.913674 36.903899 146.299902-23.207385 166.070104 0 19.770202 23.207385 46.770058 20.234022 0 114.150927-1.763131 3.539572-2.514662 69.312941 43.494649 59.310606 38.830851-8.441935 30.655127 146.153487-19.48761 133.134784-53.338282-13.849073-51.16355 17.316972-77.255219 39.784089-26.930232 23.189979-81.78796-4.508167-105.09159-14.495145-30.440111-13.046347-36.963284 25.366759-59.132449 39.278289-14.978418 9.399267-102.805254-7.90849-98.851009-55.35636 2.267906-27.21692 21.197498-91.779033-2.434799-134.277441-20.774633-37.359528 4.763115-66.85664 18.250756-75.287312 31.631913-19.770202 43.968708 7.92692 43.598061-27.301902z" fill="#FDF3E1" />
              <path d="M459.030317 737.468763c-19.213208 0-45.71648-7.031021-64.607164-18.533348-21.491353-13.085254-31.981058-30.48209-30.328508-50.305534 0.516038-6.187339 1.776441-13.809141 3.235478-22.63708 4.961748-30.05513 12.46478-75.483898-4.426256-105.856432-22.622746-40.678964 1.335146-76.083895 21.744252-88.846625 16.444622-10.266498 29.113155-9.745341 36.705265-9.472987 0.531396 0.019454 1.141632 0.045051 1.727295 0.059385 0.228326-1.617739 0.441295-4.416017 0.392148-9.159678l-0.005119-0.625594 0.069624-0.620475c0.341978-3.031724 8.807462-74.526565 48.261858-93.748988 17.114243-8.331355 36.620283-5.869935 58.0072 7.294159 30.869119 19.009455 71.563441 8.737837 104.26941 0.470988 28.899163-7.299278 51.720543-13.069896 64.204777 1.593165 2.858688 3.354248 6.073688 6.237509 9.180155 9.030669 23.396804 21.010127 30.343865 39.275217-7.234773 115.057065-0.615355 6.157646 0.43208 30.978674 11.790039 41.850289 3.106468 2.977459 8.57504 6.649111 19.868495 4.182572 10.092438-2.222855 19.55109 2.098965 25.917609 11.790039 17.496152 26.606684 12.921433 95.713824-8.296543 125.328683-9.938855 13.883885-23.277009 19.481466-37.509015 15.779097-31.604268-8.212584-37.890924 0.416721-49.293935 16.077047-4.937175 6.78836-10.534756 14.479786-18.777033 21.575312-29.415201 25.326827-81.155199 2.41125-108.953685-9.889708l-6.767882-2.97234c-11.333387-4.832739-16.03302-0.212968-27.594733 15.442239-5.944678 8.053882-12.682868 17.178748-22.136401 23.109092-4.387349 2.754252-11.254547 4.028989-19.442558 4.028988z m-42.256772-275.442558c-5.567888 0-12.355224 0.878494-21.352104 6.500648-9.44739 5.904747-32.44283 29.92612-14.75214 61.734142 20.339482 36.566017 12.137137 86.201929 6.713616 119.046123-1.389412 8.39074-2.58531 15.640872-3.031724 21.009103-0.908186 10.867519 4.966868 20.691699 17.456221 29.207352 23.277009 15.869199 59.178524 19.982146 65.986337 16.627898 6.068568-3.810901 11.35284-10.970931 16.458957-17.8883 10.494825-14.211528 24.854816-33.653063 51.958084-22.051419l6.991089 3.066537c21.997152 9.740221 67.773017 30.000864 87.462333 13.069896 6.455597-5.55765 11.10506-11.948742 15.60606-18.131985 12.693106-17.441887 25.827507-35.474555 70.834434-23.787928 3.989057 1.021838 9.413602 1.077127 15.874318-7.944326 17.783864-24.821028 19.92788-83.944262 7.83989-102.329147-2.362103-3.582575-3.716704-3.305102-4.61977-3.09623-22.289984 4.848097-35.399811-4.971987-42.470764-14.057945-14.990705-19.258259-15.506743-53.238965-12.281504-59.714016 35.518582-71.325899 26.334331-79.572272 12.429968-92.05753-3.434111-3.081895-7.328971-6.579487-11.070248-10.970931-4.287008-5.017038-26.170509 0.491465-43.760859 4.932056-34.491625 8.713264-81.74598 20.637433-119.900043-2.867903-15.288656-9.422817-27.852752-11.486969-38.446894-6.331707-24.225127 11.805398-34.754763 59.1089-36.89878 77.155903 0.079863 11.223831-0.997264 19.237781-6.307133 24.394067-5.195194 5.046731-11.720415 4.778473-16.950422 4.584959a90.296447 90.296447 0 0 0-3.768922-0.099317z" fill="#4D5152" />
              <path d="M561.201785 535.191003m-86.989297 0a86.989297 86.989297 0 1 0 173.978595 0 86.989297 86.989297 0 1 0-173.978595 0Z" fill="#FFB957" />
              <path d="M561.200762 632.341338c-53.565585 0-97.148287-43.582703-97.148288-97.148288 0-53.570704 43.582703-97.153407 97.148288-97.153406 53.570704 0 97.153407 43.582703 97.153406 97.153406 0 53.565585-43.582703 97.148287-97.153406 97.148288z m0-173.976547c-42.361208 0-76.82314 34.467052-76.82314 76.828259s34.461932 76.82314 76.82314 76.82314 76.828259-34.461932 76.828259-76.82314-34.467052-76.828259-76.828259-76.828259z" fill="#4D5152" />
              <path d="M516.104756 535.19305h-11.859663c0-22.741517 6.589726-39.711392 19.589997-50.434543 20.23095-16.687283 48.172781-11.516662 49.353321-11.293455l-2.238213 11.650791c-0.238565-0.045051-23.778713-4.297247-39.627434 8.842274-10.096533 8.370263-15.218008 22.244933-15.218008 41.234933z" fill="#4D5152" />
              <path d="M262.274369 892.702065c0 13.102661-8.864799 23.724447-19.799894 23.724447H207.462716c-10.935095 0-19.799894-10.621786-19.799894-23.724447V504.951573c0-13.102661 8.864799-23.724447 19.799894-23.724446h35.012783c10.935095 0 19.799894 10.621786 19.799894 23.724446v387.750492z" fill="#FFFFFF" />
              <path d="M242.473451 926.590622h-35.012783c-16.519366 0-29.960932-15.198554-29.960932-33.886509V504.953621c0-18.686931 13.44259-33.891628 29.960932-33.891628h35.012783c16.519366 0 29.960932 15.203673 29.960932 33.891628v387.750492c0.001024 18.686931-13.441567 33.886509-29.960932 33.886509z m-35.012783-435.203481c-5.224887 0-9.636809 6.212936-9.636808 13.56648v387.750492c0 7.348425 4.410898 13.561361 9.636808 13.561361h35.012783c5.224887 0 9.636809-6.212936 9.636809-13.561361V504.953621c0-7.353544-4.410898-13.566481-9.636809-13.56648h-35.012783z" fill="#4D5152" />
              <path d="M106.046875 336.161006a166.994673 118.921209 90 1 0 237.842417 0 166.994673 118.921209 90 1 0-237.842417 0Z" fill="#FFFFFF" />
              <path d="M224.96706 513.319788c-71.176412 0-129.079175-79.472955-129.079175-177.157758s57.902763-177.157758 129.079175-177.157758 129.085318 79.473979 129.085318 177.157758-57.907882 177.157758-129.085318 177.157758z m0-333.990369c-59.966916 0-108.755051 70.353208-108.755052 156.832611s48.787112 156.832611 108.755052 156.832611c59.972035 0 108.760171-70.353208 108.760171-156.832611s-48.788136-156.832611-108.760171-156.832611z" fill="#4D5152" />
              <path d="M823.748508 121.71744l4.296223 454.278464c-0.164846 1.130369-0.668597 2.13992-0.668597 3.316365V894.530725c0 13.102661 10.620762 23.724447 23.724447 23.724446h23.396803c13.102661 0 23.724447-10.620762 23.724447-23.724446V643.965508c7.634089-4.604412 14.929272-10.633049 14.929272-19.218328 0.002048-234.886461 4.1109-196.101685-3.603052-399.925512 3.231382 18.737101 1.101701-83.249044-85.799543-103.104228z" fill="#FFFFFF" />
              <path d="M874.499432 928.416209H851.097509c-18.686931 0-33.886509-15.198554-33.886509-33.886508V579.311245c0-1.91057 0.381909-3.448446 0.660406-4.44571l-4.406802-465.917993 12.544643 2.862783c82.579423 18.866111 95.525429 104.283744 94.454445 115.775833l-0.456653 4.932056c4.952533 132.106804 4.719087 158.633625 4.044347 234.474859-0.312285 35.023021-0.739245 82.98181-0.739245 157.756155 0 12.126898-8.634425 20.240165-14.9262 24.736046v245.044427c-0.001024 18.687955-15.199578 33.886509-33.886509 33.886508z m-36.963284-348.41077v314.524262c0 7.477435 6.083927 13.561361 13.561361 13.561361h23.400899c7.477435 0 13.561361-6.083927 13.561361-13.561361V638.23175l4.912602-2.96722c6.643992-4.009535 10.013598-7.547059 10.013599-10.514278 0-74.868543 0.42696-122.876478 0.739245-157.934311 0.684979-77.007439 0.913306-102.949622-4.337178-241.610316l0.739245-0.074744c-0.887709-8.008831-9.933735-69.23615-66.090774-89.799862l4.173356 441.350889-0.109555 0.768938a20.303646 20.303646 0 0 1-0.564161 2.554593z" fill="#4D5152" />
            </svg>
          </div>
        </div>

        {/* 5. Food Appliance / Cooking Pot (Right Mid) */}
        <div className="user-food-svg-4 absolute top-[54%] right-3 xs:right-5 sm:right-8 lg:right-12 opacity-45 hover:opacity-85 transition-opacity">
          <div className="user-food-svg-ambient w-12 h-12 xs:w-16 xs:h-16 lg:w-20 lg:h-20 text-amber-100/75 drop-shadow-[0_4px_16px_rgba(254,240,138,0.2)]">
            <svg
              viewBox="0 0 511 511"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M406.955,323.231c5.903-10.164,10.241-21.144,12.907-32.543c7.545,2.833,15.565,4.312,23.638,4.312 c37.22,0,67.5-30.28,67.5-67.5v-40c0-37.22-30.28-67.5-67.5-67.5c-6.949,0-13.882,1.101-20.5,3.218V103.5 c0-12.958-10.542-23.5-23.5-23.5h-288C98.542,80,88,90.542,88,103.5v160c0,21.003,5.548,41.658,16.045,59.731 c6.24,10.744,14.147,20.453,23.346,28.769H7.5c-4.142,0-7.5,3.358-7.5,7.5C0,381.28,17.72,399,39.5,399h65.223 c3.515,18.205,19.561,32,38.777,32h224c19.216,0,35.262-13.795,38.777-32H471.5c21.78,0,39.5-17.72,39.5-39.5 c0-4.142-3.358-7.5-7.5-7.5H383.609C392.808,343.685,400.715,333.976,406.955,323.231z M423,187.5c0-11.304,9.196-20.5,20.5-20.5 s20.5,9.196,20.5,20.5v40c0,11.304-9.196,20.5-20.5,20.5s-20.5-9.196-20.5-20.5V187.5z M443.5,135c28.949,0,52.5,23.551,52.5,52.5 v40c0,28.949-23.551,52.5-52.5,52.5c-7.261,0-14.464-1.56-21.109-4.495c0.402-3.979,0.609-7.985,0.609-12.005v-7.045 c5.795,4.115,12.867,6.545,20.5,6.545c19.575,0,35.5-15.925,35.5-35.5v-40c0-19.575-15.925-35.5-35.5-35.5 c-7.633,0-14.705,2.43-20.5,6.545v-19.329C429.491,136.431,436.364,135,443.5,135z M367.5,416h-224 c-10.895,0-20.151-7.147-23.326-17h270.652C387.651,408.853,378.395,416,367.5,416z M471.5,384h-72h-288h-72 c-10.895,0-20.151-7.147-23.326-17h344.79c0.005,0,0.01,0.001,0.015,0.001c0.005,0,0.01-0.001,0.015-0.001h133.832 C491.651,376.853,482.395,384,471.5,384z M152.168,352C121.346,332.719,103,299.793,103,263.5v-160c0-4.687,3.813-8.5,8.5-8.5h288 c4.687,0,8.5,3.813,8.5,8.5v30.887c0,0.015,0,0.03,0,0.045V187.5v40v36c0,4.942-0.351,9.818-1.016,14.609 c-0.104,0.433-0.166,0.87-0.191,1.307c-4.529,29.858-21.719,56.167-47.962,72.583H152.168z" />
              <path d="M383.5,143c4.142,0,7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16 C376,139.642,379.358,143,383.5,143z" />
              <path d="M391,239.5v-72c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v72c0,4.142,3.358,7.5,7.5,7.5S391,243.642,391,239.5z" />
              <path d="M127.5,238.997c4.142,0,7.5-3.358,7.5-7.5v-15.995c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v15.995 C120,235.639,123.358,238.997,127.5,238.997z" />
              <path d="M164.151,321.481C145.625,307.708,135,286.575,135,263.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5 c0,27.866,12.831,53.387,35.202,70.019c1.344,1,2.913,1.481,4.469,1.481c2.291,0,4.553-1.046,6.025-3.026 C168.167,328.65,167.476,323.952,164.151,321.481z" />
            </svg>
          </div>
        </div>

        {/* 6. Soup Bowl Variant (Right Bottom) */}
        <div className="user-food-svg-6 absolute top-[80%] right-2 xs:right-4 sm:right-6 lg:right-10 opacity-45 hover:opacity-85 transition-opacity">
          <div className="user-food-svg-ambient w-12 h-12 xs:w-16 xs:h-16 lg:w-20 lg:h-20 text-amber-200/80 drop-shadow-[0_4px_16px_rgba(251,191,36,0.25)]">
            <svg
              viewBox="0 0 511 511"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M509.956,195.683c-1.35-2.282-3.804-3.683-6.456-3.683H7.5c-2.652,0-5.106,1.4-6.456,3.683 c-1.35,2.283-1.394,5.108-0.116,7.432c9.115,16.573,34.091,37.352,65.181,54.228c19.151,10.395,55.829,27.4,93.891,29.453v8.705 c0,12.958,10.542,23.5,23.5,23.5h144c12.958,0,23.5-10.542,23.5-23.5v-8.705c38.062-2.053,74.74-19.058,93.891-29.453 c31.09-16.876,56.066-37.655,65.181-54.228C511.35,200.791,511.306,197.965,509.956,195.683z M327.5,304h-144 c-4.687,0-8.5-3.813-8.5-8.5V287h161v8.5C336,300.187,332.187,304,327.5,304z M343.5,272h-176c-52.233,0-119.003-36.655-145.105-65 h466.211C462.503,235.345,395.734,272,343.5,272z" />
              <path d="M295.5,255h48c7.969,0,16.552-0.931,25.509-2.768c4.058-0.832,6.672-4.796,5.84-8.854s-4.802-6.67-8.854-5.84 C358.028,239.172,350.459,240,343.5,240h-48c-4.142,0-7.5,3.358-7.5,7.5S291.358,255,295.5,255z" />
              <path d="M399.505,242.548c0.929,0,1.875-0.174,2.79-0.542c2.854-1.145,5.757-2.375,8.629-3.658 c3.782-1.688,5.479-6.124,3.791-9.906c-1.688-3.783-6.124-5.481-9.906-3.791c-2.698,1.205-5.423,2.359-8.099,3.434 c-3.845,1.542-5.71,5.909-4.168,9.753C393.716,240.768,396.53,242.548,399.505,242.548z" />
            </svg>
          </div>
        </div>

      </div>

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 z-10">
        
        {/* ========================================================= */}
        {/* HERO TITLE: Clean, Bold, Open */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white mb-5 leading-[1.1]">
            Our Story — Paradise 27
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-wide">
            A Taste of Assam. A World of Flavours.
          </p>
        </div>

        {/* ========================================================= */}
        {/* STORY & HERITAGE: room.jpeg with lazy loading & bold text */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
          
          {/* Left Narrative: Bold & Impactful */}
          <div className="lg:col-span-5 space-y-6 text-white leading-relaxed">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-snug">
              A Welcoming Destination on National Highway 27
            </h2>
            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              Located on National Highway 27 at Nagaon Bypass, Assam, Paradise 27 is more than just a place to eat — it is a welcoming destination where great food, warm hospitality, and memorable dining experiences come together.
            </p>
            <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
              Inspired by the rich culinary heritage of Assam, we celebrate authentic regional flavours while offering a diverse selection of multi-cuisine favourites. From homestyle ethnic delicacies and our signature Swargadeo Thali to popular classics, every dish is prepared with fresh ingredients, hygiene, and genuine care.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenMenu}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-xl hover:shadow-2xl"
              >
                Explore Dining Menus
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Hero Image: room.jpeg with lazy loading */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden group">
              <img
                src="/images/ambience/room.jpeg"
                alt="Paradise 27 Welcoming Dining Room on NH 27"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* ESSENTIAL HIGHLIGHTS: Bold typography */}
        {/* ========================================================= */}
        <div className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MEET OUR CHEF: chef.jpeg with lazy loading & bold text */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
          
          {/* Chef Image on Left: chef.jpeg with lazy loading */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden group">
              <img
                src="/images/ambience/chef.jpeg"
                alt="Chef at Paradise 27"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Chef Narrative on Right: Bold, minimal & clean */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5 text-white leading-relaxed">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-snug">
              Meet Our Chef
            </h2>
            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              Celebrating Assamese Heritage, Exploring Global Flavours
            </p>
            <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
              Rooted in time-honoured Assamese recipes and fresh local ingredients, our culinary team crafts comforting regional delicacies alongside a thoughtfully curated multi-cuisine menu. Every preparation honours tradition, prioritises hygiene, and brings warmth to your highway dining experience.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* INTERIOR & AMBIENCE PHOTOS: img1, img2, food with lazy loading */}
        {/* ========================================================= */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3">
              Interior & Ambience
            </h2>
            <p className="text-base sm:text-lg text-white font-bold leading-relaxed">
              Step inside our clean, comfortable, and relaxed spaces designed for families, group gatherings, and highway travellers.
            </p>
          </div>

          {/* Large image grid: 2x2 presentation with lazy loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {AMBIENCE_GALLERY.map((photo) => (
              <div
                key={photo.src}
                className="relative h-80 sm:h-96 md:h-[460px] lg:h-[520px] w-full rounded-3xl overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors underline underline-offset-4"
            >
              View Full Food & Delicacies Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CLOSING MISSION & VISION: Bold, Clean Statement */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold italic text-white leading-relaxed">
            "Paradise 27 — Where tradition meets taste, and every journey finds a flavour. Rooted in Assam, inspired by the world."
          </p>
          <p className="text-base sm:text-lg text-white font-bold max-w-2xl mx-auto leading-relaxed">
            Every guest is welcomed with care, every culinary tradition is treated with respect, and every meal is an opportunity to create a lasting memory. We look forward to welcoming you on NH 27.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenMenu}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-xl hover:shadow-2xl"
            >
              Explore Dining Menus
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border-2 border-white/80 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact & Highway Directions
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
