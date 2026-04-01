import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { GuestHome } from './pages/GuestHome';
import { EnterpriseHome } from './pages/EnterpriseHome';
import { SalesHome } from './pages/SalesHome';
import { OperationsHome } from './pages/OperationsHome';
import { AdminHome } from './pages/AdminHome';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { HomeRouter } from './pages/HomeRouter';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { 
        index: true, 
        Component: HomeRouter,
      },
      // 通用页面
      { path: 'about', Component: PlaceholderPage },
      { path: 'certification', Component: PlaceholderPage },
      { path: 'factory', Component: PlaceholderPage },
      { path: 'cases', Component: PlaceholderPage },
      { path: 'products', Component: PlaceholderPage },
      { path: 'selection', Component: PlaceholderPage },
      { path: 'inquiry', Component: PlaceholderPage },
      { path: 'privacy', Component: PlaceholderPage },
      { path: 'terms', Component: PlaceholderPage },
      { path: 'faq', Component: PlaceholderPage },
      { path: 'support', Component: PlaceholderPage },
      { path: 'vision', Component: PlaceholderPage },
      { path: 'advantages', Component: PlaceholderPage },
      { path: 'join', Component: PlaceholderPage },
      
      // 企业用户页面
      { path: 'inquiries', Component: PlaceholderPage },
      { path: 'orders', Component: PlaceholderPage },
      { path: 'favorites', Component: PlaceholderPage },
      { path: 'profile', Component: PlaceholderPage },
      { path: 'bulk-order', Component: PlaceholderPage },
      { path: 'drawings', Component: PlaceholderPage },
      { path: 'alternatives', Component: PlaceholderPage },
      { path: 'specs', Component: PlaceholderPage },
      
      // 销售页面
      { path: 'inquiry-management', Component: PlaceholderPage },
      { path: 'customer-management', Component: PlaceholderPage },
      { path: 'quote-management', Component: PlaceholderPage },
      { path: 'quote-templates', Component: PlaceholderPage },
      { path: 'contacts', Component: PlaceholderPage },
      
      // 运营页面
      { path: 'product-management', Component: PlaceholderPage },
      { path: 'product-management/bulk-upload', Component: PlaceholderPage },
      { path: 'product-management/stock-update', Component: PlaceholderPage },
      { path: 'product-management/sku-edit', Component: PlaceholderPage },
      { path: 'product-management/drawing-upload', Component: PlaceholderPage },
      { path: 'content-management', Component: PlaceholderPage },
      { path: 'content-management/edit', Component: PlaceholderPage },
      { path: 'content-management/about', Component: PlaceholderPage },
      { path: 'content-management/certification', Component: PlaceholderPage },
      { path: 'content-management/cases', Component: PlaceholderPage },
      { path: 'content-management/articles', Component: PlaceholderPage },
      { path: 'content-management/news', Component: PlaceholderPage },
      { path: 'content-management/faq', Component: PlaceholderPage },
      { path: 'selection-maintenance', Component: PlaceholderPage },
      { path: 'selection-maintenance/filters', Component: PlaceholderPage },
      { path: 'selection-maintenance/standards', Component: PlaceholderPage },
      { path: 'data-view', Component: PlaceholderPage },
      
      // 管理员页面
      { path: 'system-management', Component: PlaceholderPage },
      { path: 'user-management', Component: PlaceholderPage },
      { path: 'user-management/internal', Component: PlaceholderPage },
      { path: 'user-management/enterprise', Component: PlaceholderPage },
      { path: 'permission-management', Component: PlaceholderPage },
      { path: 'log-management', Component: PlaceholderPage },
      { path: 'system-config', Component: PlaceholderPage },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
]);