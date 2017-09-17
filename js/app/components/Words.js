import React from "react";

import request from "request";
import marked from "marked";
import { Link } from "react-router-dom";

import settings from "../settings";
import DateParser from "../../dateParser";
import getPostCustomJS from "../postSpecificJs/getCustom";

class Words extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: Number(props.match.params.num),
            title: "Loading..."
        };

        this.getPost(this.state.postId);
    }

    componentWillReceiveProps(nextProps) {
        this.getPost(Number(nextProps.match.params.num));
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

                const postSpecificFunction = getPostCustomJS(response.post.id);
                if (postSpecificFunction) {
                    postSpecificFunction();
                }
            });
    };

    postPromise(postId) {
        return new Promise(resolve => {
            request(`${settings.baseServiceDomain}${settings.wordsUrlPath}/${postId ? postId : ""}`, function (error, response, body) {
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
                <div className="post-navigation">
                    { this.state.previous &&
                    <Link className="no-link-style" to={`/words/${this.state.previous}`}>Prev</Link>
                    }
                    { this.state.next &&
                    <Link className="no-link-style" to={`/words/${this.state.next}`}>Next</Link>
                    }
                </div>
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
