import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import ImgFaqs from "images/faqs.png";

// CSS
import "ourscss/imagestyle.css";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  subheading = "FAQS",
  imageSrc = ImgFaqs,
  heading = "Preguntas frecuentes",
  description = "",
  faqs = [
    {
      question: "¿Cómo se calcula el precio de un plan?",
      answer:
        "   En Aiding solo pagas por lo que necesitas. En nuestra web puedes contratar un plan estándar o premium y pagar por la cantidad de módulos que más se ajuste a las necesidades de tu organización. Debes saber que todos los planes tendrán un periodo de prueba totalmente gratuito de 14 días. También ofrecemos un descuento por suscripción anual del 15 % aproximadamente. Por ejemplo: Tu organización necesita atención priorizada al cliente y más de 20G en la nube, entonces es necesario contratar el plan premium. Además, crees necesario usar el módulo de gestión de voluntarios y turnos y el módulo de beneficiarios, por lo tanto, necesitas el pack que incluye 2 módulos, como mínimo. De esta forma el precio total al mes sería: precio del plan + precio del paquete de módulos. Y como has elegido plan premium + pack de 1 a 3 módulos, el precio sería: 15€ + 32€ = 47€ mensuales. Si tu suscripción es anual, en lugar de mensual, el precio sería: 564€ (precio total por año) - 84,60€ (el 15% del total) = 479,40€ al año. Por otro lado, si quisieras añadirle más módulos posteriormente, se recalcularía el precio de tu contrato y se añadirían los módulos que elijas. "
    },
    {
      question: "¿Qué módulos puedo incluir en mi web?",
      answer:
        "   Con  Aiding puedes elegir la cantidad de módulos que más se ajuste a tus necesidades, desde 1 hasta más de 6. Además, con el plan premium, puedes modificar los módulos que desees. Si aun así ninguno de nuestros módulos te convence, puedes pedirnos un módulo personalizado."
    },
    {
      question: "¿Cómo contacto con la empresa?",
      answer:
        "   En esta misma web, podrás encontrar el apartado “Contáctanos” \u{1F600}"
    },
    {
      question: "¿Aiding solo trabaja con ONGs? ",
      answer:
        "   En Aiding nos preocupamos por proporcionar soluciones mayoritariamente a organizaciones, pero no es nuestro único público objetivo. "
    },
    {
      question: "¿Qué pasa si inicialmente deseo tener una cantidad de módulos pero necesitamos menos módulos?",
      answer:
        "   Dependiendo de la suscripción de pago que elijas, tendrás una permanencia u otra. De esta forma, si decides cambiar de pack de módulos o plan teniendo una suscripción mensual, los cambios se aplicarán al mes siguiente. Si es una suscripción anual, los cambios deberán aplicarse al año siguiente. "
    },
    {
      question: "¿Qué pasa con los datos de los módulos que ya no quiero tener? ¿Y con el espacio en la nube que ya no deseo? ",
      answer:
        "   Desde el momento en que canceles el uso de uno o varios módulos, dispondrás de 1 año para acceder a todos los datos almacenados y descargarlos. De otra manera, se borrarán permanentemente. Pasará lo mismo con el espacio de la nube, dispondrás de 1 año para descargar los archivos subidos en ella. "
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            <img src={imageSrc}  class='ime' alt="" />
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
  );
};