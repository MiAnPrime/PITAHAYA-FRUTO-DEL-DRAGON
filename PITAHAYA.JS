<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Venta de Pitahayas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 1rem;
        }
        nav {
            background-color: #333;
            color: #ffffff;
            text-align: center;
            padding: 0.5rem;
        }
        nav a {
            color: #ffffff;
            text-decoration: none;
            padding: 0 1rem;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 20px;
        }
        .main {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .article {
            background: #ffffff;
            padding: 20px;
            margin-bottom: 20px;
            width: 45%;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .article img {
            width: 100%;
            border-radius: 8px;
        }
        footer {
            background-color: #333;
            color: #ffffff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Venta de Pitahayas</h1>
    </header>
    <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
    </nav>
    <div class="container">
        <section class="main">
            <article class="article">
                <h2>Pitahaya Roja</h2>
                <img src="pitahaya_roja.jpg" alt="Pitahaya Roja">
                <p>Descripción de la pitahaya roja y sus beneficios.</p>
            </article>
            <article class="article">
                <h2>Pitahaya Amarilla</h2>
                <img src="pitahaya_amarilla.jpg" alt="Pitahaya Amarilla">
                <p>Descripción de la pitahaya amarilla y sus características.</p>
            </article>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 Venta de Pitahayas. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
