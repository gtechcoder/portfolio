import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  useEffect(() => {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [props.id]);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "TypeScript", ratingPercentage: 55 },
    { skill: "React Js", ratingPercentage: 65 },
    { skill: "Angular", ratingPercentage: 65 },
    { skill: "Express Js", ratingPercentage: 90 },
    { skill: "Node Js", ratingPercentage: 90 },
    { skill: "Mongo Db", ratingPercentage: 50 },
    { skill: "SQL", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "Spring Boot", ratingPercentage: 65 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "BootStrap", ratingPercentage: 70 },
    { skill: "Material UI", ratingPercentage: 90 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "1st May 2024", toDate: "14th May 2024" },
      description:
        "A Personal Portfolio website to showcase all my details and project at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },

    {
      title: "Ecommerce Website",
      duration: { fromDate: "June 2022", toDate: "July 2022" },
      description:
        "Online ecommerce website for showcasing and selling products with payment system integration",
      subHeading: "Technologies Used: Angular, CSS, Bootstrap, T-SQL",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "July 2021", toDate: "October 2021" },
      description:
        "Online ecommerce website for showcasing and selling products with chatbot integration and payment system integration",
      subHeading:
        "Technologies Used: React JS, Bootstrap, Mongo DB, NodeJs, ExpressJS",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Murang'a University of Technology, Kenya"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={"Cheptenye Boys High School, Kenya"}
        fromDate={"2013"}
        toDate={"2016"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Upwork Freelancer"}
        subHeading={"Freelance Software Developer"}
        fromDate={"December 2023"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Currently working as a Freelance Software Developer at Upwork
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed custom web applications for multiple clients using
          ReactJs/Spring Boot, ReactJs/Node, Angular/Spring Boot, and
          Angular/Node, which resulted in clients' approval ratings.
        </span>
        <br />

        <span className="resume-description-text">
          - Collaborated with clients to gather requirements, provide progress
          updates, and deliver solutions on time and within budget.
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <Resume
          heading="Teaching"
          description="Apart from being a tech enthusiast and a software developer, I also love to teach my tech colleaques what I know simply because I believe in sharing."
        />

        <Resume
          heading="Music"
          description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on"
        />

        <Resume
          heading="Puzzles"
          description="I love solving puzzles so as to improve on my creativity."
        />
      </div>
    </div>,
    /* WORK EXPERIENCE */
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops,,, no internet connection"
        />
      </div>
    ));
  };

  // const getResumeScreen = () => {
  //   return (
  //     <div
  //       style={carousalOffSetStyle.style}
  //       className="resume-details-carousal"
  //     >
  //       {resumeDetails.map((ResumeDetail, index) => ResumeDetail)}
  //     </div>
  //   );
  // };


  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          {/* <div className="resume-bullets-details">{getResumeScreen()}</div> */}
        </div>
      </div>
    </div>
  );
}
