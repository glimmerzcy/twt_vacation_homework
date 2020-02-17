import React from 'react';
import './page.css'
import './page6.css'

function Page6() {
    return (
        <div className="page">
            <img className="background" src={require('./assets/all/6.jpg')} alt="page6"></img>

            <a href="https://www.twt.edu.cn/"><img className="addus" src={require('./assets/6/addus.png')} alt="addus"></img></a>
        </div>
    )
}

export default Page6;