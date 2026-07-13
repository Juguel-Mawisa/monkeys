import { firebaseLogoutUser } from "@/api/authentificattion"
import Box from "@/ui/design-system/box/box"
import Button from "@/ui/design-system/button/button"
import Typography from "@/ui/design-system/typography/typography"
import { toast } from "react-toastify"
import ActiveLink from "./active-link"


export default function UserAccountNavigation() {

    const handleLogoutUser = async () => {
            const {error} = await firebaseLogoutUser()
            if(error) {
                toast.error(error.message)
                return
            }
            toast.success("Vous êtes déconnecté avec succès!")
        }
  return (
    <Box className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
            <Typography variant="caption2" weight="medium">
               <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
            </Typography>
            <Typography variant="caption2" weight="medium">
               <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
            </Typography>
        </div>
        <Button action={handleLogoutUser} variant="danger">
            Déconnexion
        </Button>
    </Box>
  )
}
