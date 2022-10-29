const First = ({ id, href, name }) => {
  return (
    <a href={href} id="click3">
      <div className="click">
        <a href={href} id={id}>
          {" "}
          {name}{" "}
        </a>
      </div>
    </a>
  );
};

export default First;
