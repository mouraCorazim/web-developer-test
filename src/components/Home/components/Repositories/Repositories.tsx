import { ReactElement } from "react";

import RepositoryCard from "./components/RepositoryCard/RepositoryCard";


export default function Repositories(): ReactElement{
    return (
        <>
            <RepositoryCard 
                description = "Exercicio de produção de algoritmo de cifração."
                language    = "JavaScript"
                updatedAt   = "Hoje" 
                title       = "vigen-re-cypher" />
            
            <RepositoryCard 
                description = "Exercicio de produção de algoritmo de cifração."
                language    = "JavaScript"
                updatedAt   = "Hoje" 
                title       = "vigen-re-cypher" />

            <RepositoryCard 
                description = "Exercicio de produção de algoritmo de cifração."
                language    = "JavaScript"
                updatedAt   = "Hoje" 
                title       = "vigen-re-cypher" />

        </>
    )
}