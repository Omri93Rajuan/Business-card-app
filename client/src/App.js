import "./App.css";
import Layout from "./layout/Layout";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./users/providers/UserProvider";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
