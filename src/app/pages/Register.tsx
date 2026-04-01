import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useAuth } from '../context/AuthContext';
import { Building2, User, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';

export function Register() {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') as 'personal' | 'enterprise' || 'personal';
  
  const [type, setType] = useState<'personal' | 'enterprise'>(defaultType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('两次密码输入不一致');
      return;
    }
    register(name, email, password, type);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 py-12">
      <Card className="w-full max-w-2xl p-10 shadow-2xl border-0">
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
          <h1 className="text-3xl font-bold mb-2 text-gray-900">注册新账号</h1>
          <p className="text-gray-600">注册后即可享受专业的紧固件选型采购服务</p>
        </div>

        <Tabs value={type} onValueChange={(v) => setType(v as 'personal' | 'enterprise')} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal" className="gap-2">
              <User className="w-4 h-4" />
              个人注册
            </TabsTrigger>
            <TabsTrigger value="enterprise" className="gap-2">
              <Building className="w-4 h-4" />
              企业注册
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'enterprise' && (
            <div>
              <Label htmlFor="companyName">企业名称</Label>
              <Input
                id="companyName"
                type="text"
                placeholder="请输入企业全称"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              type="text"
              placeholder="请输入您的姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">密码</Label>
              <Input
                id="password"
                type="password"
                placeholder="至少8位字符"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">确认密码</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="再次输入密码"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="agree" className="mt-1" required />
            <label htmlFor="agree" className="text-sm text-gray-600">
              我已阅读并同意
              <Link to="/terms" className="text-blue-600 hover:underline mx-1">
                服务条款
              </Link>
              和
              <Link to="/privacy" className="text-blue-600 hover:underline mx-1">
                隐私政策
              </Link>
            </label>
          </div>

          <Button type="submit" className="w-full" size="lg">
            注册
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            已有账号？
            <Link to="/login" className="text-blue-600 hover:underline ml-1">
              立即登录
            </Link>
          </p>
        </div>

        {/* 注册权益提示 */}
        <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100">
          <h3 className="font-bold mb-3 text-sm text-blue-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            注册即享
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              免费使用智能选型系统
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              查看实时价格和库存
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              下载产品图纸和规格书
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              批量询价，快速获取报价
            </li>
            {type === 'enterprise' && (
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                专属客户经理1V1服务
              </li>
            )}
          </ul>
        </div>
      </Card>
    </div>
  );
}