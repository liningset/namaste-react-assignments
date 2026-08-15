import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Find Your Favorite Meals!</h1>
      <form className="search-field">
        <input type="text" id="search-bar" />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </section>
  );
};

export default Hero;
