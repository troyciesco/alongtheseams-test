import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { BlogLayout } from "../components"
import { Heading, Text } from "../bruin"

export default function Template({
	data // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<BlogLayout>
			<Helmet>
				<title>{frontmatter.title}</title>
				<meta name="description" content={frontmatter.metaDescription} />
			</Helmet>
			<div className="blog-post-container">
				<article className="post">
					{!frontmatter.thumbnail && (
						<div className="post-thumbnail">
							<Heading as="h1" shade="light" fontSize="xl">
								{frontmatter.title}
							</Heading>
							<Text className="post-meta">{frontmatter.date}</Text>
						</div>
					)}
					{!!frontmatter.thumbnail && (
						<div
							className="post-thumbnail"
							style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
						>
							<Heading as="h1" shade="light" fontSize="xl">
								{frontmatter.title}
							</Heading>
							<Text className="post-meta">{frontmatter.date}</Text>
						</div>
					)}
					<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
				</article>
			</div>
		</BlogLayout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				thumbnail
				metaDescription
			}
		}
	}
`
