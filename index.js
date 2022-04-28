let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = () => drivers.slice(0,2);
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = () => drivers.slice(-2);
returnLastTwoDrivers(drivers)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = fareMultiplier => {
    return function(ticket){
        return ticket * fareMultiplier
    }
}
const fareDoubler = fare => {return createFareMultiplier(2)(fare)}
    // const potato = createFareMultiplier(2)
    // return potato(fare)
const fareTripler = fare => createFareMultiplier(3)(fare)

function selectDifferentDrivers(driverArray,func){
    return func(driverArray)
    }