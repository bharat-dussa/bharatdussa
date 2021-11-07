import { useState } from "react";

interface workProps {
  year: string;
  name: string;
  link: string;
  role: string;
  presentWork: boolean,
}

const WorkCard = ({ year, name, link, role, presentWork }: workProps) => {
  console.log("name", name);

 

  return (
    <div className="justify-center mt-5 flex items-center border max-w-sm w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex space-x-4">
        <span className="flex h-3 w-3">
          <span
            className={` ${
                presentWork && "animate-ping"
            } animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75`}
          ></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      <div className="bg-white p-8 ">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
        <h2 className="text-2xl font-thin mb-2 text-gray-800">{role}</h2>
        <h2 className="text-xs  font-thin mb-2 text-gray-800">{year}</h2>
        <p className="text-gray-700">{link}</p>
      </div>
    </div>
  );
};

export default WorkCard;
