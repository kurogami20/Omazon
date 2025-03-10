import { NavLink } from 'react-router';

const NotFound = () => {
  return (
    <>
      <h2>Page non trouvée</h2>
      <NavLink to={'/'}>Retour à l'accueil</NavLink>
    </>
  );
};

export default NotFound;
