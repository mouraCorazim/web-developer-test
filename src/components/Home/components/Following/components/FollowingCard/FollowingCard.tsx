import { ReactElement } from "react"
import { FollowingCardProps } from "../../../../../../types"
import "./FollowingCard.css"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Image from "./components/Image/Image"
import Description from "./components/Description/Description"
import Line from "../../../../../commons/Line/Line"

export default function FollowingCard(props: FollowingCardProps): ReactElement{
    return(
        <>
            <div className = "following-card">  
                <Image 
                    src = {props.avatar} />
                <div className = "following-card-infos">
                    <Header 
                        user  = {props.user} 
                        login = {props.login} />
                    <Description 
                        value = {props.bio} />
                    <Footer 
                        company  = {props.company}
                        location = {props.location} />
                </div>
            </div>
            <Line />
        </>
    )
}