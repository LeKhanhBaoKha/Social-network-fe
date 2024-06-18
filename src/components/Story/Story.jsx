export default function Story() {
  return (
    <div class=" h-52  m-6">
      <div class="flex space-x-2 mx-auto max-w-2xl relative">
        {/* <!-- Create Story Start --> */}
        <div class="w-36 h-52 rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
          <img
            class="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
            src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg"
            alt="MD. Shibbir Ahmed"
          />
          <div class="bg-gray-800 relative flex-1 flex flex-col">
            <div class="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div class="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
              <p>Create Story</p>
            </div>
          </div>

          <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>
        {/* <!-- Create Story End --> */}

        {/* <!-- Others Story Start --> */}
        <div class="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
          <img
            class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
            src="https://picsum.photos/200/300?random=1"
            alt="MD. Shibbir Ahmed"
          />

          <div class="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
            <img
              class="w-full h-full object-cover"
              src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg"
              alt="MD. Shibbir Ahmed"
            />
          </div>

          <div class="absolute inset-x-3 bottom-1">
            <p class="text-white font-semibold">Your Story</p>
          </div>

          <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>
        {/* <!-- Others Story End --> */}

        {/* <!-- Others Story Start --> */}
        <div class="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
          <img
            class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
            src="https://picsum.photos/200/300?random=3"
            alt="MD. Shibbir Ahmed"
          />

          <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
            <img
              class="w-full h-full object-cover"
              src="https://picsum.photos/200/300?random=4"
              alt="MD. Shibbir Ahmed"
            />
          </div>

          <div class="absolute inset-x-3 bottom-1">
            <p class="text-white font-semibold">Baky Billah</p>
          </div>

          <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>
        {/* <!-- Others Story End --> */}

        {/* <!-- Others Story Start --> */}
        <div class="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
          <img
            class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
            src="https://picsum.photos/200/300?random=5"
            alt="MD. Shibbir Ahmed"
          />

          <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
            <img
              class="w-full h-full object-cover"
              src="https://picsum.photos/200/300?random=6"
              alt="MD. Shibbir Ahmed"
            />
          </div>

          <div class="absolute inset-x-3 bottom-1">
            <p class="text-white font-semibold">Mobarak Hossain Joy</p>
          </div>

          <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>
        {/* <!-- Others Story End --> */}

        {/* <!-- Others Story Start --> */}
        <div class="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
          <img
            class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
            src="https://picsum.photos/200/300?random=7"
            alt="MD. Shibbir Ahmed"
          />

          <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
            <img
              class="w-full h-full object-cover"
              src="https://picsum.photos/200/300?random=8"
              alt="MD. Shibbir Ahmed"
            />
          </div>

          <div class="absolute inset-x-3 bottom-1">
            <p class="text-white font-semibold">Mahmudul Hasan</p>
          </div>

          <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>
        {/* <!-- Others Story End --> */}

        <div class="absolute bg-gray-700 hover:bg-gray-600 transition-colors ease-in-out duration-200 p-2 rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
