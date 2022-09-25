//全ユーザー一覧を取得するカスタムフック
import { useState } from "react";
import { UserProfile } from "../types/userPropfile";
import { User } from "../types/api/user";
import axios from "axios";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setError(false);
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };
  return { getUsers, userProfiles, error, loading };
};
