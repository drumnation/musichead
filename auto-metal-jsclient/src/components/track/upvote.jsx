import React from 'react'
import './style.css'
import './style.scss'

const Upvote = () => (
    <div className="button">
        <input type="radio" id="vote_up" name="vote"/>
        <input type="radio" id="vote_down" name="vote"/>
        <div className="bg"></div>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M10.5 21l7.5-7.5 7.5 7.5z"/></svg></div>
        <div className="count">23</div>
        <div className="count-up">24</div>
        <label for="vote_up"></label>
        <label for="vote_down"> </label>
    </div>
)

export default Upvote