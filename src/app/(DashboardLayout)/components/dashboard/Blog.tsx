import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

const blogs = [
  {
    img: "/images/backgrounds/u2.jpg", // ✅ Fixed Path
    title: "10 Reasons To Do A Digital Detox Challenge",
    subtitle:
      "Unplug, refresh, and reclaim your focus—discover why a digital detox can change your life.",
    btncolor: "error.main",
  },
  {
    img: "/images/backgrounds/u3.jpg", // ✅ Fixed Path
    title: "Traditional Soft,Sweet Beer Cheese",
    subtitle:
      "A rich and creamy blend of beer, cheese, and subtle sweetness—perfect for pairing and indulgence.",
    btncolor: "warning.main",
  },
  {
    img: "/images/backgrounds/u4.jpg", // ✅ Fixed Path
    title: "My Favorite Easy Black Pizza Toast Recipe",
    subtitle:
      "A crispy, cheesy, and flavorful black pizza toast—quick, easy, and perfect for any snack time!",
    btncolor: "primary.main",
  },
];

const BlogCard = () => {
  return (
    <Grid container spacing={3}>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image
              src={blog.img}
              alt="img"
              width={500} // ✅ Required for Next.js Images
              height={250} // ✅ Required for Next.js Images
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h6">{blog.title}</Typography>
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                  backgroundColor: blog.btncolor,
                  "&:hover": {
                    backgroundColor: blog.btncolor,
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
