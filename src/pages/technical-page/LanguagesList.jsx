import Language from "./Language";
import { v4 as uuidv4 } from "uuid";

const LanguagesList = ({ userValues, setUserValues }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col h-[100px] w-34 absolute left-[250px] top-[650px] rounded-lg`}
    >
      <ul className="min-w-[30%] list-none rounded-xl">
        {userValues.map((userValue) => (
          <Language
            key={uuidv4()}
            skills={userValue.skills}
            userValues={userValues}
            experience={userValue.experience}
            setUserValues={setUserValues}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
