var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'opacity': 0.688000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.format.GeoJSON();
var features_ORGANIZACINTERRITORIALPROVINCIAL_1 = format_ORGANIZACINTERRITORIALPROVINCIAL_1.readFeatures(json_ORGANIZACINTERRITORIALPROVINCIAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1.addFeatures(features_ORGANIZACINTERRITORIALPROVINCIAL_1);
var lyr_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1, 
                style: style_ORGANIZACINTERRITORIALPROVINCIAL_1,
                popuplayertitle: "ORGANIZACIÓN TERRITORIAL PROVINCIAL",
                interactive: true,
                title: '<img src="styles/legend/ORGANIZACINTERRITORIALPROVINCIAL_1.png" /> ORGANIZACIÓN TERRITORIAL PROVINCIAL'
            });
var format_IEEE_2 = new ol.format.GeoJSON();
var features_IEEE_2 = format_IEEE_2.readFeatures(json_IEEE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IEEE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IEEE_2.addFeatures(features_IEEE_2);
var lyr_IEEE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IEEE_2, 
                style: style_IEEE_2,
                popuplayertitle: "IEEE",
                interactive: true,
                title: '<img src="styles/legend/IEEE_2.png" /> IEEE'
            });

lyr_OSMOpenTopoMap_0.setVisible(true);lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.setVisible(true);lyr_IEEE_2.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_ORGANIZACINTERRITORIALPROVINCIAL_1,lyr_IEEE_2];
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'fcode': 'fcode', 'DPA_ANIO': 'DPA_ANIO', });
lyr_IEEE_2.set('fieldAliases', {'AMIE': 'AMIE', 'NOM_INSTIT': 'NOM_INSTIT', 'TE_fin': 'TE_fin', 'NOM_ESTADO': 'NOM_ESTADO', 'NOM_SOSTEN': 'NOM_SOSTEN', 'AMIE_MATRI': 'AMIE_MATRI', 'NOMBRE_IE_': 'NOMBRE_IE_', 'OFERTA_1': 'OFERTA_1', 'OFERTA_2': 'OFERTA_2', 'OFERTA_3': 'OFERTA_3', 'OFERTA_4': 'OFERTA_4', 'NOM_LENGUA': 'NOM_LENGUA', 'REGIMEN': 'REGIMEN', 'JURISDICCI': 'JURISDICCI', 'DA_ZONA': 'DA_ZONA', 'DA_DIST': 'DA_DIST', 'NOM_DISTRI': 'NOM_DISTRI', 'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_ANIO': 'DPA_ANIO', 'txt': 'txt', 'DPA_CAB': 'DPA_CAB', 'CodUnico': 'CodUnico', 'X_F': 'X_F', 'Y_F': 'Y_F', 'GEOCODIGO': 'GEOCODIGO', 'ContME': 'ContME', 'COD_ME': 'COD_ME', 'COD_ME_Num': 'COD_ME_Num', 'IE_GIA': 'IE_GIA', 'Nota': 'Nota', 'ZONA': 'ZONA', 'COD_DISTRI': 'COD_DISTRI', 'DPA_PARR_1': 'DPA_PARR_1', 'DPA_DESP_1': 'DPA_DESP_1', 'DPA_CANT_1': 'DPA_CANT_1', 'DPA_DESC_1': 'DPA_DESC_1', 'DPA_PROV_1': 'DPA_PROV_1', 'DPA_DESP_2': 'DPA_DESP_2', 'Cam_Zona': 'Cam_Zona', 'Cam_Dis': 'Cam_Dis', 'Cam_Paarr': 'Cam_Paarr', 'Cam_Cant': 'Cam_Cant', 'Cam_Prov': 'Cam_Prov', 'Estudiante': 'Estudiante', });
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'fcode': 'TextEdit', 'DPA_ANIO': 'TextEdit', });
lyr_IEEE_2.set('fieldImages', {'AMIE': 'TextEdit', 'NOM_INSTIT': 'TextEdit', 'TE_fin': 'TextEdit', 'NOM_ESTADO': 'TextEdit', 'NOM_SOSTEN': 'TextEdit', 'AMIE_MATRI': 'TextEdit', 'NOMBRE_IE_': 'TextEdit', 'OFERTA_1': 'TextEdit', 'OFERTA_2': 'TextEdit', 'OFERTA_3': 'TextEdit', 'OFERTA_4': 'TextEdit', 'NOM_LENGUA': 'TextEdit', 'REGIMEN': 'TextEdit', 'JURISDICCI': 'TextEdit', 'DA_ZONA': 'TextEdit', 'DA_DIST': 'TextEdit', 'NOM_DISTRI': 'TextEdit', 'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'txt': 'TextEdit', 'DPA_CAB': 'TextEdit', 'CodUnico': 'TextEdit', 'X_F': 'TextEdit', 'Y_F': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'ContME': 'TextEdit', 'COD_ME': 'TextEdit', 'COD_ME_Num': 'TextEdit', 'IE_GIA': 'TextEdit', 'Nota': 'TextEdit', 'ZONA': 'TextEdit', 'COD_DISTRI': 'TextEdit', 'DPA_PARR_1': 'TextEdit', 'DPA_DESP_1': 'TextEdit', 'DPA_CANT_1': 'TextEdit', 'DPA_DESC_1': 'TextEdit', 'DPA_PROV_1': 'TextEdit', 'DPA_DESP_2': 'TextEdit', 'Cam_Zona': 'Range', 'Cam_Dis': 'Range', 'Cam_Paarr': 'Range', 'Cam_Cant': 'Range', 'Cam_Prov': 'Range', 'Estudiante': 'TextEdit', });
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldLabels', {'DPA_PROVIN': 'hidden field', 'DPA_DESPRO': 'inline label - always visible', 'fcode': 'no label', 'DPA_ANIO': 'hidden field', });
lyr_IEEE_2.set('fieldLabels', {'AMIE': 'inline label - always visible', 'NOM_INSTIT': 'inline label - always visible', 'TE_fin': 'hidden field', 'NOM_ESTADO': 'inline label - always visible', 'NOM_SOSTEN': 'header label - visible with data', 'AMIE_MATRI': 'inline label - always visible', 'NOMBRE_IE_': 'hidden field', 'OFERTA_1': 'header label - visible with data', 'OFERTA_2': 'hidden field', 'OFERTA_3': 'hidden field', 'OFERTA_4': 'inline label - always visible', 'NOM_LENGUA': 'hidden field', 'REGIMEN': 'hidden field', 'JURISDICCI': 'inline label - always visible', 'DA_ZONA': 'inline label - always visible', 'DA_DIST': 'hidden field', 'NOM_DISTRI': 'hidden field', 'DPA_PARROQ': 'inline label - always visible', 'DPA_DESPAR': 'inline label - always visible', 'DPA_CANTON': 'inline label - always visible', 'DPA_DESCAN': 'hidden field', 'DPA_PROVIN': 'inline label - always visible', 'DPA_DESPRO': 'inline label - always visible', 'DPA_ANIO': 'hidden field', 'txt': 'hidden field', 'DPA_CAB': 'hidden field', 'CodUnico': 'hidden field', 'X_F': 'hidden field', 'Y_F': 'hidden field', 'GEOCODIGO': 'hidden field', 'ContME': 'hidden field', 'COD_ME': 'hidden field', 'COD_ME_Num': 'hidden field', 'IE_GIA': 'hidden field', 'Nota': 'hidden field', 'ZONA': 'hidden field', 'COD_DISTRI': 'hidden field', 'DPA_PARR_1': 'hidden field', 'DPA_DESP_1': 'hidden field', 'DPA_CANT_1': 'hidden field', 'DPA_DESC_1': 'hidden field', 'DPA_PROV_1': 'hidden field', 'DPA_DESP_2': 'hidden field', 'Cam_Zona': 'hidden field', 'Cam_Dis': 'hidden field', 'Cam_Paarr': 'hidden field', 'Cam_Cant': 'hidden field', 'Cam_Prov': 'hidden field', 'Estudiante': 'hidden field', });
lyr_IEEE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});