import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardList({ card }) {
  // const {icon, title, description} = card

  const { name, username, email, website } = card;
  // console.log(icon, title, description);
  return (
    <Card>
      {/* <CardContent>
          <img src={icon} alt ={title} style={{height: 50, width: 50}}/>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </CardContent> */}

      <CardContent>
        <img src="https://img.icons8.com/color/344/pinguin.png" alt={name} style={{ height: 150, width: 150 }} />
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5">
          {username}
        </Typography>
        <Typography gutterBottom variant="h5">
          {email}
        </Typography>
        <Typography color="text.secondary">{website}</Typography>
      </CardContent>
    </Card>
  );
}

CardList.propTypes = {
  card: PropTypes.object,
};
