import styled from "styled-components";
import Image from "next/image";

const Body = styled.body`
	overflow-x: hidden;
`;

const Container = styled.div`
	position: relative;
	width: 100%;
`;

const Section = styled.section`
	position: relative;
	min-height: 100vh;
`;

const Adjust = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100%;
	padding: 0 40px;
	padding-top: 80px;
	background: var(--white);
	color: var(--black);
	display: inline-block;
`;

const TitleLayout = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TitleContent = styled.h2`
	position: relative;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 1.2em;
	margin-bottom: 30px;

	&::before {
		content: "";
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		bottom: -10px;
		width: 50px;
		height: 1px;
		background: var(--black);
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`;

const TextBox = styled.div`
	width: 49%;
	min-width: 49%;
`;

const ContentImage = styled(Image)`
	max-width: 100%;
`;
