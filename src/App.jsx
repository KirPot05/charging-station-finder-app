import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./lib/firebase";
import { Route, Routes } from "react-router-dom";
import Paths from "./Routes";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/global/Navbar";
import Sidebar from "./components/global/Sidebar";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // for handling sidebar navigation
  const [link, setLink] = useState(window.location.pathname);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentAuth) => {
      if (currentAuth) {
        dispatch(
          login({
            displayName: currentAuth.displayName,
            email: currentAuth.email,
            photoUrl: currentAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsub();
  }, []);

  return (
    <>
      <div>
        <Toaster />
      </div>
      {user === null && window.location.pathname !== "/register" ? (
        <Login />
      ) : (
        <div className="flex">
          {/* Sidebar with nav links*/}
          <Sidebar link={link} setLink={setLink} />

          {/* Routing Logic */}
          <div className="flex-1">
            <Navbar />
            <Routes>
              {Paths.map(({ path, component: Component }, index) => (
                <Route path={path} key={index} element={<Component />} />
              ))}
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
