import SurveyDropdown from "./SurveyDropdown";

const SurveyPage = () => {
  return (
    <div className="h-screen bg-black">
      <h1
        className={`absolute w-[1128px] top-[94px] h-[100px] left-[359px] text-white font-['Rowdies'] font-normal non-italic text-6xl leading-[70px] flex items-center tracking-wider`}
      >
        Submitted Applications
      </h1>
      <SurveyDropdown />
    </div>
  );
};

export default SurveyPage;
