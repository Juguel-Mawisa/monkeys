import Seo from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import RegisterContainer from "@/ui/modules/authentification/register/register-container";


export default function Register() {
  return (
    
    <>
        <Seo 
          title="Inscription sur Monkeys Coders" 
          description="Page d'Inscription"
        />
        <Layout>
          <RegisterContainer/>
        </Layout>
        
    </>
  );
}


  
