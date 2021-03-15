import React, { Component } from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

class Contact extends Component {
	
	render() {

		document.title = "Get In Touch | " + process.env.REACT_APP_WEBSITE_NAME;

		return(
			<div>
				<div className="contact-header">
					<div className="header-overlay"></div>
					<div className="container header-content text-center">
						<h1 className="title">Get In Touch</h1>
					</div>
				</div>

				<div className="spacer-50"></div>

				<div className="container">
					<div className="row">
						<div className="col-md-4">
						<div className="bold text-orange mt-2">Location</div>
							<div className="text-muted mt-2">
								Scarborough, Toronto <br />
								ON, Canada
							</div>
						</div>

						<div className="col-md-4">
							<div className="bold text-orange mt-2">Email</div>
							<div className="text-muted mt-2">
								<ul className="basic no-padding">
									<li><a href="mailto:aggreyennis@gmail.com">aggreyennis@gmail.com</a></li>
									<li><a href="mailto:aggreyennis@outlook.com">aggreyennis@outlook.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-4">
							<div className="bold text-orange mt-2">Social</div>
							<div className="text-muted mt-2">
								<ul className="basic no-padding">
									<li><a href="https://www.linkedin.com/in/aggrey-ennis-509873112/" rel="noreferrer" target="_blank"><FaLinkedin /> LinkedIn</a></li>
									<li><a href="https://github.com/aennisjr" rel="noreferrer" target="_blank"><FaGithub/> Github</a></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="spacer-50"></div>

					<div className="row">
						<div className="col-md-6">
							<div className="contact-form">
								<form action="https://kebanas.com/form/api/cfetk3ulq8" method="POST" className="contact-form">
									<div className="form-group">
										<label htmlFor="name">Your Name</label>
										<input type="text" className="form-control" name="name" required="required" />
									</div>

									<div className="form-group">
										<label htmlFor="email">Email Address</label>
										<input type="email" className="form-control" name="_replyto" required="required" />
									</div>

									<div className="form-group">
										<label htmlFor="subject">Subject</label>
										<input type="text" className="form-control" name="subject" required="required" />
									</div>

									<div className="form-group">
										<label htmlFor="message"></label>
										<textarea className="form-control" name="message" rows="5" required="required" minlength="20"></textarea>
									</div>
									<div className="form-group">
										<button type="submit" className="btn">Send Message</button>
									</div>
								</form>
							</div>
						</div>

						<div className="col-md-6 hidden-sm">
							<div className="contact-side"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact