import Layout from './components/Layout.jsx';
import { AppsProvider } from './context/AppsContext.jsx';
import AppRoutes from './routes/index.jsx';
import './App.css';

export default function App() {
  return (
    <AppsProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppsProvider>
  );
}