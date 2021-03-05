import { ReactElement } from "react"
import Name from "./components/Name"
import User from "./components/User"

export default function FollowingCardHeader(): ReactElement{
    return(
        <>
            <Name />
            <User />
        </>
    )
}