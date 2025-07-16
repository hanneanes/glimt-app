import {useEffect, useState} from 'react'
import Meny from "../../assets/icons/meny.svg";
import './header.scss'
import Knapp from "../../Komponenter/Knapper/Knapp";

export default function Header() {
    const [krymp, setKrymp] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setKrymp(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header className={krymp ? "krymp" : ""}>
                <h1>Glimt</h1>
                <Knapp onClick={() => console.log("Meny klikket")} str="normal" type="primær">
                    <img src={Meny} alt="Meny" />
                </Knapp>
            </header>
        </>
    )
}

