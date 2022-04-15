import React from "https://cdn.skypack.dev/react@17.0.1";
//

import { BrowserRouter as Router, Switch, Route } from "https://cdn.skypack.dev/react-router-dom@5.1.2";
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import Tabsnew from './components/Tabsnew';
import Tabnew from './components/Tabnew';
import Prereqfund from './pages/Tabone';
//import Services from './pages/Services';


class App extends React.Component {
  render(){
    return(
      <div className="tabs">
        <h1>Prerequisite Tabs</h1>
       <Tabsnew>
         <Tabnew label="N4 Fundamental">
           <div>
             <Prereqfund />
             <p>Tab 1 content</p>
           </div>
         </Tabnew>
         <Tabnew label="Tab 2">
           <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw"/>
             <p>Tab 2 content</p>
           </div>
         </Tabnew>
         <Tabnew label="Tab 3">
           <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7Y713wstirF-PvKJa6OioS83ozc-BeFAzjjyndv58ZnfyaZK0g"/>
             <p>Tab 3 content</p>
           </div>
         </Tabnew>
         <Tabnew label="Tab 4">
           <div>
             <img src="http://choseneye.org/image/cache/catalog/SERVICES4-600x600.png"/>
            
             <p>Tab 4 content</p>
           </div>
         </Tabnew>
         <Tabnew label="Tab 5">
           <div>
             <img src="https://iconcept.com.my/wp-content/uploads/2018/10/iStock-956508212-600x600.jpg"/>
             <p>Tab 5 content</p>
           </div>
         </Tabnew>
       </Tabsnew>
      </div>
      
    )
  }
}

export default App;
