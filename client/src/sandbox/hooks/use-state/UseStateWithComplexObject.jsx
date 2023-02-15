import { useState } from "react";

const UseStateWithComplexObject = () => {
  const INITIAL_USER = {
    name: {
      first: "",
      last: "",
    },
    email: "",
  };

  const [user, setUser] = useState(INITIAL_USER);

  return (
    <form>
      <span>
        your name is:
        <h5>
          {user.name.first} {user.name.last}
        </h5>
      </span>
      <span>
        your email is:
        <h5>{user.email}</h5>
      </span>

      <input
        type="text"
        placeholder="Enter first name"
        onChange={(e) =>
          setUser({ ...user, name: { ...user.name, first: e.target.value } })
        }
      />
      <input
        type="text"
        placeholder="Enter last name"
        onChange={(e) =>
          setUser({ ...user, name: { ...user.name, last: e.target.value } })
        }
      />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
    </form>
  );
};

export default UseStateWithComplexObject;
