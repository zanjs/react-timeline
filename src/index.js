import React from 'react';
import './styles.css';
import PropTypes from "prop-types";

export const TimelineItem = ({ title, date, body, side }) => {
  return (
    <div className={'timeline-item ' + side}>
      <div className='timeline-item-body'>
        <div className='timeline-item-header'>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        {body}
      </div>
    </div>
  );
};

export const Timeline = ({ children }) => {
  return <div className='timeline'> {children} </div>;
};


TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
}