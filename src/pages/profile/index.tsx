import React, { useEffect, useState } from "react";
import Layout from "layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useGetUserDataByIdQuery,
  useUpdateUserDataMutation,
} from "redux/services/userApi";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import EditProfileModal from "components/editProfileModal";
import styles from "./profile.module.scss";
import { IUser } from "types.ts";

const Profile = () => {
  const user: IUser = JSON.parse(localStorage.getItem("userData") || "{}");
  const { data } = useGetUserDataByIdQuery(user?.id);
  const [updateUserData, { data: updatedUser }] = useUpdateUserDataMutation();

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
    if (updatedUser) {
      localStorage.setItem("userData", JSON.stringify(updatedUser));
    }
  }, [data]);

  const [userData, setUserData] = useState<IUser>(user);
  const [editedData, setEditedData] = useState<IUser>(userData);
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };
  const handleSaveEdit = () => {
    if (editedData.firstName === "" || editedData.lastName === "") return;
    updateUserData({ ...userData, ...editedData });
    setUserData({ ...userData, ...editedData });
    handleToggleEdit();
  };
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className="d-flex justify-flex-start align-items-center">
          <p className={`${styles.title} mr-20`}>Profile Details</p>
          <p>
            <FontAwesomeIcon
              icon={faEdit}
              className={`${styles.edit}`}
              onClick={handleToggleEdit}
            />
          </p>
        </div>
        <div className={`${styles.data} d-flex flex-column mt-30`}>
          <div className="d-flex justify-content-between align-items-center pv-20">
            <span>Email: </span>
            <div className={`${styles.field} ml-30 pa-15`}>
              {userData.email}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center pv-20">
            <span>First name: </span>
            <div className={`${styles.field} ml-30 pa-15`}>
              {userData.firstName}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center pv-20">
            <span>Last name: </span>
            <div className={`${styles.field} ml-30 pa-15`}>
              {userData.lastName}
            </div>
          </div>
        </div>
      </div>
      {toggleEdit && (
        <EditProfileModal
          toggleEdit={toggleEdit}
          handleToggleEdit={handleToggleEdit}
          userData={userData}
          handleInputChange={handleInputChange}
          handleSaveEdit={handleSaveEdit}
        />
      )}
    </Layout>
  );
};

export default Profile;
