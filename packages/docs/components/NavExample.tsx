import { Nav, Navbar } from "@exponentialeducation/betomic/src";

const BasicNav = () => {
  return (
    <Nav>
      <Nav.Item>
        <a href="#">Inicio</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="ml-3 inline-block">Oferta</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="ml-3 inline-block">Empresas</a>
      </Nav.Item>
    </Nav>
  )
}

const AlignmentNav = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Nav>
        <Nav.Item>
          <a href="#">Inicio</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="ml-3 inline-block">Oferta</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="ml-3 inline-block">Empresas</a>
        </Nav.Item>
      </Nav>

      <Nav align="center">
        <Nav.Item>
          <a href="#">Inicio</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="ml-3 inline-block">Oferta</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="ml-3 inline-block">Empresas</a>
        </Nav.Item>
      </Nav>

      <Nav align="right">
        <Nav.Item>
          <a href="#">Inicio</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="ml-3 inline-block">Oferta</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="ml-3 inline-block">Empresas</a>
        </Nav.Item>
      </Nav>

      <Nav vertical>
        <Nav.Item>
          <a href="#">Inicio</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="mt-2 inline-block">Oferta</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="mt-2 inline-block">Empresas</a>
        </Nav.Item>
      </Nav>

      <Nav align="center" vertical>
        <Nav.Item>
          <a href="#">Inicio</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="mt-2 inline-block">Oferta</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="mt-2 inline-block">Empresas</a>
        </Nav.Item>
      </Nav>

      <Nav align="right" vertical>
        <Nav.Item>
          <a href="#">Inicio</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="mt-2 inline-block">Oferta</a>
        </Nav.Item>
        <Nav.Item>
          <a href="#" className="mt-2 inline-block">Empresas</a>
        </Nav.Item>
      </Nav>
    </div>
  )
}

const VerticalNav = () => {
  return (
    <Nav vertical>
      <Nav.Item>
        <a href="#">Inicio</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="mt-2 inline-block">Oferta</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="mt-2 inline-block">Empresas</a>
      </Nav.Item>
    </Nav>
  )
}

const CustomClassNav = () => {
  return (
    <Nav className="font-montserrat font-bold navigation-header">
      <Nav.Item>
        <a href="#" className="py-2 px-3 rounded text-surface-600 active transition ease-in-out duration-150 no-underline">Inicio</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Empresas</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Blog</a>
      </Nav.Item>
    </Nav>
  )
}

const CustomDarkClassNav = () => {
  return (
    <Nav className="py-4 font-montserrat font-bold navigation-header dark">
      <Nav.Item>
        <a href="#" className="py-2 px-3 rounded text-surface-600 active transition ease-in-out duration-150 no-underline">Inicio</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Empresas</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Blog</a>
      </Nav.Item>
    </Nav>
  )
}

const NavbarNav = () => {
  return (
    <div className="grid gap-5">
      <Navbar shadow>
        <Navbar.Brand>
          <a href="https://bedu.org" aria-label="BEDU"><svg viewBox="0 0 136 36" width="136" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-30 h-8 lg:w-34 lg:h-9"><path d="M91.831 27.376l-2.853 1.196H78.576V7.408h10.441l2.64 1.196 1.067 2.894.02 13.254-.913 2.624zm5.764-24.328L90.53.0H71.124v24.752l.02 11.229h19.484l7.2-3.164 2.425-6.772-.019-15.84-2.64-7.157zM20.726 27.299l-2.833 1.273h-7.88L7.472 23.77V12.231l2.543-4.804h7.898l2.64 1.119.679 1.832-4.774 7.679 4.812 7.698-.543 1.543zm8.772-16.11L26.47 2.972 19.445.0H5.511L0 10.399V25.6L5.511 36h13.992l7.2-3.241 2.814-7.852-4.27-6.83 4.25-6.887zM128.529.0v26.18l-4.852 2.392h-5.376l-4.851-2.392V0h-7.472v30.656l10.48 5.325h9.063L136 30.656V0h-7.471zM65.36.0H44.674v7.408h20.688V0zm0 28.572H44.674v7.409h20.688v-7.409zM49.913 20.2v-4.206l-1.125-1.1-4.134-.02v-4.109l-1.126-1.1h-4.21l-1.126 1.12-.02 4.09-4.114.019-1.125 1.1v4.205l1.106 1.12h3.144l.99-.02.019.984v3.145l1.125 1.119h4.212l1.125-1.12V21.3l4.134.02 1.125-1.12z" fill="#182226"></path></svg></a>
        </Navbar.Brand>
        <Nav align="right" className="font-montserrat font-bold navigation-header">
          <Nav.Item>
            <a href="#" className="py-2 px-3 rounded text-surface-600 active transition ease-in-out duration-150 no-underline">Inicio</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Empresas</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Blog</a>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Navbar shadow className="bg-surface-800">
        <Navbar.Brand>
          <a href="https://bedu.org" aria-label="BEDU"><svg viewBox="0 0 136 36" width="136" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-30 h-8 lg:w-34 lg:h-9"><path d="M91.831 27.376l-2.853 1.196H78.576V7.408h10.441l2.64 1.196 1.067 2.894.02 13.254-.913 2.624zm5.764-24.328L90.53.0H71.124v24.752l.02 11.229h19.484l7.2-3.164 2.425-6.772-.019-15.84-2.64-7.157zM20.726 27.299l-2.833 1.273h-7.88L7.472 23.77V12.231l2.543-4.804h7.898l2.64 1.119.679 1.832-4.774 7.679 4.812 7.698-.543 1.543zm8.772-16.11L26.47 2.972 19.445.0H5.511L0 10.399V25.6L5.511 36h13.992l7.2-3.241 2.814-7.852-4.27-6.83 4.25-6.887zM128.529.0v26.18l-4.852 2.392h-5.376l-4.851-2.392V0h-7.472v30.656l10.48 5.325h9.063L136 30.656V0h-7.471zM65.36.0H44.674v7.408h20.688V0zm0 28.572H44.674v7.409h20.688v-7.409zM49.913 20.2v-4.206l-1.125-1.1-4.134-.02v-4.109l-1.126-1.1h-4.21l-1.126 1.12-.02 4.09-4.114.019-1.125 1.1v4.205l1.106 1.12h3.144l.99-.02.019.984v3.145l1.125 1.119h4.212l1.125-1.12V21.3l4.134.02 1.125-1.12z" fill="#FFF"></path></svg></a>
        </Navbar.Brand>
        <Nav align="right" className="font-montserrat font-bold navigation-header dark">
          <Nav.Item>
            <a href="#" className="py-2 px-3 rounded text-surface-600 active transition ease-in-out duration-150 no-underline">Inicio</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Empresas</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#" className="ml-3 py-2 px-3 rounded text-surface-600 transition ease-in-out duration-150 no-underline">Blog</a>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export {
  BasicNav,
  AlignmentNav,
  VerticalNav,
  CustomClassNav,
  CustomDarkClassNav,
  NavbarNav
}