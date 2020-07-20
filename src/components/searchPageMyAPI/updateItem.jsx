import React, { useState, useEffect } from "react";
import {ItemsAPI} from "../../api/requests";
import {Button, Modal, Input} from "antd";
import '../../styles/App.scss'

const UpdateItem = props => {
  const initialItemsState = {
    id: null,
    title: "",
    snippet: "",
    pageId: "",
    timestamp: ""
  };
  const [currentArticle, setCurrentArticle] = useState(initialItemsState);
  const [message, setMessage] = useState("");
  const { TextArea } = Input;

  const getArticle = id => {
    ItemsAPI.get(id)
      .then(response => {
        setCurrentArticle(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getArticle(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };
  const messageSuccess = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: 'The item was updated successfully!',
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const updateArticle = () => {
    ItemsAPI.update(currentArticle.id, currentArticle)
      .then(data => {
        console.log(data);
        messageSuccess()
      })
      .catch(e => {
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
              <label htmlFor="title">Title</label>
              <Input
                type="text"
                className="form-control"
                id="title"
                name="title"
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
                value={currentArticle.snippet}
                onChange={handleInputChange}
                autoSize={{ minRows: 2, maxRows: 32 }}
              />
            </div>
            <Button
                 type="submit"
                 onClick={updateArticle}

            >
              Update
           </Button>
          </form>
         </div>
    ) : (
        <div>
              <br />
              <p>Please click on a Tutorial...</p>
        </div>
     )
     }
    </div>)
};

export default UpdateItem;