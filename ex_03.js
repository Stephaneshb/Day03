function fillBus(peopleAtBusStops, busSeats) {
  let currentSeats = 0;
  let index = 0;
  while (index < peopleAtBusStops.length) {  
    currentSeats += peopleAtBusStops[index];
    if (currentSeats >= busSeats) {
      return index + 1;
    }
    index++;
  }

  return -1;
}
console.log(fillBus([1, 3, 10, 1], 12));
