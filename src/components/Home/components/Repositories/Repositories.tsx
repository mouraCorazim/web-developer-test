import { ReactElement } from "react";

import Name from "./components/Name/Name"
import Description from "./components/Description/Description"
import Footer from "./components/Footer/Footer";

export default function Repositories(): ReactElement{
    return (
        <>
            <h1> Repositories </h1>

            <Name />
            <Description />
            <Footer />
        </>
    )
}