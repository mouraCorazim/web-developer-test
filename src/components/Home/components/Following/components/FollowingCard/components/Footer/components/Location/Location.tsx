import { ReactElement } from "react";
import "./Location.css"

import Icon from "../Icon/Icon"
import Text from "../Text/Text"

export default function FollowingLocation(props: {value: string | null}): ReactElement{
    return(
        <div className = "following-card-location">
            <Icon
                className = "location-icon"
                src       = {process.env.PUBLIC_URL + "/assets/location.png"} />
            <Text 
                className = "location-text"
                value     = {props.value}/>
        </div>
    )
}