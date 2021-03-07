import {ReactElement, createElement} from 'react'
import {InputWrapperProps} from '../../../../types'
import "./InputWrapper.css"

export default function InputWrapper(props: InputWrapperProps): ReactElement{

    const inputWrapperProperties = {
        className: "input-wrapper"
    }

    return createElement('div', inputWrapperProperties, props.children)
}