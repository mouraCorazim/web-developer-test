import { createElement, ReactElement } from "react";
import "./Text.css"

export default function LanguageText(props: {language: string}): ReactElement{

    const languageTextProperties = {
        className: "language-text"
    }

    return createElement('p', languageTextProperties, props.language)
}