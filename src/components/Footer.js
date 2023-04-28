const Footer = () => {
    return (
        <div className="footer">
            <footer class="footer-distributed">

                <div class="footer-left">

                <img src={require("../images/logoVet.png")} alt="logo" id="logo"></img>

                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Precios</a>

                        <a href="#">Nosotros</a>

                        <a href="#">FAQ</a>

                        <a href="#">Contacto</a>
                    </p>

                    <p class="footer-company-name">Clinica Veterinaria Sergio Barrantes © 2015</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Calle al Hospital, 25mts Norte de la Upiav,
                        </span> San José, San Isidro de El General, 11901</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>27710976</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:leagueofxuradel@gmail.com">support@company.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>Acerca de la clinica</span>
                        Somos una veterinaria ejemplar decididos a dar el mejor servicio posible
                        para nuestros clientes y sus mascotas.
                    </p>

                    <div class="footer-icons">

                        {/* <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a> */}

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer;