import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, userState } from "../recoil/auth/atom";
import { shoppingState } from "../recoil/sneakers/Atom";
import { allUsers } from "../recoil/users/Atom";

function AdminProfile() {
  const products = useRecoilValue(shoppingState);

  const [token, setToken] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const anvandarnamn = useRecoilValue(allUsers);

  useEffect(() => {
    if (user !== "admin") {
      console.log(user);
      navigate("/Login");
      console.log("Redirecting to /Login");
    }
    if (user === "admin") {
      console.log("reachedAdminPage");
    }
  }, [token]);
  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  }, [user]);

  if (!user) {
    return <h1>Loading..</h1>;
  }

  return (
    <div>
      <div className="adminPageProduct">
        <table className="bordsTabell">
          <tr>
            <td className="bordsTabell"> Product: </td>
            <td className="bordsTabell"> Price: </td>
          </tr>
          {products.map((product) => (
            <tr>
              <td className="bordsTabell">{product.title}</td>
              <td className="bordsTabell">{product.price}:-</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="anvandare">
        <table>
          <tr>
            <td className="rows">Email</td>
            <td className="rows">User Name</td>
            <td className="rows">First Name</td>
            <td className="rows">Last Name</td>
          </tr>

          {anvandarnamn.map((u) => (
            <tr>
              <td className="rows">{u.email}</td>
              <td className="rows">{u.username}</td>
              <td className="rows">{u.name.firstname}</td>
              <td className="rows">{u.name.lastname}</td>
            </tr>
          ))}
        </table>
      </div>

      <h1>Admin</h1>
      <div className="p3">
        <button onClick={() => setUser("")}>Logout</button>
      </div>
    </div>
  );
}

export default AdminProfile;
