import { Link } from '@inertiajs/react'
import React from 'react'
import NavBar from './navbar/NavBar'
import Bloc from './content/Bloc'
import Content from './content/Content'

export default function Home() {
    return (
        <>
                    <NavBar/>
                    <Bloc/>
                    <Content/>
        </>
    )
}
