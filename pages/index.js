import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Cursor from "../components/Cursor";
import Experience from "../components/Experience";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const projectRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} mx-20 md:mx-40 lg:mx-80`}>
      {data.showCursor && <Cursor />}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleProjectScroll={handleProjectScroll}
          handleAboutScroll={handleAboutScroll}
          handleExperienceScroll={handleExperienceScroll}
        />
        <div className="grid grid-cols-3 gap-4 laptop:mt-20 mt-40 mb-20">
          <div className="col-span-2 mt-10">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold mob:w-full"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
            >
              {data.headerTaglineThree} <span>
              <AnimatedText words={data.headerChangingWords} />
              </span>
            </h1>
            <Socials className="mt-2 laptop:mt-5" />
          </div>
          <div className="col-span-1">
            <img src="/images/me2.jpg" className="self-center" alt="Deep Parekh" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-4xl text-bold">About.</h1>
          <div className="mt-5 laptop:mt-5 grid grid-cols-1 tablet:grid-cols-2">
            <div>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-2xl w-full laptop:w-4/5 mb-4">
              {data.aboutpara1}
            </p>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-2xl w-full laptop:w-4/5 mb-4">
              {data.aboutpara2}
            </p>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-2xl w-full laptop:w-4/5">
              {data.aboutpara3}
            </p>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Education</h1>
              <div className="mt-2">
                <h2 className="text-lg">{data.education.universityName}</h2>
                <h3 className="text-sm opacity-75">
                    {data.education.universityDate}
                </h3>
                <p className="text-sm mt-2 opacity-50">
                  {data.education.universityPara}
                </p>
              </div>
              <br />
              <h1 className="text-2xl font-bold">Skills</h1>
              <div className="flex mob:flex-col desktop:flex-row justify-between">
                {data.languages && (
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg mb-2">Languages</h2>
                    <ul className="list-disc">
                      {data.languages.map((language, index) => (
                        <li key={index} className="ml-5">
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {data.tools && (
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg mb-2">Tools</h2>
                    <ul className="list-disc">
                      {data.tools.map((tool, index) => (
                        <li key={index} className="ml-5">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {data.others && (
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg mb-2">Others</h2>
                    <ul className="list-disc">
                      {data.others.map((other, index) => (
                        <li key={index} className="ml-5">
                          {other}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={experienceRef}>
          <h1 className="text-4xl text-bold">Experience.</h1>
            <div className="mt-5 tablet:m-10">
              <Experience experiences={data.experiences} />
            </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectRef}>
          <h1 className="text-4xl text-bold">Projects.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-2 tablet:grid-cols-4 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

          <Footer />
      </div>
    </div>
  );
}
