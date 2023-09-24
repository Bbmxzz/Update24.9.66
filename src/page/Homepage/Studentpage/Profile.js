import React, { useState,useEffect } from "react";
import { getAuth } from "firebase/auth";
import { updateProfile} from 'firebase/auth';
import { collection, doc, getFirestore, getDocs, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "./Profile.css";

const Profile = props => {
    const auth = getAuth();
    const user = auth.currentUser;

    const [Data,setData]=useState([])
    const myuid = user.uid
    const db = getFirestore()
    const myCollection = collection(db, "/users")
    //const myDocRef = doc(myCollection, myuid);
    const getMyDocumentData = async () => {
      try {
        const querySnapshot = await getDocs(myCollection); // เรียกใช้ getDocs เพื่อรับข้อมูลจากคอลเลกชัน
        querySnapshot.forEach((doc) => {
          // ดำเนินการกับเอกสารแต่ละรายการที่ได้รับ
          if (myuid == doc.id){
            //firstName = doc.get("firstName")
            //lastName = doc.get("lastName")
            //console.log(firstName)
            //console.log(lastName)
            setData(doc.data())
            console.log(doc.data());
                      
          } 
        
          //console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    
    // เรียกใช้งานฟังก์ชันเพื่อดึงข้อมูล
    useEffect(() => {
      getMyDocumentData();
    }, [])
    

    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const Username = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const Uid = user.uid;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      console.log("Email",email)
      console.log("Uid",Uid)
      console.log("Username",Username)
      
    }
    
    /*const [file, setFile] = useState();
    const storage = getStorage();
    const storageRef = ref(storage, "images/" +myuid);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log(downloadURL)
    })
    });
    function handleChange(event) {
      const url = storage.ref("images/" +myuid).getDownloadURL();
        console.log(url);
        setFile(url);
    }*/
    /*const storage = getStorage();
    const storageRef = ref(storage, "images/" +myuid)
    const handleChange = async (e) => {
      //e.preventDefault()
      const file = e.target[0]?.files[0]
      uploadBytes(storageRef, file).then((snapshot) => {
        //e.target[0].value = ''
        console.log('Uploaded a blob or file!');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
        })
      })*/
    const storage = getStorage();
    const storageRef = ref(storage, "images/" +myuid)
    const myDocRef = doc(db, "/users", myuid);
    let downloadURL="";
    const handleChange = async (e) => {
      //e.preventDefault()
      //const snapshot = await getDocs(myDocRef);
      //if (snapshot.data()) {
        //console.log("Document exists:", snapshot.data());
      //} else {
        //console.log("Document does not exist.");
      //}
      const file = e.target.files[0];
      const data2 = await uploadBytes(storageRef, file);
      downloadURL = await getDownloadURL(data2.ref);
      console.log(downloadURL);
      await setDoc(myDocRef, {
        firstName: Data.firstName, 
        lastName: Data.lastName,
        displayName: Data.displayName,
        email: Data.email,
        password: Data.password,
        photo: downloadURL
      });
      console.log("Document updated successfully.");

    }
 

    return (
      <div>
        <div className="shape" style={{display: "flex"}}>

                <div>
                  <br/>
                  &emsp;&emsp;<img alt='Profile' src={Data.photo} /><br/>
                </div>
                <div >
                  <br/>
                  &emsp;&emsp;Username : &emsp;{user.displayName}<br/>
                  &emsp;&emsp;Email : &emsp;{user.email}&emsp;&emsp;<br/>
                  &emsp;&emsp;Firstname : &emsp;{Data.firstName}<br/>
                  &emsp;&emsp;Lastname : &emsp;{Data.lastName}
                </div> 
        </div> 
        <div>
          <br/>
          <input type="file" onChange={handleChange}  accept=".png, .jpg, .jpeg"/>
        </div>
      </div>
    );

};
export default Profile



