import DashboardLayout from '@/app/core/layout/dashboard-layout';
import CardLogin from '@/app/core/section/login/card-login';

const LoginContainer = () => {
  return (
    <DashboardLayout>
      <main className="w-full min-h-screen flex flex-col ">
        <CardLogin />
      </main>
    </DashboardLayout>
  );
};

export default LoginContainer;
