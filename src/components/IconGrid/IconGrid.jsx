import React from 'react';
import './IconGrid.css';


const IconGrid = () => {
  return (
    <div className="container iconGridSection">
      <h1>Unsere Dienstleistungen</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 icon-item">
          <i className="fas fa-wheelchair"></i>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 icon-item">
          <i className="fas fa-parking"></i>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 icon-item">
          <i className="fas fa-wifi"></i>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 icon-item">
          <i className="fas fa-smoking-ban"></i>
        </div>
      </div>
    </div>
  );
};

export default IconGrid;
