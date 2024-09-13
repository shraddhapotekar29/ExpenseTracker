import ExpenseTracker from "../src/ExpenseTracker/ExpenseTracker";
import './App.css';
import { SnackbarProvider } from 'notistack'
function App() {
  return (
    <div className="App">
      <SnackbarProvider>
     <ExpenseTracker />
     </SnackbarProvider>
    </div>
  );
}

export default App;
