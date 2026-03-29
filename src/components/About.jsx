import React, { Component } from 'react'

export default class About extends Component {
    render() {
        let myStyle = {
            minHeight: '80vh',
            marginTop: '50px'
        }
        return (
            <div className="container" style={myStyle}>
                <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-primary bg-gradient p-5 text-white text-center">
                        <h1 className="display-4 fw-bold">About Fast & Direct News</h1>
                        <p className="lead">Real-Time Information, Delivered Without the Noise.</p>
                    </div>

                    <div className="card-body p-lg-5">
                        <div className="row g-4">
                            {/* Mission Section */}
                            <div className="col-md-6">
                                <h3 className="text-primary border-bottom pb-2">Our Mission</h3>
                                <p className="text-muted">
                                    In an era of information overload, <strong>Fast & Direct News</strong> was created to provide a 
                                    streamlined, high-performance news reading experience. We believe that staying informed 
                                    shouldn't be slow, cluttered, or complicated.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="col-md-6">
                                <h3 className="text-primary border-bottom pb-2">Why Choose Us?</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">⚡ <strong>Blazing Fast:</strong> Optimized with Vite & React.</li>
                                    <li className="list-group-item">🛡️ <strong>Secure Proxy:</strong> Powered by a Node.js/Express backend.</li>
                                    <li className="list-group-item">📂 <strong>Categorized:</strong> News sorted by Science, Sports, Tech, and more.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tech Stack Table */}
                        <div className="mt-5">
                            <h3 className="text-center mb-4 text-primary">Technical Architecture</h3>
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered text-center align-middle">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Frontend</th>
                                            <th>Backend</th>
                                            <th>API & Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>React.js (Class Components)</td>
                                            <td>Node.js & Express</td>
                                            <td>NewsAPI.org</td>
                                        </tr>
                                        <tr>
                                            <td>React Router v7</td>
                                            <td>CORS & node-fetch</td>
                                            <td>Bootstrap 5 UI</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Developer Badge */}
                        <div className="mt-5 p-4 bg-light rounded-3 text-center border">
                            <h5>👨‍💻 The Developer</h5>
                            <p className="mb-0">
                                <strong>Saptarshi Sarkar</strong><br />
                                Student at <strong>Kalyani Government Engineering College (KGEC)</strong><br />
                                <small className="text-muted">Passionate about Full-Stack Engineering & Agricultural Tech Solutions.</small>
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="text-center my-4 text-muted">
                    <small>&copy; 2026 Fast & Direct News - Built with ❤️ and React</small>
                </footer>
            </div>
        )
    }
}