// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import MyDivider from "MyDivider";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyDivider />
    </ThemeProvider>
  );
}
