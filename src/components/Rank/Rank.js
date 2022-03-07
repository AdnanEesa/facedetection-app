import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className=' ma4 mt0'>
      <div className='white f4 fw3'>{`${name}, your current entry count is`}</div>
      <div className='white f1 fw5'>{entries}</div>
    </div>
  );
};

export default Rank;
