'use client';
import * as React from 'react';
import { components } from 'react-select';

// @ts-ignore
const ValueContainer = ({ children, selectProps, ...props }) => {
  const commonProps = {
    cx: props.cx,
    clearValue: props.clearValue,
    getStyles: props.getStyles,
    getValue: props.getValue,
    hasValue: props.hasValue,
    isMulti: props.isMulti,
    isRtl: props.isRtl,
    options: props.options,
    selectOption: props.selectOption,
    setValue: props.setValue,
    selectProps,
    theme: props.theme,
  };

  return (
    <ValueContainer {...props} selectProps={selectProps}>
      {React.Children.map(children, (child) => {
        return child ? (
          child
        ) : props.hasValue ? (
          <components.SingleValue
            {...props}
            // @ts-ignore
            isFocused={selectProps.isFocused}
            isDisabled={selectProps.isDisabled}
          >
            {selectProps.getOptionLabel(props.getValue()[0])}
          </components.SingleValue>
        ) : (
          <components.Placeholder
            {...props}
            key='placeholder'
            isDisabled={selectProps.isDisabled}
            // @ts-ignore
            data={props.getValue()}
          >
            {selectProps.placeholder}
          </components.Placeholder>
        );
      })}
    </ValueContainer>
  );
};

export { ValueContainer };
