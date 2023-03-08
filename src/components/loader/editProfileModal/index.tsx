import React from "react";
import { Modal, Button } from "react-bootstrap";
import { IUser } from "types.ts";
import styles from "./editProfile.module.scss";

type IEditProfileProps = {
  toggleEdit: boolean;
  handleToggleEdit: () => void;
  userData: IUser;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEdit: () => void;
};

const EditProfileModal = ({
  toggleEdit,
  handleToggleEdit,
  userData,
  handleInputChange,
  handleSaveEdit,
}: IEditProfileProps) => {
  return (
    <Modal show={toggleEdit} backdrop="static">
      <Modal.Header closeButton onHide={handleToggleEdit}>
        <Modal.Title>
          <p className={styles.modalTitle}>Edit details</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={`${styles.modalInput} mb-20`}>
          <input
            type="text"
            name="firstName"
            placeholder={userData.firstName}
            className="pa-15"
            defaultValue={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.modalInput} mb-20`}>
          <input
            type="text"
            name="lastName"
            placeholder={userData.lastName}
            className="pa-15"
            defaultValue={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.modalInput} mb-20`}>
          <input
            type="text"
            name="password"
            defaultValue={userData.password}
            placeholder={userData.password}
            className="pa-15"
            onChange={handleInputChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleEdit}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
