import Seo from "@/ui/components/seo";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";
import { RiUser6Fill } from "react-icons/ri";
import Spinner from "@/ui/design-system/spinner/spinner";
import Logo from "@/ui/design-system/logo/logo";
import Avatar from "@/ui/design-system/avatar/avatar";


export default function Home() {
  return (
    <>
      {/* <div className="flex items-center gap-4 p-10">
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />
      </div>
      <Seo title="Monkeys Coders" description="Welcome to the Monkeys Coders website!" />
      <div className="flex items-center gap-4 p-10">
        <Button size="small" isLoading>
          accent
        </Button>
        <Button 
          size="small"
          icon={{icon:RiUser6Fill}}
          iconPosition="left"
          isLoading
        >
          accent
        </Button>
        <Button
          size="small"
          icon={{icon:RiUser6Fill}}
          isLoading
        >
          accent
        </Button>
        <Button isLoading size="small" variant="secondary">secondary</Button>
        <Button isLoading size="small" variant="outline">outline</Button>
        <Button  isLoading size="small" variant="disabled" disabled>disabled</Button>
        <Button isLoading size="small" variant="ico" icon={{icon: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="small">
          accent
        </Button>
        <Button 
          size="small"
          icon={{icon:RiUser6Fill}}
          iconPosition="left"
          
        >
          accent
        </Button>
        <Button
          size="small"
          icon={{icon:RiUser6Fill}}
          
        >
          accent
        </Button>
        <Button  size="small" variant="secondary">secondary</Button>
        <Button isLoading size="small" variant="outline">outline</Button>
        <Button   size="small" variant="disabled" disabled>disabled</Button>
        <Button  size="small" variant="ico" icon={{icon: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button variant="accent">accent</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="disabled" disabled>disabled</Button>
        <Button variant="ico" icon={{icon: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large" variant="accent">accent</Button>
        <Button size="large" variant="secondary">secondary</Button>
        <Button size="large" variant="outline">outline</Button>
        <Button size="large" variant="disabled" disabled>disabled</Button>
        <Button size="large" variant="ico" icon={{icon: RiUser6Fill }} iconTheme="secondary" />
        <Button size="large" variant="ico" icon={{icon: RiUser6Fill }}  iconTheme="gray"/>
        <Button size="large" variant="ico" icon={{icon: RiUser6Fill }} />
      </div>

      <div className="space-x-5">
        <Typography theme="primary" variant="body-lg" component="h1">
          coders monkeys
        </Typography>
        <Typography theme="secondary" variant="h1" component="div">
          coders monkeys
        </Typography>
        <Typography  variant="lead" component="div">
          coders monkeys
        </Typography>
        <Typography variant="body-sm" component="div">
          coders monkeys
        </Typography>
        <Typography variant="caption4" component="div">
          coders monkeys
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          coders monkeys
        </Typography>
      </div> */}
      <div className= "max-w-6xl mx-auto p-y-10 space-y-10 ">

        <div className="flex  items-start gap-7">
          {/* Spinners */}
          <div className= "space-y-2">
            <Typography variant="caption2" weight="medium" >
              Spinners
            </Typography>
            <div className="flex items-center gap-2 p-5 border  border-gray-400 rounded">
              <Spinner size="small" />
              <Spinner />
              <Spinner size="large" />
            </div>
          </div>
        </div>

        <div className="flex  items-start gap-7">
          {/* Avatar */}
          <div className= "space-y-2">
            <Typography variant="caption2" weight="medium" >
              Avatar
            </Typography>
            <div className="flex items-center gap-2 p-5 border  border-gray-400 rounded">
              <Avatar size="small"  src="/assets/images/avatar.png" alt="Avatar de Daniel" />
              <Avatar src="/assets/images/avatar.png" alt="Avatar de Daniel" />
              <Avatar size="large" src="/assets/images/person.jpg" alt="Avatar de Daniel" />
            </div>
          </div>
        </div>

        <div className="flex  items-start gap-7">
          {/* Logo */}
          <div className= "space-y-2">
            <Typography variant="caption2" weight="medium" >
              Logo
            </Typography>
            <div className="flex items-center gap-2 p-5 border  border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}