import React, { useState, useContext } from 'react';
import PixabayContext from '../../context/pixabay/pixabayContext';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ImageResults = () => {
  const pixabayContext = useContext(PixabayContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = image => {
    setOpen(true);
    pixabayContext.setCurrentImage(image);
  };
  const handleClickClose = () => setOpen(false);

  return (
    <div style={{ margin: 20, padding: 20 }}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {pixabayContext.images.map(image => (
          <Grow in={true} timeout={800}>
            <Card style={{ margin: 10 }}>
              <CardActionArea
                onClick={() => handleClickOpen(image.largeImageURL)}
              >
                <CardMedia
                  style={{ height: 320, width: 320 }}
                  image={image.largeImageURL}
                  title={image.tags}
                  key={image.id}
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h6'>
                    by: {image.user}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grow>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClickClose} fullWidth={true}>
        <img
          style={{ width: '100%' }}
          src={pixabayContext.currentImage}
          alt=''
        />
        <Button>Details</Button>
      </Dialog>
    </div>
  );
};

export default ImageResults;
