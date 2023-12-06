import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <header className="primary-header">
            <Navbar className="primary-nav">
                <Container>
                    <Link className="brand-link" to="/">
                        <img className="brand-logo" src={logo} alt="Biutify" />
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end flex gap-2 gap-md-3">
                        <Link to={"/login"} className="login-btn text-uppercase theme-btn rounded outline lite">
                            <RiLoginCircleLine className="icon" />
                            <span className="mr-1">Login</span>
                        </Link>
                        <Link to={"/login"} className="professionals-btn text-uppercase theme-btn rounded outline lite">
                            <FaUserAlt className="icon" />
                            <span className="mr-1">Area Professionisti</span>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </>
  )
}

export default Header