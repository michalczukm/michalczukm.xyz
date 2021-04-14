import React from 'react'

export default ({href, children, className, title}) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer" title={title} >
    {children}
  </a>
)
