import React, { useEffect } from "react";
import {articlesAPI} from "../../api/requests";
import {
    InputGroup,
    InputGroupAddon,Button, Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/header.scss'

const Content = props => {
    useEffect(() => {
        if(!props.query){
            let t = props.query
            return t[""]
        }
        articlesAPI.getArticle(props.query)
            .then(data => {
                props.state.setItems(data.query.search)
            });

    }, [props.query]);
    const changeText = (e) => {
        let text = e.target.value
        props.state.changeInput(text)
    };
    const sendClick = () => {
        props.state.onSendInput();
    }
    return (
        <div className="search_block">
            <div className="search_form">
                <InputGroup>
                    <Input type="text" placeholder='Enter...' value={props.query} onChange={changeText}/>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={sendClick}>Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className="search_result">
                Result search: {props.query}
                {props.articles.map((a, i) => (
                    <div key={i}>
                        <table>
                            <thead className="search_result_title">
                            <tr>
                                <td>
                                    id(page) {a.pageid}: {a.title}
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="search_result_table" dangerouslySetInnerHTML={{__html: a.snippet}}></td>
                                <td className="search_result_table">{a.timestamp}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default Content;
