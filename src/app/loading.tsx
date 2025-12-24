const GradientCodeWaveLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Container untuk 4 Balok */}
      <div className="flex space-x-3 justify-center items-center">
        
        {/* Blok 1 */}
        <div className="h-12 w-3 bg-green-400 rounded-sm animate-bounce animate-duration-[1500ms] [animation-delay:0s] shadow-lg ease-in-out"></div>
        
        {/* Blok 2 */}
        <div className="h-12 w-3 bg-teal-400 rounded-sm animate-bounce animate-duration-[1500ms] [animation-delay:-0.5s] shadow-lg ease-in-out"></div>
        
        {/* Blok 3 */}
        <div className="h-12 w-3 bg-cyan-400 rounded-sm animate-bounce animate-duration-[1500ms] [animation-delay:-1.0s] shadow-lg ease-in-out"></div>
        
        {/* Blok 4 */}
        <div className="h-12 w-3 bg-lime-400 rounded-sm animate-bounce animate-duration-[1500ms] [animation-delay:-1.5s] shadow-lg ease-in-out"></div>

      </div>

      <p className="mt-12 text-2xl font-mono font-bold text-gray-200 tracking-wider animate-pulse animate-duration-[5000ms] text-center">
        Memuat isi dari portfolio...Sabar ya!
      </p>

      <p className="mt-2 text-sm text-gray-400">
        Terimakasih atas kesabaran Anda.
      </p>
    </div>
  );
};

export default GradientCodeWaveLoader;