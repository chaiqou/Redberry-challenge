import { BsTrash } from "react-icons/bs";

const Language = ({
  skills,
  experience,
  setUserValues,
  UniqueFilteredArray,
  userValue,
}) => {
  const deleteHandler = () => {
    setUserValues(
      UniqueFilteredArray.filter((el) => el.skills !== userValue.skills)
    );
  };

  return (
    <div className="m-2 bg-white text-black flex justify-between items-center transition-all">
      <li className="flex items-center justify-between font-medium h-[100%] w-screen   p-3 mb-3 text-base text-white  bg-redBerry rounded-lg dark:bg-red-600 dark:text-red-800">
        {`${skills}  Years of Experience ${experience} `}
        <button
          className="p-2 border-none text-lg  cursor-pointer outline-none text-white"
          onClick={deleteHandler}
        >
          <BsTrash />
        </button>
      </li>
    </div>
  );
};

export default Language;
