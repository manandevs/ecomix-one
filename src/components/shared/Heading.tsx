import React from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

export default function Heading({ text, className }: HeadingProps) {
  return (
      <h1 className={`font-RecoletaMedium ${className}`}>{text}</h1>
  );
}
