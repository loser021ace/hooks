import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "../src/hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, error, loading } = useAllUsers();
  const onClickFetchUser = () => {
    getUsers();
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ収集</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>エラーが発生しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
