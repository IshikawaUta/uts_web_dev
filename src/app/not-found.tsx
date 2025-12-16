import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 p-8 font-mono">
      <svg className="w-24 h-24 text-red-500 mb-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="text-7xl md:text-9xl font-black text-red-600 mb-6 drop-shadow-lg">
        ERROR 404
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold w-4/4 mb-3 text-center text-red-400">
        {/* // Halaman ini tidak dapat ditemukan karena URL yang dimasukkan salah. */}
        Page Not Found
      </h2>
      <p className="text-base text-gray-400 mb-10 text-center max-w-lg">
        Alamat yang kamu akses tidak terdaftar dalam sistem **routing** kami. Coba periksa kembali URL atau klik tombol di bawah untuk kembali ke direktori utama.
      </p>

      <Link href="/">
        <button className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-blue-500/50 shadow-xl 
        hover:bg-blue-600 transition duration-300 transform hover:scale-105 border-b-4 border-blue-900">
          $ cd /home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;