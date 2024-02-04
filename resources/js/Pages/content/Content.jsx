import React from 'react';

const Content = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center gap-3 mt-3">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-6 col-sm-5">
                    <button className="btn btn-primary rounded-pill w-100 mb-2" style={{ backgroundColor: '#2447F9', color: '#FFFF', border: 'none', fontWeight: 'bold' }}>Forum </button>

                    <div style={{ border: '1px solid #000', padding: '10px', marginBottom: '20px' }} className='rounded'>
                        <h3 style={{ fontSize: '14px', fontWeight: 600, textAlign: 'center', marginBottom: '10px' }}>Filtrer les Discussions</h3>
                        <form>
                            <div>
                                <input type="radio" id="radio1" name="group1" />
                                <label htmlFor="radio1" style={{ marginLeft: '10px' }}>Option 1</label>
                            </div>
                            <div>
                                <input type="radio" id="radio2" name="group1" />
                                <label htmlFor="radio2" style={{ marginLeft: '10px' }}>Option 2</label>
                            </div>
                            <div>
                                <input type="radio" id="radio3" name="group1" />
                                <label htmlFor="radio3" style={{ marginLeft: '10px' }}>Option 3</label>
                            </div>
                            <div>
                                <input type="radio" id="radio4" name="group1" />
                                <label htmlFor="radio4" style={{ marginLeft: '10px' }}>Option 4</label>
                            </div>
                            <hr />
                            <div>
                                <input type="radio" id="radio5" name="group2" />
                                <label htmlFor="radio5" style={{ marginLeft: '10px' }}>Option A</label>
                            </div>
                            <div>
                                <input type="radio" id="radio6" name="group2" />
                                <label htmlFor="radio6" style={{ marginLeft: '10px' }}>Option B</label>
                            </div>
                            <hr />
                            <div>
                                <input type="radio" id="radio7" name="group3" />
                                <label htmlFor="radio7" style={{ marginLeft: '10px' }}>Option X</label>
                            </div>
                            <div>
                                <input type="radio" id="radio8" name="group3" />
                                <label htmlFor="radio8" style={{ marginLeft: '10px' }}>Option Y</label>
                            </div>
                            <hr />
                            <div>
                                <input type="radio" id="radio9" name="group4" />
                                <label htmlFor="radio9" style={{ marginLeft: '10px' }}>Option Z</label>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Content */}
                <div className="col-lg-7 col-md-8 col-sm-6">
                    <div className="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                                ></path>
                            </g>
                        </svg>
                        <input className="input w-100 rounded-pill " type="search" placeholder="Search" />
                    </div>

                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: 600, fontSize: '24px' }}>Bagaimana cara menginstall NextJS versi 13?</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="/uifaces-popular-image.jpg" width={50} alt="Avatar" className="rounded-circle mr-2" />
                                    <div>
                                        <span className="d-block font-weight-bold ms-3 " style={{ fontWeight: 600, fontSize: '20px' }}>Web Developer</span>
                                        <span className=' ms-3'>Hamza Msabri</span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <span className="ml-auto">Static Date</span>
                                </div>
                            </div>
                            <p className="card-text mt-3 text-break">
                                Lorem, ipsum dolor sit amet consectetur adipisi
                                cing elit. Consectetur, harum aspernatur
                                doloremque aperiam explicabo est ali
                                quam quis porro sed odio placeat ex quas doloribus minus,
                                corrupti rerum modi tempora natus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
