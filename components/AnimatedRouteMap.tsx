'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Ship, Truck, Plane } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components (client-side only)
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import('react-leaflet').then((mod) => mod.GeoJSON),
  { ssr: false }
);
const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function AnimatedRouteMap() {
  const [mounted, setMounted] = useState(false);
  const [europeData, setEuropeData] = useState<any>(null);
  const mapRef = useRef<any>(null);

  // Our three target countries
  const targetCountries = ['PL', 'GB', 'ES']; // Poland, United Kingdom, Spain
  const countryNames: { [key: string]: string } = {
    'PL': 'Poland',
    'GB': 'United Kingdom',
    'ES': 'Spain'
  };

  // Coordinates for routes (approximate center of each country)
  const locations = {
    uk: { lat: 52.3555, lng: -1.1743, name: 'United Kingdom' },
    poland: { lat: 51.9194, lng: 19.1451, name: 'Poland' },
    spain: { lat: 40.4637, lng: -3.7492, name: 'Spain' }
  };

  // Define routes with proper typing
  const routes: Array<{ path: [number, number][]; color: string; label: string }> = [
    {
      path: [
        [locations.uk.lat, locations.uk.lng] as [number, number],
        [locations.poland.lat, locations.poland.lng] as [number, number]
      ],
      color: '#E87722',
      label: 'UK ↔ Poland'
    },
    {
      path: [
        [locations.poland.lat, locations.poland.lng] as [number, number],
        [locations.spain.lat, locations.spain.lng] as [number, number]
      ],
      color: '#0EA5E9',
      label: 'Poland ↔ Spain'
    },
    {
      path: [
        [locations.spain.lat, locations.spain.lng] as [number, number],
        [locations.uk.lat, locations.uk.lng] as [number, number]
      ],
      color: '#E87722',
      label: 'Spain ↔ UK'
    }
  ];

  useEffect(() => {
    setMounted(true);

    // Import Leaflet CSS and create custom icons
    Promise.all([
      import('leaflet/dist/leaflet.css'),
      import('leaflet')
    ]).then(([_, L]) => {
      // Fix default icon issue in webpack/next.js
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDguNCAxMi41IDI4LjUgMTIuNSAyOC41UzI1IDIwLjkgMjUgMTIuNUMyNSA1LjYgMTkuNCAwIDEyLjUgMHoiIGZpbGw9IiNFODc3MjIiLz48Y2lyY2xlIGN4PSIxMi41IiBjeT0iMTIuNSIgcj0iNiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDguNCAxMi41IDI4LjUgMTIuNSAyOC41UzI1IDIwLjkgMjUgMTIuNUMyNSA1LjYgMTkuNCAwIDEyLjUgMHoiIGZpbGw9IiNFODc3MjIiLz48Y2lyY2xlIGN4PSIxMi41IiBjeT0iMTIuNSIgcj0iNiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
        shadowUrl: '',
      });
    });

    // Fetch Europe GeoJSON
    fetch('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson')
      .then(r => r.json())
      .then(data => setEuropeData(data))
      .catch(err => console.error('Failed to load Europe GeoJSON:', err));
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#1C355E]/5 to-[#0EA5E9]/5 rounded-3xl overflow-hidden shadow-card-premium flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  const geoJSONStyle = (feature: any) => {
    const iso2 = feature?.properties?.ISO2 || feature?.properties?.iso_a2 || '';
    const isTarget = targetCountries.includes(iso2);

    return {
      color: '#ffffff',
      weight: 1,
      fillColor: isTarget ? '#E87722' : '#EAF2F7',
      fillOpacity: isTarget ? 0.7 : 0.3
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const iso2 = feature?.properties?.ISO2 || feature?.properties?.iso_a2 || '';
    const isTarget = targetCountries.includes(iso2);

    // Only add interactions for our target countries
    if (isTarget) {
      layer.on({
        mouseover: (e: any) => {
          const l = e.target;
          l.setStyle({
            weight: 2,
            color: '#0EA5E9',
            fillOpacity: 0.9,
            fillColor: '#E87722'
          });
          l.bringToFront();
        },
        mouseout: (e: any) => {
          e.target.setStyle(geoJSONStyle(feature));
        }
      });
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#1C355E]/5 to-[#0EA5E9]/5 rounded-3xl overflow-hidden shadow-card-premium">
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          border-radius: 24px;
        }
        .leaflet-control-attribution {
          font-size: 10px;
          background: rgba(255, 255, 255, 0.8) !important;
          border-radius: 8px;
        }
        .country-tooltip {
          background: white;
          border: 2px solid #E87722;
          border-radius: 10px;
          padding: 8px 12px;
          font-weight: 700;
          color: #1C355E;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .country-tooltip:before {
          border-top-color: #E87722 !important;
        }
        .leaflet-interactive {
          cursor: default !important;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>

      <MapContainer
        ref={mapRef}
        center={[52, 10]}
        zoom={4}
        minZoom={3}
        maxZoom={7}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={0.6}
        />

        {europeData && (
          <GeoJSON
            data={europeData}
            style={geoJSONStyle}
            onEachFeature={onEachFeature}
          />
        )}

        {/* Animated Routes */}
        {routes.map((route, index) => (
          <Polyline
            key={index}
            positions={route.path}
            pathOptions={{
              color: route.color,
              weight: 3,
              opacity: 0.7,
              dashArray: '10, 10'
            }}
          />
        ))}

        {/* City Markers */}
        {Object.values(locations).map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lng]}>
            <Popup>
              <div className="text-center">
                <strong className="text-[#1C355E]">{loc.name}</strong>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Animated transport icons overlay */}
      <div className="absolute top-4 right-4 z-[500] bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-[#E87722] p-2 rounded-lg">
              <Truck className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-[#1C355E]">Road Transport</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#0EA5E9] p-2 rounded-lg">
              <Ship className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-[#1C355E]">Sea Freight</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#0EA5E9] to-[#E87722] p-2 rounded-lg">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-[#1C355E]">Air Cargo</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-[500] bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
        <div className="text-xs font-semibold text-[#1C355E] mb-2">Our Markets</div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ background: '#E87722' }}></div>
          <span className="text-xs text-[#1C355E]">UK • Poland • Spain</span>
        </div>
      </div>
    </div>
  );
}
