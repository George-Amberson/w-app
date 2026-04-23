import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import pin from '@/assets/icons/pin.svg'
const position = {
  latitude: 56.326497,
  longitude: 44.011897
};
const MapComp = () => {
    return (
        <div className="w-full md:w-3/4 lg:w-2/3 h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#e6dccb]">
            <Map
              initialViewState={{
                longitude: position.longitude,
                latitude: position.latitude,
                zoom: 16
              }}
              style={{ width: "100%", height: "100%" }}
              mapStyle={{
                version: 8,
                sources: {
                  osm: {
                    type: "raster",
                    tiles: [
                      "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                      "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
                      "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    ],
                    tileSize: 256
                  }
                },
                layers: [
                  {
                    id: "osm-layer",
                    type: "raster",
                    source: "osm"
                  }
                ]
              }}
            >
              <Marker
                longitude={position.longitude}
                latitude={position.latitude}
                anchor="bottom"
              >
                <img src={pin} className="w-16 h-16"/>
              </Marker>
            </Map>
          </div>
    )
};
export default MapComp;