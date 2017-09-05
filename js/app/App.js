import Menu from "./components/Menu";
import Content from "./components/Content";
import Words from "./components/Words";
import About from "./components/About";
import Poem from "./components/Poem";

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

const AboutWrapper = () => (
    <About />
);

const PoemWrapper = () => (
    <Poem/>
);

const App = () => (
    <div>
        <Router>
            <div>
                <Menu />
                <Route exact path="/" component={ImagesWrapper}/>
                <Route path="/words/:num(\d+)?/" component={WordsWrapper}/>
                <Route path="/:num([0-9]+)" component={ImagesWrapper}/>
                <Route path="/about" component={AboutWrapper} />
                <Route path="/cut-while-shaving" component={PoemWrapper}/>
            </div>
        </Router>
    </div>
);

export default App;
