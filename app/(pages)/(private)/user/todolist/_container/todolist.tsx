import DashboardLayout from '@/app/core/layout/dashboard-layout';
import TodolistCard from '@/app/core/section/todolist/todolist-content';

const TodolistContainer = () => {
  return (
    <DashboardLayout>
      <main className="w-full min-h-screen flex flex-col">
        <TodolistCard />
      </main>
    </DashboardLayout>
  );
};

export default TodolistContainer;
