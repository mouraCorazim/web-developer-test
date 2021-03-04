import React, {ReactElement, createElement} from 'react'
import {InputWrapperProps} from '../../../types'

export default function InputWrapper(props: InputWrapperProps): ReactElement{
    return createElement('div', {className: ""}, props.children)
}