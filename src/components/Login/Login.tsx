import React, { ReactElement, createElement } from 'react'
import {InfoCardProps} from '../../types'

import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import Input from '../Commons/Input/Input'
import CardsWrapper from './CardsWrapper/CardsWrapper'
import InfoCard from './InfoCard/InfoCard'
import InputWrapper from './InputWrapper/InputWrapper'
import PrincipalText from './PrincipalText/PrincipalText'
import SubText from './SubText/SubText'


const infoCards: InfoCardProps[] = [
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

const inputWrapperChilds: ReactElement[] = [
    createElement(Input)
]

const headerChilds: ReactElement[] = [
    createElement(InputWrapper, {children: inputWrapperChilds})
]

export default function Login(): ReactElement{
    return(
        <>
            <Header
                children = {headerChilds} />
            <PrincipalText
                text = "See what in Github" />
            <SubText
                text = "Access using a Github API token and come to see what are you on Github." />
            <CardsWrapper
                children = {infoCards.map((props: InfoCardProps): ReactElement => createElement(InfoCard, { ... props }))} />
            <SubText
                text = "See all those contents paginated" />
            <Footer />
        </>
    )
}