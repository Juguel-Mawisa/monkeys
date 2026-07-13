import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Coders Monkey",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formation",
        baseUrl: "https://youtube.com/@juguelmawisa",
        type: "external"
    }
]
const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/mon-espace",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal"
    }
]
const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    }
]
export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com/@juguelmawisa",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/juguel=mawisa",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "slack",
        baseUrl: "https://coders=monkeys.slack.com",
        type: "external",
        icon: RiSlackFill,
    } 
]

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks
    },
    {
        label: "Utilisaters",
        links: footerUsersLinks
    },
    {
        label: "Informations",
        links: footerInformationLinks
    },
    {
        label: "Réseaux",
        links: footerSocialNetworksLinks
    }
]

