import { ReactElement } from "react";

import Name from "./components/Name/Name"
import Description from "./components/Description/Description"
import Footer from "./components/Footer/Footer";

export default function RepositoryCard(): ReactElement{
    return (
        <>
            <Name />
            <Description />
            <Footer />
        </>
    )
}