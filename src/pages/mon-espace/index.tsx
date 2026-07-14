import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import UserAccounrContainer from "@/ui/modules/user-profile/user-account/user-accounr-container";


export default function UserAccount() {
  return (
    
    <>
        <Seo 
          title="Mon espace - Connection sur Monkeys Coders" 
          description="Description de la page"
        />
        <Layout withSidebar sessionStatus={REGISTERED}>
          <UserAccounrContainer/>
        </Layout>
        
    </>
  );
}


  