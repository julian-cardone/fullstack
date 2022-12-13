import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index.js";
import SessionLinks from "./components/SessionLinksHeader";
import LoginFormPage from "./components/LoginFormPage";
import { useSelector } from "react-redux";
import AudioBar from "./components/AudioBar";
import NavBar from "./components/NavBar";
import AlbumIndexPage from "./components/AlbumIndexPage/index.js";

function App() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignupFormPage sessionUser={sessionUser} />
        </Route>
        <Route path="/login">
          <LoginFormPage sessionUser={sessionUser} />
        </Route>
        <Route exact path="/">
          <NavBar sessionUser={sessionUser}/>
          <SessionLinks sessionUser={{ sessionUser }} />
          <AlbumIndexPage />
          <AudioBar sessionUser={{ sessionUser }} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
