import React from 'react';

//Turn to functional component
class VideoContainer extends React.Component {
    render() {
        return (
            <section className="container-fluid vidContainer">
                <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" >
                    <source src="../video/container_three_video.mp4" type="video/mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h2 className="display-3 videoText">Achieve <span className="yellow-text">Great</span>ness</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default VideoContainer;