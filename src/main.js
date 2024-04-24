
const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    return <main>
        <h1></h1>
                <h1></h1>
                <h1></h1>
                <h1></h1>
                <center><h1>LOS POLOS MÁS COMPRADOS</h1>
                  <p class="font-monospace">Los polos son hechos de algodon</p>
                  <p class="font-monospace">Textura suave</p>
                  <p class="font-monospace">Variedad de tallas y colores</p>
                  <p class="font-monospace">Polos resistentes y duraderos</p>

                </center>
                
                <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="https://diel.pe/wp-content/uploads/2022/10/subirweb.jpg" class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src="https://hmperu.vtexassets.com/arquivos/ids/3236513/Polo-oversize-con-motivo---Beige-claro-Nirvana---H-M-PE.jpg?v=638062626992800000" class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src="https://hmperu.vtexassets.com/arquivos/ids/3940359/Polo-oversize-con-motivo---Crema-The-Rolling-Stones---H-M-PE.jpg?v=638321906354500000" class="d-block w-100" alt="..."></img>
                      </div>
                    </div>
                    <button class="carousel-control-prev carrusel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon carrusel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next carrusel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon carrusel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  </div>
    </main>;
}

export default Main;