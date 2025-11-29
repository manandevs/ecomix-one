import React from "react";

interface HeadingProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

export default function Heading({ text, className, children }: HeadingProps) {
  return (
    <h1 className={`font-RecoletaMedium ${className}`}>
      {children}
      {text && text}
    </h1>
  );
}
