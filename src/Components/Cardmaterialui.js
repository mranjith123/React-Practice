import React, { useState } from "react";
import { Card, CardHeader, Avatar, CardMedia, IconButton, CardActions, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, Share, Bookmark, BookmarkBorder, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const InstagramStoryCard = () => {
  const [liked, setLiked] = useState(false); // to handle like/unlike
  const [saved, setSaved] = useState(false); // to handle save/unsave

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 800, margin: 'auto' }}>
        {/* Card Header */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="user-avatar">
              U
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="User Name"
          subheader="October 18, 2024"
        />
        
        {/* Story Image */}
        <CardMedia
          component="img"
          height="300"
          width="400"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_XNS-diV3Yj8xrGrMoI-jbVyAvpLLrsxHQ&s" // Placeholder image, change the URL to your image
          alt="Instagram Story Image"
        />
        
        {/* Bottom Actions */}
        <CardActions disableSpacing>
          {/* Like Button */}
          <IconButton aria-label="like" onClick={handleLike}>
            {liked ? <Favorite sx={{ color: 'red' }} /> : <FavoriteBorder />}
          </IconButton>

          {/* Share Button */}
          <IconButton aria-label="share">
            <Share />
          </IconButton>

          {/* Save Button */}
          <IconButton aria-label="save" onClick={handleSave}>
            {saved ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
        </CardActions>
        
        {/* Caption/Description */}
        <Typography variant="body2" sx={{ padding: 2, color: 'text.secondary' }}>
          This is a beautiful moment captured in this story. Add your custom caption here!
        </Typography>
      </Card>
    </div>
  );
};

export default InstagramStoryCard;
