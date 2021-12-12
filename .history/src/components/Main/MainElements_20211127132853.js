import styled from "styled-components";

const MainLayout = styled.main`
	position: absolute;
	width: calc(100% -300px);
	left: 300px;
	background: var(--white);
	min-height: 100vh;
	transition: width 0.5s, left 0.5s;

	&:active {
		width: calc(100% - 0px);
		left: 0px;
	}

	@media (max-width: 992px) {
		width: 100%;
		left: 100%;
	}
`;
