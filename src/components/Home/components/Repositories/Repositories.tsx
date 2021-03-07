import { createElement, ReactElement, useState } from "react";
import { Request } from "../../../../services/githubAPI/Request";
import { requestConfig, urlRequestPage } from "../../../../services/githubAPI/UserResources";

import RepositoryCard from "./components/RepositoryCard/RepositoryCard";

function makeRepositoryCard(repo: any, key: number){

    const cardProperties = {
        key         : key,
        title       : repo.name,
        description : repo.description,
        language    : repo.language,
        updatedAt   : repo.updatedAt
    }

    return createElement(RepositoryCard, cardProperties)
}

export default function Repositories(): ReactElement{

    const [state, updateState] = useState({ isLoading: true, page: 1, data: [{}] })

    if(state.isLoading){

        const token: string | null = localStorage.getItem("__TOKEN__")

        Request()
            .url(urlRequestPage({page: state.page, resource: "repos"}))
            .options(requestConfig(token))
            .join(fetch)
            .then((res: Response) => res.json())
            .then((json: Array<JSON>) => updateState({isLoading: false, page: 1, data: json}))
    }

    return state.isLoading?
            (<p>Loading...</p>) : (<>{state.data.map(makeRepositoryCard)}</>)

    
}