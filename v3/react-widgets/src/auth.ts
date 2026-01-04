export async function login(email: string, password: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('login failed');
  return res.json();
}

export async function me() {
  const res = await fetch('/api/auth/me', {
    credentials: 'include',
  });

  if (!res.ok) throw new Error('unauthorized');
  return res.json();
}

export async function logout() {
  const res = await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('logout failed');
  return res.json();
}
