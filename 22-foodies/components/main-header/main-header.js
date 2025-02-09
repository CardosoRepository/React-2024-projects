import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import {NavLinkComponent} from "@/components/main-header/nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/public">
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLinkComponent href={'/meals'}>Browse Meals</NavLinkComponent>
                        </li>
                        <li>
                            <NavLinkComponent href={'/community'}>Foodies Community</NavLinkComponent>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}