import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardList({card}) {

  const {icon, title, description} = card
  // console.log(icon, title, description);
  return (
    <Card>
        <CardContent>
          <img src={icon} alt ={title} style={{height: 50, width: 50}}/>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </CardContent>
    </Card>
  );
}
