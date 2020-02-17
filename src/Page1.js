import React from 'react';
import './page.css'
import './page1.css'

class Page1 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            star: "twinkle-star",
            man: "big-man",
            rotate: 0,
        };
        this.twinkle = this.twinkle.bind(this);
        this.big_small = this.big_small.bind(this);
        this.rotate = this.rotate.bind(this);
    }
    
    
    componentDidMount() {
        this.starInterval = setInterval(() => this.twinkle(), 1000);
        this.manInterval = setInterval(() => this.big_small(), 1500);
        this.rotateInterval = setInterval(() => this.rotate(), 1000);
    }

    twinkle () {
        if (this.state.star === "twinkle-star") {
            this.setState({
                star: "twinkle-star-black"
            });
        } else {
            this.setState({
                star: "twinkle-star"
            });
        }
    }

    big_small() {
        if (this.state.man === "big-man") {
            this.setState({
                man: "small-man"
            });
        } else {
            this.setState({
                man: "big-man"
            });
        }
    }

    rotate() {
        this.setState((preState) => ({
            rotate: preState.rotate + 180
        }));
    }

    componentWillUnmount() {
        clearInterval(this.starInterval);
        clearInterval(this.manInterval);
        clearInterval(this.rotateInterval);
    }

    render() {
        const startStyle = {transform:`rotate(${this.state.rotate}deg)`};
        return (
            <div className="page">
                <img className="background" src={require('./assets/all/1.jpg')} alt="page1"></img>
                <img className={this.state.star} src={require('./assets/1/闪烁的星星.png')} alt="闪烁的星星"></img>
                <img className={this.state.man} src={require('./assets/1/放大缩小的人.png')} alt="放大缩小的人"></img>
                <img className="rotate-man" src={require('./assets/1/旋转的人.png')} alt="旋转的人" style={startStyle}></img>
            </div>
        );
    }
}

export default Page1;