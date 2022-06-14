import React from 'react';
import Hornedbeast from './Hornedbeast';
import data from './data.json';

class Main extends React.Component {

  render() {
    let hornBeast = data.map(beast => {
      return (
        <Hornedbeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
        />
      )
    })

    return (
      <main>
        {hornBeast}
      </main >
    )
  }
}

export default Main;