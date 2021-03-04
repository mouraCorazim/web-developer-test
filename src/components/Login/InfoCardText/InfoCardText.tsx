import React, {ReactElement} from 'react'

type InfoCardTextProps = {text: string}

export default function InfoCardText(props: InfoCardTextProps): ReactElement{
    return React.createElement('p', {className: ""}, props.text)
}