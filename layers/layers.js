var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_desasepang_1 = new ol.format.GeoJSON();
var features_desasepang_1 = format_desasepang_1.readFeatures(json_desasepang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desasepang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desasepang_1.addFeatures(features_desasepang_1);
var lyr_desasepang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desasepang_1, 
                style: style_desasepang_1,
                popuplayertitle: 'desa sepang',
                interactive: true,
                title: '<img src="styles/legend/desasepang_1.png" /> desa sepang'
            });
var format_PenggunaanKawasan_2 = new ol.format.GeoJSON();
var features_PenggunaanKawasan_2 = format_PenggunaanKawasan_2.readFeatures(json_PenggunaanKawasan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanKawasan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanKawasan_2.addFeatures(features_PenggunaanKawasan_2);
var lyr_PenggunaanKawasan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanKawasan_2, 
                style: style_PenggunaanKawasan_2,
                popuplayertitle: 'Penggunaan Kawasan',
                interactive: true,
                title: '<img src="styles/legend/PenggunaanKawasan_2.png" /> Penggunaan Kawasan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_desasepang_1.setVisible(true);lyr_PenggunaanKawasan_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_desasepang_1,lyr_PenggunaanKawasan_2];
lyr_desasepang_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'LUAS': 'LUAS', });
lyr_PenggunaanKawasan_2.set('fieldAliases', {'id': 'id', 'P_Lahan': 'P_Lahan', 'Luas': 'Luas', });
lyr_desasepang_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_PenggunaanKawasan_2.set('fieldImages', {'id': 'TextEdit', 'P_Lahan': '', 'Luas': '', });
lyr_desasepang_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'WADMKC': 'no label', 'WADMKK': 'no label', 'LUAS': 'inline label - always visible', });
lyr_PenggunaanKawasan_2.set('fieldLabels', {'id': 'no label', 'P_Lahan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_PenggunaanKawasan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});