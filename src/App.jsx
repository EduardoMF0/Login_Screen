import Form from './Components/Form/Form.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

function App() {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Form />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;