import React from "react";
import { Link } from "react-router-dom";

import settings from "../settings";

class Menu extends React.Component {
    render() {
        return(
            <nav>
                <div className="nav-bar flex-separate">
                    <h1><Link to="/">{ settings.title }</Link></h1>
                    { settings.wordsEnabled &&
                        <ul className="navigation">
                            <li><Link to="/">images</Link></li>
                            <li><Link to="/words/123/3ger">words</Link></li>
                        </ul>
                    }
                </div>
            </nav>
        );
    }
}

export default Menu;
