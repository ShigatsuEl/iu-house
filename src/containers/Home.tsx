import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

type IProps = RouteComponentProps;

const Home: React.FunctionComponent<IProps> = ({ history, location, match }: IProps) => {
  console.log(history, location, match);
  return (
    <div>
      <a onClick={history.goBack}>Back</a>
      <Link to="/">IU House</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
