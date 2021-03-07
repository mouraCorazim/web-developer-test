import { ReactElement } from "react"
import "./Header.css"
 
import Name from "./components/Name/Name"
import User from "./components/User/User"

export default function FollowingCardHeader(props: {user: string, login: string}): ReactElement{
    return(
        <div className = "following-card-header">
            <Name 
                value = {props.user} />
            <User 
                value = {props.login} />
        </div>
    )
}