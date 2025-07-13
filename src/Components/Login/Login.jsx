import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "1234") {
      navigate("/admin");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight:'80vh'}}>
      <Row className="">
        <Col md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Usuario: admin</Form.Label>
                  <Form.Control
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                </Form.Group>
               
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña: 1234</Form.Label>
                  <Form.Control
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                  <Button type="submit" style={{left:'0px'}}>
                    Ingresar
                  </Button>

                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
