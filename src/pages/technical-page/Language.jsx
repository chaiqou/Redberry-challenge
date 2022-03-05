import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const Language = ({ skills, experience, setUserValues, userValues }) => {
  console.log(userValues);
  const deleteHandler = () => {
    setUserValues(userValues.filter((el) => el.id !== userValues.id));
  };
  return (
    <div className="m-2 bg-white text-black flex justify-between items-center transition-all">
      <li className="flex items-center justify-between font-medium h-[100%] w-screen   p-3 mb-3 text-base text-white  bg-redBerry rounded-lg dark:bg-red-600 dark:text-red-800">
        {`${skills}  Years of Experience ${experience} `}
        <button
          className="p-2 border-none cursor-pointer outline-none text-white"
          onClick={deleteHandler}
        >
          <MdOutlineRemoveCircleOutline />
        </button>
      </li>
    </div>
  );
};

export default Language;

//flex items-center justify-between border-solid border-black  border-2 p-2
