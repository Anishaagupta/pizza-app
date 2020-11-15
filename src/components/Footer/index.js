import React from 'react'
import {FaInstagram, FaLinkedinIn,FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import {FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


function Footer() {
    return (
       <FooterContainer>
           <FooterWrap>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/">Pizza</SocialLogo>
                       <SocialIcons>
                           <SocialIconLink href="/" rel="noopener norefferer" target="_blank" aria-label="Facebook">
                              <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="/" rel="noopener norefferer" target="_blank" aria-label="Instagram">
                              <FaInstagram/>
                           </SocialIconLink> 
                           <SocialIconLink href="/" rel="noopener norefferer" target="_blank" aria-label="Twitter">
                              <FaTwitter/>
                           </SocialIconLink>
                           <SocialIconLink href="/" rel="noopener norefferer" target="_blank" aria-label="LinkedIn">
                              <FaLinkedinIn/>
                           </SocialIconLink>
                           <SocialIconLink href="/" rel="noopener norefferer" target="_blank" aria-label="Youtube">
                              <FaYoutube/>
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer;
