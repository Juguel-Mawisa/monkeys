import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";

export default function OnBoarding() {
  return (
    
    <>
        <Seo
          title="OnBoarding" 
          description="Description de la page onboarding"
        />
        <Layout sessionStatus={REGISTERED}>
          {/* <UserAccounrContainer/> */}
          <div className="flex items-center justify-center py-40 px-20">
                Welcome to onboarding
          </div>
        </Layout>
        
    </>
  );
}
    