import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import alongtheseams from "../../static/assets/alongtheseams.png"

export default () => (
	<StaticQuery
		query={graphql`
			query HeadingQuery {
				site {
					siteMetadata {
						home {
							title
							description
						}
					}
				}
			}
		`}
		render={data => (
			<div className="hero-header">
				{/* <div className="headline">{data.site.siteMetadata.home.title}</div> */}
				<div className="headline">This will be a featured post</div>
				<div className="primary-content">
					{/* <p>{data.site.siteMetadata.home.description}</p> */}
					<p style={{width: '60%'}}>
						This will be a lead-in to the featured post content. It'll be the first couple of
						sentences of the story, most likely. But will it hook the reader?
					</p>
				</div>
				<Link to="/fillerama" className="button -primary">
					Read More &rarr;
				</Link>
			</div>
		)}
	/>
)
