import React, { useContext } from 'react'

import Button from '../../shared/components/FormElements/Button'
import { AuthContext } from '../../shared/context/auth-context'
import './PostItem.css'

const PostItem = props => {
    const auth = useContext(AuthContext)
    return(
        <li>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
            </div>
            <div>
                {auth.isLoggedIn &&
                    <Button>حذف</Button>
                }
            </div>
        </li>
    )
}

export default PostItem