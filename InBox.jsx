import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


export default function InBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL="https://images.unsplash.com/photo-1567787782997-319ae6cf2edc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWFhdGhlciUyMGVudmlvbiUyQ2V0fGVufDB8fDB8fHww";
    return(
        <div className="InBox">
            <h1>weatherinfo - {info.weather}</h1>
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80 
          ? RAIN_URL 
          : info.temp >15 
          ?HOT_URL 
          :COLD_URL
        }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
          info.humidity>80 
          ? <BeachAccessIcon /> 
          : info.temp >15 
          ?<WbSunnyIcon/> 
          :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp ={info.tempMin}&deg;C</p>
         <p>Max temp ={info.tempMax}&deg;C</p>
         <p>The weather can be described as <i> {info.weather} </i> and feels like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}