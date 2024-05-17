import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { store } from './app/store'
import Login from './features/auth/Login'
import TopHeadlineArticlesList from "./features/news/TopHeadlineArticlesList.tsx"
import AllArticleList from "./features/news/AllArticleList.tsx";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/news" element={<TopHeadlineArticlesList />} />
                    <Route path="/global-news" element={<AllArticleList />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App;
