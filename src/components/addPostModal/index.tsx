import React, { useState } from "react";
import { changeDateToString } from "helpers";
import { Modal, Button } from "react-bootstrap";
import { useCreateArticleMutation } from "redux/services/articleApi";

import styles from "./addPost.module.scss";
import { IArticle } from "types.ts";

type IAddPostProps = {
  handleToggleAddPost: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  toggleAddPost: boolean;
  setToggleAddPost: (bool: boolean) => void;
};

const AddPostModal = ({
  handleToggleAddPost,
  toggleAddPost,
  setToggleAddPost,
}: IAddPostProps) => {
  const [createArticle, { data, error }] = useCreateArticleMutation();
  const [newPost, setNewPost] = useState<IArticle>({
    title: "",
    author: "User name",
    image: "",
    text: "",
    date: "",
  });
  const [newPostData, setnewPostData] = useState<IArticle>(newPost);

  const handleAddPost = () => {
    createArticle(newPostData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setnewPostData({ ...newPostData, [name]: value });
  };
  const handleSaveNewPost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const created_at = changeDateToString(new Date());
    setnewPostData({ ...newPost, ...newPostData, date: created_at });
    handleAddPost();
    setToggleAddPost(!toggleAddPost);
  };
  return (
    <Modal size="lg" show={toggleAddPost} backdrop="static">
      <Modal.Header closeButton onHide={() => setToggleAddPost(!toggleAddPost)}>
        <Modal.Title>
          <p className={styles.modalTitle}>Add Post</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={`${styles.modalInput} mb-20`}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="pa-15"
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.modalInput} mb-20`}>
          <input
            type="textarea"
            name="text"
            placeholder="Article text"
            className="pa-15"
            style={{ height: "300px", width: "100%" }}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.modalInput} mb-20`}>
          <input
            type="text"
            name="image"
            placeholder="Place an image url"
            className="pa-15"
            onChange={handleInputChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => handleToggleAddPost(e)}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleSaveNewPost(e)}>
          Publish Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPostModal;
