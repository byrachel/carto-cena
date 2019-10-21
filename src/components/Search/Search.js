/*
 * Search component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Search.css';
import 'materialize-css/dist/css/materialize.min.css';


/* App component */
class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (

      <div classname="row search">

        <div className="fluid col s12 search-fluid">

          <div className="container ">

          <h2 className="subtitle center">Quel acteur du numérique cherchez-vous ?</h2>

            <div className="row">
              <div class="input-field col l10 s12">
                <input placeholder="Saisissez votre recherche ici" id="recherche" type="text" class="validate" />
              </div>
              <div class="input-field col l2 s12">
                <a class="btn-small">Valider</a>
              </div>
            </div>

            <div className="category-input">
            <h3>Recherche par catégorie:</h3>
              <div className="row">
                <div class="input-field col l6 s12">
                  <li>Start-up</li>
                  <li>Grand-groupe</li>
                  <li>Centre de formation</li>
                </div>
                <div class="input-field col l6 s12">
                  <li>Incubateur / accélérateur</li>
                  <li>Lab</li>
                  <li>Financeur</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Search;
