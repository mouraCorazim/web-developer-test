import { createElement, ReactElement } from "react"
import "./Description.css"

export default function FollowingCardDescription(props: {value: string | null}): ReactElement{

    const followingCardDescriptionProperties = {
        className: "following-card-description"
    }

    return createElement('p', followingCardDescriptionProperties, props.value)
}