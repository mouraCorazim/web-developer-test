import { createElement, ReactElement } from "react";
import "./Text.css"

export default function LocationText(props: {value: string | null, className: string}): ReactElement{

    const locationTextProperties = {
        className: props.className
    }

    return createElement('p', locationTextProperties, props.value)
}