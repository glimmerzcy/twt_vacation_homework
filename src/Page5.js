import React from 'react';
import './page.css'
import './page5.css'

function Page5() {
    return (
        <div className="page">
            <img className="background" src={require('./assets/all/5.jpg')} alt="page5"></img>

            <img className="programmer" src={require('./assets/5/程序员.png')} alt="programmer"></img>
            <img className="word4" src={require('./assets/5/word1.png')} alt="word1"></img>
            <img className="word5" src={require('./assets/5/word2.png')} alt="word2"></img>

            <img className="monster2" src={require('./assets/5/怪兽.png')} alt="monster"></img>

            <img className="cshape" src={require('./assets/5/C#.png')} alt="c#"></img>
            <img className="cpp" src={require('./assets/5/C++.png')} alt="c++"></img>
            <img className="html" src={require('./assets/5/HTML.png')} alt="html"></img>
            <img className="java" src={require('./assets/5/Java.png')} alt="java"></img>
            <img className="php" src={require('./assets/5/PHP.png')} alt="php"></img>
            <img className="vb" src={require('./assets/5/VB.png')} alt="vb"></img>
        </div>
    )
}

export default Page5;