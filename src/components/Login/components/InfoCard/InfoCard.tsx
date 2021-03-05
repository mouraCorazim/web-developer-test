import {ReactElement} from 'react'
import {InfoCardProps} from '../../../../types'

import Image from './components/Image'
import Text from './components/Text'
import Title from './components/Title'


export default function InfoCard(props: InfoCardProps): ReactElement{
    return (
        <>
            <Image 
                svg = {props.svg} />
            <Title
                text = {props.title} />
            <Text
                text = {props.text} />
        </>
    )
}