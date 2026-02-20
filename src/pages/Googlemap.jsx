import React, { useState } from 'react';

const Googlemap = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);

  const calculateDistanceAndTime = () => {
    if (!origin || !destination) {
      alert('Please enter both pickup and dropoff locations!');
      return;
    }

    const service = new window.google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status === 'OK') {
          const result = response.rows[0].elements[0];
          if (result.status === 'OK') {
            setDistance(result.distance.text);   // ✅ "378 km"
            setTime(result.duration.text);        // ✅ "4 hours 35 mins"
            console.log('Distance:', result.distance.text);
            console.log('Duration:', result.duration.text);
          } else {
            alert('Unable to find route for these locations.');
          }
        } else {
          alert('Error fetching distance matrix: ' + status);
        }
      }
    );
  };

  return (
    <section className="p-5 text-center">
      <h2>Google Map Distance Calculator</h2>
      <div className="flex flex-col items-center gap-2">
        <input
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          type="text"
          placeholder="Enter Pickup Location"
          className="border p-2 rounded"
        />
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          type="text"
          placeholder="Enter Dropoff Location"
          className="border p-2 rounded"
        />
        <button
          onClick={calculateDistanceAndTime}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Calculate Route
        </button>
      </div>

      {distance && (
        <div className="mt-4">
          <p><strong>Total Distance:</strong> {distance}</p>
          <p><strong>Estimated Time:</strong> {time}</p>
        </div>
      )}
    </section>
  );
};

export default Googlemap;
