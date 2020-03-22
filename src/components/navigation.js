import React from "react"
import { Link } from "gatsby"

export default props => (
	<nav className="navigation">
		<Link to="/research">Research</Link>
		<Link to="/history">History</Link>
		<Link to="/experience">Experience</Link>
		<Link to="/podcast">Podcast</Link>
		<Link to="/about">About</Link>
	</nav>
)
