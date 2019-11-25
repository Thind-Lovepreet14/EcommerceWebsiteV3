import React from 'react';

const SecondContainer = () => {
    return (
        <>
            <section className="container mt-5 mb-5">
                <div className="row pt-5 pb-5">
                    <div className="col-md-6">
                        {/* Nike Video  */}
                        <div className="modal fade" id="modal1" tabIndex="-1" role="dialog"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-body mb-0 p-0">
                                        <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                            <iframe className="embed-responsive-item" width="966" height="543"
                                                src="https://www.youtube.com/embed/DWsUrMfDaG4"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a data-toggle="modal" data-target="#modal1" className="play-video-link" href="javascript:;">
                            <i className="material-icons videoIcon">play_circle_outline</i>
                            <img className="img-fluid z-depth-1 lebronpic" src="../images/lebron_equality.jpg" alt="video" />
                        </a>
                        {/* Image Thumbnails Below Video  */}
                        <div className="d-flex">
                            <a href="/products" className="thumb img"><img height="200" width="200" className="img-fluid img-thumbnail" alt="woman using dumbbells"
                                src="../images/woman_workout.jpg" /> </a>
                            <a href="/products" className="thumb img"><img height="200" width="200" className="img-fluid img-thumbnail" alt="runner"
                                src="../images/pants_thumbnail.jpg" /></a>
                            <a href="/products" className="thumb img"><img height="200" width="200" className="img-fluid img-thumbnail" alt="yoga"
                                src="../images/woman-apparal-thumbnail.jpg" /></a>
                        </div>
                    </div>
                    {/* Text Besides Video and Thumbnails    */}
                    <div className="col-md-6 pl-md-5 d-flex align-items-center">
                        <div className="text pt-4 pt-md-0">
                            <div className="heading-section mb-4">
                                <span className="subheading">Welcome</span>
                                <h2 className="mb-1 welcome">Welcome to <span className="run4it">Run4It</span> Athletic Apparel</h2>
                            </div>
                            <p className="home-second-container">Our mission is what drives us to do everything possible to
                                expand human potential. We do that by creating groundbreaking sport innovations, by making
                                our products more sustainably, by building a creative and diverse global team and by making
                                a positive impact in communities where we live and work.</p>
                            <p><a href="/contacts" className="btn p-3 btn-joinUs white-text">Join us</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecondContainer;