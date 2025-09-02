import AuthLayout from '@/app/core/layout/layout-layout';
import CardRegister from '@/app/core/section/register/card-Register';

const RegisterContainer = () => {
  return (
    <AuthLayout>
      <main className="w-full min-h-screen flex flex-col">
        <CardRegister />
      </main>
    </AuthLayout>
  );
};

export default RegisterContainer;
