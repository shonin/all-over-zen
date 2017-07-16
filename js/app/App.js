import Menu from "./components/Menu";
import Content from "./components/Content";

import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

class MyTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: "bar",
            num: Number(this.props.match.params.num)
        };
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState({
            num: Number(nextProps.match.params.num)
        });
    }

    render() {
        return(
            <div>
                <h1>Testing {this.state.num}</h1>
                <Link to={`/${this.state.num + 1}`}>Next</Link>
                <Link to={`/${this.state.num - 1}`}>Previous</Link>
            </div>
        );
    }
}


const Foo = ({ match }) => (
    <Content match={match} />
    // <MyTest match={match} />
);

const App = () => (
    <div>
        <Menu />
        <Router>
            <div>
                <Route exact path="/" component={Foo}/>
                <Route path="/:num" component={Foo}/>
            </div>
        </Router>
    </div>
);

export default App;
