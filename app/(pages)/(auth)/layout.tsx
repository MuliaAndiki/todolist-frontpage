import BlankLayout from '@/app/core/layout/blank.layout';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <BlankLayout>{children}</BlankLayout>
    </main>
  );
}
