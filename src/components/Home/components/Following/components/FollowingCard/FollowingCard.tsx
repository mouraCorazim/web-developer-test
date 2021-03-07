import { ReactElement } from "react"
import { FollowingCardProps } from "../../../../../../types"
import "./FollowingCard.css"

import Header from "./components/Header/Header"
import Image from "./components/Image/Image"
import Line from "../../../../../commons/Line/Line"

export default function FollowingCard(props: FollowingCardProps): ReactElement{
    return(
        <>
            <div className = "following-card">  
                <Image 
                    src = {props.avatar} />
                <div className = "following-card-infos">
                    <Header
                        login = {props.login} />
                </div>
            </div>
            
            <Line />
        </>
    )
}