import { Link } from 'react-router';
import { productName } from '../../config/branding.js';
import { teamMembers } from '../../config/teamMembers.js';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <p className="footer-kicker">Proyecto académico · M2</p>
          <p className="footer-name">{productName}</p>
          <p>Una red de comercio local diseñada y construida por estudiantes de la Universidad de La Sabana.</p>
          <Link className="footer-legal-link" to="/terms">Términos y condiciones <span aria-hidden="true">→</span></Link>
        </div>
        <section className="footer-team" aria-labelledby="footer-team-title">
          <h2 id="footer-team-title">Equipo del proyecto</h2>
          <address>
            <ul className="team-list">
              {teamMembers.map(({ name, email }) => (
                <li key={email}>
                  <span>{name}</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </address>
        </section>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {productName}</span>
        <span>Frontend demostrativo · Sin transacciones reales</span>
      </div>
    </footer>
  );
}

