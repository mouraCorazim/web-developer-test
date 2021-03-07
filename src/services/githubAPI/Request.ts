import { ObjectRequest } from "../../types"

export function Request(context: ObjectRequest = {url: "", options: undefined}){

    const _isValid = () => context.options && context.url !== "" 

    return {
        url     : (url: string)          => context.url !== "" ? Request(context): Request(Object.assign(context, {url: url})),
        options : (options: RequestInit) => context.options    ? Request(context): Request(Object.assign(context, {options: options})),
        join    : (fn: Function)         => _isValid()         ? fn(context.url, context.options)   : null
    }
}