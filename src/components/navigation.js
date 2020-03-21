import React from "react"
import { Link } from "gatsby"

export default props => (
	<nav className="navigation">
		<Link to="/research">Research</Link>
		<Link to="/podcast">Podcast</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
	</nav>
)
