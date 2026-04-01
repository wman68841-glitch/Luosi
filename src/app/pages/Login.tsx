import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useAuth, UserRole } from '../context/AuthContext';
import { Building2 } from 'lucide-react';
import { Briefcase, Users, Settings, Shield } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent, role: UserRole = 'enterprise') => {
    e.preventDefault();
    login(email, password, role);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-10 shadow-2xl border-0">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">紧固件选型平台</span>
              <span className="text-xs text-gray-500">Fastener Platform</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900">欢迎回来</h1>
          <p className="text-gray-600">登录您的账号，继续使用服务</p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600">记住我</span>
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              忘记密码？
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg">
            登录
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            还没有账号？
            <Link to="/register" className="text-blue-600 hover:underline ml-1">
              立即注册
            </Link>
          </p>
        </div>

        {/* 演示快速登录 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3 text-center font-medium">🎯 演示：快速登录为</p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleSubmit(e, 'enterprise')}
              className="bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
            >
              <Briefcase className="w-4 h-4 mr-1" />
              企业用户
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleSubmit(e, 'sales')}
              className="bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300"
            >
              <Users className="w-4 h-4 mr-1" />
              销售
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleSubmit(e, 'operations')}
              className="bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-300"
            >
              <Settings className="w-4 h-4 mr-1" />
              运营
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleSubmit(e, 'admin')}
              className="bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300"
            >
              <Shield className="w-4 h-4 mr-1" />
              管理员
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}