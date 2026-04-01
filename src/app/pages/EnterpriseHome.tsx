import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Wrench, 
  FileText, 
  ShoppingCart, 
  ClipboardList,
  Package,
  TrendingUp,
  Bell,
  Download,
  Upload,
  Search,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function EnterpriseHome() {
  const { user } = useAuth();

  const quickActions = {
    engineer: [
      { icon: <Wrench className="w-6 h-6" />, label: '精准选型', path: '/selection', color: 'bg-blue-50 text-blue-600' },
      { icon: <Download className="w-6 h-6" />, label: '图纸下载', path: '/drawings', color: 'bg-green-50 text-green-600' },
      { icon: <Search className="w-6 h-6" />, label: '替代型号', path: '/alternatives', color: 'bg-purple-50 text-purple-600' },
      { icon: <FileText className="w-6 h-6" />, label: '技术参数', path: '/specs', color: 'bg-orange-50 text-orange-600' },
    ],
    procurement: [
      { icon: <Upload className="w-6 h-6" />, label: '批量下单', path: '/bulk-order', color: 'bg-indigo-50 text-indigo-600' },
      { icon: <ClipboardList className="w-6 h-6" />, label: '询价单', path: '/inquiries', color: 'bg-pink-50 text-pink-600' },
      { icon: <ShoppingCart className="w-6 h-6" />, label: '常购清单', path: '/favorites', color: 'bg-cyan-50 text-cyan-600' },
      { icon: <Package className="w-6 h-6" />, label: '订单查询', path: '/orders', color: 'bg-teal-50 text-teal-600' },
    ],
  };

  const recommendations = [
    { sku: 'GB5782-M8×40', name: '六角头螺栓', stock: 5000, price: '0.45', delivery: '48小时' },
    { sku: 'DIN912-M6×30', name: '内六角圆柱头螺钉', stock: 3200, price: '0.32', delivery: '24小时' },
    { sku: 'GB6170-M10', name: '1型六角螺母', stock: 8000, price: '0.18', delivery: '24小时' },
    { sku: 'DIN125-A-Φ8', name: '平垫圈', stock: 12000, price: '0.05', delivery: '即时' },
  ];

  const notifications = [
    { type: 'quote', message: '有1条报价待确认', count: 1, path: '/inquiries', icon: <ClipboardList className="w-4 h-4" /> },
    { type: 'order', message: '订单 #20240315 已发货', count: 1, path: '/orders', icon: <Package className="w-4 h-4" /> },
    { type: 'stock', message: '2个常用SKU库存不足', count: 2, path: '/favorites', icon: <AlertCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Banner区 - 简洁务实 */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span className="text-sm">企业用户</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">
                欢迎回来，{user?.companyName || user?.name}
              </h1>
              <p className="text-blue-100 text-lg">高效选型，便捷采购 — 您的专属工作台</p>
            </div>
            <div className="flex gap-3">
              <Link to="/selection">
                <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Wrench className="w-5 h-5" />
                  精准选型
                </Button>
              </Link>
              <Link to="/bulk-order">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10">
                  <Upload className="w-5 h-5" />
                  批量询价
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* 通知提醒区 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">通知与提醒</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {notifications.map((notif, index) => (
              <Link key={index} to={notif.path}>
                <Card className="p-5 hover:shadow-xl transition-all cursor-pointer border-l-4 border-l-blue-600 bg-white group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                        {notif.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{notif.message}</p>
                        <p className="text-xs text-gray-500 mt-1">点击查看详情 →</p>
                      </div>
                    </div>
                    {notif.count > 0 && (
                      <Badge className="rounded-full bg-red-500 text-white border-0 px-3 py-1">
                        {notif.count}
                      </Badge>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* 核心功能快捷区 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* 工程师模块 */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">工程师工具</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.engineer.map((action, index) => (
                <Link key={index} to={action.path}>
                  <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      {action.icon}
                    </div>
                    <span>{action.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </Card>

          {/* 采购模块 */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold">采购工具</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.procurement.map((action, index) => (
                <Link key={index} to={action.path}>
                  <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      {action.icon}
                    </div>
                    <span>{action.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* 个性化推荐区 */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-semibold">为您推荐</h2>
            </div>
            <Link to="/products">
              <Button variant="ghost" size="sm">
                查看更多 →
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendations.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow border border-gray-200">
                <div className="mb-3">
                  <p className="font-semibold text-sm mb-1">{item.sku}</p>
                  <p className="text-xs text-gray-600">{item.name}</p>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">库存</span>
                    <span className="font-medium text-green-600">{item.stock} 件</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">单价</span>
                    <span className="font-medium text-blue-600">¥{item.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">交期</span>
                    <span className="font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.delivery}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    加入询价
                  </Button>
                  <Button size="sm" className="flex-1 text-xs">
                    查看详情
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* 企业服务区 */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <h2 className="text-xl font-semibold mb-4">专属服务</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-600 text-white rounded-lg">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">1V1技术支持</h3>
                <p className="text-sm text-gray-600">专业工程师在线解答</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-600 text-white rounded-lg">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">非标定制询价</h3>
                <p className="text-sm text-gray-600">满足特殊规格需求</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-600 text-white rounded-lg">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">物流实时查询</h3>
                <p className="text-sm text-gray-600">订单进度实时掌握</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}