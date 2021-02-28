import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { FaGithub } from "react-icons/fa";

class Footer extends Component {
	
	render() {
		return(
			<div>
				<div className="spacer-50"></div>
				<div className="text-muted text-center mt-5 mb-3">
					<small>Source code for this site available on <a href="#">GitHub</a></small> <FaGithub/>
				</div>
			</div>
		)
	}
}

export default withRouter(Footer)