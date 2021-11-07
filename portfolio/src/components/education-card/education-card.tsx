

interface EducationProps {
  year: string;
  study: string;
  university: string;
  college: string;
}
const EducationCard = ({ year, study, university,college }: EducationProps) => {
  return (
    <div className="p-2 mx-auto flex justify-center mt-5">
      <h3 className="text-blue-300 mb-4 text-sm font-bold mr-5">{year}</h3>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{study}</h2>
        <h2 className="text-2xl font-thin mb-2 text-gray-800">{college}</h2>
        <p className="text-gray-700">{university}</p>
      </div>
    </div>
  );
};

export default EducationCard;
