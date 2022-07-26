import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

type HTMLButtonElement = MouseEventHandler
export interface FrieldsProps {
    name: string;
    profissao: string;
    avatar: string;
    buttonCopy: string;
    href: string;
    copy:  HTMLButtonElement
}

export interface ServicesPropss {
    title: string;
    paragraph: string;
    logo: StaticImageData
}

export interface ProjectProps {
    title: string;
    paragraph: string;
}

export interface HomeProps {
    name: string;
    title: string;
    typeWriter: string;
    link: string;
}

export interface ServerProps {
    name: string;
    value: string;
    description: string;
}

export interface WhoProps {
    who: string;
    profile: string;
    title: string;
}

