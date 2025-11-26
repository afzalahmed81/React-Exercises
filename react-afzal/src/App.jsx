import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </Fragment>
  );
};

const NetflixSeries = () => {
  const name = "hollywood";
  const rating = "8.5";
  const summary =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam,voluptatum magnam dolore quidem non sit ea labore nisi quis quia enimlaboriosam architecto ipsum ipsa at accusamus fugit dignissimos?";
  let age = 15;
  // Method 2
  // let canWatch = "Not Available";
  // if (age >= 18) canWatch = "watch Now";
  // Method 3, conditional rendering using function
  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not available";
  };
  const returnGenre = () => {
    const genre = "Action";
    return genre;
  };
  // if (age < 18) {                 // This method violates DRY (dont repeat yourself)
  //   return (
  //     <div>
  //       <div>
  //         <img
  //           alt="Movie Hollywood"
  //           src="movie-hollywood.jpg"
  //           width="30%"
  //           height="30%"
  //         />
  //       </div>
  //       <h2>Name: {name}</h2>
  //       <h3>Rating: {rating} </h3>
  //       <p>{summary}</p>
  //       <p>Genre: {returnGenre()}</p>
  //       <button>Not Available</button>
  //     </div>
  //   );
  // }
  return (
    <div>
      <div>
        <img
          alt="Movie Hollywood"
          src="movie-hollywood.jpg"
          width="30%"
          height="30%"
        />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating} </h3>
      <p>{summary}</p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </div>
  );
};
