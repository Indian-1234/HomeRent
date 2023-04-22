import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import {Image} from 'antd';
import { useQuery } from 'react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css'
import { fetchData } from "./Jsondata";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);
  // button style -----------------------------------------

  return (
    <div >
      {data.map(item => (
        
            <Card sx={{ maxWidth: 345 }} key={item.id} id="hp" data-aos="fade-right">
            {/* <img src={`${item.image}`} alt="no image" /> */}
            <CardActionArea>
              <Image src={`${item.image}`} style={{width:'250px',height:'140px'}}/>
              <CardContent onClick={() => alert("WELCOME TO MAISON!!")}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   BHK:{item.bhk}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   SqareFeet:{item.sf}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   price:{item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   House-Type:{item.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Furniture_Status:{item.furn_status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   age_of_property:{item.age_of_prop}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Type_of_Properties:{item.ty_of_prop}
                </Typography>
                {/* <a href="#contact"><button style={{backgroundColor:"blue",color:'white'}}>contact</button></a>
                <button style={{backgroundColor:"blue",color:'white',marginLeft:'50px'}}>view</button> */}
              </CardContent>
            </CardActionArea>
          </Card>

      ))}
                  {/* <button onClick={logout} className="logout">LogOut</button> */}
                  {/* <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>Click me!</Button> */}

    </div>
  );
}

export default App;
