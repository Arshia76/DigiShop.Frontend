export interface NotifCardProps {
  title: string;
  amount: number;
}

const NotifCard = ({ title, amount }: NotifCardProps) => {
  return (
    <div
      className='rounded-lg flex flex-col items-center justify-center 
    shadow-lg border-2 w-64 h-64 border-custom-gray'
    >
      <h5 className='text-3xl font-bold text-custom-slate mb-6'>{title}</h5>
      <span className='text-2xl font-bold text-custom-slate'>{amount}</span>
    </div>
  );
};

export { NotifCard };
