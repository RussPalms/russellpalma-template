import styled from "styled-components";
import Image from "next/image";

const BannerWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ImageBox = styled.div`
	position: relative;
	width: 300px;
	height: 300px;
	overflow: hidden;
	border-radius: 50%;
	margin-bottom: 20px;
`;

const ImageElement = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Heading = styled.h3`
	position: relative;
	font-size: 1.4em;
	color: var(--black);
	letter-spacing: 2px;
	text-transform: uppercase;

	@media (max-width: 992px) {
		text-align: center;
	}
`;

const HeadingItem = styled.p`
	color: #777;

	@media (max-width: 992px) {
		text-align: center;
	}
`;

const CoverLetterButton = styled.button`
	border: none;
	outline: none;
	position: relative;
	display: inline-block;
	padding: 10px 30px;
	background: var(--black2);
	color: #fff;
	font-weight: 400;
	letter-spacing: 1px;
	margin-top: 10px;
	text-decoration: none;
`;

const SocialMediaWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	display: flex;
`;

const SocialMediaList = styled.li`
	list-style: none;
`;

const SocialMediaListElement = styled.a`
	display: inline-block;
	width: 40px;
	height: 40px;
	background: rgba(0, 0, 0, 0.05);
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: var(--black);
	font-size: 1.2em;

	&:hover {
		background: var(--black);
		color: #fff;
	}
`;

const BannerImageBox = styled.div`
	margin-left: 40px;

	@media (max-width: 992px) {
		width: 250px;
		height: 250px;
	}
`;
