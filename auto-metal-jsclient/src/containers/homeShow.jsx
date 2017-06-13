import React from 'react'
import HomeNotLoggedIn from '../components/home/homeNotLoggedIn'
import HomeLoggedIn from '../components/home/homeLoggedIn'

const HomeShow = () => {
    console.log('logged in or not')
    return (
        1 === 1 
                ? <HomeNotLoggedIn/>
                : <HomeLoggedIn/>
    )
}

export default HomeShow