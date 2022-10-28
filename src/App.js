import React, { useState } from 'react';
import BarChart from './Components/BarChart';
import {UserData} from './Data';

function App() {

  var [userData,setUserData] = useState({
    labels: UserData.map((data)=>data.year),
    datasets:[{
      label:"Users Gained",
      data: UserData.map((data)=>data.userGain),
      backgroundColor:["gray",'cyan',"red"],
      borderColor:"black",
      borderWidth:5
    }]
  })

  return (
    <div>
      
      <div style={{width:"750px"}} >
        <BarChart chartData={userData} />
      </div>

    </div>
  );
}

export default App;
