import {ReactNode} from 'react'
import './knapp.scss'

type KnappStr = "liten" | "stor" | "normal";
type KnappType = "primær" | "sekundær" | "tertiær";

interface Props {
    onClick: () => void;
    str?: KnappStr
    type?: KnappType
    children: ReactNode
}

export default function Knapp({onClick, str = "normal", type = "primær", children}: Props) {
    return (
        <>
            <button className={str + " " + type} onClick={onClick}>{children}</button>
        </>
    )
}

