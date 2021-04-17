import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import TextTruncate from "react-text-truncate";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../actions/courseActions";

import CustomJumbotron from "../components/CustomJumbotron";

import "./CoursesPage.css";

const CoursesPage = () => {
  const dispatch = useDispatch();

  const courseList = useSelector((state) => state.courseList);
  const { loading, error, courses } = courseList;

  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);
  return (
    <div className="courses">
      <CustomJumbotron title="COURSES" />
      <Container>
        <div className="card-deck">
          {courses &&
            courses.map((course) => (
              <div key={course._id} className="card">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/209/100?image=1050"
                  alt="Card  cap"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bolder">
                    {course.name}
                  </h5>
                  <p className="card-text text-muted">
                    <TextTruncate
                      line={2}
                      element="span"
                      truncateText="…"
                      text={course.description}
                    />
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {course.chapters.length <= 1
                        ? `${course.chapters.length} Lession`
                        : `${course.chapters.length} Lessions`}
                    </small>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default CoursesPage;
