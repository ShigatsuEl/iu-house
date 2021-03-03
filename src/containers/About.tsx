import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

type IProps = RouteComponentProps;

const About: React.FunctionComponent<IProps> = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default About;
