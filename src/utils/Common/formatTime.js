export const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().slice(8, 10) + '/' + new Date(date).toISOString().slice(5, 7) + '/' + new Date(date).toISOString().slice(0, 4)

    return formattedDate
}

export const formatTime = (date) => {
    const formattedTime = new Date(date).toTimeString().slice(0, 5)

    return formattedTime
}

export const calculateFlightDuration = (departure_time, arrival_time) => {
    const departureDate = new Date(departure_time)
    const arrivalDate = new Date(arrival_time)
    const duration = arrivalDate - departureDate
    const hours = Math.floor(duration / 1000 / 60 / 60)
    const minutes = Math.floor((duration / 1000 / 60) % 60)
    return `${hours.toString().padStart(2, '0')}h${minutes.toString().padStart(2, '0')}`
}
