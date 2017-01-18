<!DOCTYPE html>
<html>
    <head>
        <title>My Nearest Mountain</title>
        <link rel="stylesheet" href="stylesheets/style.css">
        <link rel="icon" type="image/png" href="mountain.png" />
        <script src="js/index.js" type="text/javascript"></script>
        <?php include("analyticstracking.php"); ?>
    </head>
    <body>
        <header>
            <h1>My Nearest Mountain</h1>
        </header>
        <div class="container">
            <div class="main-content">
                <div data-bind="if: error">
                    <h1 data-bind="text: error"></h1>
                </div>
                
                <h1 class="banner" id="banner" data-bind="text: 'Your nearest mountain is ' + nearestMountainName"></h1>
                <p data-bind="text: 'It is ' + distance + ' away'"></p>
                <div class="mapframe">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </body>
    <script src="lib/knockout-latest.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDJ8BS-G0TOQAyNPxPxWcsQ53_JHrN_9M&amp;callback=initMap"></script>
</html>
