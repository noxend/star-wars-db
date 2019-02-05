
class SwapiService {
    getResource = async(url) => {
        const res = await fetch(url);
        
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, ${res.status}`)
        }

		const body = await res.json();
		return body;
    }
    

    getAllVehicles = async() => {
        const res = await this.getResource('https://swapi.co/api/vehicles/');
        return res.results.map(this._transformVehicles);
    }

    getVehicle = async(id) => {
        const res = await this.getResource(`https://swapi.co/api/vehicles/${id}`);
        return this._transformVehicles(res);
    }

    getAllPeople = async() =>{
        const res = await this.getResource('https://swapi.co/api/people/');
        return res.results.map(this._transformPerson);
    }

    getPerson = async(id = 1) => {
        const res = await this.getResource(`https://swapi.co/api/people/${id}`);
        return this._transformPerson(res);
    }


    getAllPlanets = async() => {
        const res = await this.getResource('https://swapi.co/api/planets/');
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async(id = 1) => {
        const res = await this.getResource(`https://swapi.co/api/planets/${id}`);
        return this._transformPlanet(res)
    }

    getPerosnImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    }

    getPlanetImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    }

    getVehicleImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
    }

    _extractId = (item) => {
        const idReqExp = /\/([0-9]*)\/$/;
        return item.url.match(idReqExp)[1];
    }


    _transformVehicles = (vehicle) => {
        return {
            id: this._extractId(vehicle),
            name: vehicle.name,
            cargoCapacity: vehicle.cargo_capacity,
            consumables: vehicle.consumables,
            costInCredits: vehicle.cost_in_credits,
            manufacturer: vehicle.manufacturer,
            maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
            model: vehicle.model,
            passengers: vehicle.passengers,
            vehicleClass: vehicle.vehicle_class
        }
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

export default SwapiService;
