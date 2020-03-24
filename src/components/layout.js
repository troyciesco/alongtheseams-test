import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import "prismjs/themes/prism-okaidia.css"
import alongtheseams from "../../static/assets/alongtheseams.png"

export default ({ children }) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	return (
		<div className="site-wrapper">
			<header className="site-header">
				<div className="site-title">
					<Link to="/">
						{data.site.siteMetadata.title}
						<img
							style={{ display: "block", height: "50px", width: "auto" }}
							src={alongtheseams}
							alt="along the seams logo"
						/>
					</Link>
				</div>
				<Navigation />
			</header>
			{children}
			<footer className="site-footer">
				<p>&copy; 2020 Along the Seams</p>
			</footer>
		</div>
	)
}
