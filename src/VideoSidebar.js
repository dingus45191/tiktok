import React, {useState} from 'react';
import "./VideoSidebar.css";
import {Favorite, FavoriteBorder, Message, Share} from "@material-ui/icons";

function VideoSidebar() {
    const[liked, setLike]= useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <Favorite
                        fontSize={'large'}
                        onClick={event => setLike(false)}
                    />
                ) :(
                    <FavoriteBorder
                        fontSize={'large'}
                        onClick={event => setLike(true)}
                    />
                )}

                <p>100</p>
            </div>
            <div className="videoSidebar__button">
                <Message
                    fontSize={'large'}
                />
                <p>250</p>
            </div>
            <div className="videoSidebar__button">
                <Share
                    fontSize={'large'}
                />
                <p>12</p>
            </div>
        </div>
    );
}
export default VideoSidebar;
