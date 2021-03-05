import { ReactElement } from "react"

import Company from "./components/Company/Company"
import Location from "./components/Location/Location"

export default function FollowingCardFooter(): ReactElement{
    return(
        <>
            <Company />
            <Location />
        </>
    )
}