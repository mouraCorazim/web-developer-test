import { ReactElement, createElement, useState} from 'react'
import {Redirect, useLocation} from 'react-router-dom'
import {InfoCardProps} from '../../types'
import { Auth } from '../../services/Auth/Auth'
import { 
    isAuthenticToken, 
    isValidToken, 
    storeToken } from '../../services/Auth/Token'
import "./Login.css"
    
import Input from '../commons/Input/Input'
import Label from '../commons/Label/Label'
import Footer from '../commons/Footer/Footer'
import Header from '../commons/Header/Header'
import Line from '../commons/Line/Line'
import CardsWrapper from './components/CardsWrapper/CardsWrapper'
import InfoCard from './components/InfoCard/InfoCard'
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

const infoCards: ReactElement[] = infoCardsDataList.map(makeInfoCardOfData)

export default function Login(): ReactElement{

    const [authenticToken, updateAuthToken] = useState(false)
    const location = useLocation()
    
    return (
        <>
            <Header>
                <div className = "input-wrapper">
                    <Label
                        for   = "input-token" 
                        value = "Token"/>
                    <Input
                        id   = "input-token" 
                        type = "text" 
                        required />
                    <button
                        onClick = { () => Auth("c4f37de17bafca064b5652710e7f04e066595368")
                                            .filter(isValidToken)
                                            .filter(isAuthenticToken)
                                            .store(storeToken)? updateAuthToken(true): null } > 
                        Login 
                    </button>
                </div>
            </Header>

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