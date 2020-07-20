import React, {useCallback, useState} from "react";
import { ItemsAPI } from "../../api/requests";
import { Form, Input, InputNumber, Button } from "antd";
import {messageSubmit} from "../modal/modalMessage";

const AddItem = () => {
  const [item, setItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const saveItems = useCallback((values) => {
    ItemsAPI.create(values)
        .then((data) => {
          setItems({
            id: data.id,
            title: data.title,
            snippet: data.snippet,
            pageId: data.pageId,
            timestamp: data.timestamp,
          });
          setSubmitted(true);
          messageSubmit()
        })
        .catch((e) => {
          console.log(e);
        });
      }, []
  )
  const newTutorial = () => {
    setItems(item);
    setSubmitted(false);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const validateMessages = {
    required: "is required!",
    types: {
      number: "Page ID is not a validate number!",
    },
    number: {
      range: "must be more than 0",
    },
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <Button type="primary" onClick={newTutorial}>
            Add new
          </Button>
        </div>
      ) : (
        <Form
          {...layout}
          onFinish={saveItems}
          validateMessages={validateMessages}
        >
          <Form.Item name="title" rules={[{ required: true }]} label="Title">
            <Input />
          </Form.Item>
          <Form.Item
            name="snippet"
            label="Snippet"
            rules={[{ required: true }]}
          >
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 32 }} />
          </Form.Item>
          <Form.Item
            name="pageId"
            label="Page ID"
            rules={[{ type: "number", min: 0 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 16 }}>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default AddItem;
