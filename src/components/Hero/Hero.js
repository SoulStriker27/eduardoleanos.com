import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <br />
    <LeftSection>
      <h2> Hello, my name is <h6 /> </h2>
      <SectionTitle main center>
        Eduardo Leanos <br />
        &lt; Full-Stack Developer / &gt;
      </SectionTitle>
      <SectionText>
      I enjoy designing and building enterprise applications. Targeting Python, Java and many other development opportunities. 
      <br /><br />
      I am keen to learning new skills, adapting to new team dynamics, and solving complex challenges to provide value to the growth of an organization.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/SoulStriker27?tab=repositories'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;