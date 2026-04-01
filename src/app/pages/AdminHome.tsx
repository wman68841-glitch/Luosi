import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Shield, 
  Users, 
  Lock, 
  FileText,
  Settings,
  Database,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function AdminHome() {
  const { user } = useAuth();

  const systemStatus = {
    status: '正常运行',
    uptime: '99.8%',
    activeUsers: 156,
    requests: '12.5K/小时',
  };

  const managementActions = [
    { 
      icon: <Lock className="w-6 h-6" />, 
      label: '权限管理', 
      path: '/permission-management',
      color: 'bg-red-50 text-red-600',
      desc: '角色权限分配'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      label: '用户管理', 
      path: '/user-management',
      color: 'bg-blue-50 text-blue-600',
      desc: '用户创建/删除'
    },
    { 
      icon: <Settings className="w-6 h-6" />, 
      label: '系统配置', 
      path: '/system-config',
      color: 'bg-purple-50 text-purple-600',
      desc: '系统参数设置'
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      label: '日志管理', 
      path: '/log-management',
      color: 'bg-green-50 text-green-600',
      desc: '操作日志查看'
    },
  ];

  const userStats = [
    { label: '内部用户', count: 28, type: '销售+运营' },
    { label: '企业用户', count: 328, type: '待审核: 5' },
    { label: '活跃用户(24h)', count: 156, type: '企业用户' },
  ];

  const systemConfigs = [
    { name: '选型系统筛选维度', status: '已配置', lastUpdate: '2024-03-28' },
    { name: '价格体系规则', status: '已配置', lastUpdate: '2024-03-25' },
    { name: '订单流程配置', status: '已配置', lastUpdate: '2024-03-20' },
  ];

  const recentLogs = [
    { time: '10:23', user: '运营-李运营', action: '批量上架商品 (15个SKU)', type: 'normal' },
    { time: '09:45', user: '销售-王销售', action: '处理询价单 INQ-20240401-001', type: 'normal' },
    { time: '09:12', user: '系统', action: '数据库备份完成', type: 'success' },
    { time: '08:30', user: '管理员', action: '新增用户角色权限', type: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner区 */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Shield className="w-8 h-8" />
                系统管理工作台 - {user?.name}
              </h1>
              <p className="text-red-100">系统维护，权限管理，数据安全</p>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
              <div className="flex items-center gap-3 text-white">
                <Activity className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">系统状态</p>
                  <p className="text-xl font-bold">{systemStatus.status}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* 系统运行状态 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">系统运行监控</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-6 border-l-4 border-l-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">运行状态</p>
                  <p className="text-2xl font-bold text-green-600">{systemStatus.status}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">运行时长</p>
                  <p className="text-2xl font-bold text-blue-600">{systemStatus.uptime}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">在线用户</p>
                  <p className="text-2xl font-bold text-purple-600">{systemStatus.activeUsers}</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">请求量</p>
                  <p className="text-2xl font-bold text-orange-600">{systemStatus.requests}</p>
                </div>
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
            </Card>
          </div>
        </div>

        {/* 核心管理快捷区 */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">核心管理功能</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {managementActions.map((action, index) => (
              <Link key={index} to={action.path}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 h-full">
                  <div className="text-center">
                    <div className={`p-4 rounded-lg ${action.color} mx-auto w-fit mb-3`}>
                      {action.icon}
                    </div>
                    <p className="font-semibold mb-1">{action.label}</p>
                    <p className="text-sm text-gray-500">{action.desc}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* 用户管理概览 */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold">用户统计</h3>
            </div>
            <div className="space-y-4">
              {userStats.map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className="text-2xl font-bold text-blue-600">{stat.count}</span>
                  </div>
                  <p className="text-xs text-gray-500">{stat.type}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Link to="/user-management/internal">
                <Button variant="outline" size="sm" className="w-full">
                  管理内部用户
                </Button>
              </Link>
              <Link to="/user-management/enterprise">
                <Button variant="outline" size="sm" className="w-full">
                  管理企业用户
                </Button>
              </Link>
            </div>
          </Card>

          {/* 系统配置 */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold">系统配置</h3>
            </div>
            <div className="space-y-3">
              {systemConfigs.map((config, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{config.name}</span>
                    <Badge variant="outline" className="text-green-600 border-green-300">
                      {config.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">最后更新: {config.lastUpdate}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/system-config">
                <Button variant="outline" size="sm" className="w-full">
                  系统配置中心
                </Button>
              </Link>
            </div>
          </Card>

          {/* 备份与维护 */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">备份与维护</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm">数据备份</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">最后备份: 今天 09:12</p>
                <Button size="sm" variant="outline" className="w-full">
                  立即备份
                </Button>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <HardDrive className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-sm">系统维护</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">版本: v2.3.1 (最新)</p>
                <Button size="sm" variant="outline" className="w-full">
                  检查更新
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* 操作日志 */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold">最近操作日志</h3>
            </div>
            <Link to="/log-management">
              <Button variant="ghost" size="sm">
                查看全部 →
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            {recentLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-16">{log.time}</span>
                  <Badge variant={log.type === 'warning' ? 'destructive' : 'outline'}>
                    {log.user}
                  </Badge>
                  <span className="text-sm">{log.action}</span>
                </div>
                {log.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-600" />}
                {log.type === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
