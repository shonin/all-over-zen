import React from "react";

class Poem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-post-content">
                <div className="post-title-container">
                    <h1 className="post-title">Cut While Shaving</h1>
                    <h2 className="post-sub-title">by Charles Bukowski</h2>
                </div>
                <div className="post-container">
                    <p>
                        It's never quite right, he said, the way people look, <br/>
                        the way the music sounds, the way the words are<br/>
                        written.<br/>
                        It's never quite right, he said, all the things we are<br/>
                        taught, all the loves we chase, all the deaths we<br/>
                        die, all the lives we live,<br/>
                        they are never quite right,<br/>
                        they are hardly close to right,<br/>
                        these lives we live<br/>
                        one after the other,<br/>
                        piled there as history,<br/>
                        the waste of the species,<br/>
                        the crushing of the light and the way,<br/>
                        it's not quite right,<br/>
                        it's hardly right at all<br/>
                        he said.
                    </p>
                    <p>
                        don't I know it? I<br/>
                        answered.
                    </p>
                    <p>
                        I walked away from the mirror.<br/>
                        it was morning, it was afternoon, it was<br/>
                        night
                    </p>
                    <p>
                        nothing changed<br/>
                        it was locked in place.<br/>
                        something flashed, something broke, something<br/>
                        remained.
                    </p>
                    <p>
                        I walked down the stairway and<br/>
                        into it.
                    </p>
                </div>
            </div>
        );
    }
}

export default Poem;
