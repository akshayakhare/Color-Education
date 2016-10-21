function mapper(){
    var format = function(d) {
        d = d / 1000000;
        return d3.format(',.02f')(d) + 'M';
    }
                var map = d3.geomap.choropleth()
        .geofile('./topojson/countries/USA.json')
        .projection(d3.geo.albersUsa)
        .column('Population')
        .unitId('ID')
        .scale(900)
        .legend(true)
        .zoomFactor(3);

    d3.csv('./Data/US_Population.csv', function(error, data) {
        d3.select('#map')
            .datum(data)
            .call(map.draw, map);
    });
}

mapper();