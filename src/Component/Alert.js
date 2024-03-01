import React from 'react'

function Alert() {
    const LAlert = {
        height:'40px'}
  return (<>
  <div className="alert alert-warning alert-dismissible fade show" role="alert" style={LAlert}>
  <strong>Hi there!</strong> Sign in. to continue Car Park
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  
  
  </>
  )
}

export default Alert
