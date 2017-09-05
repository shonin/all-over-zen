import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-post-content">
                <div className="post-title-container">
                    <h1 className="post-title">About</h1>
                </div>
                <div className="post-container">
                    <p>
                        You start a relationship, you quit your job. You move across the country, you settle down.
                        You pour cereal in a bowl, you accidentally burned the butter. Your allergies are kicking up,
                        your cat gets hit by a car. You fall in love and you feel like you’ve won the lottery; but
                        there’s this itch.
                        Bukowski says <Link to="/cut-while-shaving">“it’s not quite right / it’s hardly right at all”</Link>,
                        and I’ve always been inclined to agree.
                    </p>
                    <p>
                        The images of All Over Zen are an exploration of the thin line between the perfection and the
                        imperfection. The line is all over you, all over everything we do. As I quit my job and move
                        across the country I will be exploring this line, and I hope to share some of my journey here
                        with you.
                    </p>
                    <p>
                        This website is powered by the open source community with love.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
