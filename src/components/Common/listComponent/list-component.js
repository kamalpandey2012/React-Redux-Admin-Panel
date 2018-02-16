import React from 'react';
import PropTypes from 'prop-types';
import Courses from '../../../courses';

class ListComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: 'Courses',
      courses: [{ title: 'title 1', description: 'description 1' }, { title: 'title 2', description: 'description 2' }]
    }
  }

  onClickAdd = () => {
    this.props.history.push('/add-course');
  }

  onClickDelete = e => {
    const id = e.target.getAttribute('data-id');
    console.log('id', id);
    const newState = Object.assign({}, this.state);
    newState.courses = [...newState.courses.slice(0, id), ...newState.courses.slice(id + 1)]
    this.setState(newState);

  }

  loadCourses = (course, index) => {
    return (
      <div className="card" key={index}>
        <div className="title-container">
          {course.title}
        </div>
        <button className="alert" onClick={this.onClickDelete} data-id={index}>Delete</button>
      </div>
    )
  }
  render() {
    return (
      <div className="list">
        <header>
          <h2 className="title">
            {this.state.title}
          </h2>
        </header>

        <div className="list-container">
          {this.state.courses.map(this.loadCourses)}
        </div>
        <div className="card no-item">
          <div className="msg-container">
            No course found
          </div>

          <button className="action-button large" onClick={this.onClickAdd}>
            Add course
        </button>
        </div>
      </div>
    );
  }
}
ListComponent.propTypes = {
  props: PropTypes.object.isRequired
}

export default ListComponent;
