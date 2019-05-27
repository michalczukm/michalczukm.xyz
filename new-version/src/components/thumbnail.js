import React from 'react'

export default props => (
  <div
    style={{
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    width={'48px'}
    height={'48px'}
  >
    <img style={{
        maxWidth: '48px',
        height: 'auto'
    }} {...props} src="https://i.stack.imgur.com/W9C4b.jpg" role="img" />
  </div>
)
