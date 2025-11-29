import React from 'react'

interface UnProtectedLayoutProps {
  children: React.ReactNode;
}

const UnProtectedLayout: React.FC<UnProtectedLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>{children}</React.Fragment>
  )
}

export default UnProtectedLayout