import { Box } from "@mui/material";
import countapi from "countapi-js";
import { useState } from "react";

// interface ViewCounter {
//     Views: number | string;

//   }

// const [views, setViews] = React.useState<ViewCounter[]>();

//Use effect
// useEffect(() => {
// async function ViewCounter() {

// }
// });

function Counter() {
  const [amount, setAmount] = useState(0);

  countapi.visits().then((result) => {
    setAmount(result.value);
  });
  return <Box className="footer-container">Hello {amount}</Box>;
}

export default Counter;
