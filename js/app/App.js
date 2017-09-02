import Menu from "./components/Menu";
import Content from "./components/Content";
import Words from "./components/Words";

import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const ImagesWrapper = ({ match }) => (
    <Content match={match} />
);

const WordsWrapper = ({match}) => (
    <Words match={match} />
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
