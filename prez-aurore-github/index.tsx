import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';

// const theme = {
//   colors: {
//     primary: '#f00',
//     secondary: '#00f',
//     ternary: '#0f0',
//     quaternary: '#000',
//     quinary: '#fff'
//   },
//   fontSize: {
//     header: '64px',
//     paragraph: '28px'
//   }
// };

// ajouter theme={theme} à la fin de <Deck>

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);