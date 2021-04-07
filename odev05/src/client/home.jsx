import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="top">
                <h2>Kedi Bulmaca</h2>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.</p>
                <div>
                    <Link className="btn" to={"/game"}>Oyna</Link>
                </div>
            </div>
        );
    }
}

export default Home;