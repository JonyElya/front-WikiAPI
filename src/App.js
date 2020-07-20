import React from "react";
import Header from "./components/header/header";
import SearchWiki from "./components/WikiAPI/searchPageWiki";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchPage from "./components/searchPageMyAPI/searchPage";
import AddItem from "./components/searchPageMyAPI/addItem";
import UpdateItem from "./components/searchPageMyAPI/updateItem";
import NotFound from "./components/notFound/notFoundPage";
import "./styles/App.scss";

const App = () => {
  return (
          <div className="App">
              <Header />
              <Switch>
                  <Route path="/wikiApi" component={SearchWiki} />
                  <Route path="/update/:id" component={UpdateItem} />
                  <Route path="/myApi" component={SearchPage} />
                  <Route path="/add" component={AddItem} />
                  <Redirect from="/" exact to="/myApi" />
                  <Route component={NotFound}/>
              </Switch>
          </div>
  );
};
export default App;
