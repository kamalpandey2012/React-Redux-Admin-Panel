import React from 'react';
import List from './Common/listComponent/list-component';
import PropTypes from 'prop-types';

const HomePage = ({ history }) => {
  return (
    <div className="page-container">
      <List history={history} />
    </div>
  );
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired
}


export default HomePage;
