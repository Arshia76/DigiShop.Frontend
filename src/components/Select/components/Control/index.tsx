import { components } from 'react-select';

export const Control = (props: any) => {
  const { icon } = props.selectProps;
  return (
    <components.Control {...props}>
      {icon}
      {props.children}
    </components.Control>
  );
};
