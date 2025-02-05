// Import necessary libraries
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';

const OutageMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([37.7749, -122.4194], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const outageData = [
      { lat: 37.7749, lng: -122.4194, tickets: 15 }, // San Francisco
      { lat: 34.0522, lng: -118.2437, tickets: 100 }, // Los Angeles
      { lat: 40.7128, lng: -74.0060, tickets: 25 },  // New York
      { lat: 41.8781, lng: -87.6298, tickets: 1 },  // Chicago
    ];

    const minTickets = Math.min(...outageData.map(d => d.tickets));
    const maxTickets = Math.max(...outageData.map(d => d.tickets));

    const getGradientColor = (value) => {
      const ratio = (value - minTickets) / (maxTickets - minTickets);
      const red = Math.floor(255 * ratio);
      const green = Math.floor(255 * (1 - ratio));
      return `rgb(${red}, ${green}, 0)`; // Gradient from green to red
    };

    outageData.forEach(({ lat, lng, tickets }) => {
      const color = getGradientColor(tickets);

      const customIcon = L.divIcon({
        className: 'custom-pin',
        html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      L.marker([lat, lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>Tickets Raised:</b> ${tickets}`);
    });

    return () => map.remove();
  }, []);

  return (
    <div id="map" style={{ height: '100vh', width: '100%' }}></div>
  );
};

export default OutageMap;