import React from 'react'

const Video = () => {
    return (
        <div>
            <div className="container">
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/WP_vM301VZA?autoplay=0" frameborder="0" allowfullscreen="" id="video" allowscriptaccess="always"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="video-section video-section--bg">
                <div className="container">
                    <div className="page-section page-section--large text-center">
                        <button className="video-section__icon" data-toggle="modal" data-target="#myModal"><img src="assets/images/video-icon.png" alt="" /></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Video