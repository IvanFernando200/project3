import { useRef } from "react";
import "./styles/SearchLocation.css";
const SearchLocation = ({ setLocationNum }) => {
  const locationInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationNum(locationInput.current.value.trim());
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        ref={locationInput}
        type="number"
        placeholder="Example: 80"
        required
      />
      <button className="form__btn">Search</button>
    </form>
  );
};

export default SearchLocation;
