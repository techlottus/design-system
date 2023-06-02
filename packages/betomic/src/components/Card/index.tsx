import React, { Children } from "react";
import cn from "classnames";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type CardComposition = {
  Header: React.FC<CardProps>;
  Body: React.FC<CardProps>;
  Footer: React.FC<CardProps>;
};

const CardChild: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={className}>{children}</div>
  );
};

const Card: React.FC<CardProps> & CardComposition = (props) => {

  const { children, className } = props;

  const cardClasses = cn("flex flex-col p-4 bg-white rounded shadow-sm hover:shadow", className);

  return (
    <div className={cardClasses}>
      {Children.map(children, child => {
        if (React.isValidElement(child)) {
          const newChild = React.cloneElement(child);
          return newChild;
        }
        return;
      })}
    </div>
  );
};

Card.Header = CardChild;
Card.Body = CardChild;
Card.Footer = CardChild;

export default Card;