import { Box } from "@chakra-ui/react";
import Head from "next/head";


export default function Layout({children}){
    return (
        <>
        <Head></Head>
        <Box maxWidth="1280" m="auto">
            <header>Nav bar</header>
            <main>{children}</main>
            <footer>footer</footer>
        </Box>
        </>
    )

}
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
