import React, { useEffect, useState } from "react";
import axios from "axios";

function Backendtest() {
    const [backendData, setBackendData] = useState({data:""});
    useEffect(() => {
        axios
            .get("/hello")
            .then(function (response) {
                console.log(response);
                setBackendData({data:response.data});
            })
            .catch(function (error) {
                console.log("error");
            })
    }, []);
    return <div>
        <h1 style={{color:"white"}}>{backendData.data}hi</h1>
    </div>;
}

export default Backendtest;

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
