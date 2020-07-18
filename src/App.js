import React from 'react';
import './styles/App.scss';
import Header from "./components/header/header";
import ContentContainer from "./components/content/contentContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchPage from "./components/searchPageMyAPI/searchPage";

const App = () =>{
  return (
    <div className="App">
        <React.StrictMode>
            <Header/>
            <Switch>
                <Route path="/wikiApi" component={ContentContainer} />
                <Route path="/myApi" component={SearchPage} />

                <Redirect from="/" exact to="/wikiApi" />
            </Switch>


        </React.StrictMode>
    </div>
  );
}
export default App;
