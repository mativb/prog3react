import '../App.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-404">404</h1>
      <p className="not-found-message">Uy, parece que esta página no existe.</p>
      <a href="/" className="not-found-button">
        Volver a la página principal
      </a>
    </div>
  );
};

export default NotFound;
