// Import data
import { postings } from './postings';
// Import components
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Sidebar, Gallery, Searchbar } from './components';

function App(){
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-3 bg-secondary">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="mb-3">
            <Searchbar />
          </div>
          <Gallery postings={postings}/>
          <div className="App">
            {/* Your content will go here! */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
