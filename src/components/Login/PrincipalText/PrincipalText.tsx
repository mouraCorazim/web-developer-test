import React, {ReactElement} from 'react'

type PrincipalTextProps = {text: string}

export default function PrincipalText(props: PrincipalTextProps): ReactElement{
    return React.createElement('p', {className: ""}, props.text)
}