export default function PlatformBadge({ id }) {
  const map = { android:'Android', ios:'iOS', windows:'Windows', mac:'macOS', linux:'Linux' }
  return <span className="badge">{map[id] ?? id}</span>
}