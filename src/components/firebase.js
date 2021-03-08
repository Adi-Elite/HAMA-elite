// import React, { Component } from 'react';
// import {  } from 'react-firebas/firebae'
// import { FirestoreProvider } from "@react-firebase/firestore";

// export class firebase extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             files : null
//         }
//     }
//     handleChange =()=>{
//         this.setState ({
//             files : false
//         }
//         )
//     }
//     handleSave =() =>{
//         let bucketName = 'image'
//         let file = this.state.file[0]
//         let storageRef = firebase.storage().ref('${bucketName}/${file.name}')
//         let uploadTask = storageRef.put()
//     }
//     render() {
//         return (
//             <div>
//                 <input type="file" onChange={(e)={this.handleChange(e.targest.files)}}/>
//                 <button onClick={}/>save
//                 <img id="new-img"></img>
//             </div>
//         )
//     }
// }

// export default firebase
