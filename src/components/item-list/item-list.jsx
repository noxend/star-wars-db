import React, { Component } from "react";
import "./item-list.css";

import LoaderV2 from '../loader-v2';

class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({itemList});
      });
  }

  renderItems(arr) {

    return arr.map((item) => {

      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <button key={id} onClick={() => this.props.onSelected(id)}
          className={`${this.props.activeItem === id ? 'active' : null} list-group-item list-group-item-action`}>
          { label }
        </button>
      );
    })
  }

  render(){

    const { itemList } = this.state;

    if(!itemList) {
      return (
        <div className='item-list col-md-8 col-sm-6'>
          <LoaderV2 />
        </div>
      );
    }

    return (
      <div className="item-list list-group col-md-8 col-sm-6" >
        { this.renderItems(itemList) }
      </div> 
    );
  }
};


const f = () => {
  return class extends React.Component {
      render() {
          return(
              <ItemList {...this.props}/>
          );
      }
  }
}

export default f(); 