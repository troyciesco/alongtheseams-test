import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { BlogLayout, Post } from "../components"
import { Heading, Text, Box } from "../bruin"
import { graphql, Link } from "gatsby"
//import Layout from "../components/layout"
//import HeroHeader from "../components/heroHeader"
import braves from "../../static/assets/braves.jpg"

const FeaturedPost = styled(Box)`
	grid-area: featuredPost;
	margin: 0 50px 0 0;
	background-image: url(${braves});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 500px;
	width: auto;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	cursor: pointer;
`

const Test = styled(Box)`
	cursor: pointer;
	width: 250px;
`

const PostsContainer = styled(Box)`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 25px;
`

const SidePosts = styled(Box)`
	grid-area: sidePosts;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
const FeaturedPostContentContainer = styled.div`
	background-image: linear-gradient(180deg, rgba(33, 28, 59, 0), #0c0d1a);
	height: 70%;
	width: 100%;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`
const BlogHero = styled.div`
	display: grid;
	grid-template-areas: "featuredPost sidePosts";
`

const IndexPage = ({
	data: {
		site,
		allMarkdownRemark: { edges }
	}
}) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <Post key={edge.node.id} post={edge.node} />)

	return (
		// <Layout>
		// 	<div
		// 		style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "50px" }}
		// 	></div>
		// 	<HeroHeader />
		// 	<h2>Blog Posts &darr;</h2>
		// 	<div className="grids">{Posts}</div>
		// </Layout>
		<BlogLayout>
			<Helmet>
				<title>{site.siteMetadata.title}</title>
				<meta name="description" content={site.siteMetadata.description} />
				{!site.siteMetadata.w3l_dom_key ? null : (
					<meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />
				)}
			</Helmet>
			<BlogHero>
				<Link to="/post">
					<FeaturedPost elevation="3">
						<FeaturedPostContentContainer>
							<Box pl="hu" pb="md">
								<Heading as="h3" color="neutral" shade="light">
									This is the post title
								</Heading>
								<Text shade="t2" fontSize="sm" pl="sm" pb="xs">
									25 March 2020 &bull; Troy Ciesco
								</Text>
								<Text shade="t4" pl="sm" style={{ width: "80%" }}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero perferendis
									similique autem deserunt excepturi, hic, error exercitationem, cupiditate quas
									quasi accusantium et dolorem? Quidem.
								</Text>
							</Box>
						</FeaturedPostContentContainer>
					</FeaturedPost>
				</Link>
				<SidePosts>
					<Link to="/post">
						<Test>
							<Heading fontSize="xs" as="h3">
								Title
							</Heading>
							<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
								25 March 2020 &bull; Troy Ciesco
							</Text>
							<Text fontSize="sm" pl="xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
							</Text>
						</Test>
					</Link>
					<Test>
						<Heading fontSize="xs" as="h3">
							Title
						</Heading>
						<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
							25 March 2020 &bull; Troy Ciesco
						</Text>
						<Text fontSize="sm" pl="xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
						</Text>
					</Test>
					<Test>
						<Heading fontSize="xs" as="h3">
							Title
						</Heading>
						<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
							25 March 2020 &bull; Troy Ciesco
						</Text>
						<Text fontSize="sm" pl="xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
						</Text>
					</Test>
				</SidePosts>
			</BlogHero>
			<Heading pad="lg" mt="lg">
				Blog Posts
			</Heading>
			<PostsContainer>{Posts}</PostsContainer>
			<Heading pad="lg" mt="lg">
				Podcasts
			</Heading>
			{/* <PostsContainer>
				<Post>
					<Test pl="sm">
						<Heading fontSize="xs" as="h3">
							Episode 1
						</Heading>
						<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
							25 March 2020 &bull; ATS Team
						</Text>
						<Text fontSize="sm" pl="xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
						</Text>
					</Test>
				</Post>
				<Post>
					<Test pl="sm">
						<Heading fontSize="xs" as="h3">
							Episode 2
						</Heading>
						<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
							25 March 2020 &bull; ATS Team
						</Text>
						<Text fontSize="sm" pl="xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
						</Text>
					</Test>
				</Post>
				<Post>
					<Test pl="sm">
						<Heading fontSize="xs" as="h3">
							Episode 3
						</Heading>
						<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
							25 March 2020 &bull; ATS Team
						</Text>
						<Text fontSize="sm" pl="xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
						</Text>
					</Test>
				</Post>
				<Post>
					<Test pl="sm">
						<Heading fontSize="xs" as="h3">
							Episode 4
						</Heading>
						<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
							25 March 2020 &bull; ATS Team
						</Text>
						<Text fontSize="sm" pl="xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
						</Text>
					</Test>
				</Post>
			</PostsContainer> */}
		</BlogLayout>
	)
}

export default IndexPage
export const pageQuery = graphql`
	query indexPageQuery {
		site {
			siteMetadata {
				title
				description
				w3l_dom_key
			}
		}
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						thumbnail
					}
				}
			}
		}
	}
`
