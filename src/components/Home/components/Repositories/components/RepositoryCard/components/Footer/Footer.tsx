import { ReactElement } from "react"
import { RepositoryCardFooterProps } from "../../../../../../../../types"
import "./Footer.css"

import Language from "./components/Language/Language"
import UpdatedAt from "./components/UpdatedAt/UpdatedAt"

export default function FollowingCardFooter(props: RepositoryCardFooterProps): ReactElement{
    return(
        <div className = "following-card-footer">
            <Language 
                value = {props.language} />
            <UpdatedAt 
                value = {props.updatedAt} />
        </div>
    )
}