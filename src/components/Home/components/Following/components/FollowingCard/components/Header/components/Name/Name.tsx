import { createElement, ReactElement } from "react"
import "./Name.css"

export default function FollowingCardName(props: {value: string}): ReactElement{

    const followingCardNameProperties = {
        className: "following-card-name"
    }

    return createElement('p', followingCardNameProperties, props.value)
}