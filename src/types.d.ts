export = AppTypes
export as namespace AppTypes

declare namespace AppTypes{
    type SubTextProps       = {text: string}
    type PrincipalTextProps = {text: string}
    type InputWrapperProps  = {children: ReactElement[]}
    type HeaderProps        = {children: ReactElement[]}
    type InfoCardTitleProps = {text: string}
    type InfoCardTextProps  = {text: string}
    type InfoCardProps      = {title: string, text: string, src: string}
    type CardsWrapperProps  = {children: ReactElement[]}
}