import Container from '../container/container'
import Typography from '@/ui/design-system/typography/typography'
import Image from 'next/image'
import {footerLinks } from './app-links'
import {v4 as uuidv4} from "uuid"
import { FooterLinks } from '@/types/app-links'
import ActiveLink from './active-link'
import SocialNetworksButtons from './social-networks-buttons'
import { LinkTypes } from '@/lib/link-type'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    
    const footerNavigationLink = footerLinks.map((colomnLinks) =>( 
        <FooterLink key={uuidv4()} data={colomnLinks}/>
        
    ))
  return (
    <div className='bg-gray'>
        <Container className='flex justify-between pt-16'>
            <div className='flex flex-col items-center gap-1'>
                <Typography
                    variant='caption1'
                    theme='white'
                    weight='medium'
                >
                    Formations gratuites
                </Typography>
                <Typography
                    variant='caption3'
                    theme='gray'
                >
                    Abonnes-toi à la chaine
                </Typography>
                <a href="https://youtube.com/@juguelmawisa" target='_blank'>
                    <Image
                    src="/assets/svg/YTB.svg"
                    width={229}
                    height={216}
                    alt='Juguel mawisa | Youtube'
                    />
                </a>
            </div>

            <div className='flex gap-7'>
                 {footerNavigationLink}
                 
            </div> 
        </Container>
        <Container className='pt-9 pb-11 space-y-11'>
            <hr className='text-gray-800' />
            <div className='flex items-center justify-between'>
                <Typography variant='caption4' theme='gray'>
                    {`Copyright © ${currentYear} | Propulsed by`}{" "}
                    <a 
                        href="https://juguel-mawisa.vercel.app" 
                        target='_blank' 
                        className='underline'
                    >
                        Juguel Mawisa
                    </a>
                    {`  - Kadea Academy`}
                </Typography>
                <div className=''>
                    <SocialNetworksButtons theme='gray'/>
                </div>
            </div>
        </Container>

    </div>
  )
}



interface FooterLinkProps {
    data: FooterLinks; //interface type du tableau des données global à mapper
}

const FooterLink = ({ data }: FooterLinkProps) =>{
    const linksList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}> {link.label} </ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target = "_blank"> {link.label} </a>
            )}
        </div>
    ));

    return (
        <div className="min-w-[190px] ">
            <Typography
                theme="white"
                variant="caption2"
                weight='medium'
                className="pb-5"
            >
                {/* Titre */}
                {data.label}
                {/* en haut, titre généré dynamiquement  */}
            </Typography>

            <Typography theme="gray" variant="caption3" className="space-y-4">
                {/* liste mappé */}
                {linksList}
            </Typography>
        </div>
    )
}
