import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back icon

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <FaArrowLeft /> {/* Include the back icon */}
      </Link>
    </div>
  );
};

export default BackButton;
