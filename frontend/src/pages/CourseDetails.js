import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextTruncate from "react-text-truncate";

import CustomJumbotron from "../components/CustomJumbotron";
import { courseDetails } from "../actions/courseActions";
import { Card, Col, Container, Row } from "react-bootstrap";

const CourseDetails = ({ match }) => {
  const courseID = match.params.courseID;
  const disptach = useDispatch();

  const courseDetail = useSelector((state) => state.courseDetail);
  const { loading, error, course } = courseDetail;

  useEffect(() => {
    if (courseID) {
      disptach(courseDetails(courseID));
    }
  }, [disptach, courseID]);

  return (
    <section className="courseDetail">
      <CustomJumbotron title="COURSE DETAIL" />
      <Container>
        <Row>
          <Col md={12}>
            {loading && <h3>Loading....</h3>}
            {error && <h3>{error}</h3>}
            <div className="courseName">
              <h2 className="mb-4">{course && course.name}</h2>
              <p className="mb-5">{course && course.description}</p>
              <div className="chapters">
                <h2 className="mb-5">Chapters</h2>
                <div className="card-deck">
                  {course &&
                    course.chapters &&
                    course.chapters.map((chapter) => (
                      <Card key={chapter._id}>
                        <img
                          className="card-img-top"
                          src="https://picsum.photos/209/100?image=1050"
                          alt="Card  cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bolder">
                            {chapter.name}
                          </h5>
                          <p className="card-text text-muted">
                            <TextTruncate
                              line={2}
                              element="span"
                              truncateText="…"
                              text={chapter.description}
                            />
                          </p>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseDetails;
