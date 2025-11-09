import { initializeApp, getApps } from "firebase/app";
import { initializeFirestore, connectFirestoreEmulator } from "firebase/firestore";

const kytronFirebaseConfig = {
  apiKey: import.meta.env.VITE_KYTRON_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_KYTRON_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_KYTRON_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_KYTRON_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_KYTRON_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_KYTRON_FIREBASE_APP_ID,
};

// VALIDACIÓN: evita requests a projects/undefined
if (!kytronFirebaseConfig.projectId) {
  console.error(
    "FATAL: VITE_KYTRON_FIREBASE_PROJECT_ID no está definido. " +
      "Configura las variables VITE_* en el proceso de build (CI)."
  );
  throw new Error("Missing VITE_KYTRON_FIREBASE_PROJECT_ID env");
}

const existingApp = getApps().find((app) => app.name === "kytron");
const kytronApp = existingApp || initializeApp(kytronFirebaseConfig, "kytron");

export const kytronDb = initializeFirestore(kytronApp, {
  // en DEV puedes forzar useFetchStreams para evitar XHR con credentials (reduce CORS issues local)
  experimentalForceLongPolling: false,
  useFetchStreams: import.meta.env.DEV ? true : false,
});

// Conectar al emulador en desarrollo (opcional)
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIRESTORE_EMULATOR === "true") {
  const host = import.meta.env.VITE_FIRESTORE_EMULATOR_HOST || "localhost";
  const port = Number(import.meta.env.VITE_FIRESTORE_EMULATOR_PORT || 8080);
  connectFirestoreEmulator(kytronDb, host, port);
}