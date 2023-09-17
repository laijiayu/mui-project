import { Container, Box, Paper, Typography, Button, ImageList, ImageListItem } from "@mui/material"
import { useMediaQuery, useTheme } from "@mui/material"

const array = ["first", "second", "third"]
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
]

const App = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  const col = matches ? 3 : 2
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          my: 4,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        {array.map((item) => {
          return (
            <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
              <Box sx={{ m: 3 }}>
                <Typography variant="h3">{item}</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum accusamus adipisci odio eligendi
                  sint labore fuga placeat porro deleniti.
                </Typography>
                <Button disabled="true" variant="contained" color="success" sx={{ mt: 3 }}>
                  click
                </Button>
                <Button startIcon></Button>
              </Box>
            </Paper>
          )
        })}
      </Box>
      {/* <ImageList variant="masonry" cols={col} gap={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </Container>
  )
}

export default App
