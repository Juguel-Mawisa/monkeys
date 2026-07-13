import Seo from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import LoginContainer from "@/ui/modules/authentification/login/login-container";
import UserAccounrContainer from "@/ui/modules/user-profile/user-account/user-accounr-container";


export default function Connetion() {
  return (
    
    <>
        <Seo 
          title="Mon espace - Connection sur Monkeys Coders" 
          description="Description de la page"
        />
        <Layout withSidebar>
          <UserAccounrContainer/>
        </Layout>
        
    </>
  );
}


  