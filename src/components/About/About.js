/*
 * ABout component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './About.css';
import 'materialize-css/dist/css/materialize.min.css';


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
        <div>
            <div className="container">
                <div className="big-footer">
                    <div className="center">
                        <img alt="Cartographie de l'écosystème numérique azuréen" src="/img/big-logo.png"></img>
                    </div>
                    <div className="row">
                        <div className="col l2 s12">

                        </div>
                        <div className="col l8 s12">
                            <p className="about">Ce site a pour objectif de référencer toutes les entreprises, associations et organismes actifs dans l'univers numérique azuréen. Réalisé dans le cadre du premier salon Talent Tech.</p>
                            <p className="about"><span className="bold">Vous êtes dans la tech ?</span> Créez votre compte afin de référencer gratuitement votre entreprise ou association.</p>
                        </div>
                        <div className="col l2 s12">
                        
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p className="spec">Réalisé avec ReactJS, NodeJS, MongoDB et Materialize.</p>
                <p className="copyright">Equipe : Jérôme Weber - Maud Leal - Olivia Sabbah - Rachel Nething</p>
            </footer>
        </div>

        );
  }
}

export default App;
