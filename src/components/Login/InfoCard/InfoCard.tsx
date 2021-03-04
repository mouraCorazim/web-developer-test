import React, {ReactElement} from 'react'

import InfoCardText from '../InfoCardText/InfoCardText'
import InfoCardTitle from '../InfoCardTitle/InfoCardTitle'

type InfoCardProps = {title: string, text: string, src: string}

export default function InfoCard(props: InfoCardProps): ReactElement{
    return (
        <>
            <InfoCardTitle
                text = {props.title} />
            <InfoCardText
                text = {props.text} />
        </>
    )
}