import React, {ReactElement} from 'react'

type InfoCardTitleProps = {text: string}

export default function InfoCardTitle(props: InfoCardTitleProps): ReactElement{
    return React.createElement('p', {className: ""}, props.text)
}