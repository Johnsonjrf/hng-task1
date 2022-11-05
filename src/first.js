const First = ({ id, href, name }) => {
  const logo = require("./images/Icon.png");
  return (
    <a href={href} id="click3">
      <div className="click">
        <a href={href} id={id}>
          {name}
        </a>
        <img src={logo} alt="link to share"></img>
      </div>
    </a>
  );
};

export default First;
