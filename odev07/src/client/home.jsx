import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    componentDidMount(){
        if(this.props.user){
            this.props.fetchAndUpdateUserInfo();
        }
    }

    render() {
        const user = this.props.user;

        const loggedIn = user!==null && use!==undefined;
        return (
            <div className="top">
                <h2>Kedi Bulmaca</h2>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.</p>
                <p>Online oyuncu sayısı: {this.props.userCount}</p>
                {
                    loggedIn?(
                        <div>
                            <Link className="btn" to={"/game"}>Oyna</Link>
                            <div className="action">
                                <p>Galibiyet: {user.victories}</p>
                                <p>Mağlubiyet: {user.defeats}</p>
                            </div>
                        </div>
                    ):(<p>Oynamak için giriş yapınız</p>)
                }
            </div>
        );
    }
}

export default Home;