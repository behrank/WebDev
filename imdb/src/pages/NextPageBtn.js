import React from 'react';

const LoadMoreBtn = ({ text, onClick }) => (
    <div className="rmdb-loadmorebtn">
      <button className="btn btn-primary sm" onClick={onClick}>İleri</button>
    </div>
  )
  export default LoadMoreBtn;

  /*const LoadMoreBtn = ({ text, onClick }) => (
    <div className="rmdb-loadmorebtn" onClick={onClick}>
    <p>{text}</p>
  </div>
  )*/