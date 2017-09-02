import React from "react";

class Words extends React.Component {
    constructor() {
        this.state = {
            postId: Number(props.match.params.num)
        }
    }
}
