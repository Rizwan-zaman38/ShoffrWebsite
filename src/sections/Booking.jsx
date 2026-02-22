import React, { useRef, useState } from 'react'
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api'
import { Car, Clock, Calendar, MapPin, FileText } from "lucide-react";
import TimeInput from '../SelectionFields/TimeInput';
import TransferType from '../SelectionFields/TransferType';
import ExtraStop from '../SelectionFields/ExtraStop';
import Seats from '../SelectionFields/Seat';
import AirportDropoff from '../SelectionFields/AirportDropoff';
import AirportPickup from '../SelectionFields/AirportPickup';
import { useNavigate } from 'react-router-dom';

const PinPoint = {
  lat: 31.5204,
  lng: 74.3587,
}
const mapStyle = {
  width: '100%',
  height: '365px',
  borderRadius: '16px'
}

const Booking = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Rides");
  const [airportPickup, setAirportPickup] = useState("");
  const [airportDropOff, setAirportDropOff] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [transferType, setTransferType] = useState("");
  const [extraStop, setExtraStop] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDsB8YMOeQ3OEfu-0wXHx4ufVcZSEQ3QH8',
    libraries: ['places'],
  })

  const [directionsResponse, setDirectionsResponse] = useState(null)


  const originRef = useRef()
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <p>Loading map...</p>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    calculateRoute();

    setTimeout(() => {
      const bookingData = {
        pickupDate,
        pickupTime,
        airportPickup,
        airportDropOff,
        distance,
        duration,
        extraStop,
      };

      localStorage.setItem("Booking Data", JSON.stringify(bookingData));

      alert(
        `Booking Summary:
      Mode: ${activeTab}
      Pickup Airport: ${airportPickup}
      Dropoff Airport: ${airportDropOff}
      Pickup: ${pickup}
      Dropoff: ${dropoff}
      Date: ${pickupDate}
      Time: ${pickupTime}
      Distance: ${distance}
      Duration: ${duration}
      Transfer Type: ${transferType}
      Extra stop: ${extraStop}
      Passengers: ${passengers}`
      );

      navigate("/checkfare");

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

            <GoogleMap mapContainerStyle={mapStyle} center={PinPoint} zoom={12}>
              <Marker position={PinPoint} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>

          </div>
          <div className='p-10 max-sm:p-4'>
            <div className=" flex items-center justify-center text-[14px] max-sm:text-[12px]">
              <form
                onSubmit={handleSubmit}
                className=" py-6 md:py-8 rounded-3xl w-full max-sm:py-4"
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
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      ref={originRef}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      placeholder="Enter Drop Off Location"
                      className="flex-1 bg-transparent outline-none text-gray-700"
                      ref={destiantionRef}
                      value={dropoff}
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