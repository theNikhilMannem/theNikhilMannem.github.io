import './App.css';
import NavBar from './components/NavBar';

function App() {
  const links = [{name: 'Home', href: '/'}, {name: 'Projects', href: '/projects'}, {name: 'Me', href: '/me'}];
  return (
    <div className="App">
      <NavBar links={links} />
      <header className="App-header">
        <h4>
          Hello there! Nikhil, I am :) ..
        </h4>
          <br/>
          <br/>
          Currently, I'm building this place up! Why don't you give it a click at my : 
          <ul>
            <li>
              <a href="https://linkedin.com/in/thenikhilmannem" target="_blank" class="portfolioLink">LinkedIn Profile</a>
            </li>
            <li>
              <a href="https://github.com/thenikhilmannem" target="_blank" class="portfolioLink">GitHub Profile</a>
            </li>
            <li>
              <a href="https://codepen.io/thenikhilmannem" target="_blank" class="portfolioLink">CodePen Profile</a>
            </li>
            <li>
              <a href="https://repl.it/@thenikhilmannem" target="_blank" class="portfolioLink">Repl.it Profile</a>
            </li>
          </ul>
          <br/>
          <br/>
          
          <image id="deadpoolImage" src="images/Deadpool_Image.jpg" />
          
      {/* <!--     <a href="views/error.html">Error page!!</a> -->
          
          <!-- <embed type="text/html" src="https://linkedin.com/in/thenikhlmannem" width=200 height=250> -->
          <!-- <iframe src="https://codepen.io/theNikhilMannem" title="Nikhil's LinkedIn Profile"></iframe> --> */}
      </header>
    </div>
  );
}

export default App;
