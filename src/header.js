const Header = () => {
    return <header>
        <nav class="navbar navbar-expand-lg navbar-colorcustom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">POLOS KLIDAD</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Más información</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tallas
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">S</a></li>
                  <li><a class="dropdown-item" href="#">M</a></li>
                  <li><a class="dropdown-item" href="#">L</a></li>
                  <li><a class="dropdown-item" href="#">XL</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Edición especial</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">KLIDAD</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
                <button class="btn btn-outline-primary" type="submit">
                <i data-feather="search"></i>
                Buscar
                </button>
            </form>
          </div>
        </div>
      </nav>
    </header>;
}

export default Header;