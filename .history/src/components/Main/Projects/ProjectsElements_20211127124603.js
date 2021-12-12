import styled from "styled-components";

const ProjectsContainer = styled.section``;

const ProjectsContent = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	margin: 40px 0;
`;

const Works = styled.div`
	position: relative;
	width: 100%;
	height: 300px;
	overflow: hidden;

	&:hover {
		transform: translateY(-100%);
	}
`;

const WorksImage = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transform: translateY(0);
	transition: 0.5s ease-in-out;
`;
