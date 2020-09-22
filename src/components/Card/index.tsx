import React from 'react';

import './styles.css';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = props => {
  const { title } = props;
  const { children } = props;
  const { content } = props;
  return (
    <div className="card-container">
      <div className="header-content">{children}</div>
      <div className="body-content">
        {' '}
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;

/*
 */
