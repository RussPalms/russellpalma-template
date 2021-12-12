import styled from "styled-components";

const NavLayout = styled.nav`
	position: fixed;
	width: 300px;
	height: 100%;
	border-right: 1px solid rgba(0, 0, 0, 0.05);
	background: var(--white2);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	transition: width 0.5s left 0.5s;

	&:active {
		width: 0px;
	}
`;

const NavListLayout = styled.ul`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 40px;
`;

const NavList = styled.li`
	position: relative;
	width: 100%;
	list-style: none;
`;

const NavListElement = styled.a`
	position: relative;
	display: block;
	width: 100%;
	margin: 10px 0;
	white-space: normal;
	display: flex;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--black);
	font-weight: 500;
	letter-spacing: 2px;
	opacity: 0.5;

	&:hover {
		opacity: 1;
	}
`;
