import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github.jpg";
import navIcon4 from "../assets/img/twitter.png";
import navIcon5 from "../assets/img/resumeIcon.png";

export const Footer = () => {
  return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col
						size={12}
						sm={6}
						className="text-center text-sm-end"
					>
						<div className="social-icon">
							<a href="https://drive.google.com/file/d/1CX46v3xBRDwMeShvq_GroxzjjBiCpX_I/view?usp=drive_link">
								<img src={navIcon5} alt="Icon" />
							</a>
							<a href="https://www.linkedin.com/in/emmanuel-noah-b6a24619a/">
								<img src={navIcon1} alt="Icon" />
							</a>
							<a href="https://www.facebook.com/profile.php?id=100081126549496">
								<img src={navIcon2} alt="Icon" />
							</a>
							<a href="https://github.com/codewithemmy">
								<img src={navIcon3} alt="Icon" />
							</a>
							<a href="https://x.com/_CallMeEmmy">
								<img src={navIcon4} alt="Icon" />
							</a>
						</div>
						<p>
							Copyright {new Date().getFullYear()}. All
							Rights Reserved
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
  );
}
