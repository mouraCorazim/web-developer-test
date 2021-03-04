import React, { FunctionComponent, ReactElement } from 'react'

type CardsWrapperProps = {children: ReactElement[]}

export default function CardsWrapper(props: CardsWrapperProps): ReactElement{
    return React.createElement('div', {className: ""}, props.children)
}