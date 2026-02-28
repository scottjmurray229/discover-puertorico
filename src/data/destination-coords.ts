// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  'san-juan': { lat: 18.4655, lng: -66.1057, label: 'San Juan' },
  condado: { lat: 18.4570, lng: -66.0725, label: 'Condado' },
  'isla-verde': { lat: 18.4460, lng: -66.0050, label: 'Isla Verde' },
  rincon: { lat: 18.3407, lng: -67.2500, label: 'Rincón' },
  vieques: { lat: 18.1263, lng: -65.4401, label: 'Vieques' },
  culebra: { lat: 18.3029, lng: -65.2835, label: 'Culebra' },
  'el-yunque': { lat: 18.2955, lng: -65.7866, label: 'El Yunque' },
  ponce: { lat: 18.0111, lng: -66.6141, label: 'Ponce' },
  'cabo-rojo': { lat: 18.0866, lng: -67.1457, label: 'Cabo Rojo' },
  fajardo: { lat: 18.3358, lng: -65.6524, label: 'Fajardo' },
  'bioluminescent-bays': { lat: 18.0930, lng: -65.4580, label: 'Bio Bays' },
  arecibo: { lat: 18.4725, lng: -66.7156, label: 'Arecibo' },
};
