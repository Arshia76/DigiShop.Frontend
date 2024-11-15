import { components } from 'react-select';

export const NoOptionsMessage = (props: any) => {
  return (
    <components.NoOptionsMessage
      className='flex items-center justify-center h-6'
      {...props}
    >
      <span>متن مورد نظر یافت نشد</span>
    </components.NoOptionsMessage>
  );
};
