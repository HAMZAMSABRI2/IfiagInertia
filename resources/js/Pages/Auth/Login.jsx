import { Link } from '@inertiajs/react'
import React from 'react'

export default function Login() {
    return (
        <div className="auth">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card card-body border-0 shadow-sm rounded-3">
                            <h1 className="h3">Connectez-vous</h1>
                            <form className="mt-3">
                                <div className="form-group mb-4">
                                    <label htmlFor="email">Adresse e-mail <span className="text-danger">*</span></label>
                                    <input type="email" id="email" className="form-control" placeholder='Entrez votre adresse e-mail' />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password">Mot de passe <span className="text-danger">*</span></label>
                                    <input type="password" id="password" className="form-control" placeholder='xxxxxxxx' />
                                </div>
                                <div className="form-group mb-4 text-end">
                                    <a href="#" className="text-dark">Mot de passe oublié ?</a>
                                </div>

                                <div className="form-group mb-4">
                                    <button className="btn btn-primary rounded-pill btn-lg">Valider</button>
                                </div>
                            </form>

                            <p className="mt-3">Vous n'avez pas de compte ? <Link href={route('register')}>Créez-en un gratuitement</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
