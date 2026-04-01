import { useLocation } from 'react-router';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { ArrowLeft, FileText } from 'lucide-react';

export function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop() || 'page';

  const pageNames: Record<string, string> = {
    'about': '公司简介',
    'certification': '资质认证',
    'factory': '生产基地',
    'cases': '行业案例',
    'products': '产品中心',
    'selection': '选型系统',
    'inquiry': '询价入口',
    'inquiries': '询价单',
    'orders': '我的订单',
    'favorites': '常购清单',
    'profile': '个人中心',
    'inquiry-management': '询价管理',
    'customer-management': '客户管理',
    'quote-management': '报价管理',
    'product-management': '商品管理',
    'content-management': '内容管理',
    'selection-maintenance': '选型系统维护',
    'data-view': '数据查看',
    'system-management': '系统管理',
    'user-management': '用户管理',
    'permission-management': '权限管理',
    'log-management': '日志管理',
  };

  const displayName = pageNames[pageName] || pageName;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-12 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-blue-100 rounded-full">
            <FileText className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">{displayName}</h1>
        <p className="text-gray-600 mb-8">
          此页面功能正在开发中，敬请期待
        </p>
        <Link to="/">
          <Button className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Button>
        </Link>
      </Card>
    </div>
  );
}
