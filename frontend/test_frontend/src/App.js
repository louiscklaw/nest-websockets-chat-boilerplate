import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  let [access_token, setAccessToken] = useState('');
  let [refresh_token, setRefreshToken] = useState('');

  const apiOnClick = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((res_json) => console.log({ res_json }));
  };

  const apiHealthOnClick = () => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((res_json) => console.log({ res_json }));
  };

  let [username, setUsername] = useState('user1');
  let [password, setPassword] = useState('Aa1234567');
  let [avatar, setAvatar] = useState('avatar.jpg');
  let [is_admin, setIsAdmin] = useState(false);
  let [sign_up_response, setSignUpResponse] = useState('');
  let [sign_in_response, setSignInResponse] = useState('');
  let [update_response, setUpdateResponse] = useState('');
  let [signout_response, setSignOutResponse] = useState('');

  const apiSignUpOnClick = () => {
    fetch('/api/auth/signUp', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username, password, avatar, is_admin }),
    })
      .then((res) => res.json())
      .then((res_json) => {
        setAccessToken(res_json?.access_token);
        setRefreshToken(res_json?.refresh_token);

        setSignUpResponse(res_json);
      });
  };

  const apiSignInOnClick = () => {
    axios
      .post(
        `/api/auth/signIn`,
        { username, password, avatar: 'test_avatar', is_admin: true },
        { withCredentials: true },
      )
      .then((res) => setSignInResponse(res.data))
      .catch((error) => setSignInResponse(error.message));
  };

  const apiUpdateClick = () => {
    axios
      .post(`/api/auth/update`, {}, { withCredentials: true })
      .then((res) => setUpdateResponse(res.data))
      .catch((error) => setUpdateResponse(error.message));
  };

  const apiSignOutClick = () => {
    axios
      .post(`/api/auth/signOut`, {}, { withCredentials: true })
      .then((res) => setSignOutResponse(res.data))
      .catch((error) => setSignOutResponse(error.message));
  };

  return (
    <div className="App" style={{ padding: '1rem' }}>
      <div>helloworld test_frontend </div>
      <pre>{JSON.stringify({ access_token, refresh_token }, null, 2)}</pre>
      <button onClick={(e) => apiOnClick(e)}>/api</button>
      <button onClick={(e) => apiHealthOnClick(e)}>/api/health</button>
      <div>
        <h3>sign up</h3>
        <div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={username}
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
          />
        </div>
        <div>
          <input
            onChange={(e) => setAvatar(e.target.value)}
            defaultValue={avatar}
          />
        </div>

        <pre>
          {JSON.stringify({ username, password, avatar, is_admin }, null, 2)}
        </pre>

        <pre>{JSON.stringify({ sign_up_response }, null, 2)}</pre>
        <button onClick={(e) => apiSignUpOnClick(e)}>apiSignUpOnClick</button>
      </div>

      <div>
        <h3>sign in</h3>
        <div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={username}
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
          />
        </div>
        <pre>
          {JSON.stringify({ username, password, avatar, is_admin }, null, 2)}
        </pre>

        <pre>{JSON.stringify({ sign_in_response }, null, 2)}</pre>
        <button onClick={(e) => apiSignInOnClick(e)}>apiSignInOnClick</button>
      </div>

      <div>
        <h3>update</h3>
        <pre>{JSON.stringify({ update_response }, null, 2)}</pre>
        <button onClick={(e) => apiUpdateClick(e)}>apiUpdateClick</button>
      </div>

      <div>
        <h3>signOut</h3>
        <pre>{JSON.stringify({ signout_response }, null, 2)}</pre>
        <button onClick={(e) => apiSignOutClick(e)}>apiSignOutClick</button>
      </div>
    </div>
  );
}

export default App;
