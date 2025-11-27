import NetflixSeries, { Header, Footer } from "./components/NetflixSeries";
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
    </Fragment>
  );
};
