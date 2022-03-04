import Language from "./Language";
import { reusableStylesField } from "../../helpers/ReusableStyles";
import { v4 as uuidv4 } from "uuid";

const LanguagesList = ({ userValues }) => {
  console.log(userValues);
  return (
    <div className={`${reusableStylesField} top-[620px]`}>
      <ul>
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
