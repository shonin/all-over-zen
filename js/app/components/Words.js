import React from "react";
import request from "request";
import marked from "marked";

import DateParser from "../../dateParser";

class Words extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: Number(props.match.params.num),
            title: "Loading..."
        };

        this.getPost(this.state.postId);
    }

    getPost(postId) {
        this.postPromise(postId)
            .then( response => {
                this.setState({
                    title: response.post.title,
                    sub_title: response.post.sub_title,
                    date: response.post.date,
                    body: marked(response.post.body),
                    next: response.next,
                    previous: response.previous
                });
                console.log(this.state);
            });
    };

    postPromise(postId) {
        return new Promise(resolve => {
            request(`http://alloverzen.herokuapp.com/json/words/${postId ? postId : ""}`, function (error, response, body) {
                resolve( JSON.parse(body) );
            });
        });
    }

    getDate(date) {
        if (date) {
            const dateParser = new DateParser(date);
            return dateParser.getDateString();
        }
        return "";
    }

    render() {
        return (
            <div className="main-post-content">
                <div className="post-title-container">
                    <h1 className="post-title">{this.state.title}</h1>
                    <h2 className="post-sub-title">{this.state.sub_title}</h2>
                    <p className="post-date">{this.getDate(this.state.date)}</p>
                </div>
                <div
                    className="post-container"
                    dangerouslySetInnerHTML={{__html: this.state.body}}
                />
            </div>
        );
    }
}

export default Words;
