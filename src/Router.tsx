import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './containers/About';
import Home from './containers/Home';

interface RouterProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Router: React.FunctionComponent<RouterProps> = (props: RouterProps) => {
  const { videoRef, audioRef } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Home videoRef={videoRef} />} />
        <Route path="/about" render={() => <About videoRef={videoRef} audioRef={audioRef} />} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
