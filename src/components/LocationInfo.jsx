import "./styles/LocationInfo.css";
const LocationInfo = ({ location }) => {
  return (
    <article className="info">
      <h2 className="info__name">{location?.name}</h2>
      <ul className="info__list">
        <li className="info__item">
          <span className="info__label">Type: </span>
          <span className="info__value">{location?.type}</span>
        </li>
        <li className="info__item">
          <span className="info__label">Dimension: </span>
          <span className="info__value">{location?.dimension}</span>
        </li>
        <li className="info__item">
          <span className="info__label">Population: </span>
          <span className="info__value">{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
