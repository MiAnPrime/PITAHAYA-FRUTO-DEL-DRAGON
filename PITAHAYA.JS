<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet">
    <title>Mi Portafolio</title>
</head>
<body>
    <div class="todo">
        <!-- Sección del Menú -->
        <section class="menu">
            <header class="menu__header">
                <img src="assets/vector.png" alt="Logo">
                <h3 class="menu__title">Fulana de Tal</h3>
            </header>
            <nav>
                <ul class="menu__list">
                    <li class="menu__list__item"><a href="#sobre-mi">Sobre mi</a></li>
                    <li class="menu__list__item"><a href="#skills">Skills</a></li>
                    <li class="menu__list__item"><a href="#hobbies">Hobbies</a></li>
                    <li class="menu__list__item"><a href="#formacion">Formación</a></li>
                    <li class="menu__list__item"><a href="#xp">Proyectos</a></li>
                    <li class="menu__list__item"><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </section>

        <!-- Sección del Header/Title/Hero -->
        <section class="title">
            <div class="title__div">
                <img class="title__profile" src="assets/profile.png" alt="Foto de perfil">
                <div class="title__container">
                    <h2 class="title__bio">Hola, mi nombre es Fulana de Tal y construyo páginas web.</h2>
                    <h3 class="title__subsection">Soy formada en ... lorem ipsum sit amet consectetur y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</h3>
                    <ul class="title__network">
                        <li class="title__network__item"><a href="#">Github <img src="assets/arrow.png" alt="Icono flecha"></a></li>
                        <li class="title__network__item"><a href="#">Linkedin <img src="assets/arrow.png" alt="Icono flecha"></a></li>
                        <li class="title__network__item"><a href="#">Instagram <img src="assets/arrow.png" alt="Icono flecha"></a></li>
                        <li class="title__network__item"><a href="#">Currículo <img src="assets/arrow.png" alt="Icono flecha"></a></li>
                    </ul>
                </div>
            </div>
        </section>
        
        <!-- Otras secciones omitidas por brevedad -->

        <!-- Sección de Contacto -->
        <section class="contacto" id="contacto">
            <div class="contacto__container">
                <h2 class="contacto__title">Contacto</h2>
                <h3 class="contacto__subtext">¿Quieres contactarme?</h3>
                <h3 class="contacto__subtext">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.</h3>
                <form class="contacto__form" name="form">
                    <input class="contacto__input" type="text" name="nombre" placeholder="Nombre">
                    <input class="contacto__input" type="email" name="email" placeholder="E-mail">
                    <input class="contacto__input" type="text" name="asunto" placeholder="Asunto">
                    <textarea class="contacto__textarea" rows="5" cols="40" id="mensaje" name="mensaje" placeholder="Mensaje"></textarea>
                    <button type="submit" class="contacto__boton">Enviar mensaje</button>
                </form>
            </div>
        </section>

        <!-- Sección de Footer -->
        <footer class="footer">
            <div class="footer__content">
                <p>Desarrollado por Fulana de Tal</p>
                <p>2022</p>
            </div>
        </footer>
    </div>

    <script src="validacion.js"></script>
</body>
</html>
