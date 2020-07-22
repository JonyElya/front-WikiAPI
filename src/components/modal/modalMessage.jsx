import {message} from "antd";

export const messageSubmit = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
        message.success({ content: "You successfully submitted!", key, duration: 2 });
    }, 1000);
};
export const messageUpdate = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
        message.success({ content: "The item was updated successfully!", key, duration: 2 });
    }, 1000);
};