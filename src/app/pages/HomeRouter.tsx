import { useAuth } from '../context/AuthContext';
import { GuestHome } from './GuestHome';
import { EnterpriseHome } from './EnterpriseHome';
import { SalesHome } from './SalesHome';
import { OperationsHome } from './OperationsHome';
import { AdminHome } from './AdminHome';

export function HomeRouter() {
  const { user } = useAuth();
  const role = user?.role || 'guest';

  const homePages = {
    guest: <GuestHome />,
    enterprise: <EnterpriseHome />,
    sales: <SalesHome />,
    operations: <OperationsHome />,
    admin: <AdminHome />,
  };

  return homePages[role];
}
