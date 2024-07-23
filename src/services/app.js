// import amadeus from 'amadeus'



// export const searchFlightsAmadeus = (searchData) => {
//     return async (dispatch) => {
//         try {
//             const response = await amadeus.shopping.flightOffersSearch.get({
//                 originLocationCode: searchData.origin,
//                 destinationLocationCode: searchData.destination,
//                 departureDate: searchData.departureDate,
//                 adults: searchData.adultCount,
//                 children: searchData.childCount,
//                 infants: searchData.infantCount,
//                 // Add any other search parameters as needed
//             });

//             const flights = response.data.map((offer) => {
//                 return {
//                     id: offer.id,
//                     number: offer.itineraries[0].segments[0].flight.number,
//                     airline: offer.itineraries[0].segments[0].flight.carrierCode,
//                     departureAirport: offer.itineraries[0].segments[0].departure.iataCode,
//                     arrivalAirport: offer.itineraries[0].segments[0].arrival.iataCode,
//                     departure_time: offer.itineraries[0].segments[0].departure.at,
//                     arrival_time: offer.itineraries[0].segments[0].arrival.at,
//                     price: offer.price.total,
//                     class_name: offer.itineraries[0].segments[0].pricingDetailPerAdult.travelClass,
//                 };
//             });

//             dispatch({ type: 'SET_FLIGHTS', payload: flights });
//         } catch (error) {
//             console.error('Error searching flights:', error);
//         }
//     };
// };