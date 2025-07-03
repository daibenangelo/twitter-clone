import { getAuth } from "firebase/auth";
import { Navbar, Container, Row, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthProvider";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileMidBody from "../components/ProfileMidBody";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleLogout = () => {
    auth.signOut();
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
