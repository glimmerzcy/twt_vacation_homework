import React from 'react';
import './page.css'
import './page4.css'

function Page4() {
    return (
        <div className="page">
            <img className="background" src={require('./assets/all/4.jpg')} alt="page4"></img>

            <img className="ship-nomove" src={require('./assets/4/飞船不动.png')} alt="ship-nomove"></img>
            <img className="designer" src={require('./assets/4/设计师.png')} alt="designer"></img>
            <img className="ds-script" src={require('./assets/4/文字介绍.png')} alt="ds-script"></img>


            <img className="flash" src={require('./assets/4/闪光.png')} alt="flash"></img>
            <img className="monster" src={require('./assets/4/怪兽.png')} alt="page4"></img>


            <img className="ai" src={require('./assets/4/AI.png')} alt="AI"></img>
            <img className="ae" src={require('./assets/4/AE.png')} alt="AE"></img>
            <img className="ps" src={require('./assets/4/ps.png')} alt="ps"></img>
            
            <img className="word1" src={require('./assets/4/细节控.png')} alt="word1"></img>
            <img className="word2" src={require('./assets/4/兴趣广泛.png')} alt="word2"></img>
            <img className="word3" src={require('./assets/4/美图制作.png')} alt="word3"></img>
        </div>
    )
}

export default Page4;