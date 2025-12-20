// import "./Netflix.css";
import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  console.log(data);
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    data;
  // const ButtonAfzal = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7fdcea" : "#f7dc6f"}`,
  //   color: "var(--bg-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  const ButtonAfzal = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7fdcea" : "#f7dc6f"};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
  `;
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  const Rating = styled.h3`
      font-size=1.6rem;
      color:#7dcea0;
      text-transform:capitalize;
  `;

  return (
    <li className={styles.card}>
      <div>
        <img alt={name} src={img_url} width="30%" height="30%" />
      </div>
      <div className={styles["card - content"]}>
        <h2>Name: {name}</h2>
        <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}> {rating} </span>
        </Rating>
        <p style={{ margin: "1.2rem 0" }}>Summary:{description}</p>
        <p style={{ margin: "1.2rem 0" }}>Genre: {genre.join(", ")}</p>
        <p style={{ margin: "1.2rem 0" }}>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <ButtonAfzal rating={rating}>Watch Now</ButtonAfzal>
        </a>
      </div>
    </li>
  );
};
