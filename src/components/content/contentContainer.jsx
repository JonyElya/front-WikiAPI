import React from "react";
import { connect } from "react-redux";
import {setItems, onSendInput, changeInput} from "../../redux/itemsReducers";
import Content from "./content";

class ContentContainer extends React.Component {
    render() {
        return (
            <>
                <Content
                    state={this.props}
                    articles={this.props.articles}
                    query={this.props.query}
                />
            </>
        );
    }
 }
let mapStateToProps = state => {
    return {
        articles: state.content.articles,
        query: state.content.query
    };
};
export default connect(mapStateToProps, {
    setItems, onSendInput, changeInput
})(ContentContainer);