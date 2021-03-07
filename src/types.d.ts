import { 
    ReactSVGElement, 
    ReactElement, 
    FunctionComponent, 
    Props, 
    ReactNode, 
    ClassAttributes} from "react"

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
    type InputProps                = Props
    type LabelProps                = Props & {value: string}
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

    type PageRequest = {
        page: number, 
        resource: "repos" | "following"
    }

    type ObjectRequest = { 
        url    : RequestInfo, 
        options: RequestInit | undefined 
    }
}