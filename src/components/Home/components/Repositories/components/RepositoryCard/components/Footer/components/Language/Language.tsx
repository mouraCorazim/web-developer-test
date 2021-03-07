import { ReactElement } from "react";
import "./Language.css"

import Icon from "./components/Icon/Icon"
import Text from "./components/Text/Text"

export default function RepositoryCardLanguage(props: {value: string}): ReactElement{
    return(
        <div className = "repository-card-language">
            <Icon />
            <Text
                language = {props.value} />
        </div>
    )
}