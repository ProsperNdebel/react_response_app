import Header from "./components/Header";
import FeedBackList from "./components/feedbackList";
import FeedBackStat from "./components/FeedBackStat";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";

import Card from "./components/shared/Card.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./components/context/FeedbackContext.js"; //the reason you are using curly braces is cause you are exporting it(it isnt a default export)
function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            {/* this is a global state: what we are doing is we are passing this state from this app component...all the way down to components that are grand
        children of this FeedbackList */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedBackForm />
                    <FeedBackStat />
                    <FeedBackList />
                  </>
                }
              ></Route>
              <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
}

//you can also set default props

export default App;
// also not that you can use <Link to ={{ pathname: '/about', search:'?sort=name'}}></Link>
//the one on the search is called a query params
//you can also use <NavLink to='url' activeClassName='active'>some text</NavLink>
//then you style in the css the active class

//to get params from a component:
//create the component
//and bring it into App.js, look into {useParams}
//then render it like this <Route path="/post/:id" element={<component to be rendered/>}/>
//withen the component you can import userParams and put it as the first thing in the in the component
//const params = useParams()
//then you can access the id or or whatever is in the url by params.id or params.name aslong as you provided in the path

//Navigate and Nested Routes
