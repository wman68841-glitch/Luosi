import { useAuth, UserRole } from '../context/AuthContext';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { User, Briefcase, Users, Settings, Shield } from 'lucide-react';

export function RoleSwitcher() {
  const { user, switchRole } = useAuth();

  const roles: { role: UserRole; label: string; icon: React.ReactNode; color: string }[] = [
    { role: 'guest', label: '游客', icon: <User className="w-4 h-4" />, color: 'bg-gray-500 hover:bg-gray-600' },
    { role: 'enterprise', label: '企业用户', icon: <Briefcase className="w-4 h-4" />, color: 'bg-blue-500 hover:bg-blue-600' },
    { role: 'sales', label: '销售', icon: <Users className="w-4 h-4" />, color: 'bg-green-500 hover:bg-green-600' },
    { role: 'operations', label: '运营', icon: <Settings className="w-4 h-4" />, color: 'bg-purple-500 hover:bg-purple-600' },
    { role: 'admin', label: '超级管理员', icon: <Shield className="w-4 h-4" />, color: 'bg-red-500 hover:bg-red-600' },
  ];

  const currentRole = user?.role || 'guest';

  return (
    <Card className="fixed bottom-6 right-6 p-5 shadow-2xl z-50 max-w-xs border-2 border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">演示模式</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          当前角色: <span className="text-blue-600 font-bold">{roles.find(r => r.role === currentRole)?.label}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {roles.map(({ role, label, icon, color }) => (
          <Button
            key={role}
            size="sm"
            onClick={() => switchRole(role)}
            className={`${
              currentRole === role 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' 
                : `${color} text-white`
            } transition-all duration-200 hover:scale-105 hover:shadow-md`}
          >
            {icon}
            <span className="ml-1.5 text-xs font-medium">{label}</span>
          </Button>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3 text-center">点击按钮切换角色查看不同视图</p>
    </Card>
  );
}