import Language from "./Language";
import { v4 as uuidv4 } from "uuid";

const LanguagesList = ({ userValues, setUserValues }) => {
  // am constantat meshveobit vfiltravt arrays tu arrayshi ertxel an metjer avirchevt erti da igive skills
  // am shemtxvevashi duplicated skill ar aisaxeba arrayshi da shesabamisad ar gadaecema Language components
  // romlis meshveobitac shevdzlebt mxolod unique skillebis damatebas

  const UniqueFilteredArray = Object.values(
    userValues.reduce((unique, o) => {
      if (!unique[o.skills] || +o.experience > +unique[o.skills].experience)
        unique[o.skills] = o;

      return unique;
    }, {})
  );

  return (
    <div
      className={`flex justify-center items-center flex-col h-[140px] w-68 absolute left-[180px] top-[650px]`}
    >
      <ul className=" w-[490px] list-none ">
        {UniqueFilteredArray.map((userValue) => (
          <Language
            key={uuidv4()}
            userValue={userValue}
            skills={userValue.skills}
            UniqueFilteredArray={UniqueFilteredArray}
            experience={userValue.experience}
            setUserValues={setUserValues}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
