import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const branches = [
  { name: "Zimbabwe (HQ)", coords: [-17.8252, 31.0335] as [number, number], desc: "Headquarters — Harare" },
  { name: "Zambia", coords: [-15.3875, 28.3228] as [number, number], desc: "Branch — Lusaka" },
  { name: "South Africa", coords: [-26.2041, 28.0473] as [number, number], desc: "Branch — Johannesburg" },
  { name: "China", coords: [22.5431, 114.0579] as [number, number], desc: "Branch — Shenzhen" },
];

const goldIcon = L.divIcon({
  className: "",
  html: `<div style="width:22px;height:22px;border-radius:50%;background:oklch(0.78 0.14 85);border:3px solid oklch(0.22 0.06 260);box-shadow:0 4px 12px rgba(0,0,0,.3)"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export function BranchMap() {
  useEffect(() => {
    // ensure leaflet recalculates on mount in some layouts
    window.dispatchEvent(new Event("resize"));
  }, []);
  const lines: [number, number][][] = [
    [branches[0].coords, branches[1].coords],
    [branches[0].coords, branches[2].coords],
    [branches[0].coords, branches[3].coords],
  ];
  return (
    <div className="h-[480px] w-full rounded-xl overflow-hidden shadow-elegant border border-border">
      <MapContainer center={[0, 55]} zoom={3} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {branches.map((b) => (
          <Marker key={b.name} position={b.coords} icon={goldIcon}>
            <Popup><strong>{b.name}</strong><br />{b.desc}</Popup>
          </Marker>
        ))}
        {lines.map((l, i) => (
          <Polyline key={i} positions={l} pathOptions={{ color: "#d4a13a", weight: 2, dashArray: "6 8", opacity: 0.8 }} />
        ))}
      </MapContainer>
    </div>
  );
}
