import Carousel from 'react-bootstrap/Carousel';

const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    return <main>
        <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
        <center><h1>LOS POLOS MÁS COMPRADOS</h1>
          <p class="font-monospace">Los polos son hechos de algodon</p>
          <p class="font-monospace">Textura suave</p>
          <p class="font-monospace">Variedad de tallas y colores</p>
          <p class="font-monospace">Polos resistentes y duraderos</p>
        </center>
                
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://diel.pe/wp-content/uploads/2022/10/subirweb.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hmperu.vtexassets.com/arquivos/ids/3236513/Polo-oversize-con-motivo---
          Beige-claro-Nirvana---H-M-PE.jpg?v=638062626992800000"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hmperu.vtexassets.com/arquivos/ids/3940359/Polo-oversize-con-motivo---
          Crema-The-Rolling-Stones---H-M-PE.jpg?v=638321906354500000"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </main>;
}

export default Main;