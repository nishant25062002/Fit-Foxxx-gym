import React from 'react'
import Header from '../Header/Header'
import './Blog.css'

function Blog() {
    return (
        <>
            <Header />
            <div class="container mt-100 mt-60">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h4 class="title mb-4">Latest FitBoxx Blog &amp; News</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Lorem Ipsum </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="blog-post rounded border">
                            <div class="blog-img d-block overflow-hidden position-relative">
                                <img src="./Images/fb6.png" class="img-fluid rounded-top" alt="" />
                                <div class="overlay rounded-top bg-dark"></div>
                                <div class="post-meta">
                                    <a href="javascript:void(0)" class="text-light d-block text-right like"><i class="mdi mdi-heart"></i> 33</a>
                                    <a href="javascript:void(0)" class="text-light read-more">Read More <i class="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="content p-3">
                                <small class="text-muted p float-right">19th Oct, 19</small>
                                <small><a href="javascript:void(0)" class="text-primary">Marketing</a></small>
                                <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">Quick guide on business with friends.</a></h4>
                                <p class="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                                <div class="pt-3 mt-3 border-top d-flex">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                                    <div class="author mt-2">
                                        <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark name">Joya Aafri</a></h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="blog-post rounded border">
                            <div class="blog-img d-block overflow-hidden position-relative">
                                <img src="./Images/fb2.jpeg" class="img-fluid rounded-top" alt="" />
                                <div class="overlay rounded-top bg-dark"></div>
                                <div class="post-meta">
                                    <a href="javascript:void(0)" class="text-light d-block text-right like"><i class="mdi mdi-heart"></i> 33</a>
                                    <a href="javascript:void(0)" class="text-light read-more">Read More <i class="mdi mdi-chevron-right"></i></a>
                                </div>

                            </div>
                            <div class="content p-3">
                                <small class="text-muted p float-right">19th Oct, 19</small>
                                <small><a href="javascript:void(0)" class="text-primary">Event</a></small>
                                <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">Become more money-minded</a></h4>
                                <p class="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                                <div class="pt-3 mt-3 border-top d-flex">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                                    <div class="author mt-2">
                                        <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark name">Joya Aafri</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="blog-post rounded border">
                            <div class="blog-img d-block overflow-hidden position-relative">
                                <img src="./Images/fb3.jpeg" class="img-fluid rounded-top" alt="" />
                                <div class="overlay rounded-top bg-dark"></div>
                                <div class="post-meta">
                                    <a href="javascript:void(0)" class="text-light d-block text-right like"><i class="mdi mdi-heart"></i> 33</a>
                                    <a href="javascript:void(0)" class="text-light read-more">Read More <i class="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="content p-3">
                                <small class="text-muted p float-right">19th Oct, 19</small>
                                <small><a href="javascript:void(0)" class="text-primary">Software</a></small>
                                <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">Quick guide on business with friends.</a></h4>
                                <p class="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                                <div class="pt-3 mt-3 border-top d-flex">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                                    <div class="author mt-2">
                                        <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark name">Martin Sobhe</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog