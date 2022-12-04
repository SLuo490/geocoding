import { Marker, useMap, Popup } from 'react-leaflet';
import icon from '../constants';
export default function MarkerComponent(props) {
  const { coordinates } = props;
  const map = useMap();
  return (
    <Marker
      eventHandlers={{
        click: () => {
          map.setView([coordinates[0], coordinates[1]], 13);
        },
      }}
      position={[coordinates[0], coordinates[1]]}
      icon={icon}
    >
      <Popup>
        <span>
          {coordinates[0]}, {coordinates[1]}
        </span>
      </Popup>
    </Marker>
  );
}
