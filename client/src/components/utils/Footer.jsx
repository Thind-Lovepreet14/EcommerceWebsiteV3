import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 d-flex justify-content-center footerIcons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="fb-ic">
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x iconColor"> </i>
                            </a>
                
                            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer" className="tw-ic">
                            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x iconColor"> </i>
                            </a>
                
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="li-ic">
                            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x iconColor"> </i>
                            </a>
                
                            <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer" className="ins-ic">
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x iconColor"> </i>
                            </a>
                            
                            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="pin-ic">
                            <i className="fab fa-pinterest fa-lg white-text fa-2x iconColor"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 copyrightText">
                <p>© 2019 Copyright</p>
                <p>Last Updated October 2019</p>
            </div>
        </footer>
    )
}

export default Footer;