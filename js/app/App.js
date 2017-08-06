import Menu from "./components/Menu";
import Content from "./components/Content";

import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const Foo = ({ match }) => (
    <Content match={match} />
);

const Words = ({match}) => (
    <h5 style={{ textAlign: "center"}}>i dont have many at the moment</h5>
);

const App = () => (
    <div>
        <Router>
            <div>
                <Menu />
                <Route exact path="/" component={Foo}/>
                <Route path="/words" component={Words}/>
                <Route path="/:num([0-9]+)" component={Foo}/>
            </div>
        </Router>
    </div>
);

export default App;
