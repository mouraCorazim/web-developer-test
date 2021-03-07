import { ReactElement } from "react";
import FollowingCard from "./components/FollowingCard/FollowingCard";

export default function Following(): ReactElement{
    return (
        <>
            <FollowingCard 
                avatar   = ""
                user     = "Lucas Moura Corazim"
                login    = "mouraCorazim" 
                bio      = "Estudando dev web fó ever"
                location = "São Paulo - SP, Brasil" 
                company  = {null} />
            
            <FollowingCard 
                avatar   = ""
                user     = "Lucas Moura Corazim"
                login    = "mouraCorazim" 
                bio      = "Estudando dev web fó ever"
                location = "São Paulo - SP, Brasil" 
                company  = {null} />
            
            <FollowingCard 
                avatar   = ""
                user     = "Lucas Moura Corazim"
                login    = "mouraCorazim" 
                bio      = "Estudando dev web fó ever"
                location = "São Paulo - SP, Brasil" 
                company  = {null} />
        </>
    )
}