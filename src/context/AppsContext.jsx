import { createContext, useContext, useMemo } from 'react'
import { APPS } from '../services/apps.js'

const AppsCtx = createContext({ apps: [] })

export function AppsProvider({ children }) {
  // Aquí podrías más adelante cargar desde Firestore/Storage o una API
  const value = useMemo(()=>({ apps: APPS }), [])
  return <AppsCtx.Provider value={value}>{children}</AppsCtx.Provider>
}

export function useApps() {
  const ctx = useContext(AppsCtx)
  if(!ctx) throw new Error('useApps debe usarse dentro de AppsProvider')
  return ctx
}