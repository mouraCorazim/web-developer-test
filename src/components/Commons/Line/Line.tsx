import { createElement, ReactElement } from "react"
import "./Line.css"

export default function Line(): ReactElement{

    const lineProperties = {
        className: "div-line"
    }

    return createElement('div', lineProperties)
}