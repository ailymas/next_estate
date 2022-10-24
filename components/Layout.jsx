import { Box } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head></Head>
    <Box maxWidth="1280" m="auto">
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);
export default Layout;
// const Layout = ({ Children }) => (
//   <>
//     <Head>
//       <title>real estate</title>
//     </Head>
//     <Box maxWidth="1280" m="auto">
//       <header>Nav bar</header>
//       <main>{Children}</main>
//       <footer>footer</footer>
//     </Box>
//   </>
// );
// export default Layout;
