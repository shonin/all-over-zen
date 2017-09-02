import React from "react";
import request from "request";
import { Link } from "react-router-dom";

import settings from "../settings";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            title: undefined,
            img_url: settings.loadingImage,
            sub_text: undefined,
            hover_text: undefined,
            imageClass: "spin",
            imageNumber: Number(props.match.params.num),
            next: undefined,
            previous: undefined
        };

        this.state = this.initialState;
        this.getImage(this.state.imageNumber);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            img_url: settings.loadingImage,
            imageClass: "spin",
            imageNumber: Number(nextProps.match.params.num)
        });
        this.getImage(Number(nextProps.match.params.num));
    }

    getImage(imageNumber) {
        this.imagePromise(imageNumber)
            .then( response => {
                this.setState({
                    img_url: response.post.image_url,
                    title: response.post.title,
                    sub_text: response.post.sub_text,
                    hover_text: response.post.hover_text,
                    next: response.next,
                    previous: response.previous
                });
            });
    };

    imagePromise(imageNumber) {
        return new Promise(resolve => {
            request(`http://alloverzen.herokuapp.com/json/${imageNumber ? imageNumber : ""}`, function (error, response, body) {
                resolve( JSON.parse(body) );
            });
        });
    }

    handleImageLoaded() {
        if (this.state.img_url === settings.loadingImage) {
            this.setState({
                imageClass: "spin"
            });
        } else {
            this.setState({
                imageClass: undefined
            });
        }
    }

    render() {
        return(
            <div className="main-image-content">
                <div className="post-title-container">
                    <h3 className="post-title">{this.state.title}</h3>
                </div>
                <div className="post-image-container">
                    <img
                        className={`post-image ${this.state.imageClass}`}
                        src={this.state.img_url}
                        onLoad={this.handleImageLoaded.bind(this)}
                        title={this.state.hover_text}
                    />
                    <p>{this.state.sub_text}</p>
                </div>
                <div className="content-navigation">
                    { this.state.imageNumber !== 1 &&
                    <Link to={`/${this.state.previous}`}>Prev</Link>
                    }
                    { this.state.next &&
                    <Link to={`/${this.state.next}`}>Next</Link>
                    }
                </div>
            </div>
        );
    }
}

export default Content;
