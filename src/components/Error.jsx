import React from 'react'
import '../style/Error.css'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className='error'>
        <h1>Oops!</h1>
        <p>404 - page not found</p>
        <p>The page you're looking for doesn't exist or may have been moved.
We couldn't find the page you requested. It might have been removed.
renamed, or it never existed in the first place.</p>
<button>
    <Link className='error-link' to='/'>Back To Home</Link>
</button>
    </div>
  )
}
