import React from 'react';
import { Titles, TitleSection } from './StyledTitle';

const Title = ({ title, children }) => {
  return (
    <TitleSection>
      <Titles>{title}</Titles>
      {children}
    </TitleSection>
  );
};

export default Title;
