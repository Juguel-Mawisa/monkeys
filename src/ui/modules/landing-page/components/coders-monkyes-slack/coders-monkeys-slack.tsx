import { LinkTypes } from "@/lib/link-type";
import Container from "@/ui/components/container/container";
import Button from "@/ui/design-system/button/button";
import Logo from "@/ui/design-system/logo/logo";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";


export default function CodersMonkeysSlackView() {
  return (
    <Container className="flex justify-between">
        <div className="flex flex-col justify-center max-w-2xl space-y-5">
            <div className="flex items-center gap-2">
                <Logo size="very-small"/>
                <Typography variant="caption2" component="span" weight="medium">
                    Coders  Monkeys
                </Typography>
            </div>
            <Typography variant="h2" component="h2">
                Rejoins-nous sue le slack de singes codeurs
            </Typography>
            <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                Rejoins-nous sue le slack de singes codeurs
            </Typography>
            <Button baseUrl="/#" linkType= {LinkTypes.EXTERNAL}>
                Rojoindre le groupe d'aide
            </Button>
        </div>
        <div className="relative w-[600px] h-[600px]">
            <Image
            fill
            src={"/assets/svg/logo-slack.svg"}
            alt="Groupe slack Coders monkeys"
            />
        </div>
    </Container>
  )
}
