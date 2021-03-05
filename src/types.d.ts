import { ReactSVGElement, ReactElement, FunctionComponent, FunctionComponentElement, ReactChildren, Props, ReactNode } from "react"

export = AppTypes
export as namespace AppTypes

declare namespace AppTypes{
    type SubTextProps       = {text: string}
    type PrincipalTextProps = {text: string}
    type InfoCardTitleProps = {text: string}
    type InfoCardTextProps  = {text: string}
    type HeaderProps        = {children: ReactNode}
    type CardsWrapperProps  = {children: ReactNode}
    type InfoCardImageProps = {svg: ReactSVGElement}
    type InfoCardProps      = {title: string, text: string, svg: ReactSVGElement}
    type InputWrapperProps  = Props & {children: ReactNode}
    type InputProps         = Props
    type LabelProps         = Props
    
    type RouteProp          = {
        component: FunctionComponent,
        exact    : boolean, 
        path     : string
    }

    type InputWrapperChild  = {
        component: FunctionComponent,
        children : ReactNode
        props    : InputProps | LabelProps
    }
    
    type HeaderChild = { 
        component: FunctionComponent, 
        children : ReactNode
    }
}