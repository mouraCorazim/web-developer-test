import { createElement, ReactElement } from "react"
import "./Description.css"

export default function RepositoryCardDescription(props: {value: string | null}): ReactElement{

    const repositoryCardDescriptionProperties = {
        className: "repository-card-description"
    }

    return createElement('p', repositoryCardDescriptionProperties, props.value)
}