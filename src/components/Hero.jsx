import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ setFilterByString }) => {
  function onFormSubmit(e) {
    e.preventDefault();
    setFilterByString(e.target.elements[0].value);
  }
  return (
    <section className="hero-section">
      <h1>Find Your Favorite Meals!</h1>
      <form className="search-field" onSubmit={(e) => onFormSubmit(e)}>
        <input type="text" id="search-bar" />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </section>
  );
};

export default Hero;
