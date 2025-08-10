import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import AppDetail from '../pages/AppDetail.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app/:slug" element={<AppDetail />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}