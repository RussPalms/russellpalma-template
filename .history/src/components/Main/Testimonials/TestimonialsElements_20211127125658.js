import styled from "styled-components";
import Image from "next/image";

const TestimonialsSection = styled.section``;

const TestimonialsContent = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	margin: 40px 0;
`;

const TestimonialsBox = styled.div`
	background: var(--white2);
	border: 1px solid rgba(0, 0, 0, 0.05);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
	padding: 20px;
`;
