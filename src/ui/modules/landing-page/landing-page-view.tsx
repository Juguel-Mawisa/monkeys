import CallToAtionView from "@/ui/design-system/call-to-action-view/call-to-ation-view";
import CodersMonkeysSlackView from "./components/coders-monkyes-slack/coders-monkeys-slack";
import CurrentCourseCtaView from "./components/current-course-cta-view/current-course-cta-view";
import FeaturedView from "./components/featured/featured-view";
import HeroTopView from "./components/hero-top/hero-top-view";
import HighLightListView from "./components/highlight-list/highLight-list-view";

export default function LandingPageView() {
  return (
    <div>
      <HeroTopView/>
      <FeaturedView/>
      <CodersMonkeysSlackView/>
      <CurrentCourseCtaView/>
      <HighLightListView/>
      <CallToAtionView/>
    </div>
  )
}
