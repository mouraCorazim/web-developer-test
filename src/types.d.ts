import { 
    ReactSVGElement, 
    ReactElement, 
    FunctionComponent, 
    Props, 
    ReactNode } from "react"

export = AppTypes
export as namespace AppTypes

declare namespace AppTypes{
    type SubTextProps              = {text: string}
    type PrincipalTextProps        = {text: string}
    type InfoCardTitleProps        = {text: string}
    type InfoCardTextProps         = {text: string}
    type HeaderProps               = {children: ReactNode}
    type CardsWrapperProps         = {children: ReactNode}
    type InfoCardImageProps        = Props & {svg: string}
    type InputWrapperProps         = Props & {children: ReactNode}
    type InputProps                = Props
    type LabelProps                = Props
    type ButtonProps               = Props & {value: string}
    type RepositoryCardFooterProps = {language: string, updatedAt: string }

    type InfoCardProps = {
        title: string, 
        text : string, 
        svg  : string
    }
    
    type RouteProp = {
        component: FunctionComponent,
        exact    : boolean, 
        path     : string
    }

    type InputWrapperChild = {
        component: FunctionComponent,
        children : ReactNode
        props    : InputProps | LabelProps | ButtonProps
    }
    
    type HeaderChild = { 
        component: FunctionComponent, 
        children : ReactNode
    }

    type RepositoryCardProps = {
        title      : string, 
        language   : string, 
        updatedAt  : string,
        description: string | null
    }

    type FollowingCardProps = {
        avatar   : string,
        user     : string,
        login    : string, 
        location : string | null,
        bio      : string | null,
        company  : string | null
    }
}