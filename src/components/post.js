import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Heading, Text, Box } from "../bruin"

const Test = styled(Box)`
	cursor: pointer;
	width: 250px;
`

const StyledPost = styled(Box)`
	display: flex;
	justify-content: space-around;
	margin-bottom: 50px;
	cursor: pointer;
`

const Post = ({ post }) => (
	<Link to={post.frontmatter.path}>
		<StyledPost as="article">
			{!!post.frontmatter.thumbnail && (
				<img src={post.frontmatter.thumbnail} style={{ height: "150px", borderRadius: "0.5rem" }} alt={post.frontmatter.title + "- Featured Shot"} />
			)}
			<Test pl="sm">
				<Heading fontSize="xs" as="h3">
					{post.frontmatter.title}
				</Heading>
				<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
					{post.frontmatter.date} &bull; Troy Ciesco
				</Text>
				<Text fontSize="sm" pl="xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
				</Text>
			</Test>
		</StyledPost>
	</Link>
)
export { Post }
