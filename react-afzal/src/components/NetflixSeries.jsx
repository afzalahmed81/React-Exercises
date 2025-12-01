import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img
                alt="Movie Hollywood"
                src={curElem.img_url}
                width="30%"
                height="30%"
              />
            </div>
            <h2>Name: {curElem.name}</h2>
            <h3>Rating: {curElem.rating} </h3>
            <p>Summary:{curElem.description}</p>
            <p>Genre: {curElem.genre}</p>
            <a href={curElem.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;
