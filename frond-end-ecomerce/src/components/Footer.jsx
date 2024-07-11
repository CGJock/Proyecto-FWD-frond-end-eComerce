import "../styles/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
<div className="footerFather">
      <div className="contenedorSuperior">
        <div className="contenedorImg">
          <InstagramIcon />
        </div>
        <div className="contenedorImg">
          <FacebookIcon />
        </div>
        <div className="contenedorImg">
          <WhatsAppIcon />
        </div>
        <div className="contenedorImg">
          <PhoneIcon />
        </div>
      </div>


    <div className="footerChildren">
      <div className="contenedorLeft">
        <div className="info">
          <div className="contenedorImgLeft">
            <StorefrontOutlinedIcon />
          </div>
          <div className="contenedroInfoLeft">
            <h6>Tiendas</h6>
            <p>
              Alajuela, Heredia, Cartago, San Jose, Puntarenas, Limon,
              Guanacaste,
            </p>
          </div>
        </div>
        <div className="info">
          <div className="contenedorImgLeft">
            <PhoneIcon />
          </div>
          <div className="contenedroInfoLeft">
            <h6>Telefono</h6>
            <p>+506 2020-4040</p>
          </div>
        </div>
        <div className="info">
          <div className="contenedorImgLeft">
            <WhatsAppIcon />
          </div>
          <div className="contenedroInfoLeft">
            <h6>Whatsapp</h6>
            <p>+506 8282-7676</p>
          </div>
        </div>
        <div className="info">
          <div className="contenedorImgLeft">
            <EmailOutlinedIcon />
          </div>
          <div className="contenedroInfoLeft">
            <h6>Correo</h6>
            <p>info@Multichunches.co.cr</p>
          </div>
        </div>
      </div>

      <div className="contenedorRight">
        <div className="titulo">
            <h5>Mas Informacion</h5>
        </div>
        <div className="informacion">
            <p>Sobre nosotros</p>
            <p>Metodos de pago</p>
            <p>Reclamaciones</p>
            <p>Contacto</p>
            <p>Terminos & condiciones</p>
            <p>Vendenos tus productos</p>
        </div>
      </div>
    </div>
</div>
  );
};

export default Footer;
