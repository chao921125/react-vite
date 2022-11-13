import useSliderModel from '@/models/useSliderModel';
const LogoView = () => {
  const { collapsed } = useSliderModel();
  return (
    <div className="h-[50px] flex justify-center items-center text-xl font-sans font-semibold">
      <img src="/vite.svg" className="w-7 h-7 rounded-full" />
      {!collapsed && (
        <div className="whitespace-nowrap ml-4" style={{ opacity: collapsed ? 0 : 1 }}>
          {import.meta.env.VITE_APP_TITLE}
        </div>
      )}
    </div>
  );
};
export default LogoView;
