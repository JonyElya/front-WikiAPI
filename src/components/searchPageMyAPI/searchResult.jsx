import React,  {useEffect, useState}  from "react";
import { Table, Space , Spin} from 'antd';

const SearchResult = (props) =>{
    const [ spinner, setSpinner ] = useState(true);
    useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
    }, []);
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "Page ID",
            dataIndex: "pageId",
            key: "pageId"
        },
        {
            title: "Snippet",
            dataIndex: "snippet",
            render: (text) => <div dangerouslySetInnerHTML={{__html: text}}></div>,
            key: "snippet"
        },
        {
            title: "Timestamp",
            dataIndex: "timestamp",
            key: "timestamp"
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            )
        }

    ]
    return (
        (spinner ? <Spin spinning={spinner}></Spin> : <Table  rowKey="id" columns={columns}  dataSource={props.items} bordered /> )
    )
}
export default SearchResult