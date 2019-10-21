/*
 * Login component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Login.css';
import 'materialize-css/dist/css/materialize.min.css';


/* App component */
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (

        <div classname="row">

            <div className="fluid col s12 grey-fluid login-form">

                <div className="container">

                    <div className="row">

                        <div className="col l4 s12">

                            <h2 className="subtitle">Se connecter</h2>

                                <br />
                                <div className="input-field">
                                    <input id="e-mail" type="text" className="validate" required />
                                    <label for="e-mail">Identifiant (e-mail)</label>
                                </div>

                                <div className="input-field">
                                    <input id="password" type="password" className="validate" required />
                                    <label for="password">Mot de passe</label>
                                </div>
                                <br />
                                <div className="input-field center">
                                    <a className="btn-small">Se connecter</a>
                                </div>
                        </div>

                        <div className="col l1 s12">
                        </div>

                        <div className="col l7 s12 login-form">

                            <h2 className="subtitle">Créer un compte</h2>

                            <div className="row">
                                <div className="col l6 s12">
                                    <div className="input-field">
                                        <input id="entreprise" type="text" className="validate" required />
                                        <label for="entreprise">Entreprise</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="contact" type="text" className="validate" required />
                                        <label for="contact">Contact</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="e-mail" type="text" className="validate" required />
                                        <label for="e-mail">e-mail</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="website" type="text" className="validate" required />
                                        <label for="website">Website</label>
                                    </div>
                                </div>

                                <div className="col l6 s12">

                                    <div className="input-field">
                                        <input id="siret" type="text" className="validate" />
                                        <label for="siret">SIRET</label>
                                    </div>

                                    <div className="input-field">
                                        <input id="password" type="password" className="validate" required />
                                        <label for="password">Mot de passe</label>
                                    </div>

                                    <div className="input-field">
                                        <input id="password" type="password" className="validate" required />
                                        <label for="password">Mot de passe</label>
                                    </div>
                                    <br />
                                    <div className="input-field">
                                        <a className="btn-small right">Valider</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
  }
}

export default Login;
