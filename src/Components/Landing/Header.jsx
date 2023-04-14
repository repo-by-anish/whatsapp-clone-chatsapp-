import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header className="hiro-header home-header" id="top">
                <nav>
                    <div className="container">
                        <div className="hiro-nav">
                            <Link to="/" className="nav-brand">
                                <img src="assets/images/chatsApp-logo.svg" alt="Hiro" className="logo" />
                            </Link>
                            <Link to="/register">Get Started</Link>

                        </div>
                    </div>
                </nav>
                <div className="container wow fadeInUp">
                    <div id="hiroHeaderCarousel" className="hiro-header-carousel carousel slide" data-ride="carousel" data-interval="3500">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="carousel-item-title" data-animation="animated fadeInRight" data-number="01"><span>Remarkable Digital Products</span></h1>
                                        <p className="carousel-item-description" data-animation="animated fadeInRight">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for.</p>
                                        <Link to="#!" className="carousel-item-link link-hover-fx" data-animation="animated fadeInRight">READ MORE</Link>
                                        <ul className="carousel-item-social-links nav" data-animation="animated fadeInRight">
                                            <li>
                                                <Link to="#!" className="link-hover-fx">FACEBOOK</Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="link-hover-fx">TWITTER</Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="link-hover-fx">BEHANCE</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="assets/images/avatar.png" alt="Remarkable Digital Products" className="img-fluid w-100 rounded" width="372px" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="carousel-item-title" data-animation="animated fadeInRight" data-number="02"><span>Remarkable Digital Products</span></h1>
                                        <p className="carousel-item-description" data-animation="animated fadeInRight">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for.</p>
                                        <Link to="#!" className="carousel-item-link link-hover-fx" data-animation="animated fadeInRight">READ MORE</Link>
                                        <ul className="carousel-item-social-links nav" data-animation="animated fadeInRight">
                                            <li>
                                                <Link to="#!" className="link-hover-fx">FACEBOOK</Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="link-hover-fx">TWITTER</Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="link-hover-fx">BEHANCE</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="assets/images/avatar.png" alt="<span>Remarkable Digital Products</span>" className="img-fluid w-100 rounded" width="372px" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="carousel-item-title" data-animation="animated fadeInRight" data-number="03"><span>Remarkable Digital Products</span></h1>
                                        <p className="carousel-item-description" data-animation="animated fadeInRight">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for.</p>
                                        <Link to="#!" className="carousel-item-link link-hover-fx" data-animation="animated fadeInRight">READ MORE</Link>
                                        <ul className="carousel-item-social-links nav" data-animation="animated fadeInRight">
                                            <li>
                                                <Link to="#!" className="link-hover-fx">FACEBOOK</Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="link-hover-fx">TWITTER</Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="link-hover-fx">BEHANCE</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="assets/images/avatar.png" alt="Remarkable Digital Products" className="img-fluid w-100 rounded" width="372px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#hiroHeaderCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#hiroHeaderCarousel" data-slide-to="1"></li>
                            <li data-target="#hiroHeaderCarousel" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </header>
        </div>
    )
}
