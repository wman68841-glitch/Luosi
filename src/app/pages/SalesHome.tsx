import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ClipboardList, 
  Users, 
  FileText, 
  Package,
  Search,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  DollarSign
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function SalesHome() {
  const { user } = useAuth();

  const workStats = [
    { label: '待处理询价', count: 8, color: 'bg-red-100 text-red-700 border-red-300', icon: <AlertCircle className="w-5 h-5" />, path: '/inquiry-management?status=pending' },
    { label: '待确认报价', count: 3, color: 'bg-yellow-100 text-yellow-700 border-yellow-300', icon: <Clock className="w-5 h-5" />, path: '/quote-management?status=pending' },
    { label: '重点客户跟进', count: 5, color: 'bg-blue-100 text-blue-700 border-blue-300', icon: <Users className="w-5 h-5" />, path: '/customer-management?priority=high' },
  ];

  const recentInquiries = [
    { id: 'INQ-20240401-001', customer: '上海某汽车制造', sku: 'GB5782-M8×40', qty: 5000, time: '10分钟前', type: '标准件' },
    { id: 'INQ-20240401-002', customer: '江苏某机械厂', sku: 'DIN912-M6×30', qty: 2000, time: '25分钟前', type: '标准件' },
    { id: 'INQ-20240401-003', customer: '浙江某电器公司', sku: '非标定制-M10', qty: 1000, time: '1小时前', type: '非标件' },
    { id: 'INQ-20240401-004', customer: '广东某五金厂', sku: 'GB6170-M12', qty: 3000, time: '2小时前', type: '标准件' },
    { id: 'INQ-20240401-005', customer: '北京某航空企业', sku: 'AS3062-M8', qty: 500, time: '3小时前', type: '标准件' },
  ];

  const keyCustomers = [
    { name: '上海某汽车制造', level: 'VIP', lastOrder: '2024-03-28', status: '待跟进', inquiries: 3 },
    { name: '江苏某机械厂', level: 'A级', lastOrder: '2024-03-25', status: '已跟进', inquiries: 1 },
    { name: '浙江某电器公司', level: 'B级', lastOrder: '2024-03-20', status: '待跟进', inquiries: 2 },
  ];

  const todayStats = {
    inquiries: 12,
    quotes: 8,
    conversion: '45%',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner区 */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              销售工作台 - {user?.name}
            </h1>
            <p className="text-green-100">高效处理询价，精准跟进客户</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* 工作台 - 待处理任务统计 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">待处理任务</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {workStats.map((stat, index) => (
              <Link key={index} to={stat.path}>
                <Card className={`p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 ${stat.color}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm mb-2">{stat.label}</p>
                      <p className="text-4xl font-bold">{stat.count}</p>
                    </div>
                    <div className="text-4xl opacity-50">
                      {stat.icon}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* 询价处理快捷区 */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold">最新询价单</h2>
            </div>
            <Link to="/inquiry-management">
              <Button variant="ghost" size="sm">
                查看全部 →
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentInquiries.map((inquiry) => (
              <Card key={inquiry.id} className="p-4 hover:shadow-md transition-shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-blue-600">{inquiry.id}</span>
                      <Badge variant={inquiry.type === '非标件' ? 'destructive' : 'default'}>
                        {inquiry.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{inquiry.time}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">客户：</span>
                        <span className="font-medium">{inquiry.customer}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">SKU：</span>
                        <span className="font-medium">{inquiry.sku}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">数量：</span>
                        <span className="font-medium">{inquiry.qty} 件</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Button size="sm">
                      处理报价
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* 客户跟进区 */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">重点客户跟进</h2>
              </div>
              <Link to="/customer-management">
                <Button variant="ghost" size="sm">
                  查看全部 →
                </Button>
              </Link>
            </div>
            <div className="space-y-3">
              {keyCustomers.map((customer, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold">{customer.name}</span>
                        <Badge variant={customer.level === 'VIP' ? 'destructive' : 'secondary'}>
                          {customer.level}
                        </Badge>
                        <Badge variant={customer.status === '待跟进' ? 'outline' : 'default'}>
                          {customer.status}
                        </Badge>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <span>最近下单: {customer.lastOrder}</span>
                        <span>待处理询价: {customer.inquiries} 条</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        查看详情
                      </Button>
                      <Button size="sm">
                        发送报价
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* 辅助工具区 */}
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">快捷工具</h3>
              <div className="space-y-2">
                <Link to="/products">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Search className="w-4 h-4" />
                    商品查询
                  </Button>
                </Link>
                <Link to="/quote-templates">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <FileText className="w-4 h-4" />
                    报价模板
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Users className="w-4 h-4" />
                    常用联系人
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 数据统计区 */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">今日数据</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">询价量</span>
                  <span className="text-2xl font-bold text-blue-600">{todayStats.inquiries}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">报价量</span>
                  <span className="text-2xl font-bold text-green-600">{todayStats.quotes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">转化率</span>
                  <span className="text-2xl font-bold text-purple-600">{todayStats.conversion}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
