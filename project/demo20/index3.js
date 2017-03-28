//function tick() {
//    //div等模块变量需要使用const React elements are immutable.
//    const element = (
//        <div>
//            <h1>Hello, world!</h1>
//            <h2>It is {new Date().toLocaleTimeString()}.</h2>
//        </div>
//    );
//    ReactDOM.render(
//        element,
//        document.getElementById('example')
//    );
//}
//setInterval(tick, 1000);
import React from 'react';
import ReactDOM from 'react-dom';

//var fetchUrl = require("fetch").fetchUrl;

import fetchJsonp from 'fetch-jsonp';
//函数即组件
//组件名字必须大写
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={mystate:"init state"};
    }
    changeHandler(){
        console.log("change");
    }
    componentDidMount(){
        console.log("componentDidMount");
        fetchJsonp('http://localhost:3000/users2', {credentials: 'include'})
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    this.setState({
                        mystate: JSON.stringify(data)
                    })
                } else {
                    alert("no data");
                }
            }).catch(function(e){
            console.log(e);
        })
    }
    render(){
        return(<div className="col-width">
            <button className="btn btn-primary applic_btn J_search">查询
            </button>
            <input type="text" value={this.state.mystate} onChange={this.changeHandler}/>
            <App />
        </div>);
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('example')
);
