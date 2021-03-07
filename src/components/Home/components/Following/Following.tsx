import { createElement, ReactElement, useState } from "react";
import { Request } from "../../../../services/githubAPI/Request";
import { requestConfig, urlRequestPage } from "../../../../services/githubAPI/UserResources";

import FollowingCard from "./components/FollowingCard/FollowingCard"

function makeFollowingCard(followingUser: any, key: number): ReactElement{

    const properties = {
        key      : key,
        avatar   : followingUser.avatar_url,
        user     : followingUser.name,
        login    : followingUser.login,
        bio      : followingUser.bio,
        location : followingUser.location,
        company  : followingUser.company
    }

    return createElement(FollowingCard, properties)

}

export default function Following(): ReactElement{
    
    const [state, updateState] = useState({ isLoading: true, page: 1, data: [{}] })
    
    if(state.isLoading){

        const token: string | null = localStorage.getItem("__TOKEN__")

        Request()
            .url(urlRequestPage({page: state.page, resource: "following"}))
            .options(requestConfig(token))
            .join(fetch)
            .then((res: Response)     => res.json())
            .then((json: Array<JSON>) => updateState({isLoading: false, page: 1, data: json}))
    }
        
    return state.isLoading?
            (<p>Loading...</p>) : (<>{state.data.map(makeFollowingCard)}</>)
}