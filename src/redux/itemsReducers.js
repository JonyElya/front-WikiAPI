const SET_ITEMS = "SET_ITEMS";
const SEND_INPUT = "SEND_INPUT"
const CHANGE_INPUT = "CHANGE_INPUT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
    articles: [],
    query: '',
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
};
const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_INPUT:
            let newText= state.query
            return { ...state,  query: newText };
        case SET_ITEMS:
            return { ...state, articles: action.articles };

        case CHANGE_INPUT:
            return { ...state, query: action.newText}

        default:
            return state;
    }

};
export const onSendInput = () => (
    { type: SEND_INPUT});
export const changeInput = (t) => (
    { type: CHANGE_INPUT, newText: t });
export const setItems = articles => ({
    type: SET_ITEMS,
    articles
});
export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = count => ({
    type: SET_TOTAL_USERS_COUNT,
    count
});
export default itemsReducer;