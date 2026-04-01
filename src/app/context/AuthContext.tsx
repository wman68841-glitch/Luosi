import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'guest' | 'enterprise' | 'sales' | 'operations' | 'admin';

interface User {
  id: string;
  name: string;
  role: UserRole;
  companyName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: UserRole) => void;
  logout: () => void;
  register: (name: string, email: string, password: string, type: 'personal' | 'enterprise') => void;
  switchRole: (role: UserRole) => void; // 仅用于演示
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: UserRole = 'enterprise') => {
    // Mock login
    const mockUser: User = {
      id: '1',
      name: role === 'enterprise' ? '张工' : role === 'sales' ? '王销售' : role === 'operations' ? '李运营' : '管理员',
      role: role,
      companyName: role === 'enterprise' ? '某某制造企业' : undefined,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (name: string, email: string, password: string, type: 'personal' | 'enterprise') => {
    // Mock register
    const mockUser: User = {
      id: '2',
      name: name,
      role: 'enterprise',
      companyName: type === 'enterprise' ? '新注册企业' : undefined,
    };
    setUser(mockUser);
  };

  const switchRole = (role: UserRole) => {
    if (role === 'guest') {
      setUser(null);
    } else {
      const roleNames = {
        enterprise: '张工',
        sales: '王销售',
        operations: '李运营',
        admin: '系统管理员',
      };
      setUser({
        id: '1',
        name: roleNames[role] || '用户',
        role: role,
        companyName: role === 'enterprise' ? '某某制造企业' : undefined,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
