import { FunctionComponent, useEffect, useState } from "react";
import Layout from "../../components/layout/layout-component";
import EducationCard from "../education-card/education-card";
import WorkCard from "../work-card/work-card";
import { find } from "lodash";

const About: FunctionComponent = () => {
  const [presentWork, setPresentWork] = useState<boolean>(false);
  console.log("presentWork", presentWork);

  const educationDetails = [
    {
      year: "2016-2020",
      study: `Bachelor's of Engineering`,
      university: "Mumbai University",
      college: "MGM College Of Engineering",
    },
    {
      year: "2015-2016",
      study: `HSC`,
      university: "Mumbai University",
      college: "BNN College Of Science",
    },
    {
      year: "2013-2014",
      study: `SSC`,
      university: "Mumbai University",
      college: "PEM High School",
    },
  ];

  const workDetails = [
    {
      year: "2021",
      name: "Deuex Solutions Pvt Ltd",
      link: "",
      role: "FrontEnd Developer",
    },
    {
      year: "2020",
      name: "FarziEngineer",
      link: "",
      role: "FrontEnd Developer",
    },
  ];

  useEffect(() => {
    find(workDetails, (name) => {
      if (name.name === "Deuex Solutions Pvt Ltd") {
        setPresentWork(true);
      }
    });
  },[]);

  return (
    <Layout>
      <div className="flex flex-col font-mono pt-10">
        Well i had introduced myself at start,
        <br />
        oh, well i forgot to tell about my education.
      </div>
      {/* {" Education"} */}
      <div className="mt-10 font-300  text-3xl">
        <h4>
          <i className="animate-ping border-black border-solid border-l-0 border-t-0 border-r-4">
            {" "}
          </i>{" "}
          Education{" "}
        </h4>
        {educationDetails.map((data, index) => {
          console.log("data", data);

          return (
            <EducationCard
              year={data.year}
              study={data.study}
              university={data.university}
              college={data.college}
            />
          );
        })}
      </div>

      {/* work */}

      <div className="mt-10 font-300  text-3xl">
        <h4>
          <i className="animate-ping border-black border-solid border-l-0 border-t-0 border-r-4">
            {" "}
          </i>{" "}
          Work{" "}
        </h4>
        {workDetails.map((data, index) => {
          console.log("data.name", presentWork);
          return (
            <WorkCard
              key={index}
              year={data.year}
              name={data.name}
              link={data.link}
              role={data.role}
              presentWork={presentWork}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default About;
