import {useState} from 'react';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProductsPage from './pages/products/ProductsPage';
import OrdersPage from './pages/orders/OrdersPage';
import SettingsPage from './pages/settings/SettingsPage';

export default function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      <div className="flex pt-16 sm:pt-20">
        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6">
          {activeItem === 'Dashboard' && <DashboardPage />}
          {activeItem === 'Products' && <ProductsPage />}
          {activeItem === 'Orders' && <OrdersPage />}
          {activeItem === 'Settings' && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}
