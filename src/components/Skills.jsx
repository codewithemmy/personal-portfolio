import html from "../assets/img/html.png";
import typescript from "../assets/img/ts.png";
import javascript from "../assets/img/javascript.jpg";
import ExpressJs from "../assets/img/express.jpg";
import nest from "../assets/img/nest.jpg";
import mongoDb from "../assets/img/mongodb.jpg";
import postgreSQL from "../assets/img/postgres.webp";
import redisImage from "../assets/img/redis.jpg";
import gitImage from "../assets/img/git.webp";
import awsImage from "../assets/img/aws.webp";
import dockerImage from "../assets/img/docker.jpg";
import microserviceImage from "../assets/img/microservice.png";
import graphQlImage from "../assets/img/graphql.webp";
import socketImage from "../assets/img/socket.png";
import cssImage from "../assets/img/css.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import rest from "../assets/img/apiImage.jpg";
import node from "../assets/img/node.jpeg";
import colorSharp from "../assets/img/color-sharp.png";
import CICD from "../assets/img/ci-cd.png";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section
			className="skill animate__animated animate__zoomIn"
			id="skills"
		>
			<div className="container animate__animated animate__zoomIn">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx ">
							<h2>Skills</h2>
							<p>
								{" "}
								I am a problem-solver, with a can-do
								attitude. I aim for success right from
								the start of anything<br></br> I am also
								efficient anywhere i find myself. I have
								pratical skills like;
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img
										src={typescript}
										alt="Image"
									/>
									<h5>TypeScript</h5>
								</div>
								<div className="item">
									<img
										src={javascript}
										alt="Image"
									/>
									<h5>Javascript</h5>
								</div>
								<div className="item">
									<img src={node} alt="Image" />
									<h5>Node js</h5>
								</div>
								<div className="item">
									<img src={ExpressJs} alt="Image" />
									<h5>Express js</h5>
								</div>
								<div className="item">
									<img src={nest} alt="Image" />
									<h5>Nest js</h5>
								</div>
								<div className="item">
									<img src={mongoDb} alt="Image" />
									<h5>MongoDB</h5>
								</div>
								<div className="item">
									<img
										src={postgreSQL}
										alt="Image"
									/>
									<h5>PostgreSQL</h5>
								</div>
								<div className="item">
									<img
										src={graphQlImage}
										alt="Image"
									/>
									<h5>GraphQL</h5>
								</div>
								<div className="item">
									<img src={rest} alt="Image" />
									<h5>RESTful API</h5>
								</div>
								<div className="item">
									<img
										src={microserviceImage}
										alt="Image"
									/>
									<h5>MicroService & Monolith</h5>
								</div>
								<div className="item">
									<img
										src={redisImage}
										alt="Image"
									/>
									<h5>Redis</h5>
								</div>
								<div className="item">
									<img src={gitImage} alt="Image" />
									<h5>Git & GitHub</h5>
								</div>
								<div className="item">
									<img
										src={dockerImage}
										alt="Image"
									/>
									<h5>Docker</h5>
								</div>
								<div className="item">
									<img src={CICD} alt="Image" />
									<h5>CI-CD</h5>
								</div>
								<div className="item">
									<img src={awsImage} alt="Image" />
									<h5>AWS</h5>
								</div>
								<div className="item">
									<img
										src={socketImage}
										alt="Image"
									/>
									<h5>Socket IO</h5>
								</div>
								<div className="item">
									<img src={html} alt="Image" />
									<h5>HTML</h5>
								</div>
								<div className="item">
									<img src={cssImage} alt="Image" />
									<h5>CSS</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img
				className="background-image-left"
				src={colorSharp}
				alt="Image"
			/>
		</section>
	);
};
