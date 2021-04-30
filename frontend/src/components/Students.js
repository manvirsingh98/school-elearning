import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import CustomJumbotron from "../components/CustomJumbotron";
import { listUsers } from "../actions/userActions";

const Students = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers("student"));
  }, [dispatch]);

  return (
    <>
      <CustomJumbotron title="ALL STUDENTS" />
      <Container>
        <Row>
          <Col md={12} className="mb-4"></Col>
          <Col md={12}>
            {loading && <h4>Loading...</h4>}
            {error && <h4>{error}</h4>}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Students;
