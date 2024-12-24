import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/myimage.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import Pics from "../assets/img/picss.png"
import Pics from "../assets/img/work.jpg";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = [
		"Software Developer",
		"Backend Developer",
		"Solution Architect",
	];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}
								>
									<span className="tagline">
										Welcome to my Portfolio
									</span>
									<h1>
										{`Hi! I'm Noah Emmanuel Idachaba, a`}{" "}
										<span
											className="txt-rotate"
											dataperiod="1000"
											data-rotate='["Backend Developer", "Software Developer"]'
										>
											<span className="wrap">
												{text}
											</span>
										</span>
									</h1>
									<p>
										Results-driven Backend
										Developer with over 2 years of
										experience architecting
										scalable Node.js applications
										and RESTful APIs. Demonstrated
										expertise in reducing system
										latency by 30% and
										implementing CI/CD pipelines
										that cut deployment time by
										40%. Specialized in
										microservices architecture,
										database optimization, and
										secure authentication systems.
									</p>
									<button
										onClick={() =>
											console.log("connect")
										}
									>
										Hire Me{" "}
										<ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<div
							className="animate__animated animate__zoomIn"
							style={{ position: "relative" }}
						>
							<img src={Pics} alt="Header Img" />
							{/* <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))",
                  zIndex: 1,
                }}
              /> */}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
