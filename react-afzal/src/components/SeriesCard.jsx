import "./Netflix.css";

export const SeriesCard = ({ data }) => {
  console.log(data);
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    data;
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  return (
    <li className="card">
      <div>
        <img alt={name} src={img_url} width="30%" height="30%" />
      </div>
      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3 style={{ margin: "1.2rem 0" }}>
          Rating: <span className={`rating ${ratingClass}`}> {rating} </span>
        </h3>
        <p style={{ margin: "1.2rem 0" }}>Summary:{description}</p>
        <p style={{ margin: "1.2rem 0" }}>Genre: {genre.join(", ")}</p>
        <p style={{ margin: "1.2rem 0" }}>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
