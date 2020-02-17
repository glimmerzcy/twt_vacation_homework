import React from 'react';
import './page.css'
import './page3.css'

class Page3 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ship: "right-ship"
        };
        this.move = this.move.bind(this);
    }

    componentDidMount() {
        this.shipInterval = setInterval(() => this.move(), 2000);
    }

    move() {
        if (this.state.ship === "left-ship") {
            this.setState({
                ship: "right-ship"
            });
        } else {
            this.setState({
                ship: "left-ship"
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.shipInterval);
    }

    render() {
        return (
            <div className="page">
                <img className="background" src={require('./assets/all/3.jpg')} alt="page3"></img>

                <img className={this.state.ship} src={require('./assets/3/移动的飞船.png')} alt="move-ship"></img>
                <img className="product-manager" src={require('./assets/3/产品经理.png')} alt="produt-manager"></img>
                <img className="pm-script" src={require('./assets/3/文字.png')} alt="pm-script"></img>
                <img className="axure" src={require('./assets/3/Axure.png')} alt="axure"></img>
                <img className="x-mind" src={require('./assets/3/X-mind.png')} alt="x-mind"></img>

            </div>
        )
    }

}

export default Page3;