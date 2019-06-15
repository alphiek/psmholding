import React from 'react'
import fb from '../images/fb.svg'
import inst from '../images/in.svg'
import styled from 'styled-components'

const Icon = styled.img`
  width: auto;
  height: 1.2em;
  margin: 0.2em;
  opacity: 1;
`

const SocialWrapper = styled.div`
  width: 10vw;
  margin-top: 1.5em;
  margin-bottom: 1.3em;
  padding-top: 1.5em;
  border-top: 0.2em solid #EBE3DF;
  opacity: 0.8;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactInfo = styled.a`
  font-family: 'Roboto';
  margin-top: 0.1em;
  font-weight: 900;
  letter-spacing: 0.1em;
  font-size: calc(0.5em + 0.2vw);
  color: #57585A;
  text-align: center;
  @media only screen and (max-width: 824px){
    font-size: calc(0.6em + 0.2vw);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
`

const Links = () => (
  <>
  <SocialWrapper>
    <a
      href='https://www.facebook.com/paphosstonemasons/'
      target="_blank"
      rel='noopener noreferrer'>
      <Icon src={fb} alt='facebook page link'/>
    </a>
    <a
      href='https://www.instagram.com/paphosstone/'
      target="_blank"
      rel='noopener noreferrer'>
      <Icon src={inst} alt='instagram link' />
    </a>
  </SocialWrapper>
  <ContactInfo
    href="tel:35795533725"
    target="_blank"
    rel='noopener noreferrer'>
    Tel: +357 955 337 25
  </ContactInfo>
  <ContactInfo
    href="mailto:info@paphosstonemasons.com"
    target="_blank"
    rel='noopener noreferrer'>
    info@paphosstonemasons.com
  </ContactInfo>
  </>
)

export default Links
