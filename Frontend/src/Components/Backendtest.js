import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Backendtest() {
    const [backendData, setBackendData] = useState({ data: [] });
    useEffect(() => {
        axios
            .get("/allusers")
            .then(function (response) {
                console.log(typeof(response.data));
                setBackendData({ data: response.data });
                console.log(backendData)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1 style={{ color: "white" }}>{}hi</h1>
        </div>
    );
}

// import React, { Component } from 'react'
// import axios from "axios";
// // var a;
// export default class backendtest extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           data : ""
//         };
//       }

//     // componentDidMount = () => {

//     //     axios.get("/hello")
//     //     .then(function(response){
//     //         this.setState({data:JSON.stringify(response.data)});
//     //         console.log(response.data);
//     //     })
//     // }

//     this.setState({data: "HelloTest"});
//     // changeColor = () => {
// this.setState({color: "blue"});
//     // }

//     render() {
//         return (

//             <div style={{color:"white"}}>
//                 {this.state.data} frontendhello
/* <button
                type="button"
                onClick={this.changeColor}
                >Change color</button> */
//             </div>
//         )
//     }
// }
