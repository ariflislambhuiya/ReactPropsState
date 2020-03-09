import React from "react";

const LoggedInNav = ({ logout, user }) => {
  return (
    <div>
      <p>
        Hello {user.name},you are loggedin with{" " + user.email}
      </p>
      <ul>
        <li>Dashboadr</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};

const LoggedOutNav = ({ login }) => {
  return (
    <div>
      <p>Please Click The Button Below</p>
      <ul>
        <li onClick={login}>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

//main component
const BasicNav = ({ isAuthonticated, user, login, logout }) => {
  if (isAuthonticated) {
    return <LoggedInNav logout={logout} user={user} />;
  }
  return <LoggedOutNav login={login} />;
};
export default BasicNav;
