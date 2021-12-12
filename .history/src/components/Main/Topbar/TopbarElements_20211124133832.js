import styled from "styled-components";

const TopbarLayout = styled.header`
	position: fixed;
	top: 0;
	width: calc(100% - 300px);
	left: 300px;
	background: var(--white2);
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	height: 60px;
	padding: 0 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 10000;
	transition: width 0.5s, left 0.5s;

	&:active {
		width: calc(100% - 0px);
		left: 0px;
	}
`;

const Logo = styled.a`
	color: var(--black);
	font-weight: 700;
	text-decoration: none;
	font-size: 1.4em;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const Menu = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	color: var(--black);
`;
