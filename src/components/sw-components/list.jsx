import React from 'react';

import ItemList from '../item-list';

import { SwapiServiceConsumer } from "../swapi-service-context";

export const VehicleList = ({ onItemSelected, activeItem }) => {

    return (
        <SwapiServiceConsumer>
        {swapi => { 
          return (
            <ItemList
              onSelected={ onItemSelected }
              activeItem={ activeItem }
              getData={swapi.getAllVehicles}
              renderItem={item => `${item.name} (${item.model})`}
            />
          );
        }}
      </SwapiServiceConsumer>
    );
}

export const PersonsList = ({ onItemSelected, activeItem }) => {

  return (
      <SwapiServiceConsumer>
      {swapi => { 
        return (
          <ItemList
            onSelected={ onItemSelected }
            activeItem={ activeItem }
            getData={swapi.getAllPeople}
            renderItem={item => `${item.name} (${item.gender})`}
          />
        );
      }}
    </SwapiServiceConsumer>
  );
}

export const PlenetsList = ({ onItemSelected, activeItem }) => {

  return (
      <SwapiServiceConsumer>
      {swapi => { 
        return (
          <ItemList
            onSelected={ onItemSelected }
            activeItem={ activeItem }
            getData={swapi.getAllPlanets}
            renderItem={item => `${item.name} (${item.model})`}
          />
        );
      }}
    </SwapiServiceConsumer>
  );
}