import { ReactElement, createElement, FunctionComponent, ReactSVGElement } from 'react'
import {HeaderChild, InfoCardProps, InputWrapperChild} from '../../types'

import Button from '../commons/Button/Button'
import Footer from '../commons/Footer/Footer'
import Header from '../commons/Header/Header'
import Input from '../commons/Input/Input'
import Label from '../commons/Label/Label'
import Line from '../commons/Line/Line'
import CardsWrapper from './components/CardsWrapper/CardsWrapper'
import InfoCard from './components/InfoCard/InfoCard'
import InputWrapper from './components/InputWrapper/InputWrapper'
import PrincipalText from './components/PrincipalText/PrincipalText'
import SubText from './components/SubText/SubText'

function infoCardsData(title: string, text: string, svg: string): InfoCardProps{
    return { title: title , 
             text : text  , 
             svg  : svg   }
}

function makeInfoCardOfData(props: InfoCardProps, key: number): ReactElement{
    return createElement(InfoCard, { key: key, ...props })
}

const infoCardsDataList: InfoCardProps[] = [
    infoCardsData("Repos", "What are yours repositories?", process.env.PUBLIC_URL + "assets/folder.png"),
    infoCardsData("Following", "Who are you following?", process.env.PUBLIC_URL + "assets/follower.png"),
    infoCardsData("Update", "Are you need a update?",  process.env.PUBLIC_URL + "assets/refresh.png")
]

function inputWrapperChildData(component: FunctionComponent, props: any , children : ReactElement[] | string | null ): InputWrapperChild{
    return { component: component , 
             props    : props     ,
             children : children  }
}
            
function makeInputWrapperChildOfData(ch: InputWrapperChild, key: number): ReactElement{
    return createElement(ch.component, { key: key, ...ch.props }, ch.children)
}

const inputWrapperChildsDataList: InputWrapperChild[] = [
    inputWrapperChildData(Label, {for: "asdas"}, "Token"),
    inputWrapperChildData(Input, {type: "text"}, null),
    inputWrapperChildData(Button, {value: "login"}, null)
]

function headerChildsData(component: FunctionComponent, children: ReactElement[] | string | null ){
    return { component: component,
             children : children }
}

function makeHeaderChildOfData(ch: HeaderChild, key: number): ReactElement{
    return createElement(ch.component, {key: key}, ch.children)
}

const infoCards: ReactElement[] = infoCardsDataList.map(makeInfoCardOfData)

const inputWrapperChildren: ReactElement[] = inputWrapperChildsDataList.map(makeInputWrapperChildOfData)

const headerChildsDataList: HeaderChild[] = [
    headerChildsData(InputWrapper, inputWrapperChildren)
]

const headerChildren: ReactElement[] = headerChildsDataList.map(makeHeaderChildOfData)

export default function Login(): ReactElement{
    return(
        <>
            <Header
                children = {headerChildren} />

            <Line />

            <section>
                <PrincipalText
                    text = "See what in Github" />
                <SubText
                    text = "Access using a Github API token and come to see what are you on Github." />
                <CardsWrapper
                    children = {infoCards} />
                <SubText
                    text = "See all those contents paginated" />
            </section>

            <Line />
            
            <Footer />
        </>
    )
}