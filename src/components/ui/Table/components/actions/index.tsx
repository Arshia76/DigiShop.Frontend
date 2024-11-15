import { useState } from 'react';
import { SvgComponent } from '@/components/ui/Svg';

export interface GridActionItemProps {
  title: string;
  icon: string;
  theme: 'yellow' | 'red' | 'blue' | 'green';
  onClick: Function;
}

const GridActionItem = ({ icon, theme, onClick }: GridActionItemProps) => {
  const backgroundColor =
    theme === 'yellow'
      ? 'bg-custom-yellow text-custom-slate'
      : theme === 'red'
      ? 'bg-custom-red text-white'
      : theme === 'green'
      ? 'bg-custom-green text-white'
      : 'bg-custom-blue text-white';

  const borderColor =
    theme === 'yellow'
      ? ' border-x-white border-y-custom-yellow'
      : theme === 'red'
      ? ' border-x-white border-y-custom-red'
      : theme === 'green'
      ? ' border-x-white border-y-custom-green '
      : ' border-x-white border-y-custom-blue ';

  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={loading}
      className={`p-[5px] w-fit h-fit rounded-md ${backgroundColor}`}
      onClick={() => onClick(setLoading)}
    >
      {loading ? (
        <div
          className={`border-2 rounded-full w-3 h-3 
            animate-spin ${borderColor}`}
        ></div>
      ) : (
        <SvgComponent src={icon} className={'Grid_Icon'} />
      )}
    </button>
  );
};

export { GridActionItem };
