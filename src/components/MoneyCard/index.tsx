import React from 'react';

import './styles.css';

interface MoneyCardProps {
  title: string;
  cardValue: string;
  content: string;
  cardSpan: string;
}

const MoneyCard: React.FC<MoneyCardProps> = props => {
  const { title } = props;
  const { cardValue } = props;
  const { children } = props;
  const { content } = props;
  const { cardSpan } = props;
  return (
    <div className="moneycard-container">
      <div className="header-content">
        <h1>{title}</h1>
      </div>
      <div className="body-content">
        {' '}
        <h1>{cardValue}</h1>
        <span>{cardSpan}</span>
        <p>{content}</p>
        {children}
      </div>
    </div>
  );
};

export default MoneyCard;
