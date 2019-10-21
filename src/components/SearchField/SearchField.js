/*barre de recherche"*/


import React, { Component } from 'react';

import './SearchField.css'

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            dataProducts: [],
            filteredData: []
            //contient search et filtered
        }
        
    }  

    _handleInputChange = event => {
        const search = event.target.value;
    
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return element.name.toLowerCase().includes(search.toLowerCase());
          });
    
          return {
            search,
            filteredData
          };
        });
      };

      
    _submitSearch = () => {
    
        /* Vérifier les valeurs*/
        if(!this.state.search) {
          return;
        }
    }

getData = () => {
fetch(`http://localhost:3000/search`)
  .then(response => response.json())
  .then(data => {
    const { search } = this.state;
    const filteredData = data.filter(element => {
      return element.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      data,
      filteredData
    });
  });
};

componentWillMount() {
this.getData();
}
      
    render() {
        return (
            
                <div className="rechercher">
                    <form class="field-container">
                        <input type="text" placeholder="Rechercher un produit..." value={this.state.search}
                        onChange={this.handleInputChange} onSubmit={this._submitSearch}/> 
                         
                    </form>
                <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
                </div>   
        );
    }
}

export default SearchField;