import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function InfoBox({ data }) {
    let Image = "https://img.freepik.com/free-vector/coloured-weather-icons-collection_1126-30.jpg?ga=GA1.1.1787386526.1739624785&semt=ais_hybrid&w=740";
    console.log(data);
    return (
        <div className='infoBox'>
            {data.temp ?
             <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                           
                               <p><b>Temperature :</b> {data.temp}&deg;C</p>
                               <p><b>Humidity : </b>{ data.humidity}%</p>
                               <p><b>Pressure : </b>  {data.pressure}</p> 
                                <p><b>WindSpeed : </b>{data.windSpeed}km/h</p>
                                <p>{`Weather is ${data.description} and feels like ${data.feelLike}`}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>:
            <h1>Enter the name City</h1>
            }
            
        </div>

    )
}

export default InfoBox
