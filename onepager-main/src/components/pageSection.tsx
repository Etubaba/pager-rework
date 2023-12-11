import { TChildrenProp } from '@/@types/components.types';

const PageSection = ({
  children,
  className,
  backgroundColor,
}: TChildrenProp) => {
  return (
    <main className={`${backgroundColor}`}>
      <section className={` ${className} max-w-screen-xl mx-auto py-20 px-4 `}>
        {children}
      </section>
    </main>
  );
};

export default PageSection;
