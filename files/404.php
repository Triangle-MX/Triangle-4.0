<?php
header("HTTP/1.0 404 Not Found");
?>
<!DOCTYPE html>
<html lang="es-MX">
<head>
    <title>Error 404</title>

    <!-- Important Metas -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Description + Keywords Metas -->
        <meta name="description" content="Triangle es un pequeño estudio de desarrollo web, en los que creamos páginas web únicas, para clientes únicos.">
        <meta name="keywords" content="Triangle, Diseño Web, Desarrollo Web, Páginas Web, Sitios Web, México, Diseño Web México, Diseño Web Profesional, Diseño Web Responsive, Diseño Web Adaptable, Desarrollo Web México, Desarrollo Web Profesional, Desarrollo Web Responsive, Desarrollo Web Adaptable">

    <!-- OpenGraph Metas-->
        <meta property="og:title" content="Error 404" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://triangle.mx/files/404.html" />
        <meta property="og:image" content="https://res.cloudinary.com/triangle/image/upload/v1492639647/tile_jo3ljs.png" />

    <!-- Structured Data -->
        <script type="application/ld+json">
            {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Error 404",
            "url": "http://www.triangle.mx/files/404.html",
            "description": "Lo sentimos, la página que estas tratando de encontrar no existe."
            }
        </script>

    <!-- Stylesheets -->

        <!-- Bootstrap 3 -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!-- Main Styles -->
        <link rel="stylesheet" href="../css/main.css">
</head>
<body onload="setTimeout(goBack, 5000)">

    <!--[if lt IE 8]>
            <p class="browserupgrade">Estas usando una versión muy <strong>antigua</strong> de tu navegador. Por favor <a href="http://browsehappy.com/">actualiza tu navegador</a> para tener una mejor experiencia en la red.</p>
    <![endif]-->

    <div id="error-message" class="error">
        <div class="row">
            <div class="col-md-8 col-md-push-2">
                <img src="../img/Iconos/Stop.svg" alt="Alerta" class="icon">
                <h1 class="title">Error <span>404</span></h1>
                <div class="lead">Lo sentimos, la página que estás tratando de buscar <span>no existe</span>. Porfavor checa que la <span>dirección URL</span> sea la correcta.</div>
                <a class="btn1" onclick="goBack()">Regresar</a>
            </div>
        </div>
    </div>

    <!-- Scripts -->

        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <!-- jQuery -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script type="text/javascript">
            window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
        </script>

        <!-- Google Analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-74662952-2', 'auto');
            ga('send', 'pageview');
        </script>

        <!-- Scripts JS -->
        <script src="../js/scripts.js"></script>

        <!-- Modernizr -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

</body>
</html>
