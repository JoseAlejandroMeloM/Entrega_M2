import { Link } from 'react-router';
import { productName } from '../config/branding.js';

export default function HomePage() {
  return (
    <div className="container home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-content">
          <p className="eyebrow">Comercio local, mejor conectado</p>
          <h1 id="home-title">Decisiones que mueven <span>tu negocio.</span></h1>
          <p className="hero-copy">
            {productName} conecta clientes, tiendas y distribuidores para convertir cada compra,
            venta y movimiento de inventario en una decisión más clara.
          </p>
          <div className="hero-actions">
            <Link className="button-link" to="/products">Explorar el catálogo <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/login">Ingresar al demo <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-note"><span aria-hidden="true">●</span> Experiencia local con datos de demostración</p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit visual-orbit--one" />
          <div className="visual-orbit visual-orbit--two" />
          <div className="network-card">
            <div className="network-card__top"><span>Red comercial</span><span className="live-pill">En línea</span></div>
            <div className="network-flow">
              <div className="flow-node flow-node--client"><span>01</span><strong>Cliente</strong><small>Explora</small></div>
              <span className="flow-connector">→</span>
              <div className="flow-node flow-node--store"><span>02</span><strong>Tienda</strong><small>Vende</small></div>
              <span className="flow-connector">→</span>
              <div className="flow-node flow-node--supplier"><span>03</span><strong>Distribuye</strong><small>Abastece</small></div>
            </div>
            <div className="network-signal"><span>Inventario sincronizado</span><strong>+24%</strong></div>
          </div>
          <div className="floating-chip floating-chip--orders"><span>↗</span> Pedidos conectados</div>
          <div className="floating-chip floating-chip--stock"><span>✓</span> Stock actualizado</div>
        </div>
      </section>
      <section className="value-grid" aria-label="Beneficios principales">
        <article><span>01</span><h2>Compara</h2><p>Precios, disponibilidad y proveedores en un mismo recorrido.</p></article>
        <article><span>02</span><h2>Conecta</h2><p>Roles y operaciones que reflejan el flujo real de cada negocio.</p></article>
        <article><span>03</span><h2>Controla</h2><p>Ventas, pedidos, inventario e indicadores con trazabilidad visible.</p></article>
      </section>
    </div>
  );
}
