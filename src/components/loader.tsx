import React, { FunctionComponent } from 'react';
import './loader.css';
  
const Loader: FunctionComponent = () => {
   
  return (
    <div id="loading">
    <div className="pokeball" id="normal"></div>
    <div className="pokeball" id="great"></div>
    <div className="pokeball" id="ultra"></div>
    <div className="pokeball" id="master"></div>
    <div className="pokeball" id="safari"></div>
  </div>
  );
}
   
export default Loader;