import "./index.scss";

const BackgroundWords = ({ arrWords }) => {
  return (
    <div className="legend-container">
      {arrWords.map((word, index) => (
        <div className={`legend _${index}`}>{word}</div>
      ))}
    </div>
  );
};

export default BackgroundWords;
