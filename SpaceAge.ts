export function age(planet: string, seconds: number): number {
  
  const earthYear:number = secondsToYear(seconds);
  const planetYear: number = toPlanetYear(planet, earthYear);
  
  return planetYear;
}

export function secondsToYear(sec: number): number {
  let year: number = sec / 31557600;

  return year;
}

export function toPlanetYear(planet: string, earthYear: number): number {
  let planetYear:number = 0;

  if (planet == 'mercury'){
    planetYear = earthYear * (1 / 0.2408467);
  } else if (planet == 'venus'){
    planetYear = earthYear * (1 / 0.61519726);
  } else if (planet == 'mars'){
    planetYear = earthYear * (1 / 1.8808158);
  } else if (planet == 'jupiter'){
    planetYear = earthYear * (1 / 11.862615);
  } else if (planet == 'saturn'){
    planetYear = earthYear * (1 / 29.447498);
  } else if (planet == 'uranus'){
    planetYear = earthYear * (1 / 84.016846);
  } else if (planet == 'neptune'){
    planetYear = earthYear * (1 / 164.79132);
  } else {
    planetYear = earthYear;
  }
  return Number(planetYear.toFixed(2));
}
