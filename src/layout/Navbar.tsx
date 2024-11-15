const Navbar = () => {
  return (
    <header className='flex items-center bg-white justify-around shadow-lg py-4 top-0 sticky z-50'>
      {/* logo */}
      <h1 className='text-4xl '>دیجی شاپ</h1>

      <div className='flex items-center '>
        <span>سبد خرید </span>
        <span>ورود / ثبتنام</span>
      </div>
    </header>
  );
};

export { Navbar };
