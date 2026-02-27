import React, { useEffect, useState } from 'react'
import mbxClient from '@mapbox/mapbox-sdk';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mbxDirections from '@mapbox/mapbox-sdk/services/directions';
import mapboxgl from "mapbox-gl";
import { Car, Clock, Calendar, MapPin, FileText } from "lucide-react";
import TimeInput from '../SelectionFields/TimeInput';
import TransferType from '../SelectionFields/TransferType';
import ExtraStop from '../SelectionFields/ExtraStop';
import Seats from '../SelectionFields/Seat';
import AirportDropoff from '../SelectionFields/AirportDropoff';
import AirportPickup from '../SelectionFields/AirportPickup';
import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv'
import Returntime from '../SelectionFields/Returntime';


const Booking = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Rides");
  const [airportPickup, setAirportPickup] = useState("");
  const [airportDropOff, setAirportDropOff] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returndate, setReturndate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returntime, setReturntime] = useState("");
  const [transferType, setTransferType] = useState("");
  const [extraStop, setExtraStop] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [map, setMap] = useState(null);
  const [pickupMarker, setPickupMarker] = useState(null);
  const [dropoffMarker, setDropoffMarker] = useState(null);

  const accessToken = import.meta.env.VITE_API_KEY;

  mapboxgl.accessToken = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (airportPickup) {
      setPickup(airportPickup);
    }
  }, [airportPickup]);

  useEffect(() => {
    if (airportDropOff) {
      setDropoff(airportDropOff);
    }
  }, [airportDropOff]);

  useEffect(() => {
    if (!map || !pickup) return;

    (async () => {
      const coords = await getCoordinates(pickup);
      if (!coords) return;

      if (pickupMarker) pickupMarker.remove();

      const marker = new mapboxgl.Marker({ color: "green" })
        .setLngLat(coords)
        .addTo(map);

      setPickupMarker(marker);
      map.flyTo({ center: coords, zoom: 12 });
    })();
  }, [pickup, map]);

  useEffect(() => {
    if (!map || !dropoff) return;

    (async () => {
      const coords = await getCoordinates(dropoff);
      if (!coords) return;

      if (dropoffMarker) dropoffMarker.remove();

      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coords)
        .addTo(map);

      setDropoffMarker(marker);

      // Fit both pickup & dropoff markers in view
      if (pickupMarker) {
        const bounds = new mapboxgl.LngLatBounds();
        bounds.extend(pickupMarker.getLngLat());
        bounds.extend(marker.getLngLat());
        map.fitBounds(bounds, { padding: 100 });
      } else {
        map.flyTo({ center: coords, zoom: 12 });
      }
    })();
  }, [dropoff, map]);

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [74.3587, 31.5204], // Lahore
      zoom: 10,
    });

    setMap(map);

    return () => map.remove();
  }, []);

  const baseClient = mbxClient({ accessToken });
  const geocodingService = mbxGeocoding(baseClient);
  const directionsService = mbxDirections(baseClient);

  const getCoordinates = async (placeName) => {

    if (!placeName) return null;

    try {
      const response = await geocodingService
        .forwardGeocode({
          query: placeName,
          limit: 1,
        })
        .send();

      const feature = response.body.features[0];
      return feature ? feature.center : null;
    } catch (error) {
      console.error("Geocoding error:", error);
      return null;
    }
  };

  const getDistanceAndDuration = async () => {
    try {

      const origin = await getCoordinates(pickup);
      const destination = await getCoordinates(dropoff);

      console.log('Origin:', origin);
      console.log('Destination:', destination);

      const response = await directionsService
        .getDirections({
          profile: 'driving',
          geometries: 'geojson',
          waypoints: [
            { coordinates: origin },
            { coordinates: destination },
          ],
        })
        .send();

      const route = response.body.routes[0];
      const calculatedDistance = (route.distance / 1000).toFixed(2);

      const totalminutes = (route.duration / 60).toFixed(2);
      const hour = Math.floor(totalminutes / 60);
      const minutes = Math.floor(totalminutes % 60);

      const calculatedDuration = `${hour} hr, ${minutes} min`;

      console.log(`Distance: ${calculatedDistance} km`);
      console.log(`Duration: ${calculatedDuration} minutes`);

      return { calculatedDistance, calculatedDuration }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await getDistanceAndDuration(pickup, dropoff);

    if (!result) {
      console.error("Failed to calculate route.");
      return;
    }

    const { calculatedDistance, calculatedDuration } = result;

    console.log(`The total distance is ${calculatedDistance} and the total duration is ${calculatedDuration}`)

    setTimeout(() => {
      const bookingData = {
        pickupDate,
        pickupTime,
        returndate,
        returntime,
        airportPickup,
        airportDropOff,
        pickup,
        dropoff,
        transferType,
        calculatedDistance,
        calculatedDuration,
        extraStop,
      };

      localStorage.setItem("Booking Data", JSON.stringify(bookingData));

      // alert(
      //   `Booking Summary:
      // Mode: ${activeTab}
      // Pickup Airport: ${airportPickup}
      // Dropoff Airport: ${airportDropOff}
      // Pickup: ${pickup}
      // Dropoff: ${dropoff}
      // Date: ${pickupDate}
      // Time: ${pickupTime}
      // Distance: ${calculatedDistance}
      // Duration: ${calculatedDuration}
      // Transfer Type: ${transferType}
      // Extra stop: ${extraStop}
      // Passengers: ${passengers}`
      // );

      setTimeout(() => navigate("/checkfare"), 1000);

    }, 1000)
  };

  return (
    <section id='booking'>
      <div className='flex justify-center flex-col items-center text-center w-full text-white bg-black border border-[#D4C5A0] pt-10'>
        <div className='flex flex-col gap-5 justify-center items-center px-3 mt-10 max-sm:mt-10 min-w-sm max-w-3xl'>
          <h1 className='text-3xl font-bold max-sm:text-2xl md:text-4xl py-2'>Book You <span className='font-Script text-[#D4C5A0]'>Comfort</span></h1>
          <p className='text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'>Book your premium ride now and discover transportation that truly understands your needs.</p>
        </div>
        <div className='w-[77%] bg-white mx-auto rounded-2xl my-10 max-sm:w-[90%]'>
          <div className='p-10 max-sm:p-4'>
            <div id='map' className='w-full h-40 rounded-2xl sm:h-40 md:h-60 lg:h-91.25'>

            </div>
          </div>
          <div className='px-10 py-4 max-sm:p-4 max-sm:pt-0'>
            <div className=" flex items-center justify-center text-[14px] max-sm:text-[12px]">
              <form
                onSubmit={handleSubmit}
                className=" pb-6 md:pb-8 rounded-3xl w-full max-sm:pb-4"
              >
                {/* Top Tabs */}
                <div className="flex justify-between mb-6 max-sm:mb-3 max-sm:flex-col">
                  {[
                    { name: "Book by Distance", icon: <Car className="w-5 h-5 max-sm:hidden" /> },
                    { name: "Book Hourly", icon: <Clock className="w-5 h-5 max-sm:hidden" /> },
                  ].map((tab) => (
                    <button
                      key={tab.name}
                      type="button"
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex items-center justify-center gap-2 px-6 py-3 max-sm:px-3 max-sm:py-2 rounded-2xl w-full transition-all duration-200 cursor-pointer ${activeTab === tab.name
                        ? "bg-white shadow-md text-black"
                        : "bg-transparent text-gray-600 hover:text-black"
                        }`}
                    >
                      {tab.icon}
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col justify-around gap-2 mb-4 max-sm:mb-2 md:flex-row">
                  <AirportPickup
                    airportPickup={airportPickup}
                    setAirportPickup={setAirportPickup}
                  />


                  <AirportDropoff
                    airportDropOff={airportDropOff}
                    setAirportDropOff={setAirportDropOff}
                  />
                </div>

                <div className="space-y-4 mb-4 max-sm:mb-2 max-sm:space-y-2">
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      placeholder="Enter Pick Up Location"
                      className="flex-1 bg-transparent outline-none text-gray-700"
                      value={airportPickup ? airportPickup : pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      placeholder="Enter Drop Off Location"
                      className="flex-1 bg-transparent outline-none text-gray-700"
                      value={airportDropOff ? airportDropOff : dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      required
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 max-sm:gap-1 mb-4 max-sm:mb-2 max-md:grid-cols-1">
                  <div>
                    <h2 className='text-gray-600 flex font-Roboto justify-start'>PickUp Date</h2>
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <input
                        type="date"
                        className="flex-1 bg-transparent outline-none text-gray-700"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className='text-gray-600 flex font-Roboto justify-start'>PickUp Time</h2>
                    <TimeInput
                      pickupTime={pickupTime}
                      setPickupTime={setPickupTime}
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 max-sm:gap-2 mb-4 max-sm:mb-2 max-md:grid-cols-1">
                  <TransferType
                    transferType={transferType}
                    setTransferType={setTransferType}
                  />
                  <div>
                    <ExtraStop
                      extraStop={extraStop}
                      setExtraStop={setExtraStop}
                    />
                  </div>
                </div>

                {
                  transferType === "Two Way (Round Trip)" ? (
                    <div className="grid grid-cols-2 gap-4 max-sm:gap-1 mb-4 max-sm:mb-2 max-md:grid-cols-1">
                      <div>
                        <h2 className='text-gray-600 flex font-Roboto justify-start'>Return Date</h2>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                          <Calendar className="w-5 h-5 text-gray-600" />
                          <input
                            type="date"
                            className="flex-1 bg-transparent outline-none text-gray-700"
                            value={returndate}
                            onChange={(e) => setReturndate(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <h2 className='text-gray-600 flex font-Roboto justify-start'>Return Time</h2>
                        <Returntime
                          returntime={returntime}
                          setReturntime={setReturntime}
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )
                }

                <Seats
                  passengers={passengers}
                  setPassengers={setPassengers}
                />

                <div>
                  <p className='flex flex-start font-Roboto text-black'>Special Requests or Notes (Optional)</p>
                  <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-2xl shadow-sm sm:p-4 mb-4 ">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <textarea type="text" className='flex flex-wrap w-full text-gray-600 focus:outline-none '
                      placeholder="Add any special requests, instructions, or notes for your driver (e.g, luggage info, special requiremnets, etc.)"
                    />
                  </div>
                </div>


                <button
                  type="submit"
                  className="w-full bg-[#d5c6a0] text-white font-medium py-3 cursor-pointer rounded-2xl hover:bg-[#c3b38f] transition"
                >
                  CHECK FARE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking