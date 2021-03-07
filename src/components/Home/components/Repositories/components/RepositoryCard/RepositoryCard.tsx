import { ReactElement } from "react";
import { RepositoryCardProps } from "../../../../../../types";
import "./RepositoryCard.css"

import Name from "./components/Name/Name"
import Description from "./components/Description/Description"
import Footer from "./components/Footer/Footer";
import Line from "../../../../../commons/Line/Line";

export default function RepositoryCard(props: RepositoryCardProps): ReactElement{
    return (
        <div className = "repository-card">
            <Name 
                value = {props.title} />
            <Description 
                value = {props.description} />
            <Footer 
                language  = {props.language} 
                updatedAt = {props.updatedAt} />

            <Line />
        </div>
    )
}