import NavBar from "./components/NavBar";
import AlbumsList from "./components/AlbumsList.js";
import { UserProvider } from "./context/UserContext.js";
import { AlbumsProvider } from "./context/AlbumsContext.js";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AlbumsProvider>
          <NavBar />
          <AlbumsList />
        </AlbumsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
