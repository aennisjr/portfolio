import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaCheckCircle } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaRegFilePdf } from 'react-icons/fa';

// import resume from '../src/assets/files/aggrey-ennis-pdf';

class Landing extends Component {
	
	render() {

		document.title = "Hello | " + process.env.REACT_APP_WEBSITE_NAME;

		return(
			<div>
				<div className="homepage-header">
					<div className="header-overlay"></div>
					<div className="container header-content text-center">
						<h1 className="title">Hello👋</h1>
						<p>
							I'm <b className="bold text-warning">Aggrey Ennis</b><br/>
							Developer and aspiring Data Scientist.
						</p>
					</div>
				</div>

				<div className="spacer-75"></div>

				<div className="cv">
					<div className="container">

						<h4 className="mb-4">Education</h4>

						<div className="row">
							<div className="col-md-6">
								
								<div className="cv-item">
									<div className="cv-flex">
										<img alt="Lambton College Logo" className="shadow college-img" src={require('../images/lambton.png').default} />
									</div>
									<div className="cv-flex">
										<h5 className="cv-degree">Cloud Computing for Big Data</h5>
										Lambton College (Toronto)
								
										<div>
											<small>Post-Grad Diploma - Class of 2021 [Expected August]</small>
										</div>

										<div className="mt-1 badge badge-warning">
											2x Dean's Honor List
										</div>

										<div className="mt-3">
											<b>Sample Courses:</b>
											<ul className="basic no-padding">
												<li>Distributed Systems and Cloud Computing</li>
												<li>Network Routing and Switching</li>
												<li>Server Admin</li>
												<li>Database Design</li>
												<li>Big Data Strategies</li>
											</ul>
										</div>
									</div>
								</div>
								<div>

								</div>
								<div>

								</div>
							</div>

							<div className="col-md-6">
								
								<div className="cv-item">
									<div className="cv-flex">
										<img alt="NCU Logo" className="shadow college-img" src={require('../images/ncu.png').default} />
									</div>
									<div className="cv-flex">
										<h5 className="cv-degree">Computer Information Science</h5>
										Northern Caribbean University (Jamaica)
								
										<div>
											<small>Bachelor's - Class of 2016</small>
										</div>

										<div className="mt-1">
											&nbsp;
										</div>

										<div className="mt-3">
											<b>Sample Courses:</b>
											<ul className="basic no-padding">
												<li>Data Structures & Algorithms</li>
												<li>Computer Org. & Architecture</li>
												<li>Security Vulnerabilities & Attack Prevention</li>
												<li>Information Security Policy and Auditing</li>
												<li>Distributed Systems</li>
											</ul>
										</div>
									</div>
								</div>
								<div>

								</div>
								<div>

								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<h4 className="mb-4 mt-4">Experience</h4>

								<div className="mb-3">
									<b>Freelance</b> - Various Clients (Sept 2016 – Dec 2019)
									<div className="text-muted">
										<small>
											Development and deployment of web applications. Identify, assess, and recommend solutions for
											issues with existing web platforms.
										</small>
									</div>
								</div>
								<div className="mb-3">
									<b>Customer Support Agent (Technical Support)</b> – Influx Inc. (June 2017 – April 2019)
									<div className="text-muted">
										<small>
											Diagnosing and troubleshooting issues encountered by WordPress-based clients and effectively 
											communicating findings and recommended solutions via email and live-chat.
										</small>
									</div>
								</div>
								<div className="mb-3">
									<b>Junior Programmer/Developer</b> – Real Change Ministries Intl. (Sep 2016 – March 2017)
									<div className="text-muted">
										<small>
											Assisted with development and maintenance of enterprise-level educational platform.
										</small>
									</div>
								</div>
							</div>
						</div>	

						<h4 className="mb-4 mt-4">Technical</h4>

						<div className="row">
							<div className="col-sm-7">
								<b>Data Science  & Cloud</b>

								<ul className="basic no-padding text-muted mt-3">
									<li><FaCheckCircle /> &nbsp;Cloud application deployment via Amazon S3, Heroku, Netlify</li>
									<li><FaCheckCircle /> &nbsp;Experience working with and extracting value from large, disconnected and/or unstructured datasets</li>
									<li><FaCheckCircle /> &nbsp;Familiarity with data science machine-learning tools for analysis of data (Hadoop, Spark, Kafka, and more)</li>
									<li><FaCheckCircle /> &nbsp;Source and version control systems such as GitHub, BitBucket, and GitLab</li>
								</ul>
							</div>

							<div className="col-sm-5">

								<b>Programming, Design & Development</b>

								<div className="row">
									<div className="col-sm-6">
										<ul className="basic no-padding text-muted mt-3">
											<li><FaJs /> JavaScript / TypeScript</li>
											<li><FaNodeJs/> NodeJS</li>
											<li><FaPhp /> PHP</li>
											<li><FaPython /> Python</li>
											<li><FaDatabase /> SQL/NoSQL Databases</li>
											<li><FaJava /> Java</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="basic no-padding text-muted mt-3">
											<li><FaPaintBrush /> UX/UI Design</li>
											<li><FaCss3 /> CSS3</li>
											<li><FaBootstrap /> Bootstrap</li>
											<li><FaReact /> ReactJS</li>
											<li><FaSass /> SASS</li>
											<li><FaHtml5 /> HTML5</li>
											<li><FaWordpress /> WordPress</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="download-resume mt-4">
							<a href={require('../assets/files/aggrey-ennis-resume.pdf').default} download><FaRegFilePdf className="text-danger"/> Download Resume (PDF format)</a>
						</div>

					</div>
				</div>

				<div className="spacer-50"></div>

				<div className="container">
					<div className="divider"></div>
				</div>

				<div className="spacer-100"></div>

				<div className="container">
					<div id="projects" className="projects">

						<h2 className="text-center">Projects</h2>

						<div className="spacer-50"></div>

						<div className="project-item-home">
							<div className="row">
								<div className="col-sm-5">
									<div className="project-details">
										<h3 className="project-title">Kebanas</h3>
										<div className="project-description text-muted">
											Kebanas provides an easy, privacy-friendly method of creating 
											endpoints for your forms that can be embedded anywhere, on any site.

											<ul className="basic np-padding mt-3">
												<li><b>Development: </b> Full-Stack (Backend and Frontend)</li>
												<li><b>Type: </b>Personal/Self-developed</li>
												<li><b>Status: </b> Complete <span className="text-success"><FaCheckCircle/></span></li>
												<div><a href="https://kebanas.com" target="_blank" rel="noreferrer" className="text-orange">https://kebanas.com</a> <FaExternalLinkSquareAlt/></div>
												<Link to="/kebanas" className="btn btn-sm mt-3 mb-4">More Details</Link>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<img  alt="Kebanas" className="shadow project-image" src={require('../images/kebanas.png').default} />
								</div>
							</div>
						</div>

						<div className="spacer-100"></div>

						<div className="project-item-home">
							<div className="row">
								<div className="col-sm-5">
									<div className="project-details">
										<h3 className="project-title">Fresno</h3>
										<div className="project-description text-muted">
											A Google Chrome extension for generating strong passwords and random numbers/strings.

											<ul className="basic np-padding mt-3">
												<li><b>Development: </b> Full-Stack (Backend and Frontend)</li>
												<li><b>Type: </b>Personal/Self-developed</li>
												<li><b>Status: </b> Under development <span className="text-orange"><FaRoad/></span></li>
												<div><a href="https://github.com/aennisjr/fresno" target="_blank" rel="noreferrer" className="btn  btn-sm mt-3 mb-4"><FaGithub/> Repository</a></div>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<img alt="Fresno" className="shadow project-image" src={require('../images/fresno.png').default} />
								</div>
							</div>
						</div>

						<div className="spacer-100"></div>

						<div className="project-item-home">
							<div className="row">
								<div className="col-sm-5">
									<div className="project-details">
										<h3 className="project-title">Salinas</h3>
										<div className="project-description text-muted">
											A simple dashboard/startpage built with NodeJS, Openweathermap, Marketdata API, and NewsAPI.

											<ul className="basic np-padding mt-3">
												<li><b>Development: </b> Full-Stack (Backend and Frontend)</li>
												<li><b>Type: </b>Personal/Self-developed</li>
												<li><b>Status: </b> Complete <span className="text-success"><FaCheckCircle/></span></li>
												<div><a href="https://salinas.herokuapp.com/" target="_blank" rel="noreferrer" className="text-orange">https://salinas.herokuapp.com/</a> <FaExternalLinkSquareAlt/></div>
												<a target="_blank" rel="noreferrer" href="https://github.com/aennisjr/salinas" className="btn  btn-sm mt-3 mb-4"><FaGithub /> Repository</a>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<img  alt="Salinas" className="shadow project-image" src={require('../images/salinas.png').default} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing