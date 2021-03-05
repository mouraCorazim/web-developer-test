import { ReactElement } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Image from "./components/Image/Image"
import Description from "./components/Description/Description"

export default function FollowingCard(): ReactElement{
    return(
        <>  
            <Image />
            <Header />
            <Description />
            <Footer />
        </>
    )
}