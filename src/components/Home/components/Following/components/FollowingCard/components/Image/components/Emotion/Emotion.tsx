import { createElement, ReactElement } from "react";
import "./Emotion.css"

export default function FollowingCardImageEmotion(): ReactElement{

    const emotionProperties = {
        className: "emotion"
    }

    return createElement('div', emotionProperties)
}