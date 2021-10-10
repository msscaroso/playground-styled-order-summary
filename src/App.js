import {createGlobalStyle} from "styled-components";
import OrderSummary from "./pages/OrderSummary";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap');
  
  html {
    background-color: #e1e9fc;
  }
`


function App() {
    return (
        <>
            <GlobalStyles/>
            <OrderSummary/>
        </>
    );
}

export default App;
