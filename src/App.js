
import Hero from "./components/hero";
// import Footer from "./layout/footer";
import { Card, CardContent, Container, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
  
    // <Container
    //   maxWidth={"xl"}
    //   sx={{
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     [theme.breakpoints.down("md")]: {
    //       p: 0,
    //       display: "block",
    //     },
    //   }}
    // >
    //   <Card
    //     sx={{
    //      background: "black",
    //      border: "1px solid white" ,
    //       margin: "10% 10% 10% 10%",
    //       height: "100%",
    //       boxShadow:
    //         "10px white",
    //       [theme.breakpoints.down("md")]: {
    //         m: 0,
    //         height: "80%",
    //       },
    //     }}
    //     elevation={10}
    //   >
        <CardContent sx={{ height: "100%" }}>
          {/* <Header /> */}
          <Hero />
          {/* <Footer /> */}
        </CardContent>
    //   </Card>
    // </Container>
  );
}

export default App;
