import React, {ReactElement} from 'react'

type SubtextProps = {text: string}

export default function SubText(props: SubtextProps): ReactElement{
    return React.createElement('p', {className: ""}, props.text)
}