import React from 'react';
import "./App.css";
import Car from "./components/car/Car";

import styled from "styled-components";

function App() {
  const cars = [
      {
          name: "Name_1",
          year: "2000",
          spec: {
              engine: true,
              transmission: "auto"
          }
      },{
          name: 123,
          year: 1900,
          spec: {
                engine: "str",
              transmission: "manual"
          }
      },{
          name: "Name_3",
          year: 2100,
          spec: {
              engine: "3",
              transmission: "auto"
          }
      },{
          name: "Name_4",
          year: 2010,
          spec: {
              engine: 3,
              transmission: "manual"
          }
      }
  ];

  const trucks = [
      {
          name: "Name_4",
          year: 2010,
          spec_engine: 4.6,
          spec_transmission: "manual"
      },
      {
          name: "Name_5",
          year: 2010,
          spec_transmission: "manual"
      },
  ];

  const CarWithStyles = styled(Car)`
    
    font-family: Arial;
    font-size: 100px;
    
    border: 2px solid blue;
  `;

  return (
      <div className={"app"}>
          {
              cars.map((car, index) => {
                 return (
                     <CarWithStyles key={index}
                          name={car.name}
                          year={car.year}
                          engine={car.spec.engine || "10.0"}
                          transmission={car.spec.transmission}
                     />
                 );
              })
          }
          {
              trucks.map((truck, index) => {
                  return (
                      <CarWithStyles key={index}
                           name={truck.name}
                           year={truck.year}
                           engine={truck.spec_engine}
                           transmission={truck.spec_transmission}
                      />
                  );
              })
          }
      </div>
  );
}

export default App;
