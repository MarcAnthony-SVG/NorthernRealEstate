import { React, useState } from 'react';
const Benefits = () => {
  const [Color, setColor] = useState('red');
  const changeColor = () => {
    if (Color === 'red') {
      setColor('blue');
    } else if (Color === 'blue') {
      setColor('red');
    }
  };
  return (
    <main className="main-page-container">
      <section>
        <h1 style={{ color: Color }} onMouseOver={changeColor}>
          Benefits
        </h1>
      </section>
    </main>
  );
};

export default Benefits;
