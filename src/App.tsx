import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Home from "./Pages/Home";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const breakpoints = createBreakpoints({
  smm: '280px',
  sm: '320px',
  md: '436px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
})


const theme = extendTheme({ config, breakpoints  });

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
