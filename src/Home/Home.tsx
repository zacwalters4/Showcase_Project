import React from 'react'
import './Home.css'
import Search from '../SearchForm/SearchForm'
import Header from '../Header/Header'

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Search />
        </div>
    )
}

export default Home

