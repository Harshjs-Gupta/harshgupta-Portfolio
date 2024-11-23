"use client";
import React, { useState } from "react";
import Image from "next/image";
import html from "@/assets/logo/html.png";
import css from "@/assets/logo/css.png";
import figma from "@/assets/logo/figma.png";
import nodeJs from "@/assets/logo/nodejs.png";
import js from "@/assets/logo/js.png";
import nextJs from "@/assets/logo/nextjs.png";
import react from "@/assets/logo/react.png";
import tailwind from "@/assets/logo/tailwind.png";
import DownloadCVButton from "../downloadPDF/downloadCVButton";

function AboutPage() {
  // State to manage which section is active
  const [activeSection, setActiveSection] = useState("education");

  return (
    <section className="section" id="Resume-page">
      <div className="aboutme-container">
        <div className="hire-container">
          <span>Why hire me?</span>
          <p>
            For hire me first see my ability like Education, Skill, About Me
          </p>
          <div className="buttons">
            <button
              className={`education ${
                activeSection === "education" ? "active" : ""
              }`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button
              className={`skill ${activeSection === "skill" ? "active" : ""}`}
              onClick={() => setActiveSection("skill")}
            >
              Skill
            </button>
            <button
              className={`aboutMe ${activeSection === "about" ? "active" : ""}`}
              onClick={() => setActiveSection("about")}
            >
              About Me
            </button>
            <div className="downloadCV">
              <DownloadCVButton />
            </div>
          </div>
        </div>

        <div className="about">
          {/* Education Section */}
          {activeSection === "education" && (
            <div className="education-container">
              <span className="title">My Education</span>
              <pre className="description">
                Here&apos;s my Education Qualification
              </pre>
              <div className="courses-container">
                <div className="course">
                  <div className="year-container">
                    <div className="year">2022 - 2025</div>
                    <pre className="text-sm courseName">
                      Bachelor of Computer Application
                    </pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">Online course</div>
                  </div>
                </div>
                <div className="course">
                  <div className="year-container">
                    <div className="year">2022 - 2024</div>
                    <pre className="courseName">Programming Course</pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">Online Udemy</div>
                  </div>
                </div>
                <div className="course">
                  <div className="year-container">
                    <div className="year">2024</div>
                    <pre className="courseName">Frontend Development</pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">Online Udemy</div>
                  </div>
                </div>
                <div className="course">
                  <div className="year-container">
                    <div className="year">2022</div>
                    <pre className="courseName">
                      12<sup>th</sup> DAV Public{" "}
                    </pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">From CBSE</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === "skill" && (
            <div className="skill-container">
              <span className="title">Skills</span>
              <div className="description">
                Here is my Skills that I have use for develop Websites and
                Webapp and UI/UX of Webpage.
              </div>
              <div className="skills">
                <div className="logo-container">
                  <Image src={html} alt="HTML Logo" />
                </div>
                <div className="logo-container">
                  <Image src={css} alt="css Logo" />
                </div>
                <div className="logo-container">
                  <Image src={js} alt="js Logo" />
                </div>
                <div className="logo-container">
                  <Image src={react} alt="react Logo" />
                </div>
                <div className="logo-container">
                  <Image src={nextJs} alt="nextJs Logo" />
                </div>
                <div className="logo-container">
                  <Image src={tailwind} alt="tailwind Logo" />
                </div>
                <div className="logo-container">
                  <Image src={nodeJs} alt="nodeJs Logo" />
                </div>
                <div className="logo-container">
                  <Image src={figma} alt="figma Logo" />
                </div>
              </div>
            </div>
          )}

          {/* About Me Section */}
          {activeSection === "about" && (
            <div className="about-container">
              <span className="title">About Me</span>
              <div className="description">
                Here is my Skills that I have use for develop Websites and
                Webapp and UI/UX of Webpage.
              </div>
              <div className="detail-container">
                <div className="detail">
                  <span className="detail-name">Name</span>
                  <span>Harsh Gupta</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Phone</span>
                  <span>(+91) 7667045966</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Experience</span>
                  <span>Fresher</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Email</span>
                  <span>harshgupta88911@gmail.com</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Freelance</span>
                  <span>Available</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Language</span>
                  <span>English, Hindi</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
