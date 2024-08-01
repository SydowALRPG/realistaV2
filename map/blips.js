/////////////////////////////////////////////////////////////////////////////
///////// FRVGS MAP /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const center_x = 50;
const center_y = 100;

var SateliteStyle = L.tileLayer('https://cdn.frvgs.com/map/tiles-satellite/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 8,
    noWrap: true,
    continuousWorld: false,
    id: 'SateliteStyle map',
  }),
  AtlasStyle = L.tileLayer('https://cdn.frvgs.com/map//tiles-atlas/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    id: 'styleAtlas map',
  }),
  RoadStyle = L.tileLayer('https://cdn.frvgs.com/map//tiles-road/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    id: 'styleRoad map',
  }),
  Original = L.tileLayer('https://cdn.frvgs.com/map//tiles-original/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    id: 'styleOriginal map',
  });

/////////////////////////////////////////////////////////////////////////////

var BlipsGroups = L.layerGroup();
var BlipsPublic = L.layerGroup();

var BlipsServices = L.layerGroup();
var BlipsStore = L.layerGroup();
var BlipsBusiness = L.layerGroup();
var BlipsFactories = L.layerGroup();

var BlipsEntertainment = L.layerGroup();
var BlipsSports = L.layerGroup();
var BlipsEvents = L.layerGroup();

var Icons = {
  "🏛 Public Services": BlipsPublic,

  "🏢 Business": BlipsBusiness,
  "🏭 Factories": BlipsFactories,

  "🤝 Services": BlipsServices,
  "🏬 Shopping": BlipsStore,

  "🎉 Entertainment": BlipsEntertainment,
  "🏃‍♀️ Sports": BlipsSports,
  "✨ Events": BlipsEvents,

};

/////////////////////////////////////////////////////////////////////////////

var map = L.map('map', {
  minZoom: 2,
  maxZoom: 6,
  Zoom: 6,
  maxNativeZoom: 6,
  preferCanvas: true,
  layers: [AtlasStyle],
  center: [50, -100],
  zoom: 2,
});

var layersControl = L.control.layers({
  "Satelite": SateliteStyle,
  "Atlas": AtlasStyle,
  "Road": RoadStyle,
  "Original": Original,
}, Icons).addTo(map);


function customIcon(icon, subfolder) {
  return L.icon({
    iconUrl: `/IconsLore/${subfolder}/${icon}.png`,
    iconSize: [24, 24],
    iconAnchor: [24, 24],
    popupAnchor: [-10, -27]
  });
}

// Mouse position for setting up blips
L.control.mousePosition().addTo(map);


/////////////////////////////////////////////////////////////////////////////
///////// BLIPS /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
///////// 🏛 Public Services /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

///////// 🏛 Los Santos ////////////////////////////////////////////////////

// PUBLIC - LSPD - Rockford
var X = -115.6;
var Y = 28.3;
L.marker([Y, X], {
  icon: customIcon("lspd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lspd.png' /><h2 style='text-align:center;'> LSPD </h2><p>Los Santos Police Department</p>");

// PUBLIC - Ocean Hospital (LSMC)
var X = -142.1;
var Y = 28.3;
L.marker([Y, X], {
  icon: customIcon("lsmc", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lsmc.png' /><h2 style='text-align:center;'>LSMC</h2><p>Ocean Medical Center</p>");

///////// 🏛 BLAINE COUNTY ////////////////////////////////////////////////////


///////// 🏛 SAN ANDREAS ////////////////////////////////////////////////////

// PUBLIC - SA GOUV [City hall]
var X = -118.8;
var Y = 30.8;
L.marker([Y, X], {
  icon: customIcon("lsgov", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lsgov.png' /><h2 style='text-align:center;'>City Hall</h2><p></p>");


/////////////////////////////////////////////////////////////////////////////
///////// 🔳 GROUPS /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////// 🏴‍☠️ LS GANGS //////////////////////////////////////////////////////


///////// 🏴‍☠️ SA MC /////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////
///////// 🏢 Industries /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Business - Goatzel 
var X = -127.5;
var Y = 10.8;
L.marker([Y, X], {
  icon: customIcon("autos", "business")
}).addTo(Icons["🏢 Business"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/autos.png' /><h2 style='text-align:center;'>Autohaus Goatzel</h2><p></p>");

// Business - Torben Towing 
var X = -93.1;
var Y = 7.9;
L.marker([Y, X], {
  icon: customIcon("repair", "business")
}).addTo(Icons["🏢 Business"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/repair.png' /><h2 style='text-align:center;'>Werkstatt</h2><p>Torben Towing</p>");

/////////////////////////////////////////////////////////////////////////////
///////// 🏭 Factories //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
///////// Add your custom icons here  ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////