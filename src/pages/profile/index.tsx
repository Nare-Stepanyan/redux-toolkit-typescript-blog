import React, { useState } from "react";
import Layout from "layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Ani Cooper",
    email: "anicooper@gmail.com",
    password: "aniCoop/1",
  });
  return (
    <Layout>
      <div>Profile Details</div>
      <div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Profile;
