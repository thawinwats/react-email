import { Column, Container, Hr, Img, Link, Row, Section, Text } from '@react-email/components'
import React from 'react'

const socialMedia = [
  {
    url: 'https://www.facebook.com/orbix.official',
    img: 'https://gallery.eomail1.com/tentacles/icons/v1/social-block/rounded-facebook.png',
    alt: 'facebook orbix official',
  },
  {
    url: 'https://twitter.com/orbix_official',
    img: 'https://gallery.eomail1.com/tentacles/icons/v1/social-block/rounded-twitter.png',
    alt: 'twitter orbix official',
  },
  {
    url: 'https://www.instagram.com/orbixofficial_/',
    img: 'https://gallery.eomail1.com/tentacles/icons/v1/social-block/rounded-instagram.png',
    alt: 'instagram orbix official',
  },
  {
    url: 'https://www.youtube.com/@orbix_official',
    img: 'https://gallery.eomail1.com/tentacles/icons/v1/social-block/rounded-youtube.png',
    alt: 'youtube orbix official',
  },
  {
    url: 'https://www.youtube.com/@orbix_official',
    img: 'https://gallery.eomail1.com/tentacles/icons/v1/social-block/rounded-website.png',
    alt: 'website orbix official',
  }
]

const Footer = () => {
  return (
    <>
      <Container>
        <Hr className='mb-4' />

        <Link
          href={`https://www.orbixtrade.com/en/launch-app`}
          className="text-blue-600 no-underline"
        >
          <Img
            src={`https://gallery.eomail4.com/aead3efe-e5bb-11e9-be00-06b4694bee2a%2F1700119305566-orbix_Email_Bot+1.jpg`}
            width="600"
            alt="download orbix"
          />
        </Link>

        <Section className='my-4 w-1/2'>
          <Row>
            {
              socialMedia.map((item, index) => (
                <Column key={index} align="center">
                  <Link href={item.url}>
                    <Img
                      className="rounded-full"
                      src={item.img}
                      width="32"
                      height="32"
                      alt={item.alt}
                    />
                  </Link>
                </Column>
              ))
            }
          </Row>
        </Section>
      </Container>

      <Section className='text-center bg-slate-100'>
        <Text className='text-xs'>
          {' '} | {' '}
          <Link href='https://www.orbixtrade.com/live-chat'>Orbix Support</Link>
          {' '} | {' '}
        </Text>
        <Text className='text-xs'>You received this email because you subscribed to our list. You can <span className='underline'>unsubscribe</span> at any time.</Text>
        <Text className='text-xs'>89, Ratchadaphisek Road, Din Daeng, Bangkok<br />Thailand</Text>
      </Section>
    </>

  )
}

export default Footer