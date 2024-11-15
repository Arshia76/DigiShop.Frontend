import { Input } from '@/components/ui';
import { components } from 'react-select';

// @ts-ignore
const MenuList = ({ selectProps, ...props }) => {
  const { onInputChange, inputValue, onMenuInputFocus } = selectProps;

  // Copied from source
  const ariaAttributes = {
    'aria-autocomplete': 'list',
    'aria-label': selectProps['aria-label'],
    'aria-labelledby': selectProps['aria-labelledby'],
  };

  return (
    <div className='pt-2'>
      {/* @ts-ignore */}
      <Input
        className='!py-1'
        autoCorrect='off'
        autoComplete='off'
        spellCheck='false'
        type='text'
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onMouseDown={(e) => {
          e.stopPropagation();
          //  @ts-ignore
          e.target.focus();
        }}
        onTouchEnd={(e) => {
          e.stopPropagation();
          //  @ts-ignore
          e.target.focus();
        }}
        onFocus={onMenuInputFocus}
        placeholder='جستجو'
        {...ariaAttributes}
      />

      {/* @ts-ignore */}
      <components.MenuList {...props} selectProps={selectProps} />
    </div>
  );
};

export { MenuList };
