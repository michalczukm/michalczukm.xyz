import React from 'react'

export default ({href, children, className}) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)
