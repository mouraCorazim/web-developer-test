import { requestConfig } from "../githubAPI/UserResources"

export async function isAuthenticToken(token: string | null): Promise<boolean>{

    const url: string = "https://api.github.com/user"

    const res = await fetch(url,  requestConfig(token))

    return res.status > 199 && res.status < 309
}


export function isValidToken(token: string | null): boolean{
    return token !== null && token.length > 7
}

export function storeToken(token: string | null){

    localStorage.setItem("__TOKEN__", JSON.stringify(token))

    return true
}