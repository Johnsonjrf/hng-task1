import Logo from "./Logo";
import { useState } from "react";

import Profile from "./Profile";
import Links from "./Links";

function App() {
  const Icon = require("./images/Icon.png");
  const Icon1 = require("./images/Mobile-share.png");
  const [isShown, setIsShown] = useState(false);
  const logo = require("./images/slack.png");
  const logo1 = require("./images/Social-icon.png");

  return (
    <div className="App">
      <Logo id="icon" src={Icon} alt="the icon" setIsShown={setIsShown} />
      {isShown && (
        <div className="tooltip">
          <p>share links</p>
          <Logo src={logo} alt="My profile" id="slack1" />
          <Logo src={logo1} alt="My profile" id="Social-icon1" />
        </div>
      )}
      <Logo id="icon1" src={Icon1} alt="the icon" setIsShown={setIsShown} />
      <Profile />
      <Links />
    </div>
  );
}

export default App;
