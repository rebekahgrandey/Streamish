import React, { useEffect, useState } from "react";
import { getAllVideos } from "../modules/videoManager";
import Video from './Video';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos)); //getAllVideos() returns /api/video/getwithcomments
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {videos.map((video) => (
                    <Video video={video} key={video.id} /> //this instance is coming from Video.js
                ))}
            </div>
        </div>
    );
}

export default VideoList;