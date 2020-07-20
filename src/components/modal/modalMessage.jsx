import {Modal} from "antd";

export const messageSubmit = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: "You submitted successfully!",
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
};
export const messageUpdate = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: "The item was updated successfully!",
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
};