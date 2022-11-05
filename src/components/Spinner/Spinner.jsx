import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui container">
      <div className="ui active huge text loader">
        {props.message}
      </div>
    </div>
  )
};
Spinner.defaultProps = {
  message: "User Loading ..."
};



export default Spinner;