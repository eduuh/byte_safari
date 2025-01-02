import Logo from '@/components/brand/logo';
import ThemeToggle from '@/components/ui/theme-toggle';

const Header = () => {
  return (
    <section className="brand-white border-b-2 border-slate-200 dark:border-slate-600 mb-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Logo />
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
};

export default Header;
