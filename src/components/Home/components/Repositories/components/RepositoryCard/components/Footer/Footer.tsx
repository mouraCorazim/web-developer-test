import { ReactElement } from "react"

import Language from "./components/Language/Language"
import Update from "./components/Update/Update"

export default function FollowingCardFooter(): ReactElement{
    return(
        <>
            <Language />
            <Update />
        </>
    )
}