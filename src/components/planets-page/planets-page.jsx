import React from'react';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';

import SwapiService from "../../services/SwapiService";

export default class PlanetsPage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedItem: null
    };

    onSelected = id => {
        this.setState({
          selectedItem: id
        });
    };

    render() {

        const itemList = (
            <ItemList
                onSelected={this.onSelected}
                personId={this.state.selectedItem}
                getData={this.swapi.getAllPlanets}
                renderItem={item => `${item.name} (//TO DO//)`}/>
        );

        const planetDetails = (
            <ItemDetails
              itemId={this.state.selectedItem}
              getData={this.swapi.getPlanet}
              getImageUrl={this.swapi.getPlanetImage}>
                <Record field='population' label='Populatio' />
                <Record field='rotationPeriod' label='Rotation Period' />
                <Record field='diameter' label='Diameter' />
            </ItemDetails> 
          );

        return(
            <Row rigth={ itemList } left={ planetDetails } />
        );
    }
}


const Row = ({ rigth, left }) => {
    return (
        <div className='person-page container mt-3'>
            <div className='row px-3'>
                { rigth }
                { left }
            </div>
        </div>
    );
}