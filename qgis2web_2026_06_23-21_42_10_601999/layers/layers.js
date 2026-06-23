var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_1.addFeatures(features_jalan_1);
var lyr_jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                popuplayertitle: 'jalan',
                interactive: true,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_1_0.png" /> Jalan Arte<br />\
    <img src="styles/legend/jalan_1_1.png" /> Jalan Kole<br />\
    <img src="styles/legend/jalan_1_2.png" /> <br />' });
var format_Kategori_2 = new ol.format.GeoJSON();
var features_Kategori_2 = format_Kategori_2.readFeatures(json_Kategori_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kategori_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kategori_2.addFeatures(features_Kategori_2);
var lyr_Kategori_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kategori_2, 
                style: style_Kategori_2,
                popuplayertitle: 'Kategori',
                interactive: true,
    title: 'Kategori<br />\
    <img src="styles/legend/Kategori_2_0.png" /> dekat<br />\
    <img src="styles/legend/Kategori_2_1.png" /> jauh<br />\
    <img src="styles/legend/Kategori_2_2.png" /> sedang<br />\
    <img src="styles/legend/Kategori_2_3.png" /> <br />' });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });
var format_FasilitasKesehatanPurworejo_4 = new ol.format.GeoJSON();
var features_FasilitasKesehatanPurworejo_4 = format_FasilitasKesehatanPurworejo_4.readFeatures(json_FasilitasKesehatanPurworejo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatanPurworejo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatanPurworejo_4.addFeatures(features_FasilitasKesehatanPurworejo_4);
var lyr_FasilitasKesehatanPurworejo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatanPurworejo_4, 
                style: style_FasilitasKesehatanPurworejo_4,
                popuplayertitle: 'Fasilitas Kesehatan Purworejo ',
                interactive: true,
    title: 'Fasilitas Kesehatan Purworejo <br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_0.png" /> Apotek Hallota<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_1.png" /> Apotek Titi Murni<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_2.png" /> Bidan Rosida<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_3.png" /> Klinik Dokter Ari Rachmawati<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_4.png" /> Panti Waluyo Hospital<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_5.png" /> Permata Maternity Hospital<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_6.png" /> PKD Ngasinan<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_7.png" /> Puskesmas<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_8.png" /> Puskesmas Banyuurip<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_9.png" /> Puskesmas Cangkrep<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_10.png" /> Puskesmas Grabag<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_11.png" /> Puskesmas Kutoarjo Purworejo<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_12.png" /> Puskesmas Mranti<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_13.png" /> Puskesmas Pembantu Butuh II Kedung sri<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_14.png" /> RS Amanah Umat<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_15.png" /> RSU Ananda Purworejo<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_16.png" /> RSUD Dr Tjitrowardojo<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_17.png" /> RSUD TJOKRONEGORO<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_18.png" /> Rumah Sakit Bersalin Ibu dan Anak (RSBIA) Kasih Ibu<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_19.png" /> Rumah Sakit Budi Sehat<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_20.png" /> Rumah Sakit Islam Pureworejo<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_21.png" /> Rumah Sakit Panti Waluyo<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_22.png" /> Rumah Sakit Umum Aisyiyah Purworejo<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_23.png" /> UPT Puskesmas Kecamatan Bener<br />\
    <img src="styles/legend/FasilitasKesehatanPurworejo_4_24.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_Kategori_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_FasilitasKesehatanPurworejo_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_jalan_1,lyr_Kategori_2,lyr_jalan_3,lyr_FasilitasKesehatanPurworejo_4];
lyr_jalan_1.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'kategori': 'kategori', 'jalan': 'jalan', });
lyr_Kategori_2.set('fieldAliases', {'fid': 'fid', 'mrb_dist_2': 'mrb_dist_2', 'skor': 'skor', 'jarak (m)': 'jarak (m)', 'skor_2': 'skor_2', 'totalskor': 'totalskor', 'kelas': 'kelas', });
lyr_jalan_3.set('fieldAliases', {'highway': 'highway', 'kategori': 'kategori', 'jalan': 'jalan', });
lyr_FasilitasKesehatanPurworejo_4.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Jalan': 'Jalan', 'Foto Fasilitas Kesehatan': 'Foto Fasilitas Kesehatan', });
lyr_jalan_1.set('fieldImages', {'fid': '', 'highway': 'TextEdit', 'kategori': 'TextEdit', 'jalan': 'TextEdit', });
lyr_Kategori_2.set('fieldImages', {'fid': '', 'mrb_dist_2': 'TextEdit', 'skor': 'TextEdit', 'jarak (m)': 'TextEdit', 'skor_2': 'TextEdit', 'totalskor': 'TextEdit', 'kelas': 'TextEdit', });
lyr_jalan_3.set('fieldImages', {'highway': '', 'kategori': '', 'jalan': '', });
lyr_FasilitasKesehatanPurworejo_4.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Jalan': 'TextEdit', 'Foto Fasilitas Kesehatan': 'ExternalResource', });
lyr_jalan_1.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'kategori': 'no label', 'jalan': 'no label', });
lyr_Kategori_2.set('fieldLabels', {'fid': 'no label', 'mrb_dist_2': 'no label', 'skor': 'no label', 'jarak (m)': 'no label', 'skor_2': 'no label', 'totalskor': 'no label', 'kelas': 'no label', });
lyr_jalan_3.set('fieldLabels', {'highway': 'no label', 'kategori': 'no label', 'jalan': 'no label', });
lyr_FasilitasKesehatanPurworejo_4.set('fieldLabels', {'fid': 'header label - visible with data', 'Nama': 'header label - visible with data', 'Kategori': 'header label - visible with data', 'Jalan': 'header label - visible with data', 'Foto Fasilitas Kesehatan': 'header label - visible with data', });
lyr_FasilitasKesehatanPurworejo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});