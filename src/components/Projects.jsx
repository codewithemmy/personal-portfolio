import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import skillup from "../assets/img/skillup.png";
import Howbodi from "../assets/img/howbodii.png";
import WhoUePP from "../assets/img/whoUEpp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Filtrd from "../assets/img/filtrd.png";
import Skill from "../assets/img/skill.png";
import jojolo from "../assets/img/jojolo.png";
import myEstate from "../assets/img/myEstate.png";
import afrilishImage from "../assets/img/afrilish.png";

export const Projects = () => {
	const projects = [
		{
			title: "Afrilish - User, Rider, Partner",
			description: "Food Delivery Ecosystem",
			imgUrl: afrilishImage,
			id: "https://www.afrilish.com/",
		},
		{
			title: "Howbodi",
			description:
				"An application that helps you to access mental healthcare from anywhere in the world",
			imgUrl: Howbodi,
			id: "https://www.howbodi.com",
		},
		{
			title: "Filtrd",
			description:
				"An application that helps to manage your business expenses without hassles",
			imgUrl: Filtrd,
			id: "https://filtrd.io/",
		},
		{
			title: "Skillup Africa",
			description:
				"An application that provides young Africans with top quality training in globally viable skills and connects them to opportunities to harness the skills ",
			imgUrl: Skill,
			id: "https://skillupafrica.com.ng/",
		},
		{
			title: "MyEstate App",
			description:
				"Experience the Ultimate Solution for Seamless Gated Estate Management",
			imgUrl: myEstate,
			id: "https://myestate.ng/",
		},
		{
			title: "Who U Epp",
			description:
				"A company that enables borrowers to access funds quickly and easily while allowing lenders to earn competitive returns on their investments.",
			imgUrl: WhoUePP,
			id: "https://www.whouepp.com",
		},
		// {
		// 	title: "Jojolo",
		// 	description:
		// 		"An application that helps you to access mental healthcare from anywhere in the world",
		// 	imgUrl: jojolo,
		// 	id: "https://www.jojoloapp.com/",
		// },
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}
								>
									<h2>Projects</h2>
									<p>
										These showcases my expertise
										in crafting projects using
										cutting-edge technologies.
										I've successfullyd eveloped
										projects leveraging CSS
										frameworks, I've also utilized
										the power of React, Next.js,
										and TypeScript to develop
										seamless and efficient user
										interfaces that bring ideas to
										life.
									</p>
									<Tab.Container
										id="projects-tabs"
										defaultActiveKey="first"
									>
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">
													Tab 1
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible
													? "animate__animated animate__slideInUp"
													: ""
											}
										>
											<Tab.Pane eventKey="first">
												<Row>
													{projects.map(
														(
															project,
															index
														) => {
															return (
																<ProjectCard
																	key={
																		index
																	}
																	{...project}
																/>
															);
														}
													)}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="section">
												<p>
													Lorem ipsum
													dolor sit amet
													consectetur
													adipisicing
													elit. Cumque
													quam, quod
													neque provident
													velit, rem
													explicabo
													excepturi id
													illo molestiae
													blanditiis,
													eligendi dicta
													officiis
													asperiores
													delectus quasi
													inventore
													debitis quo.
												</p>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p>
													Lorem ipsum
													dolor sit amet
													consectetur
													adipisicing
													elit. Cumque
													quam, quod
													neque provident
													velit, rem
													explicabo
													excepturi id
													illo molestiae
													blanditiis,
													eligendi dicta
													officiis
													asperiores
													delectus quasi
													inventore
													debitis quo.
												</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
