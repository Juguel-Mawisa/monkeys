import Container from '@/ui/components/container/container'
import Typography from '@/ui/design-system/typography/typography'
import Image from 'next/image'
import React from 'react'
import { RiPlayCircleLine } from 'react-icons/ri'

export default function CurrentCourseCtaView() {
  return (
    <div className='bg-gray-300'>
        <Container className='py-24 text-center'>
            <Typography variant='h2' component='h2' className='mb-2.5'>
                Formations React.js gratuite
            </Typography>
            <Typography variant='lead' component='h3' className='mb-5'>
                Apprends à coder l'app des singes codeurs
            </Typography>
            <Typography 
                variant='caption3' 
                theme='gray' 
                component='p' 
                className='mb-16'
            >
                Si tu veux un CV plus sexy que ton ex, suis cette formation!
            </Typography>
            <a href="#/" target='_blank'>
                <div className='relative bg-gray-400 rounded h-[626px]'>
                    <div className='relative z-10 flex flex-col items-center justify-center gap-2 h-full text-white rounded bg-gray opacity-0 hover:opacity-95 animate'>
                        <RiPlayCircleLine size={42}/>
                        <Typography 
                            variant='caption2' 
                            theme='white' 
                            className='uppercase' 
                            weight='medium'
                        >
                            Lire la formation
                        </Typography>
                    </div>
                    <Image
                        fill
                        src="assets/images/coders-monkeys-course-cta.jpg"
                        alt=''
                        className='object-cover object-center rounded'
                    />

                </div>
            </a>
        </Container>
    </div>
  )
}
