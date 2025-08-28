import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small Selection Of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-[54px] mt-10">
        {projects.map((project) => {
          return (
            <div
              className="flex items-center justify-center flex-col"
              key={project.id}
            >
              <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                  <PinContainer title={project.link} href={project.link}>
                <Link href={project.link} target="_blank"> 
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <Image src="/bg.png" alt="" fill />
                      </div>

                      <Image
                        src={project.img}
                        alt=""
                        width={250}
                        height={270}
                        className="z-10 absolute bottom-0 w-[260px] h-[130px] lg:h-[190px] rounded-t-md"
                      />
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {project.title}
                    </h1>
                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {project.des}
                    </p>
                    <div className="flex items-center justify-center mt-7 mb-3">
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[0.2] rounded-full bg-[#13162D] w-8 h-8 flex justify-center items-center"
                        >
                          <Image
                            src={icon}
                            alt="icon"
                            width={35}
                            height={35}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>
                </Link>
                  </PinContainer>
              </div>
              <div className="z-[100] flex justify-center items-center cursor-pointer lg:mt-1 mt-3 border border-purple/[0.3] rounded-lg py-2 px-3">
                <a
                  href={"/"}
                  className="flex lg:text-lg text-[15px] text-purple"
                >
                  Project Details
                </a>

                {/* <FaLocationArrow className="ms-2" color="#CBACF9" /> */}
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/projects" className="mt-8 flex justify-center">
        <MagicButton
          title="Show all projects"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
};

export default RecentProjects;
