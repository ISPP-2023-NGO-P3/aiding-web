import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as EmailIcon } from "images/email-newsletter-icon.svg";
import NoeliaIcon from "images/fotos/noelia.png";
import AishaIcon from "images/fotos/aisha.png";
import CarlosIcon from "images/fotos/carlos.png";
import JoseIcon from "images/fotos/jose.png";
import JuanjoIcon from "images/fotos/juanjo.png";
import MarcosIcon from "images/fotos/marcos.png";
import ManuelDIcon from "images/fotos/manuelD.png";
import ManuelSIcon from "images/fotos/manuelS.png";
import MarinaIcon from "images/fotos/marina.png";
import NicoIcon from "images/fotos/nico.png";
import OlivaIcon from "images/fotos/oliva.png";
import RickIcon from "images/fotos/rick.png";
import RubenIcon from "images/fotos/ruben.png";
import CeliaIcon from "images/fotos/celia.png";
import RosaIcon from "images/fotos/rosa.png";
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-cover rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Nuestro equipo.",
  subheading = "",
  description = "",
  cards = [
    {
      imageSrc: NoeliaIcon,
      position: "Project Manajer",
      name: "Noelia López Durán",
      links: [
        {
          url: "mailto:noelopdur@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: " https://github.com/lNoelia ",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: RosaIcon,
      position: "Designer",
      name: "Rosa Maria Molina Arregui",
      links: [
        {
          url: "mailto:rosmolarr@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/rosmolarr",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ManuelSIcon,
      position: "Jr. Designer",
      name: "Manuel Sánchez Rodríguez",
      links: [
        {
          url: "mailto:manuelsanchez595@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/mansanrod4 ",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: NicoIcon,
      position: "Lead Developer",
      name: "Nicolás Sánchez Mendoza",
      links: [
        {
          url: "mailto:nicsanmen@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/nicsanmen",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: OlivaIcon,
      position: "Sr. Developer",
      name: "Oliva Sánchez Rodríguez",
      links: [
        {
          url: "mailto:sanchezroliva@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/olisanrod",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: MarcosIcon,
      position: "Sr. Developer",
      name: "Marcos Olmedo Marín",
      links: [
        {
          url: "mailto:emolmedom2000@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/marolmmar1",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: CarlosIcon,
      position: "Sr. Developer",
      name: "Carlos Delgado Becerril",
      links: [
        {
          url: "mailto:cardelbec@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/cardelbec",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: RickIcon,
      position: "Sr. Developer",
      name: "Ricardo Nadal Garcia",
      links: [
        {
          url: "mailto:nadalrick@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/Rick3600",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ManuelDIcon,
      position: "Sr. Developer",
      name: "Manuel Domínguez Magdaleno",
      links: [
        {
          url: "mailto:mandommag@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/Manueldm01",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: CeliaIcon,
      position: "Sr. Developer",
      name: "Celia Hermoso Soto",
      links: [
        {
          url: "mailto:celhersot@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/celhersot",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: RubenIcon,
      position: "Sr. Developer",
      name: "Rubén Suárez David",
      links: [
        {
          url: "mailto:rubsuadav@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/rubsuadav",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: JuanjoIcon,
      position: "Sr. Developer",
      name: "Juan José Álvarez Campanón",
      links: [
        {
          url: "mailto:Juanjoalvarezcampanon@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/juaalvcam",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: MarinaIcon,
      position: "Sr. Developer",
      name: "Marina Ramiro Fernández",
      links: [
        {
          url: "mailto:marinaramirofde@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/marinaramirofde",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: AishaIcon,
      position: "Quality Assurance",
      name: "Aisha Doris Qazza Cevallos",
      links: [
        {
          url: "mailto:aishaqazza@gmail.com",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/aisqazcev",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: JoseIcon,
      position: "Quality Assurance",
      name: "José María Delgado Sánchez",
      links: [
        {
          url: "mailto:josdelsan9@alum.us.es",
          icon: EmailIcon,
        },
        {
          url: "https://github.com/Josdelsan",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
