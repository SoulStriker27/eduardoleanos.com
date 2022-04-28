import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <br />
    <LeftSection>
      <h2> Hello, I am <h6/> </h2>
      <SectionTitle main center>
        Eduardo Leanos <br />
        &lt; Full-Stack Developer / &gt;
      </SectionTitle>
      <SectionText>
      I enjoy designing and building quality web apps. Targeting Python, Javascript and other web development opportunities. 
      <br /><br />
      I'm open to learning, adapt to work with the team, and use skills to solve complex challenges and provide value to the growth of an organization.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;