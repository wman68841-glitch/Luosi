import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Factory, 
  Award, 
  FileCheck, 
  Wrench, 
  Settings, 
  Package, 
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

export function GuestHome() {
  const categories = [
    { name: '螺栓', count: '1200+', specs: 'M4-M48' },
    { name: '螺钉', count: '800+', specs: 'M2-M20' },
    { name: '螺母', count: '600+', specs: 'M3-M36' },
    { name: '垫圈', count: '400+', specs: 'Φ4-Φ50' },
    { name: '销', count: '300+', specs: 'Φ2-Φ20' },
    { name: '铆钉', count: '250+', specs: 'Φ3-Φ12' },
  ];

  const advantages = [
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: '三大生产基地',
      desc: '总产能达15000吨/年，稳定供货',
      image: 'https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb24lMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc1MDMwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'CNAS认证',
      desc: '国家认可实验室，品质有保障',
      image: 'https://images.unsplash.com/photo-1769971361807-1e3d025c2abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGhhcmR3YXJlJTIwc2NyZXdzJTIwYm9sdHN8ZW58MXx8fHwxNzc1MDMwMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      title: '1000+行业案例',
      desc: '服务航空、汽车、机械等行业',
      image: 'https://images.unsplash.com/photo-1768796370672-3931e5d1ded7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwYXV0b21vdGl2ZSUyMGFzc2VtYmx5fGVufDF8fHx8MTc3NTAzMDA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const benefits = [
    '免费使用智能选型系统',
    '查看实时价格和库存',
    '下载产品图纸和规格书',
    '批量询价，快速获取报价',
    '专属客户经理1V1服务',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner区 */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 顶部标签 */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">智能化紧固件解决方案</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              紧固件选型+采购
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                一站式企业服务平台
              </span>
            </h1>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              智能选型 · 精准匹配 · 快速报价 · 稳定供货
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link to="/register">
                <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all">
                  <Target className="w-5 h-5" />
                  立即注册，开启智能选型
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/selection">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white/10">
                  <Wrench className="w-5 h-5" />
                  免费体验选型系统
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                </div>
                <span className="font-medium">10,000+ SKU库存</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                </div>
                <span className="font-medium">3,000+ 企业客户</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                </div>
                <span className="font-medium">99.5% 准时交付率</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 波浪装饰 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* 企业实力展示区 */}
      <section className="py-20 bg-white -mt-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-1 text-sm border-0">企业实力</Badge>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">20年专注紧固件制造</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">值得信赖的合作伙伴，为您提供专业的紧固件解决方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
                  <p className="text-gray-700 text-lg">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 产品预览区 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-green-100 text-green-700 px-4 py-1 text-sm border-0">产品品类</Badge>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">覆盖主流紧固件品类</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">满足多样化需求，提供一站式采购服务</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-blue-500 bg-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{category.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-1">{category.count} SKU</p>
                  <p className="text-xs text-gray-500 mb-3">{category.specs}</p>
                  <Badge variant="outline" className="text-xs border-blue-300 text-blue-600 group-hover:bg-blue-50">
                    注册查看详情 →
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 选型系统引导区 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">智能选型系统</h2>
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                      根据标准、规格、材质等参数，精准匹配合适的紧固件SKU，大幅提升选型效率
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-blue-100">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>支持国标/德标/美标等多种标准</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>自动匹配替代型号，降低成本</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>实时查看库存和交期信息</span>
                    </div>
                  </div>
                </div>
                <div className="p-10 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">选择标准</h3>
                        <p className="text-sm text-gray-600">选择国标/德标/美标等</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">输入参数</h3>
                        <p className="text-sm text-gray-600">规格、材质、强度等级</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">获取结果</h3>
                        <p className="text-sm text-gray-600">查看匹配SKU和报价</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="mt-6 bg-yellow-100 text-yellow-800 border-0 px-4 py-2 justify-center">
                    <Shield className="w-4 h-4 mr-2" />
                    注册后可查看图纸、获取精准报价
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 注册引导区 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-1 text-sm border-0">立即加入</Badge>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">立即注册，解锁全部功能</h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">简单注册，即可享受专业的紧固件选型采购服务</p>
            
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium leading-snug">{benefit}</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/register?type=personal">
                <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-200 hover:border-blue-500 bg-white w-64">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">个人注册</h3>
                    <p className="text-gray-600 text-sm mb-4">快速注册，立即使用</p>
                    <Button className="w-full">
                      立即注册
                    </Button>
                  </div>
                </Card>
              </Link>
              <Link to="/register?type=enterprise">
                <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 w-64 relative">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white border-0">推荐</Badge>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">企业注册</h3>
                    <p className="text-gray-600 text-sm mb-4">享受专属企业服务</p>
                    <Button className="w-full bg-blue-600">
                      企业注册
                    </Button>
                  </div>
                </Card>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-8">
              已有账号？
              <Link to="/login" className="text-blue-600 hover:underline ml-1 font-medium">
                立即登录 →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}