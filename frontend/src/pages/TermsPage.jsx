import { Link } from 'react-router';
import { productName } from '../config/branding.js';

const sections = [
  ['1. Aceptación y alcance', `Al usar ${productName} aceptas estas condiciones. La aplicación es un prototipo académico de frontend creado para demostrar flujos de comercio local; no constituye un servicio comercial ni una relación contractual con una empresa real.`],
  ['2. Cuentas de demostración', 'Las identidades, contraseñas y códigos empresariales incluidos son ficticios. No debes ingresar credenciales, documentos ni información confidencial real. La autenticación representa permisos de interfaz y no reemplaza la seguridad de un servidor.'],
  ['3. Operaciones simuladas', 'Catálogo, pedidos, ventas, pagos, inventario, facturas, análisis, reportes y mensajes se ejecutan con datos locales de demostración. Ninguna acción genera compras, cobros, facturas electrónicas, entregas o comunicaciones reales.'],
  ['4. Uso permitido', 'Puedes explorar el prototipo con fines académicos, educativos y de evaluación. No está permitido intentar vulnerar la aplicación, suplantar personas, introducir contenido ilícito o utilizarla para gestionar operaciones comerciales reales.'],
  ['5. Datos y privacidad', 'La aplicación no envía información comercial a un backend. Algunas cuentas demo y la sesión pueden almacenarse en localStorage dentro de tu navegador; otros cambios pueden desaparecer al recargar. Puedes eliminar esos datos borrando el almacenamiento del sitio.'],
  ['6. Propiedad intelectual', 'El diseño, código, documentación y contenido académico pertenecen a sus respectivos autores y se presentan como parte de una entrega universitaria. Las marcas o referencias de terceros conservan los derechos de sus titulares.'],
  ['7. Disponibilidad', 'El prototipo se ofrece tal como está y puede cambiar, interrumpirse o restablecer sus datos sin aviso. El equipo no garantiza disponibilidad continua, compatibilidad con todos los dispositivos ni conservación permanente de la información.'],
  ['8. Limitación de responsabilidad', 'No utilices la aplicación para decisiones financieras, legales, contables o comerciales reales. El equipo no responde por pérdidas derivadas de interpretar los datos simulados como información real o de usar el prototipo fuera de su propósito académico.'],
  ['9. Cambios y contacto', 'Estas condiciones pueden actualizarse cuando cambie el alcance académico. Las dudas sobre el proyecto pueden dirigirse al equipo mediante los correos institucionales disponibles en el footer.'],
];

export default function TermsPage() {
  return (
    <div className="container legal-page">
      <header className="legal-hero">
        <p className="eyebrow">Información legal del prototipo</p>
        <h1>Términos y condiciones</h1>
        <p>Última actualización: 28 de septiembre de 2026</p>
        <p>Lee cómo funciona esta experiencia académica y cuáles son sus límites antes de utilizarla.</p>
      </header>
      <div className="legal-grid">
        {sections.map(([title, content]) => (
          <section className="legal-section" key={title}>
            <h2>{title}</h2>
            <p>{content}</p>
          </section>
        ))}
      </div>
      <aside className="legal-notice" aria-label="Resumen importante">
        <strong>En pocas palabras:</strong>
        <p>{productName} es una demostración académica. No uses datos reales y no esperes transacciones ni persistencia productiva.</p>
      </aside>
      <Link className="text-link" to="/">← Volver al inicio</Link>
    </div>
  );
}

