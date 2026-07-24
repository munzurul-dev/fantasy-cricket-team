const BannerSkeleton = () => {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="rounded-3xl bg-gray-100 p-8 md:p-12">
        <div className="flex flex-col items-center text-center">
          
          <div className="skeleton h-40 w-40 rounded-full"></div>

       
          <div className="skeleton mt-8 h-8 w-72"></div>

         
          <div className="mt-4 space-y-3">
            <div className="skeleton h-4 w-96 max-w-full"></div>
            <div className="skeleton mx-auto h-4 w-72"></div>
          </div>

          
          <div className="skeleton mt-8 h-12 w-44 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSkeleton;