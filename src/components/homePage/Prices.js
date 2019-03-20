import React from 'react'

const Prices = () => {
    return (
        <div className="container">
            <section className="price">
                <div className="page-section page-section--small text-center">
                    <h2 className="page-section__title">OUR PRICING</h2>
                    <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="price__panel-wrapper">
                        <div className="row gutters-50">
                            <div className="col-md-4">
                                <div className="panel text-center">
                                    <div className="panel-heading">
                                        <h4 className="price__title">SILVER</h4>
                                        <h1 className="price__ammount">&#36;<span className="price__ammount--number">159</span> &#47;Year</h1>
                                    </div>
                                    <div className="panel-body">
                                        <p>Up To 5 user</p>
                                        <p>Max. 100 iteam/month</p>
                                        <p>Unlimited queries</p>
                                        <p>Full statistics</p>
                                    </div>
                                    <div>
                                        <a className="panel__button" href="#home">GET THIS PLAN</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="panel text-center">
                                    <div className="panel-heading">
                                        <h4 className="price__title">GOLD</h4>
                                        <h1 className="price__ammount">&#36; <span className="price__ammount--number">249</span> &#47;Year</h1>
                                    </div>
                                    <div className="panel-body">
                                        <p>Up To 10 user</p>
                                        <p>Max. 200 iteam/month</p>
                                        <p>Unlimited queries</p>
                                        <p>Full statistics</p>
                                    </div>
                                    <div>
                                        <a className="panel__button" href="#home">GET THIS PLAN</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="panel text-center">
                                    <div className="panel-heading">
                                        <h4 className="price__title">PLATINUM</h4>
                                        <h1 className="price__ammount">&#36; <span className="price__ammount--number">459</span> &#47;Year</h1>
                                    </div>
                                    <div className="panel-body">
                                        <p>Up To 5 user</p>
                                        <p>Unlimited iteam</p>
                                        <p>Unlimited queries</p>
                                        <p>Full statistics</p>
                                    </div>
                                    <div>
                                        <a className="panel__button" href="#home">GET THIS PLAN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Prices