import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { FaCaretDown } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

class Navbar extends Component {
	
	render() {

		return(
			<div>
				<nav className="navigation">
					<div className="navigation-item">
						<Link className="" to="contact">Contact</Link>
					</div>
					<div className="navigation-item">
						<Link to="/">
							<img className="navbar-logo" src={require('../images/logo.png').default} alt="ae logo"/>
						</Link>
					</div>
					<div className="navigation-item">
						<div className="ae-dropdown">
							<nav>
								<ul className="no-padding">
									<li>Projects <FaCaretDown/>
										<ul>
											<li>
												<Link to="/kebanas" className="btn btn-sm mt-3 mb-4">Kebanas</Link>
											</li>
											<li>
												<a href="https://github.com/aennisjr/fresno" target="_blank" rel="noreferrer" className="btn  btn-sm mt-3 mb-4">Fresno <FaExternalLinkSquareAlt /></a>
											</li>
											<li>
												<a href="https://github.com/aennisjr/salinas" target="_blank" rel="noreferrer" className="btn  btn-sm mt-3 mb-4">Salinas <FaExternalLinkSquareAlt /></a>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default withRouter(Navbar)