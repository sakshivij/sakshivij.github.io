import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

function App() {
  return (
    <div class="min-h-screen bg-[#111827] flex items-center justify-center">
      <div class="bg-[#1F2937] p-8 rounded-lg shadow-lg w-full min-h-96 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div class="flex space-x-4 overflow-x-auto">
        <a href="https://facebook.com" className="text-red-600 hover:text-red-800 object-cover bg-white p-3">
        <SiGmail size={30} />
          </a>
          
          <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={30} />
          </a>
        </div>
        {/* <h2 class="text-xl font-bold mb-4">Card Title</h2>
    <p class="text-gray-700">This is a card sitting on top of the screen.</p> */}
      </div>
    </div>
  );
}

export default App;
