import { Link, useNavigate } from 'react-router';
import { useAuth, UserRole } from '../context/AuthContext';
import { Button } from './ui/button';
import { Building2 } from 'lucide-react';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // 根据角色显示不同的导航链接
  const getNavLinks = () => {
    const role = user?.role || 'guest';

    const commonLinks = [
      { label: '公司简介', path: '/about' },
      { label: '资质认证', path: '/certification' },
      { label: '生产基地', path: '/factory' },
      { label: '行业案例', path: '/cases' },
    ];

    const roleSpecificLinks: Record<UserRole, { label: string; path: string }[]> = {
      guest: [
        { label: '产品中心', path: '/products' },
        { label: '选型系统', path: '/selection' },
        { label: '询价入口', path: '/inquiry' },
      ],
      enterprise: [
        { label: '选型系统', path: '/selection' },
        { label: '询价单', path: '/inquiries' },
        { label: '我的订单', path: '/orders' },
        { label: '常购清单', path: '/favorites' },
        { label: '商品中心', path: '/products' },
      ],
      sales: [
        { label: '询价管理', path: '/inquiry-management' },
        { label: '客户管理', path: '/customer-management' },
        { label: '报价管理', path: '/quote-management' },
        { label: '订单查看', path: '/orders' },
        { label: '商品查询', path: '/products' },
      ],
      operations: [
        { label: '商品管理', path: '/product-management' },
        { label: '内容管理', path: '/content-management' },
        { label: '选型系统维护', path: '/selection-maintenance' },
        { label: '数据查看', path: '/data-view' },
      ],
      admin: [
        { label: '系统管理', path: '/system-management' },
        { label: '用户管理', path: '/user-management' },
        { label: '权限管理', path: '/permission-management' },
        { label: '日志管理', path: '/log-management' },
      ],
    };

    return { commonLinks, roleLinks: roleSpecificLinks[role] };
  };

  const { commonLinks, roleLinks } = getNavLinks();

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 左侧：LOGO */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">紧固件选型平台</span>
              <span className="text-xs text-gray-500">Fastener Selection Platform</span>
            </div>
          </Link>

          {/* 中间：导航链接 */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* 品牌核心入口 */}
            {commonLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* 角色专属入口 */}
            {roleLinks.length > 0 && (
              <>
                <div className="w-px h-4 bg-gray-300" />
                {roleLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* 右侧：用户入口 */}
          <div className="flex items-center gap-3">
            {!user ? (
              <>
                <Button variant="ghost" onClick={() => navigate('/login')}>
                  登录
                </Button>
                <Button onClick={() => navigate('/register')}>
                  注册
                </Button>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-700">
                  欢迎，<span className="font-medium">{user.name}</span>
                  {user.companyName && (
                    <span className="text-gray-500 ml-1">({user.companyName})</span>
                  )}
                </span>
                {user.role !== 'guest' && (
                  <Link to="/profile">
                    <Button variant="ghost" size="sm">
                      个人中心
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  退出
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}