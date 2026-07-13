
import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

// interface pour typé les liens des listes de navigation 
export interface AppLinks {
    label: string,
    baseUrl: string,
    type: LinkType //typé au type du typage de la lib de gestion des testes des lines
    icon?: IconType, //ajout de la clé type icon, ajouter pour inserer les clés icons dans le tableau typé par cet interface
};

// interface pour typé la liste des liens de navigation 
export interface FooterLinks {
    label: string,
    links: AppLinks[],
}