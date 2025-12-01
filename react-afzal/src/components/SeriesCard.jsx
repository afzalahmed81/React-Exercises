export const SeriesCard = (props) => {
  console.log(props);
  return (
    <li>
      <div>
        <img
          alt="Movie Hollywood"
          src={props.curElem.img_url}
          width="30%"
          height="30%"
        />
      </div>
      <h2>Name: {props.curElem.name}</h2>
      <h3>Rating: {props.curElem.rating} </h3>
      <p>Summary:{props.curElem.description}</p>
      <p>Genre: {props.curElem.genre}</p>
      <a href={props.curElem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
