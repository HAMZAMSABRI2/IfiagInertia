import { Link } from '@inertiajs/react'
import React from 'react'

export default function Home() {
    return (
        <>
            <div>Je suis la page d'accueil</div>
            <Link href={route('carlos')}>Page About</Link>
        </>
    )
}
