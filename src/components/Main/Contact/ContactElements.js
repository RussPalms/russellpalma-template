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

const FormRow2 = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

const InputField = styled.input`
	width: 100%;
	padding: 10px;
	border: none;
	outline: none;
	color: var(--black);
	background: var(--white2);
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
`;

const TextField = styled.textarea`
	width: 100%;
	padding: 10px;
	border: none;
	outline: none;
	color: var(--black);
	background: var(--white2);
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	resize: none;
	height: 200px;
`;

const ChangedInput = styled.input`
	background: var(--black2);
	color: #fff;
	padding: 10px 30px;
	display: inline-block;
	font-weight: 500;
	letter-spacing: 2px;
	cursor: pointer;
	font-size: 16px;
	text-transform: uppercase;
	max-width: 150px;
	border: none;
`;
