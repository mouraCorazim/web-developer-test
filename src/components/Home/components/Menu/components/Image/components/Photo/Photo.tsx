import { createElement, ReactElement } from "react";
import "./Photo.css"

export default function FollowingCardImagePhoto(props: {src: string}): ReactElement{

    const followingCardImagePhotoProperties = {
        className: "following-card-image-photo", 
        src: props.src
    }

    return createElement('img', followingCardImagePhotoProperties)
}