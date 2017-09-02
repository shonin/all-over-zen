import Menu from "./components/Menu";
import Content from "./components/Content";

import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const ImagesWrapper = ({ match }) => (
    <Content match={match} />
);

const wat = () => {
    console.log("srsly wat");
    return "foo";
};

const WordsWrapper = ({match}) => (
    <h5 style={{ textAlign: "center"}}>
        i dont have many at the moment
        {match.params.num}
        {wat()}
    </h5>
);

const App = () => (
    <div>
        <Router>
            <div>
                <Menu />
                <Route exact path="/" component={ImagesWrapper}/>
                <Route path="/words/:num(\d+)?/" component={WordsWrapper}/>
                <Route path="/:num([0-9]+)" component={ImagesWrapper}/>
            </div>
        </Router>
    </div>
);

export default App;
