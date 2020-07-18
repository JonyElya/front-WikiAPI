import React, {useEffect, useState} from "react";
import {ItemsAPI} from "../../api/requests";
import { Input, Button } from 'antd';
import '../../styles/header.scss'
import 'antd/dist/antd.css';
import SearchResult from "./searchResult";
const { Search } = Input;

const SearchPage = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("")
    const [currentItems, setCurrentItems] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrieveArticles();
    }, []);

    const changeText = (e) => {
        let text = e.target.value
        setInput(text)
    };
    const retrieveArticles = () => {
        ItemsAPI.getAll()
            .then(data => {
                setItems(data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const setActiveItems = (a, index) => {
        setCurrentItems(a);
        setCurrentIndex(index);
    };

    const find = () => {
        ItemsAPI.getArticle(input)
            .then(data => {
                setItems(data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div className="search_block">
            <div className="search_form">
                <Input
                    placeholder="Enter..."
                    onChange={changeText}
                    value={input}
                />
                <Button onClick={find}>Search</Button>
                {/*<InputGroup>*/}
                {/*    <Input type="text" placeholder='Enter...' value={input} onChange={changeText}/>*/}
                {/*    <InputGroupAddon addonType="append">*/}
                {/*        <Button color="secondary" onClick={find}>Search</Button>*/}
                {/*    </InputGroupAddon>*/}
                {/*</InputGroup>*/}
            </div>
            <div >
                <SearchResult items={items}/>
            </div>
            {/*<div className="search_result">*/}
            {/*    {items &&*/}
            {/*    items.map((a, i) => (*/}
            {/*        <div key={i}>*/}
            {/*           <div className="search_result_title">pageID: {a.pageId}, {a.title}</div>*/}
            {/*            <div className="">*/}
            {/*                <div className="search_result_body">*/}
            {/*                    <div className="search_result_body_item">{a.snippet}</div>*/}
            {/*                    <div className="search_result_body_item">{a.timestamp}</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

        </div>
    );
};
export default SearchPage;
