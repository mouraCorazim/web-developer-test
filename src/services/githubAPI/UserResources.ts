import { PageRequest } from "../../types";

export function urlRequestPage(param: PageRequest): string{
    switch(param.resource){
        case "repos"     : return `https://api.github.com/user/repos?page=${param.page}&per_page=3`
        case "following" : return `https://api.github.com/user/following?page=${param.page}&per_page=3`
    }
}

export function requestConfig(token: string | null): RequestInit{
    return { method    : "GET",
             mode      : "cors",
             headers   : { 
                "Accept"        : "application/json",
                "Authorization" : "token " + token   } }
}
