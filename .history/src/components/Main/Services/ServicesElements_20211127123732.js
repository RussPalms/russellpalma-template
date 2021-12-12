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
