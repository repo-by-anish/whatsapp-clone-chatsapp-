import React from 'react'

export default function Contact() {
  return (
    <div>
        <section className="contact-section hiro-section">
        <div className="container wow fadeInUp">
            <h6 className="font-weight-semibold mb-4 mb-md-0">At Explose, it’s always storytelling time. Swing by & share yours.</h6>
            <h2 className="section-title">Let’s talk</h2>
            <div className="contact-address">
                <div className="row">
                    <div className="col-md-5">
                        <p className="font-weight-medium">9010 Varna, Bulgaria, <br/> Breeze Borough, <br/> Saint Nicholas, 26</p>
                    </div>
                    <div className="col-md-5 mb-4 mb-md-0">
                        <p className="font-weight-medium">UK: +44 567 637 0000 <br/> hey@costomarl.com</p>
                        <ul className="nav contact-social-links">
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    <img src="assets/images/twitter@1x.svg" alt="twitter"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    <img src="assets/images/linkedin@1x.svg" alt="linkedin"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    <img src="assets/images/facebook@1x.svg" alt="facebook"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    <img src="assets/images/behance@1x.svg" alt="behance"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    <img src="assets/images/medium@1x.svg" alt="medium"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                        <a href="#top" className="go-top-btn">
                            <img src="assets/images/arrow_up@1x.svg" alt="arrow up"/>
                            <span className="sr-only">Go to top</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
