import styled from "styled-components";
import Image from "next/image";

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

const WorksImageBox = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transform: translateY(0);
	transition: 0.5s ease-in-out;
`;

const WorksImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
