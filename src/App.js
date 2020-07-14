import React from 'react';
import './styles/App.scss';
import Header from "./components/header/header";
import ContentContainer from "./components/content/contentContainer";

const App = () =>{
  return (
    <div className="App">
        <React.Fragment>
            <Header/>
            <ContentContainer />
        </React.Fragment>
    </div>
  );
}
export default App;
