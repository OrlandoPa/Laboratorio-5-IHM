const Aside = () => {
    return <aside>
        <h1>REGISTRATE PARA VER OFERTAS EXCLUSIVAS</h1>
                <div class="mb-3 row">
                    <label for="inputEmail" class="col-sm-4 col-form-label"><i data-feather="at-sign"></i>Email</label>
                    <div class="col-sm-8">
                      <input type="email" placeholder="nombre@ejemplo.com" readonly class="form-control" id="inputEmail"></input>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-4 col-form-label"><i data-feather="key"></i>Contraseña</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control" id="inputPassword"></input>
                    </div>
                    <center>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">
                            <i data-feather="check"></i>
                            Confirmar
                            </button>
                        </div>
                    </center>
                    </div>
                    <h1>ENVIA TUS OPINIONES Y SUGERENCIAS</h1>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                    <i data-feather="message-square"></i>Cuadro de texto</label>
                    <textarea class="form-control" placeholder="Envie un mensaje"
                    id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <center>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">
                            <i data-feather="send"></i>
                            Enviar
                            </button>
                        </div>
                    </center>

                <h1>ENVIA TUS FOTOS DE POLOS QUE DESEES</h1>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">Entrada de archivo por defecto</label>
                    <input class="form-control" type="file" id="formFile"></input>
                  </div>
                <center>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">
                        <i data-feather="upload"></i>
                        Subir
                        </button>
                    </div>
                </center>
    </aside>;
}

export default Aside;