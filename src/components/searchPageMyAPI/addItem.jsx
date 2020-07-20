import React, {useEffect, useState} from "react";
import {ItemsAPI} from "../../api/requests";
import {Form, Input, InputNumber, Button, Modal} from 'antd';


const AddItem = () => {
    const initialItemsState = {
        id: null,
        title: "",
        snippet: "",
        pageId: "",
        timestamp: ""
    };
    const [item, setItems] = useState(initialItemsState);
    const [submitted, setSubmitted] = useState(false);
    const saveItems = (values) => {
        ItemsAPI.create(values)
            .then(data => {
                setItems({
                    id: data.id,
                    title: data.title,
                    snippet: data.snippet,
                    pageId: data.pageId,
                    timestamp: data.timestamp
                });
                setSubmitted(true);
                messageSuccess()
            })
            .catch(e => {
                console.log(e);
            });
    };
    const newTutorial = () => {
        setItems(initialItemsState);
        setSubmitted(false);
    };
    const messageSuccess = () => {
        let secondsToGo = 5;
        const modal = Modal.success({
            title: 'You submitted successfully!',
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
    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 10
        },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be  ${min}',
        }
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
                <Form {...layout} onFinish={saveItems} validateMessages={validateMessages}>
                    <Form.Item
                        name="title"
                        rules={[{ required: true }]}
                        label="Title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="snippet" label="Snippet" rules={[{ required: true }]}>
                        <Input.TextArea  autoSize={{ minRows: 2, maxRows: 32 }}/>
                    </Form.Item>
                    <Form.Item
                        name="pageId"
                        label="Page ID"
                        rules={[{ type: 'number', min: 0}]}
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