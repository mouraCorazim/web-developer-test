import { createElement, ReactElement } from "react"
import "./User.css"

export default function FollowingCardUser(props: {value: string}): ReactElement{

    const followingCardUserProperties = {
        className: "following-card-user"
    }

    return createElement('p', followingCardUserProperties, props.value)
}