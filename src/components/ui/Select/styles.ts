const customStyles = {
  control: (provided: any, { isDisabled }: { isDisabled: boolean }) => ({
    ...provided,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    pointerEvents: 'all',
    color: 'var(--slate)',
    fontSize: '16px',
    width: '100%',
    height: '100%',
    outline: 'none',
    padding: '0',
    backgroundColor: 'var(--light-gray)',
    boxShadow: 'none',
    border: '2px solid transparent !important',
    borderRadius: '7px',
    fontWeight: 500,

    // ':hover': {
    //   border: 'none',
    //   ouline: 'none',
    // },

    ':focus-within': {
      border: '2px solid var(--slate) !important',
      // ouline: '4px solid var(--slate) !important',
    },
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    width: '100%',
    padding: '0 8px',
    height: '100%',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'var(--slate)',
    fontSize: '16px',
    fontWeight: 500,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'transparent',
  }),
  input: (provided: any) => ({
    ...provided,
    color: 'var(--slate)',
    margin: 0,
    fontSize: '16px',
    padding: '0 0px',
  }),
  menuPortal: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
  menu: (provided: any) => ({
    ...provided,
  }),
  option: (provided: any) => ({
    ...provided,
    lineHeight: '25px',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '14px',
    cursor: 'pointer',
  }),
  multiValue: (provided: any) => ({
    ...provided,
    margin: '5px',
    lineHeight: '15px',
    borderRadius: '3px',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: 'var(--slate) !important',
  }),
}

export { customStyles }
