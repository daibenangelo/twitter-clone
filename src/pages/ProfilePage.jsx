import { Navbar, Container, Row, Button } from "react-bootstrap";
import { useEffect } from "react";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileMidBody from "../components/ProfileMidBody";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";

export default function ProfilePage() {
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    setAuthToken("");
  };

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Row>
            <ProfileSideBar handleLogout={handleLogout} />
            <ProfileMidBody />
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
