import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

export default ({
  subheading = "¿Cómo podemos ayudarte?",
  subheading2 = "¿Tienes alguna sugerencia que darnos?",
  heading = <>Ponte en contacto<span tw="text-primary-500"> con nuestros expertos </span><wbr/>hoy mismo.</>,
  description = "Si eres una ONG, start up o asociación y necesitas asesoramiento sobre nuestros servicios, sólo tienes que ponerte en contacto con nosotros y te responderemos lo antes posible.",
  description2 = "Oficina Principal: ETSII, Universidad de Sevilla. Grupo 6 de ISPP de por la mañana.",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Subheading>{subheading2}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Description>{description2}</Description>
            <Description>
            <PrimaryNavLink target="" href="mailto:aiding@gmail.com">
              ENVIAR EMAIL
            </PrimaryNavLink>
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
