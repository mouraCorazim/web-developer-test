import { createElement, ReactElement } from "react";
import "./Icon.css"

export default function LanguageIcon(): ReactElement{

    const languageIconProperties = {
        className: "language-icon"
    }

    return createElement('div', languageIconProperties)
}