import { createElement, ReactElement } from "react";
import "./Logo.css"

export default function Logo(): ReactElement{

    const logoProperties = {
        className: "logo",
        src: process.env.PUBLIC_URL + "/assets/github.png"
    }

    return createElement('img', logoProperties)
}