import React from 'react'

export default function Middle() {
  return (
    <div>
        <section className="bg-primary hiro-section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center wow fadeInUp">
                    <h2 className="section-title mb-3">Digital Product Design</h2>
                    <p className="section-text-ct">We take products through every stage necessary for their creation – Product Discovery, Business and User Research, UX/UI Design, Prototyping, Usability Testing, and future Product Improvements.</p>
                </div>
                <div className="col-md-6 wow fadeInUp">
                    <img src="assets/images/img_3.png" className="w-100 mb-5" alt="Digital Product Design"/>
                    <p className="section-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="hiro-btn-outline">VIEW MORE</button>
                </div>
            </div>
        </div>
    </section>
    <section className="hiro-section" id="services">
        <div className="container">
            <div className="service-section">
                <h2 className="section-title career-section-title">Our Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                        <h6 className="service-category-title">Strategy</h6>
                        <ul className="service-list list-group list-group-flush">
                            <li className="list-group-item">UI & UX design</li>
                            <li className="list-group-item">Graphic Design & identity</li>
                            <li className="list-group-item">Video Production</li>
                            <li className="list-group-item">Market Analysis</li>
                            <li className="list-group-item">Deep Campaign Strategy</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                        <h6 className="service-category-title">Design</h6>
                        <ul className="service-list list-group list-group-flush">
                            <li className="list-group-item">UI & UX design</li>
                            <li className="list-group-item">Graphic Design & identity</li>
                            <li className="list-group-item">Video Production</li>
                            <li className="list-group-item">Market Analysis</li>
                            <li className="list-group-item">Deep Campaign Strategy</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                        <h6 className="service-category-title">Development</h6>
                        <ul className="service-list list-group list-group-flush">
                            <li className="list-group-item">UI & UX design</li>
                            <li className="list-group-item">Graphic Design & identity</li>
                            <li className="list-group-item">Video Production</li>
                            <li className="list-group-item">Market Analysis</li>
                            <li className="list-group-item">Deep Campaign Strategy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
