import styled from "styled-components"

export const StyledHeader = styled.header`
	width: 100%;
	max-width: 1140px;
	margin: 0 auto;
	padding: 10px 0;
	color: ${props => props.theme.colors["primary"]["dark"]};
	/* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); */
	z-index: 1000;
`
export const Burger = styled.button`
	display: none;

	@media screen and (max-width: 700px) {
		display: block;
	}
`

export const HeaderContainer = styled.div`
	width: 95%;
	margin: 0 auto;
	display: grid;
	grid-template-areas: "left center right";

	@media screen and (max-width: 700px) {
		grid-template-areas: "logo burger" "nav nav";
	}
`

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: center;
`
export const HeaderLogo = styled.div`
	padding: 2rem;
	align-self: center;
`

export const HeaderNav = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, auto);
	align-items: center;
	justify-items: center;

	& p {
		cursor: pointer;
		color: ${props => props.theme.colors["neutral"]["t2"]};

		:hover {
			color: rebeccapurple;
			font-weight: 700;
		}
	}

	@media screen and (max-width: 700px) {
		grid-template-rows: repeat(2, auto);
		grid-template-columns: none;
		grid-row-gap: 20px;
	}
`

export const StyledDivider = styled.hr`
	width: 100%;
	margin: 2rem auto;
	opacity: 40%;
`
