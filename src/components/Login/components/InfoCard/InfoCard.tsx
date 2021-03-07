import {ReactElement} from 'react'
import {InfoCardProps} from '../../../../types'
import "./InfoCard.css"

import Image from './components/Image/Image'
import Text from './components/Text/Text'
import Title from './components/Title/Title'


export default function InfoCard(props: InfoCardProps): ReactElement{
    return (
        <div className = "info-card">
            <Image 
                svg = {props.svg} />
            <Title
                text = {props.title} />
            <Text
                text = {props.text} />
        </div>
    )
}