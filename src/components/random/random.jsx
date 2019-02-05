import React from 'react';

import SwapiService from '../../services/SwapiService';
import LoaderV2 from '../loader-v2';
import Error from '../Error';

import './random.css'

export default class Random extends React.Component {
 
	constructor() {
		super();
		this.swapi = new SwapiService();	

		this.state = {
			planet: {},
			loading: true,
			error: false
		}

		
		this.onError = (err) => {
			this.setState({
				error: true,
				loading: false
			});
		}

		this.onPanetLoaded = (planet) => {
			this.setState({planet, loading: false});
		}

		this.updatePlaner = () =>  {
			const id = Math.floor(Math.random() * 25 + 3);
			this.swapi.getPlanet(id)
				.then(this.onPanetLoaded)
				.catch(this.onError) 
		}  
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	componentDidMount(){
		this.updatePlaner();
		this.interval = setInterval(this.updatePlaner, 4000);	
	}
 
	render() {

		const { loading, planet: { id, name, population, diameter, rotationPeriod }, error } = this.state;	
		if(error) {
			return (
				<div className="container mt-4 random">
					<div className="jumbotron py-4">
						<div className='row'>
							<Error />
						</div>
					</div>
				</div>
			)
		}

		if(loading) {
			return (
				<div className="container mt-4 random">
					<div className="jumbotron py-4">
						<div className='row'>
							<LoaderV2 />
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="container mt-4 random">
				<div className="jumbotron py-4">
					<div className='row px-3'>
						<img alt='s' className='mr-4' src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` } height='200px' />
						<div className='description'>
							<h1>{ name }</h1>
							<p>Population: { population }</p>
							<p>Diameter: { diameter }</p>
							<p>Rotaion Period: { rotationPeriod }</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

