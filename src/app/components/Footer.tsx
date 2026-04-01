import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 基础信息 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              联系我们
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">浙江省温州市龙湾区永强大道123号</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm font-medium group-hover:text-white transition-colors">客服热线</p>
                  <p className="text-lg font-bold text-blue-400">400-888-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span className="text-sm group-hover:text-white transition-colors">sales@fastener.com</span>
              </div>
            </div>
          </div>

          {/* 辅助信息 */}
          <div>
            <h3 className="text-white font-semibold mb-4">帮助中心</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm hover:text-white transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-white transition-colors">
                  服务条款
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-white transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm hover:text-white transition-colors">
                  技术支持
                </Link>
              </li>
            </ul>
          </div>

          {/* 品牌信息 */}
          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  企业简介
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-sm hover:text-white transition-colors">
                  企业愿景
                </Link>
              </li>
              <li>
                <Link to="/advantages" className="text-sm hover:text-white transition-colors">
                  核心优势
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm hover:text-white transition-colors">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 核心优势 */}
          <div>
            <h3 className="text-white font-semibold mb-4">核心优势</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ 三大生产基地，产能稳定</li>
              <li>✓ CNAS认证，品质可控</li>
              <li>✓ 10000+ SKU库存</li>
              <li>✓ 7*24小时技术支持</li>
              <li>✓ 智能选型系统</li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 紧固件选型平台. 保留所有权利. | 浙ICP备12345678号
            </p>
            <p className="text-sm text-gray-500">
              专注紧固件选型、采购一站式企业服务
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}