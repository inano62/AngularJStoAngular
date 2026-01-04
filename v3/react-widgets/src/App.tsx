import { useEffect, useState } from 'react'
import { login, me, logout } from './auth'

export default function App() {
  const [email, setEmail] = useState('jamesouviens7@gmail.com')
  const [password, setPassword] = useState('password')
  const [user, setUser] = useState<{ username: string } | null>(null)
  const [err, setErr] = useState<string>('')

  // 画面表示時に「ログイン済みか」確認（＝me()をここに書く）
  useEffect(() => {
    me()
      .then(setUser)
      .catch(() => setUser(null))
  }, [])

  const onLogin = async () => {
    setErr('')
    try {
      await login(email, password)
      const u = await me()
      setUser(u)
    } catch (e: any) {
      setErr('ログイン失敗')
    }
  }

  const onLogout = async () => {
    await logout()
    setUser(null)
  }

  if (!user) {
    return (
      <div>
        <h1>React Login</h1>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={onLogin}>Login</button>
        {err && <p>{err}</p>}
      </div>
    )
  }

  return (
    <div>
      <p>logged in: {user.username}</p>
      <button onClick={onLogout}>Logout</button>

      {/* ここから先はページネーションやルーティングを入れていく */}
      <h2>Inside React App</h2>
    </div>
  )
}
