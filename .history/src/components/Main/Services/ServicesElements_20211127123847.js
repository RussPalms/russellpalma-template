import styled from "styled-components";
import Image from "next/image";

const Services = styled.section``;

const ServicesBox = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.05);
	padding: 50px 20px;
	display: flex;
	background: var(--white2);
	justify-content: center;
	flex-direction: column;
`;

const ServicesImage = styled(Image)`
	max-width: 50px;
`;

const ServicesHeading = styled.h2`
	font-size: 1.1.em;
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 600;
	color: var(--black);
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
