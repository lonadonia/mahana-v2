import React from 'react';

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.5,
  className = "",
  ...props 
}) => {
  return (
    <div
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export default FadeIn;
