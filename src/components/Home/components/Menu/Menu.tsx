import { ReactElement } from "react";
import "./Menu.css"

import Button from "../../../commons/Button/Button";
import Image from "./components/Image/Image"

export default function HomeMenu(props: {image: string}): ReactElement{
    return(
        <div className = "home-menu">
            <Button
                value = "Sign out" />
            <Image
                src = {props.image} />
        </div>
    )
}