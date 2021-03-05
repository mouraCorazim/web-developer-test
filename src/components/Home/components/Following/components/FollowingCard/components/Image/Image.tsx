import { createElement, ReactElement } from "react"

import Photo from "./components/Photo"
import Emotion from "./components/Emotion"

export default function FollowingCardImage(): ReactElement{
    return (
        <>
            <Photo />
            <Emotion />
        </>
    )
}