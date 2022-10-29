const Profile = () => {
  const logo = require("./images/img1.png");

  return (
    <div className="Profile">
      <img src={logo} alt="My profile" id="profile_img"></img>
      <h2>Johnsonjrf349</h2>
      {/* <p id='slack'>Oyetunji Johnson</p> */}
    </div>
  );
};

export default Profile;
