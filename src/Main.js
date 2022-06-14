import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {

  render() {
    return (
      <>
        <main>
          <Hornedbeast 
            name="Narwhal"
            description="A unicorn and narwhal nuzzle their horns in an expression of forbidden love." />
          <Hornedbeast 
            name="Rhinocerosaurus and Young"
            description="A single mother rummages the Savannah after months without child support."
          />
          <Hornedbeast
            name="Psychedelic Unicorn"
            description="A unicorn colt who has stumbled into a patch of hongos alucinógenos."
          />
        </main>
      </>
    );
  }
}

export default Main;