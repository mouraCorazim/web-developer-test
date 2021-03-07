import { ReactElement } from "react"
import "./Header.css"
 
import User from "./components/User/User"

export default function FollowingCardHeader(props: {login: string}): ReactElement{
    return(
        <div className = "following-card-header">
            <User 
                value = {props.login} />
        </div>
    )
}