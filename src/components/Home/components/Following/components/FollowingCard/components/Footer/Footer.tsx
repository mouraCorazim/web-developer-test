import { ReactElement } from "react"
import "./Footer.css"

import Company from "./components/Company/Company"
import Location from "./components/Location/Location"

export default function FollowingCardFooter(props: {company: string | null, location: string | null}): ReactElement{
    return(
        <div className = "following-card-footer">
            <Company 
                value = {props.company} />
            <Location 
                value = {props.location} />
        </div>
    )
}