import React from 'react'
import { signInWithPopup} from 'firebase/auth'
import { auth, provider} from '../../Firebase'

function Login({setLogin}) {
    
    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        setLogin = true
    }
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login
