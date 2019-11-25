import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            comments: []
        };
    }

    getComments() {
        fetch('/contact')
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        comments: data
                    })
                })
    }

    componentDidMount() {
        this.getComments()
    }

    // render() {
    //     const { comments } = this.state
    //     return(
    //     <div class="container-fluid comments-container"> 
    //                 <div class="row">
    //                     {comments.map((contactInfo, index) => (
    //                         <div key={index} className="col-md-12 comment-column">
    //                             <p className="text-left">
    //                                 <span className="comment-name">{contactInfo.contact_fname} </span> 
    //                                 <span className="comment-name">{contactInfo.contact_lname}</span>
    //                                 <span className="d-block item-description">{contactInfo.contact_comment}</span>
    //                             </p>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //     )
    // }
    render() {
        const { comments } = this.state
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="slider-container">
                <Slider {...settings} >
                    {comments.map((contactInfo, index) => (
                        <div key={index} className="col-md-12 comment-column">
                            <p className="text-left">
                                <span className="comment-name">{contactInfo.contact_fname} </span>
                                <span className="comment-name">{contactInfo.contact_lname}</span>
                                <span className="d-block comment-description">{contactInfo.contact_comment}</span>
                            </p>
                        </div>
                    ))
                    }
                </Slider>
            </div>
        );
    }
}


export default Comments;