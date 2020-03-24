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
		<BlogLayout>
			<Helmet>
				<title>{site.siteMetadata.title}</title>
				<meta name="description" content={site.siteMetadata.description} />
				{!site.siteMetadata.w3l_dom_key ? null : (
					<meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />
				)}
			</Helmet>
			<BlogHero>
				<Link to="/baseball-religion">
					<FeaturedPost elevation="3">
						<FeaturedPostContentContainer>
							<Box pl="hu" pb="md">
								<Heading as="h3" color="neutral" shade="light">
									Baseball as a Religious Experience
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
					<Link to="/best-basestealers">
						<Test>
							<Heading fontSize="xs" as="h3">
								Best Basestealers
							</Heading>
							<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
								25 March 2020 &bull; Troy Ciesco
							</Text>
							<Text fontSize="sm" pl="xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
							</Text>
						</Test>
					</Link>
					<Link to="/purple-jerseys">
						<Test>
							<Heading fontSize="xs" as="h3">
								Top Purple Jerseys
							</Heading>
							<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
								25 March 2020 &bull; Troy Ciesco
							</Text>
							<Text fontSize="sm" pl="xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
							</Text>
						</Test>
					</Link>
					<Link to="/fillerama">
						<Test>
							<Heading fontSize="xs" as="h3">
								Fillerama
							</Heading>
							<Text shade="t2" fontSize="xs" pl="xs" pb="xs">
								25 March 2020 &bull; Troy Ciesco
							</Text>
							<Text fontSize="sm" pl="xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores!
							</Text>
						</Test>
					</Link>
				</SidePosts>
			</BlogHero>
			<Heading pad="lg" mt="lg">
				Blog Posts
			</Heading>
			<PostsContainer>{Posts}</PostsContainer>
			<Heading pad="lg" mt="lg">
				Podcasts
			</Heading>
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
