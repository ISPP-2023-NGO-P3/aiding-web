import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Aiding</LogoText>
          </LogoContainer>
          <CompanyDescription>
            Compañía con una misión, ayudar.
          </CompanyDescription>
          {/* <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
          </SocialLinksContainer> */}
        </WideColumn>
        <Column>
          <ColumnHeading>Copyright© Aiding</ColumnHeading>
          <LinkList>
           
            <LinkListItem>
              <Link href="#modules">Soluciones</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#pricing">Precios</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#modules">Módulos</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
        <ColumnHeading>ISPP 2023</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#about">Quiénes somos</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#about">Privacy Policy</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
