import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "../../bruin/themes"
import {
	StyledHeader,
	HeaderContainer,
	HeaderContent,
	HeaderLogo,
	HeaderNav,
	StyledDivider
} from "./Styles"
import { Text } from "../../bruin"
import logo from "../../../static/assets/alongtheseams.png"

const PageContainer = styled.div`
	padding-top: 7rem;
	max-width: 1140px;
	margin: 0 auto;
`

const BlogLayout = ({ theme, children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StyledHeader>
				<HeaderContainer>
					<HeaderContent>
						<HeaderLogo>
							<img src={logo} alt="logo" style={{ height: "60px", width: "auto" }} />
						</HeaderLogo>
						<HeaderNav>
							<Link to="/">Blog</Link>
							<Link to="/about">About</Link>
						</HeaderNav>
					</HeaderContent>
				</HeaderContainer>
				<StyledDivider />
			</StyledHeader>
			<PageContainer>
				<main>{children}</main>
			</PageContainer>
			{/* <Footer /> */}
		</ThemeProvider>
	)
}

BlogLayout.defaultProps = {
	theme: standard
}

BlogLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export { BlogLayout }
