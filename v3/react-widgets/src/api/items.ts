export async function listItems() {
  const res = await fetch('/api/items', { credentials: 'include' })
  if (!res.ok) throw new Error('failed')
  return res.json()
}

export async function createItem(name: string) {
  const res = await fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name }),
  })
  if (!res.ok) throw new Error('failed')
  return res.json()
}
