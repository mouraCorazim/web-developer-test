import { ReactElement } from "react";

import RepositoryCard from "./components/RepositoryCard/RepositoryCard";

export default function Repositories(): ReactElement{
    return (
        <>
            <h1> Repositories </h1>

            <RepositoryCard />
        </>
    )
}