import React, { useState } from "react";
import { articlesAPI } from "../../api/requests";
import { Input, Button, Spin, Table } from "antd";
import "../../styles/header.scss";
import "antd/dist/antd.css";

const SearchWiki = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [spinner, setSpinner] = useState(true);
  const changeText = (e) => {
    let text = e.target.value;
    setInput(text);
  };
  const find = () => {
    articlesAPI
      .getArticle(input)
      .then((data) => {
        setItems(data.query.search);
        setTimeout(() => setSpinner(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
      width: 200,
    },
    {
      title: "Page ID",
      dataIndex: "pageId",
      key: "pageId",
      width: 150,
    },
    {
      title: "Snippet",
      dataIndex: "snippet",
      render: (text) => <div dangerouslySetInnerHTML={{ __html: text }}></div>,
      key: "snippet",
      ellipsis: true,
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
      width: 250,
      render: (date) => {
        return <div>{new Date(date).toLocaleString()}</div>;
      },
    },
  ];
  return (
    <div className="search_block">
      <div className="search_form">
        <Input placeholder="Enter..." onChange={changeText} value={input} />
        <Button onClick={find}>Search</Button>
      </div>
      <div>
        <Spin spinning={spinner}>
          <Table rowKey="id" columns={columns} dataSource={items} bordered />
        </Spin>
      </div>
    </div>
  );
};
export default SearchWiki;
