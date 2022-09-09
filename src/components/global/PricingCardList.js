import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ActionButton from './ActionButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function PricingCardList({data}) {

  const {title, details, price, buttonText, includeInCourse} = data
  return (
    <Card sx={{}}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {details}
          </Typography>
          <Typography color="text.secondary" style={{fontSize: "24px", fontWeight: "bolder", color:"black"}}>
            {price}<span style={{fontSize: "18px",fontWeight: "none", color:"grey"}}>/<sub>mo</sub></span>
          </Typography>
          <ActionButton variant="contained" text={buttonText} />
          <hr/>
          {
            includeInCourse.map((includes) => {
                return (
                    <>
                        <p><CheckCircleOutlineIcon/> {includes}</p>
                    </>
                )
            })
          }

        </CardContent>
    </Card>
  );
}
