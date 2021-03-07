import {  ReactElement } from "react"
import "./Image.css"

import Photo from "./components/Photo/Photo"
import Emotion from "./components/Emotion/Emotion"

export default function HomeUserImage(props: {src: string}): ReactElement{
    return (
        <div className = "home-user-image">
            <Photo 
                src = {props.src} />
            <Emotion />
        </div>
    )
}