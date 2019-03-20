import React from 'react'

const Team = () => {
    return (
        <div className="container">
            <section className="team">
                <div className="page-section text-center">
                    <h2 className="page-section__title">CREATIVE TEAM</h2>
                    <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="row gutters-50">
                        <div className="col-md-6 col-lg-3">
                            <div className="thumbnail">
                                <a href="assets/images/team-pic1.png" target="_blank">
                                    <img src="../../../assets/images/team-pic1.png" alt="" />
                                    <div className="caption team__caption">
                                        <h4 className="team__name">Elodia S. Keefe</h4>
                                        <p className="team__title">Founder</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="thumbnail">
                                <a href="assets/images/team-pic2.png" target="_blank">
                                    <img src="assets/images/team-pic2.png" alt="" />
                                    <div className="caption team__caption">
                                        <h4 className="team__name">Sheryl D. Trent</h4>
                                        <p className="team__title">Co-Founder</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="thumbnail">
                                <a href="assets/images/team-pic3.png" target="_blank">
                                    <img src="assets/images/team-pic3.png" alt="" />
                                    <div className="caption team__caption">
                                        <h4 className="team__name">Dorothy J. Cook</h4>
                                        <p className="team__title">UI Specialist</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="thumbnail">
                                <a href="assets/images/team-pic4.png" target="_blank">
                                    <img src="assets/images/team-pic4.png" alt="" />
                                    <div className="caption team__caption">
                                        <h4 className="team__name">Stuart D. Mahaffey</h4>
                                        <p className="team__title">Admin</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team