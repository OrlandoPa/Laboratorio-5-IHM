const Footer = () => {
    return <footer>
        <div class="row">
            <div class="col-md-4 navbar-colorcustom">
                <center>
                    <h2 fs-5 class="font-monospace">UBICACION</h2>
                    <i data-feather="map-pin"></i><p class="font-monospace">Av. Villareal 250, Trujillo, Peru</p>
                    <p class="font-monospace">Cruzando con Av. Santa</p>
                </center>
            </div>
            <div class="col-md-4 navbar-colorcustom">
                <center>
                    <h2 class="font-monospace">CONTACTOS</h2>
                    <p class="font-monospace">LLamadas al</p>
                    <p class="font-monospace"><i data-feather="phone"> </i>923 170 004</p>
                </center>
            </div>
            <div class="col-md-4 navbar-colorcustom">
                <center>
                    <h2 fs-5 class="font-monospace">IDENTIFICACIÓN</h2>
                    <p class="font-monospace"><b>NOMBRE:</b></p>
                    <p class="font-monospace"><b>ORLANDO MANUEL ADRIAN PADILLA RIOS</b></p>
                </center>
            </div>
        </div>
    </footer>;
}

export default Footer;