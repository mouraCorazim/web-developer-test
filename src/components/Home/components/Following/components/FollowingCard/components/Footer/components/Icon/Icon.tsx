import { createElement, ReactElement } from "react";
import "./Icon.css"

export default function CompanyIcon(props: {src: string, className: string}): ReactElement{

    const companyIconProperties = {
        className: props.className,
        src: props.src
    }

    return createElement('img', companyIconProperties)
}