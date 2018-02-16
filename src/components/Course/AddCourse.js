import React from 'react';
import PropTypes from 'prop-types';
import './addCourse.css';
import Courses from '../../courses';

class AddCourse extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {
        title: '',
        description: ''
      }
    }
  }

  onFormChange = event => {
    const field = event.target.getAttribute('name');
    const value = event.target.value;
    const newCourse = Object.assign({}, this.state.course);
    newCourse[field] = value;
    this.setState({ course: newCourse });
  }

  onClickNext = () => {
    const { title, description } = this.state.course;
    const course = new Courses();
    course.title = title;
    course.description = description;
    course.addCourse();
    //eslint-disable-next-line no-console
    console.log(course.courses);
    this.props.history.push('/');
  }

  render() {
    return (
      <section className="page-container add-course page-container">
        <header>
          <h2>Add course</h2>
        </header>
        <div className="course-form">
          <div className="card">
            <div className="input-container">
              <input name="title" type="text" value={this.state.course.title} onChange={this.onFormChange} placeholder="Title" />
            </div>
            <div className="input-container">
              <textarea name="description" rows="5" value={this.state.course.description} placeholder="Description" onChange={this.onFormChange}></textarea>
            </div>
            <div className="button-container">
              <button className="action-button medium" onClick={this.onClickNext}>Submit</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
AddCourse.propTypes = {
  props: PropTypes.object.isRequired
}
export default AddCourse;
