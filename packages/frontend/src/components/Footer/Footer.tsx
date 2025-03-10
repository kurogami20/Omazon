import omazonLight from "@assets/images/omazon-light.svg"
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="return-to-top">Retour en haut</div>
      
      <div className="ads">
        <h2>Vous aussi, gagnez de l'argent avec Omazon !</h2>
        <p>Trasnformez vos passions en revenus.</p>
        <p>Rejoignez notre communauté de vendeurs dès aujourd'hui !</p>
        
        <button type="button">Vendez sur Omazon</button>
      </div>
        
      <div className="logo">
        <a href="#">
          <img src={omazonLight} alt="Logo omazon" />
        </a>
      </div>

      <div className="nav">
        <nav>
          <ul>
            <li><a href="#">Conditions générales de vente</a></li>
            <li><a href="#">Vos informations personnelles</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Annonces basées sur vos centres d'intérêt</a></li>
          </ul>
        </nav>

        <p>© 2024 Omazon, un clone simplifié de Amazon</p>
      </div>

    </footer>
  )
}
