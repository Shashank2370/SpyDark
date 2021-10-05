import { Typography } from "@material-ui/core";
import mainImage from "../../images/mainImage.svg";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={classes.root}>
      <div className={classes.heading}>
        <Typography className={classes.title}>SpyDark</Typography>
        <Typography variant="body1" gutterBottom>
          A Dark Web crawler which uses iterative and multi-threaded crawling to
          crawl the dark web.
        </Typography>
        <img className={classes.image} src={mainImage} />
      </div>
    </div>
  );
};

export default Home;
