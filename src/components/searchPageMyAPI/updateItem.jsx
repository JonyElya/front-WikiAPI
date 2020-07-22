import React, { useState, useEffect } from "react";
import { ItemsAPI } from "../../api/requests";
import { Button, Input } from "antd";
import "../../styles/App.scss";
import {messageUpdate} from "../modal/modalMessage";

const UpdateItem = (props) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const { TextArea } = Input;

  const getArticle = (id) => {
    ItemsAPI.get(id)
      .then((response) => {
        setCurrentArticle(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getArticle(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };
  const updateArticle = () => {
    ItemsAPI.update(currentArticle.id, currentArticle)
      .then((data) => {
        console.log(data);
        messageUpdate()
        props.history.push("/myApi");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentArticle ? (
        <div className="edit-form">
          <h4>Update item</h4>
          <form>
            <div className="form-group">
              <label  htmlFor="title">Title</label>
              <Input
                type="text"
                className="form-control"
                id="title"
                name="title"
                required="required"
                value={currentArticle.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="snippet">Snippet</label>
              <TextArea
                type="text"
                className="form-control"
                id="snippet"
                name="snippet"
                required
                value={currentArticle.snippet}
                onChange={handleInputChange}
                autoSize={{ minRows: 2, maxRows: 32 }}
              />
            </div>
            <Button type="submit" onClick={updateArticle}>
              Update
            </Button>
          </form>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default UpdateItem;
