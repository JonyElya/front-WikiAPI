import React from 'react';
import './styles/App.scss';
import Header from "./components/header/header";
import SearchWiki from "./components/WikiAPI/searchPageWiki";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchPage from "./components/searchPageMyAPI/searchPage";
import AddItem from "./components/searchPageMyAPI/addItem";
import UpdateItem from "./components/searchPageMyAPI/updateItem";

const App = () =>{
  return (
    <div className="App">
        <React.StrictMode>
            <Header/>
            <Switch>
                <Route path="/wikiApi" component={SearchWiki} />
                <Route path="/update/:id?" component={UpdateItem} />
                <Route path="/myApi" component={SearchPage} />
                <Route path="/add" component={AddItem} />
                <Redirect from="/" exact to="/myApi" />
            </Switch>
        </React.StrictMode>
    </div>
  );
}
export default App;
