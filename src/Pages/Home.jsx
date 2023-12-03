import React from 'react'
import Carousell from '../Components/Carousell'

 function Home () {

  const images = ['/Carousel/MUG-AD1.png', '/Carousel/Foto perfume carousel2.jpg', '/Carousel/Foto perfume carousel3.jpg']; // Reemplaza con las URL reales de tus imágen
 return (
    <>
    <Carousell images={images} />
    </>
  )
}

export default Home;