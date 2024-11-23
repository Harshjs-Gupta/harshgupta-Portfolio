"use client";
import Image from "next/image";
import githubIcon from "../../public/github.png";
import { useState } from "react";
import Chattify from "@/assets/Images/chattify.png";
import EzzyShop from "@/assets/Images/EzzyShop.png";

function ProjectPage() {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      number: "01",
      name: "Chattify chatting site",
      description:
        "In this website you chat with your friends, send emojis, messages, and share images. You can also log out and block users.",
      languages: "HTML5, CSS3, React, TypeScript, TailwindCSS, SCSS",
      githubLink: "https://github.com/Harshjs-Gupta/Chattify2",
      liveLink: "https://chattify2.vercel.app/",
      image: Chattify,
      altText: "Chattify",
    },
    {
      id: 2,
      number: "02",
      name: "EzzyShop Shopping site",
      description:
        "In this website you can search any products, view details of any products, and feature like add to cart, dummy payment system authentication and more.",
      languages:
        "Next.js, CSS3, TypeScript, TailwindCSS, SCSS, Firebase, FireStore",
      githubLink: "https://github.com/Harshjs-Gupta/EzzyShop",
      liveLink: "https://ezzy-shop-ten.vercel.app/",
      image: EzzyShop,
      altText: "EzzyShop",
    },
  ];

  return (
    <>
      <section id="Project-page">
        <div className="project-selector">
          {projects.map((project) => (
            <span
              key={project.id}
              className={`project${project.id} ${
                activeProject === project.id ? "active" : ""
              }`}
              onClick={() => setActiveProject(project.id)}
            >
              {project.id}
            </span>
          ))}
        </div>

        {projects.map(
          (project) =>
            activeProject === project.id && (
              <div key={project.id} className="project-container">
                <div className="project-detail">
                  <div>
                    <span className="project-number">{project.number}</span>
                    <span className="project-name">{project.name}</span>
                  </div>
                  <div className="project-function">
                    <p>{project.description}</p>
                    <span className="language-used">{project.languages}</span>
                  </div>
                  <div className="github-link">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={githubIcon}
                        alt="GitHub"
                        height={50}
                        width={50}
                        className="link"
                      />
                    </a>
                  </div>
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={project.video} height={400} width={500} />
                </a>
              </div>
            )
        )}
      </section>
    </>
  );
}

export default ProjectPage;
