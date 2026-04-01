import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Package, 
  FileEdit, 
  Settings, 
  BarChart3,
  Upload,
  Edit,
  Image,
  Filter,
  TrendingUp,
  Eye,
  Download,
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function OperationsHome() {
  const { user } = useAuth();

  const pendingTasks = [
    { category: '商品维护', tasks: [
      { label: '待上架商品', count: 15 },
      { label: '待更新参数', count: 8 },
      { label: '待上传图纸', count: 12 }
    ]},
    { category: '内容维护', tasks: [
      { label: '待编辑文章', count: 3 },
      { label: '待更新资讯', count: 2 }
    ]},
    { category: '选型系统', tasks: [
      { label: '筛选维度待优化', count: 5 },
      { label: '参数待补充', count: 7 }
    ]}
  ];

  const quickActions = [
    { 
      icon: <Upload className="w-6 h-6" />, 
      label: '批量上架', 
      path: '/product-management/bulk-upload',
      color: 'bg-blue-50 text-blue-600',
      desc: '快速上传产品'
    },
    { 
      icon: <Edit className="w-6 h-6" />, 
      label: '库存更新', 
      path: '/product-management/stock-update',
      color: 'bg-green-50 text-green-600',
      desc: '批量更新库存'
    },
    { 
      icon: <Package className="w-6 h-6" />, 
      label: 'SKU编辑', 
      path: '/product-management/sku-edit',
      color: 'bg-purple-50 text-purple-600',
      desc: '参数维护'
    },
    { 
      icon: <Image className="w-6 h-6" />, 
      label: '图纸上传', 
      path: '/product-management/drawing-upload',
      color: 'bg-orange-50 text-orange-600',
      desc: '上传产品图纸'
    },
    { 
      icon: <FileEdit className="w-6 h-6" />, 
      label: '内容编辑', 
      path: '/content-management/edit',
      color: 'bg-pink-50 text-pink-600',
      desc: '官网内容维护'
    },
    { 
      icon: <Filter className="w-6 h-6" />, 
      label: '筛选维护', 
      path: '/selection-maintenance/filters',
      color: 'bg-cyan-50 text-cyan-600',
      desc: '选型筛选条件'
    },
  ];

  const dataInsights = [
    { label: '商品浏览量', value: '15,234', trend: '+12%', icon: <Eye className="w-5 h-5" /> },
    { label: '选型次数', value: '3,456', trend: '+8%', icon: <Search className="w-5 h-5" /> },
    { label: '图纸下载量', value: '1,892', trend: '+15%', icon: <Download className="w-5 h-5" /> },
  ];

  const hotProducts = [
    { sku: 'GB5782-M8×40', views: 1234, selections: 456, downloads: 234 },
    { sku: 'DIN912-M6×30', views: 1089, selections: 389, downloads: 198 },
    { sku: 'GB6170-M10', views: 987, selections: 345, downloads: 176 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner区 */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              运营工作台 - {user?.name}
            </h1>
            <p className="text-purple-100">高效维护商品，优化内容展示</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* 运营工作台 - 待处理任务 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">待处理维护任务</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pendingTasks.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  {category.category === '商品维护' && <Package className="w-5 h-5 text-blue-600" />}
                  {category.category === '内容维护' && <FileEdit className="w-5 h-5 text-green-600" />}
                  {category.category === '选型系统' && <Settings className="w-5 h-5 text-purple-600" />}
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <span className="text-sm">{task.label}</span>
                      <Badge variant="destructive" className="rounded-full">
                        {task.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 商品维护快捷区 */}
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">快捷操作</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.path}>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-200 h-full">
                  <div className="text-center">
                    <div className={`p-3 rounded-lg ${action.color} mx-auto w-fit mb-3`}>
                      {action.icon}
                    </div>
                    <p className="font-semibold text-sm mb-1">{action.label}</p>
                    <p className="text-xs text-gray-500">{action.desc}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* 内容维护快捷区 */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FileEdit className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold">内容维护中心</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-3">官网内容</h3>
                <div className="space-y-2">
                  <Link to="/content-management/about">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      公司简介
                    </Button>
                  </Link>
                  <Link to="/content-management/certification">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      资质认证
                    </Button>
                  </Link>
                  <Link to="/content-management/cases">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      案例更新
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-3">技术内容</h3>
                <div className="space-y-2">
                  <Link to="/content-management/articles">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      技术文章
                    </Button>
                  </Link>
                  <Link to="/content-management/news">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      资讯发布
                    </Button>
                  </Link>
                  <Link to="/content-management/faq">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      常见问题
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* 选型系统维护区 */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">选型系统维护</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <Link to="/selection-maintenance/filters">
                  <Card className="p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Filter className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-sm">筛选维度管理</p>
                        <p className="text-xs text-gray-500">新增/修改筛选条件</p>
                      </div>
                    </div>
                  </Card>
                </Link>
                <Link to="/selection-maintenance/standards">
                  <Card className="p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-sm">标准库维护</p>
                        <p className="text-xs text-gray-500">国标/德标参数更新</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </Card>

          {/* 数据辅助区 */}
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">数据洞察</h3>
              </div>
              <div className="space-y-4">
                {dataInsights.map((insight, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        {insight.icon}
                        {insight.label}
                      </span>
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        {insight.trend}
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{insight.value}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                高频SKU
              </h3>
              <div className="space-y-3">
                {hotProducts.map((product, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-sm mb-2">{product.sku}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                      <div>
                        <p>浏览</p>
                        <p className="font-semibold text-blue-600">{product.views}</p>
                      </div>
                      <div>
                        <p>选型</p>
                        <p className="font-semibold text-green-600">{product.selections}</p>
                      </div>
                      <div>
                        <p>下载</p>
                        <p className="font-semibold text-purple-600">{product.downloads}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
