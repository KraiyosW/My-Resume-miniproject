import './resume.css'
import { ReactDOM } from 'react'
import React from 'react'
import "./component/landingpage"
import Header,{Introduction} from './component/landingpage'
import ContentDetails from './component/content'
import EducationProfile from './component/education'
function App() {
 

  return (
    <div className='App'>
      <Header/>
      <Introduction/>
      <ContentDetails/>
      <EducationProfile/>
    </div>
  )
}

export default App;
