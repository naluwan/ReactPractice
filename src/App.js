import React from 'react'
import Navbars from './componets/Navbars'
import Card from './componets/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id.toString()}
      {...item}
    />
    )
  })
  
  return (
    <>
      <Navbars />
      <section className="card--list">
        {cards}
      </section>
      
    </>
  );
}

export default App;
