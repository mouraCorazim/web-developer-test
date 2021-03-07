import { createElement, ReactElement } from "react";
import "./UpdatedAt.css"

export default function UpdatedAtText(props: {value: string}): ReactElement{

    const updatedAtProperties = {
        className: "updated-at"
    }

    return createElement('p', updatedAtProperties, props.value)
}