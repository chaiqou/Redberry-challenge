import "./languages.css";

const Language = ({ skills, experience }) => {
  return (
    <div className="language">
      <li className="language-item">{`${skills}  Years of Experience ${experience}`}</li>
    </div>
  );
};

export default Language;
