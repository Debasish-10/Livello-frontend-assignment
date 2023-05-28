import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div id='wrapper'>
      {/* <img src="https://i.imgur.com/qIufhof.png" /> */}
      <div id='info'>
        <h3>This page could not be found</h3>
        <Link to={'/'}>Go Back to Home Page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
