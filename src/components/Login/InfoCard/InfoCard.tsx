import React, {ReactElement} from 'react'
import {InfoCardProps} from '../../../types'

import InfoCardText from '../InfoCardText/InfoCardText'
import InfoCardTitle from '../InfoCardTitle/InfoCardTitle'

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