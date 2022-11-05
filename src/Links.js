import First from "./first";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const user = {
    twitter: "https://twitter.com/johnsonjrf349",
    Team: "https://training.zuri.team/",
    zuriBooks: "http://books.zuri.team",
    PythonBooks:
      "https://books.zuri.team/python-for-beginners?ref_id=<johnsonjrf>",
    BackGrounds: "https://background.zuri.team",
    Design: "https://books.zuri.team/design-rules",
  };

  const logo = require("./images/slack.png");
  const logo1 = require("./images/Social-icon.png");
  const logo2 = require("./images/Zuri-Logo.png");
  const logo3 = require("./images/Side.png");
  const logo4 = require("./images/Footer-text.png");
  const logo5 = require("./images/Icon.png");
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("contact");
  };

  return (
    <div className="links">
      <First href={user.twitter} id="twitter" name="Twitter" />

      <First href={user.Team} id="btn__zuri" name="Zuri Team" />
      <First href={user.zuriBooks} id="books" name="Books" />
      <First href={user.PythonBooks} id="book_python" name="Python Books" />
      <First
        href={user.BackGrounds}
        id="pitch"
        name="Background check for Coders"
      />
      <First href={user.Design} id="book_design" name="Design Books" />
      <a id="click3" onClick={routeChange}>
        <div className="click">
          <a id="click3" onClick={routeChange}>
            Contact me
          </a>
          <img src={logo5} alt="link to share"></img>
        </div>
      </a>

      <div className="click1">
        <Logo src={logo} alt="My profile" id="slack" />
        <Logo src={logo1} alt="My profile" id="Social-icon" />
      </div>
      <div className="footer">
        <div className="sub-footer">
          <div className="logo2">
            <Logo src={logo2} id="zuri" alt="my profile" />
          </div>

          <div className="logo4">
            <Logo src={logo4} id="text" alt="my profile" />
          </div>
          <div className="logo3">
            <Logo src={logo3} id="Side" alt="my profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
