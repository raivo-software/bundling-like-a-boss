// TÄHÄN TIEDOSTOON SINUN EI TARVITSE TEHDÄ MITÄÄN MUUTOKSIA!

import { addSpeed, subtractSpeed } from "./speedMath";

describe('adding and subtracting speed', () => {

  test("speed additions are correct", () => {
    const speedExpectations = [
      {speed1: {x: 0, y: 0, z: 0}, speed2: {x: 0, y: 0, z: 0}, expectation: {x: 0, y: 0, z: 0}},
      {speed1: {x: 5, y: 3, z: 8}, speed2: {x: 10, y: -10, z: -5}, expectation: {x: 15, y: -7, z: 3}},
      {speed1: {x: -5, y: 5, z: -3}, speed2: {x: 12, y: 3, z: -5}, expectation: {x: 7, y: 8, z: -8}}
    ];
    speedExpectations.forEach(x => {
      const newSpeed = addSpeed(x.speed1, x.speed2);
      expect(newSpeed.x).toBe(x.expectation.x);
      expect(newSpeed.y).toBe(x.expectation.y);
      expect(newSpeed.z).toBe(x.expectation.z);
    });
  });

  test("speed subtractions are correct", () => {
    const speedExpectations = [
      {speed1: {x: 0, y: 0, z: 0}, speed2: {x: 0, y: 0, z: 0}, expectation: {x: 0, y: 0, z: 0}},
      {speed1: {x: 5, y: 3, z: 8}, speed2: {x: 10, y: -10, z: -5}, expectation: {x: -5, y: 13, z: 13}},
      {speed1: {x: -5, y: 5, z: -3}, speed2: {x: 12, y: 3, z: -5}, expectation: {x: -17, y: 2, z: 2}}
    ];
    speedExpectations.forEach(x => {
      const newSpeed = subtractSpeed(x.speed1, x.speed2);
      expect(newSpeed.x).toBe(x.expectation.x);
      expect(newSpeed.y).toBe(x.expectation.y);
      expect(newSpeed.z).toBe(x.expectation.z);
    });
  });
});

