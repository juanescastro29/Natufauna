import React from 'react'
import PropTypes from "prop-types";

function Information({ title, text }) {
  return (
    <div className='container p-4'>
      <h1 className='text text-dark'>
        {title}
      </h1>
      <p className='border border-2 border-dark bg-white'>
        {text}
      </p>
    </div>
  )
}

Information.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Information