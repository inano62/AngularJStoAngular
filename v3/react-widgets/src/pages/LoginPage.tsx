import { useState } from 'react';
import { login } from '../auth.ts';

export default function LoginPage({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    try {
      await login(email, password);
      onSuccess();
    } catch {
      setErr('ログイン失敗');
    }
  };

  return (
    <div>
      <h2>React Login</h2>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password" />
        <button type="submit">Login</button>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
}
