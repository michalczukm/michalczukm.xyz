import React from 'react'

export default props => (
  <div
    style={{
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    width={'52px'}
    height={'52px'}
  >
    <img
      alt="thumbnail"
      loading="lazy"
      style={{
        maxWidth: '52px',
        height: 'auto',
      }}
      {...props}
    />
  </div>
)
