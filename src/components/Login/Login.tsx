import React, { ReactElement, createElement } from 'react'

import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import CardsWrapper from './CardsWrapper/CardsWrapper'
import InfoCard from './InfoCard/InfoCard'
import PrincipalText from './PrincipalText/PrincipalText'
import SubText from './SubText/SubText'

type InfoCardProp = {title: string, text: string, src: string}

const infoCards = [
    { title: "Repos"
    , text : "What are yours repositories?" 
    , src  : ""                             },

    { title: "Following"
    , text : "Who are you following?"
    , src  : ""                             },

    { title: "Update"
    , text : "Are you need a update?"
    , src  : ""                             },
]

export default function Login(): ReactElement{
    return(
        <>
            <Header />
            <h1> Login </h1>

            <PrincipalText
                text = "See what in Github" />

            <SubText
                text = "Access using a Github API token and come to see what are you on Github." />
            
            <CardsWrapper
                children = {infoCards.map((props: InfoCardProp) => createElement(InfoCard, { ... props }))} />

            <SubText
                text = "See all those contents paginated" />

            <Footer />
        </>
    )
}