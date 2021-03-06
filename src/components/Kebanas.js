import React, { Component } from 'react'

import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Kebanas extends Component {

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
  	}

	render() {

		const slider = (
		  	<AwesomeSlider>
		    	<div data-src={require('../images/kebanas.png').default} />
		    	<div data-src={require('../images/kebanas2.png').default} />
		    	<div data-src={require('../images/kebanas3.png').default} />
		    	<div data-src={require('../images/kebanas4.png').default} />
		  	</AwesomeSlider>
		);

		document.title = "Kebanas | " + process.env.REACT_APP_WEBSITE_NAME;

		return(
			<div>
				<div className="spacer-100"></div>

				<div className="container">

					{slider}

					<div className="spacer-100"></div>

					<h1 className="mb-3">Kebanas</h1>

					<ul className="basic np-padding mt-3 mb-5">
						<li><b>Development: </b> Full-Stack (Backend and Frontend)</li>
						<li><b>Type: </b>Personal/Self-developed</li>
						<li><b>Status: </b> Complete <span className="text-orange"><FaCheckCircle/></span></li>
						<div><a href="https://kebanas.com" target="_blank" rel="noreferrer" className="text-orange">https://kebanas.com</a> <FaExternalLinkSquareAlt/></div>
					</ul>

					<p>
						Kebanas provides an easy, privacy-friendly method of creating 
						endpoints for your forms that can be embedded anywhere, on any site.
					</p>
					<p>
						<b className="text-orange">Features</b>
						<ul>
							<li><b className="text-success">Quick and Simple Endpoints</b> - Create your forms using HTML, CSS, and whatever method you like - then add your Kebanas endpoint to your action attribute. That's it!</li>
							<li><b className="text-success">Embeddable Popup Form</b> - Use the embeddable popup form to capture submissions. Just add the script to your site's footer and define the options you need.</li>
							<li><b className="text-success">Flexibility</b> - You can build your forms using just about any form options to capture your data and have it delivered to you. Unlimited input, textarea, select fields, etc.</li>
							<li><b className="text-success">Unlimited Websites</b> - You can use your Kebanas endpoints on as many websites as you wish, there are no restrictions on your accounts. </li>
							<li><b className="text-success">It's free</b> - Kebanas is and will always be free. There are no surprises and no credit card requirement to get started.</li>
							<li><b className="text-success">Privacy Friendly</b> - Your submission data will never be sold to or shared with any third-party entities. We'll never monetize or mine your data.</li>
						</ul>
					</p>
				</div>

			</div>
		)
	}

}

export default Kebanas