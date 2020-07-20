import React, { useEffect, useState } from "react";
import { ItemsAPI } from "../../api/requests";
import { Input, Button, Spin, Table, Space } from "antd";
import "../../styles/header.scss";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    retrieveArticles();
  }, []);
  const changeText = (e) => {
    let text = e.target.value;
    setInput(text);
  };
  const retrieveArticles = () => {
    ItemsAPI.getAll()
      .then((data) => {
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveArticles();
  };
  const find = () => {
    ItemsAPI.getArticle(input)
      .then((data) => {
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);
  const deleteItem = (key) => {
    ItemsAPI.remove(key)
      .then((data) => {
        console.log(data);
        refreshList();
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
        let dateFormatted = new Date(date).toLocaleString();
        return <div>{dateFormatted}</div>;
      },
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (text, record) => (
        <Space size="middle">
          <Link to={`update/${record.id}`}>Edit</Link>
          <Link
            onClick={() => {
              deleteItem(record.id);
            }}
          >
            Delete
          </Link>
        </Space>
      ),
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
export default SearchPage;
