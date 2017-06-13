import React from 'react'
import HomeSearchBar from '../components/home/homeSearchBar'
import HomeNotLoggedIn from '../components/home/homeNotLoggedIn'
import HomeLoggedIn from '../components/home/homeLoggedIn'

const HomeShow = () => {
    return (
        1 !== 1 
                ? <HomeNotLoggedIn/>
                : <HomeLoggedIn/>
    )
}

export default HomeShow