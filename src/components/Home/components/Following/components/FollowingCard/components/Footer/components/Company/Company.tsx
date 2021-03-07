import { ReactElement } from "react";
import "./Company.css"

import Icon from "../Icon/Icon"
import Text from "../Text/Text"

export default function FollowingCardCompany(props: {value: string | null}): ReactElement{
    return(
        <div className = "following-card-company">
            <Icon 
                className = "company-icon"
                src       = {process.env.PUBLIC_URL + "/assets/company.png"} />
            <Text 
                className = "company-text"
                value     = {props.value} />
        </div>
    )
}