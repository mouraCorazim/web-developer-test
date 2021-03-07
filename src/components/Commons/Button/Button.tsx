import { createElement, ReactElement } from "react";
import { ButtonProps } from "../../../types";
import "./Button.css"

export default function Button(props: ButtonProps): ReactElement{

    const buttonProperties = {
        className: "app-button"
    }

    return createElement('button', buttonProperties, props.value)
}