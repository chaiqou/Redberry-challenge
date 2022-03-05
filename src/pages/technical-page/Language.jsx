import "./languages.css";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const Language = ({ skills, experience, setUserValues, userValues }) => {
  console.log(userValues);
  const deleteHandler = () => {
    setUserValues(userValues.filter((el) => el.id !== userValues.id));
  };
  return (
    <div className="language">
      <li className="language-item">{`${skills}  Years of Experience ${experience}`}</li>
      <button onClick={deleteHandler}>
        <MdOutlineRemoveCircleOutline />
      </button>
    </div>
  );
};

export default Language;
