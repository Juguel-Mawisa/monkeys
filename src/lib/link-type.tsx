export type LinkType = "internal" | "external"; //typage de la lib, pour apporter encore un peu plus de securité

export const LinkTypes: Record<string, LinkType> = { //tellement que la constante est un objet, elle ne peut pas être directement typé par un type qui definie des string, pour ce nous alons utiliser la synthaxe "Record" pour faire reference à une clé "string", et une valeur, mais une valeur qui dois être en fonction du type "LinkType"
    INTERNAL: "internal",
    EXTERNAL: "external",
}