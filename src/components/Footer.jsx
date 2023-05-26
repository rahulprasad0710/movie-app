import React from "react";

const Footer = () => {
    return (
        <footer className='bg-dark text-light py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h3>THE MOVIE APP</h3>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6>Movie</h6>
                        <h6>TV</h6>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div>
                            <img
                                className='img-fluid footer-logo'
                                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                                alt=' logo'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
