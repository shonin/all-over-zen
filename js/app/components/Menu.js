import React from "react";

import settings from "../settings";

class Menu extends React.Component {
    render() {
        return(
            <nav>
                <div className="flex-separate">
                    <h1>{ settings.title }</h1>
                    <h3>{ settings.subtitle }</h3>
                </div>
            </nav>
        );
    }
}

export default Menu;
