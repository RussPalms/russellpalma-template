import styled from "styled-components";
const ContactSection = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

const ContactForm = styled.div`
	position: relative;
	width: 100%;
	max-width: 700px;
	margin-top: 20px;
`;

const FormRow = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	margin-top: 20px;
`;
