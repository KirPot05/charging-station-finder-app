import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./lib/firebase";
import { Route, Routes } from "react-router-dom";
import Paths from "./Routes";
import Login from "./pages/Login";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
        <Routes>
          {Paths.map(({ path, component: Component }, index) => (
            <Route path={path} key={index} element={<Component />} />
          ))}
        </Routes>
      )}
    </>
  );
}

export default App;
