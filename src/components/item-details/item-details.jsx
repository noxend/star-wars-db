import React from 'react';
import './item-details.css';

import LoaderV2 from '../loader-v2';

export const Record = ({ item, field, label }) => {
    return (
        <p className='card-text'>{ label }: { item[field] }</p>
    );
}

export default class ItemDetails extends React.Component {
    
    state = {
        item: null,
        loading: false,
        image: null
    }

    updatePerson = () => {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) return;

        getData(itemId)
            .then(item => {
                this.setState({item, loading: false, image: getImageUrl(item)})
            });
    }
    
    componentDidUpdate(prewProps) {
        if(this.props.itemId !== prewProps.itemId) {
            this.setState({loading: true});
            this.updatePerson();
        }
    }

    componentDidMount() {
        this.updatePerson();
    }

    render() {

        if(this.state.loading) {
            return (
                <div className='col-md-4 col-sm-6 person-details'>
                    <LoaderV2 />
                </div>
            );
        }   

        if(!this.state.item) {
            return <span>Select a person from a list</span>
        }   

        const { name } = this.state.item;

        return (
            <div className='card col-md-4 col-sm-6 person-details'>
                <div className='row'>
                    <img alt='s' src={ this.state.image } height='100%' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>{ name }</h5>
                        { 
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item: this.state.item});
                            })
                        }
                        <a href="# " className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
