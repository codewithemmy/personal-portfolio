import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/mylogo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github.jpg";
import navIcon4 from "../assets/img/twitter.png";
import navIcon5 from "../assets/img/resumeIcon.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Router>
			<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
				<Container>
					<Navbar.Brand href="/">
						<h1 className="nav-logo">
							EMMANUEL NOAH IDACHABA
						</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === "home"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() =>
									onUpdateActiveLink("home")
								}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={
									activeLink === "skills"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() =>
									onUpdateActiveLink("skills")
								}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={
									activeLink === "projects"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() =>
									onUpdateActiveLink("projects")
								}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a href="https://drive.google.com/file/d/1CX46v3xBRDwMeShvq_GroxzjjBiCpX_I/view?usp=drive_link">
									<img src={navIcon5} alt="Icon" />
								</a>
								<a href="https://www.linkedin.com/in/emmanuel-noah-b6a24619a/">
									<img src={navIcon1} alt="" />
								</a>
								<a href="https://www.facebook.com/profile.php?id=100081126549496">
									<img src={navIcon2} alt="" />
								</a>
								<a href="https://github.com/codewithemmy">
									<img src={navIcon3} alt="Icon" />
								</a>
								<a href="https://x.com/_CallMeEmmy">
									<img src={navIcon4} alt="Icon" />
								</a>
							</div>
							<HashLink to="#connect">
								<button className="vvd">
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
