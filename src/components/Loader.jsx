import "../../public/assets/css/loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <img
          src="/assets/images/legal_icon.png"
          alt="Loading..."
          className="loader-icon"
        />
      </div>
    </div>
  );
};

export default Loader;
