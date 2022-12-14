import React from 'react'
//
import Form from './partials/Form'
import Image from './partials/Image'


const Login = () => {
  return (
    <div>
       <div>
        
            {/* --- left side : form ---  */}
            <div>
                <Form />
            </div>

            {/* --- right side : image --- */}
            <div>
                <Image />
            </div>       

       </div> 
    </div>
  )
}

export default Login