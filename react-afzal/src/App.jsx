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
      <h2>Name: Hollywood</h2>
      <h3>Rating 8.5</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam,
        voluptatum magnam dolore quidem non sit ea labore nisi quis quia enim
        laboriosam architecto ipsum ipsa at accusamus fugit dignissimos?
      </p>
    </div>
  );
};
