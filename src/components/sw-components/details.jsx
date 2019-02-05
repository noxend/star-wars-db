import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";

import { SwapiServiceConsumer } from "../swapi-service-context";


export const PersonDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {swapi => {
        return (
          <ItemDetails
            itemId={selectedItem}
            getData={swapi.getPerson}
            getImageUrl={swapi.getPerosnImage}
          >
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label=" Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export const PlanetsDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {swapi => {
        return (
          <ItemDetails
            itemId={selectedItem}
            getData={swapi.getPlanet}
            getImageUrl={swapi.getPlanetImage}
          >
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="model" label="Model" />
            <Record field="costInCredits" label="Cost" />
            <Record field="passengers" label="Passengers" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export const VehicleDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {swapi => {
        return (
          <ItemDetails
            itemId={selectedItem}
            getData={swapi.getVehicle}
            getImageUrl={swapi.getVehicleImage}
          >
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="model" label="Model" />
            <Record field="costInCredits" label="Cost" />
            <Record field="passengers" label="Passengers" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};
