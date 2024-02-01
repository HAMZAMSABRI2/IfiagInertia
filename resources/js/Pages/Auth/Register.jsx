import { Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function Register() {

    const {data, setData, errors, processing, post} = useForm({
        name: "",
        email: "",
        password: ""
    });

    const submit = (e) => {
        e.preventDefault()
        post(route('register'), {
            onSuccess: () => {
                //
            }
        })
    }


    return (
        <div className="auth">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card card-body border-0 shadow-sm rounded-3">
                            <h1 className="h3">Créez un compte gratuitement</h1>
                            <form className="mt-3" onSubmit={submit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="name">Votre nom complet <span className="text-danger">*</span></label>
                                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} id="name" className="form-control" placeholder='Entrez votre nom complet' />
                                    {errors.name && <div className='text-danger'>{errors.name}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="email">Adresse e-mail <span className="text-danger">*</span></label>
                                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} id="email" className="form-control" placeholder='Entrez votre adresse e-mail' />
                                    {errors.email && <div className='text-danger'>{errors.email}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="password">Mot de passe <span className="text-danger">*</span></label>
                                    <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} id="password" className="form-control" placeholder='xxxxxxxx' />
                                    {errors.password && <div className='text-danger'>{errors.password}</div>}
                                </div>

                                <div className="form-group mb-4 text-center">
                                    <button className="btn btn-primary rounded-pill btn-lg" disabled={processing}>Valider</button>
                                </div>
                            </form>
                            <p className="mt-3">Vous avez déjà un compte ? <Link href={route('login')}>Connectez-vous</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
