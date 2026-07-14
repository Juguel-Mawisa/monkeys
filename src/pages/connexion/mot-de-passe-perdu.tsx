import Seo from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import ForgotPasswordContainer from "@/ui/modules/authentification/forgot-password/forgot-password-container";
import { GUEST } from "@/lib/session-status";


export default function ForgotPassword() {
  return (
    
    <>
        <Seo 
          title="ForgotPassword sur Monkeys Coders" 
          description="Page de ForgotPassword"
        />
        <Layout sessionStatus={GUEST}>
          <ForgotPasswordContainer/>
        </Layout>
        
    </>
  );
}


  
