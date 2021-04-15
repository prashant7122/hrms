import React from 'react'
import authenticate from '../../hoc/authentication'

const Recruitment = () => {
    return (
        <div>
            This is recruitment
        </div>
    )
}

export default authenticate(Recruitment);
