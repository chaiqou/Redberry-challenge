import Language from "./Language";
import { reusableStylesField } from "../../helpers/ReusableStyles";
import { v4 as uuidv4 } from "uuid";
import "./languages.css";

const LanguagesList = ({ userValues }) => {
  return (
    <div className="flex justify-center items-center flex-col h-[100px] w-34 absolute left-[250px] top-[650px]">
      <ul className="min-w-[10%] list-none">
        {userValues.map((userValue) => (
          <Language
            key={uuidv4()}
            skills={userValue.skills}
            experience={userValue.experience}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
