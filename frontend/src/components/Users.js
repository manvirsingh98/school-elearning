import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Container, Row, Col, Table } from "react-bootstrap";
import CustomJumbotron from "../components/CustomJumbotron";
import { listUsers } from "../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();

  const [option, setOption] = useState("");

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers(option));
  }, [dispatch, option]);

  return (
    <>
      <CustomJumbotron title="ALL USER LIST" />
      <Container>
        <Row>
          <Col md={12} className="mb-4">
            <Form className="w-25">
              <Form.Control
                as="select"
                onChange={(e) => setOption(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                {/* {uniqueRoles &&
                  uniqueRoles.map((uniqueRole) => (
                    <option key={uniqueRole._id}>{uniqueRole.role}</option>
                  ))} */}
              </Form.Control>
            </Form>
          </Col>
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

export default Users;
