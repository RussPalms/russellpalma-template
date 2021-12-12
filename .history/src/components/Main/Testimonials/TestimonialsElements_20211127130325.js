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

const TestimonialsImageBox = styled.div`
	position: relative;
	width: 80px;
	height: 80px;
	margin-bottom: 10px;
`;

const TestimonialsImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const TestimonialDescription = styled.p`
	font-style: italic;
`;

const TestimonialHeading = styled.h4`
	text-align: right;
	margin-top: 20px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 1em;
	color: var(--black);
	line-height: 1.2em;
	font-weight: 600;
	border-right: 4px solid var(--black);
	padding-right: 10px;
`;

const TestimonialsProperties = styled.span`
	text-transform: initial;
	color: #aaa;
	letter-spacing: 1px;
	font-weight: 300;
	font-size: 0.7em;
`;
