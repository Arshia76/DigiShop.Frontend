import { NotifCard } from '@/pages/admin/Main/components';

const AdminMainPage = () => {
  return (
    <div className='flex flex-wrap *:flex-[1_1_150px] gap-6'>
      <NotifCard title='محصولات' amount={35} />
      <NotifCard title='کاربران' amount={10} />
      <NotifCard title='دسته بندی ها' amount={5} />
    </div>
  );
};

export { AdminMainPage };
