import React from 'react'

const Blog = () => {
    return (
        <div className="container">
            <section className="blog">
                <div className="page-section">
                    <div className="text-center">
                        <h2 className="page-section__title">OUR BLOG</h2>
                        <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="row gutters-50">
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="assets/images/blog-pic1.png" target="_blank">
                                    <img className="img-responsive" src="assets/images/blog-pic1.png" alt="" />
                                    <div className="caption">
                                        <h3 className="blog__title">Global Traffic Search</h3>
                                        <p className="blog__paragraph">By Jhon Doe <span className="blog__paragraph--slash">&#47;</span> 12 July, 2017 <span className="blog__paragraph--slash">&#47;</span> 2 Comments</p>
                                        <h4 className="blog__read-more">READ MORE</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="assets/images/blog-pic2.png" target="_blank">
                                    <img className="img-responsive" src="assets/images/blog-pic2.png" alt="" />
                                    <div className="caption">
                                        <h3 className="blog__title">Global Traffic Search</h3>
                                        <p className="blog__paragraph">By Jhon Doe &#47; 12 July, 2017 &#47; 2 Comments</p>
                                        <h4 className="blog__read-more">READ MORE</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="assets/images/blog-pic3.png" target="_blank">
                                    <img className="img-responsive" src="assets/images/blog-pic3.png" alt="" />
                                    <div className="caption">
                                        <h3 className="blog__title">Global Traffic Search</h3>
                                        <p className="blog__paragraph">By Jhon Doe &#47; 12 July, 2017 &#47; 2 Comments</p>
                                        <h4 className="blog__read-more">READ MORE</h4>
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

export default Blog