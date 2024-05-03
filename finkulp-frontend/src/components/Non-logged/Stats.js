import React from 'react'
export default function Stats() {
    const svgString = `
    <svg fill="#383ef0" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 462.949 462.949" xml:space="preserve" stroke="#383ef0">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M273.053,256.53c9.483,5.334,14.922,12.229,14.922,18.919c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5 c0-19.359-19.792-35.378-48-41.169v-10.831c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v8.802 c-2.785-0.193-5.617-0.302-8.5-0.302s-5.715,0.11-8.5,0.302v-8.802c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v10.831 c-28.208,5.791-48,21.81-48,41.169s19.792,35.378,48,41.169v56.636c-6.691-1.616-12.821-3.93-18.078-6.887 c-9.483-5.334-14.922-12.23-14.922-18.919c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,19.359,19.792,35.378,48,41.169v10.831 c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-8.802c2.785,0.193,5.617,0.302,8.5,0.302s5.715-0.11,8.5-0.302v8.802 c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-10.831c28.208-5.791,48-21.81,48-41.169s-19.792-35.378-48-41.169v-56.636 C261.666,251.26,267.796,253.573,273.053,256.53z M189.897,294.368c-9.483-5.334-14.922-12.23-14.922-18.919 c0-6.689,5.438-13.585,14.922-18.919c5.257-2.957,11.387-5.27,18.078-6.887v51.611 C201.283,299.638,195.154,297.325,189.897,294.368z M231.475,375.949c-2.874,0-5.712-0.115-8.5-0.336v-56.966 c2.785,0.193,5.617,0.302,8.5,0.302c2.874,0,5.712,0.115,8.5,0.336v56.328C237.187,375.834,234.349,375.949,231.475,375.949z M273.053,328.53c9.483,5.334,14.922,12.229,14.922,18.919c0,6.688-5.438,13.585-14.922,18.919 c-5.257,2.957-11.387,5.27-18.078,6.887v-51.611C261.666,323.26,267.796,325.573,273.053,328.53z M239.975,304.252 c-2.785-0.193-5.617-0.302-8.5-0.302c-2.874,0-5.712-0.115-8.5-0.336v-56.328c2.788-0.221,5.626-0.336,8.5-0.336 s5.712,0.115,8.5,0.336V304.252z"/>
          <path d="M274.296,149.506c2.937-3.923,4.678-8.79,4.678-14.056c0-8.429-4.463-15.833-11.149-19.981 c16.398-11.494,27.149-30.519,27.149-52.019V23.11c0-7.789-3.882-14.999-10.385-19.287s-14.662-5.016-21.817-1.947l-31.298,13.413 L200.177,1.876c-7.159-3.068-15.315-2.341-21.817,1.947c-6.503,4.288-10.385,11.498-10.385,19.287v40.339 c0,21.5,10.751,40.526,27.149,52.019c-6.685,4.148-11.149,11.551-11.149,19.981c0,5.266,1.741,10.134,4.678,14.056 c-71.681,18.97-124.678,84.38-124.678,161.943v64.001c0,48.248,39.252,87.5,87.5,87.5h160c48.248,0,87.5-39.252,87.5-87.5v-64.001 C398.975,233.885,345.978,168.476,274.296,149.506z M231.407,143.949h-23.932c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5h23.956 c0.014,0,0.028,0.002,0.042,0.002c0.001,0,0.001,0,0.002,0s0.001,0,0.002,0c0.014,0,0.028-0.002,0.042-0.002h23.956 c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5h-23.941c-0.016,0-0.031,0-0.047,0h-0.016 C231.45,143.949,231.428,143.949,231.407,143.949z M182.975,63.449V23.11c0-2.772,1.327-5.238,3.642-6.764 c1.363-0.899,2.891-1.354,4.437-1.354c1.079,0,2.168,0.222,3.216,0.671l34.252,14.68c1.887,0.809,4.021,0.809,5.908,0l34.252-14.68 c2.55-1.093,5.338-0.844,7.652,0.684c2.314,1.525,3.642,3.991,3.642,6.764v40.339c0,22.728-15.718,41.846-36.853,47.077 l11.317-28.292c1.538-3.846-0.333-8.21-4.179-9.749c-3.842-1.538-8.211,0.331-9.749,4.179l-9.036,22.59l-9.036-22.59 c-1.538-3.847-5.906-5.715-9.749-4.179c-3.846,1.539-5.717,5.903-4.179,9.749l11.317,28.292 C198.693,105.295,182.975,86.178,182.975,63.449z M383.975,375.449c0,39.977-32.523,72.5-72.5,72.5h-160 c-39.977,0-72.5-32.523-72.5-72.5v-64.001c0-79.205,60.7-144.492,138.024-151.808l-7.765,11.647 c-2.298,3.446-1.366,8.103,2.08,10.4c1.278,0.853,2.724,1.261,4.153,1.261c2.424,0,4.802-1.173,6.247-3.341l9.76-14.64l9.76,14.64 c1.445,2.168,3.823,3.341,6.247,3.341c1.43,0,2.875-0.408,4.153-1.261c3.446-2.298,4.378-6.954,2.08-10.4l-7.765-11.648 c77.325,7.315,138.026,72.602,138.026,151.808V375.449z"/>
        </g>
      </g>
    </svg>
  `;
  return (
    <div>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
        <h4 className="text-xl font-bold text-gray-900" style={{ fontWeight: "600",fontSize:"25px" }}>Numbers tell the hard works we've done so far</h4>
        </div>

        <div class="grid grid-cols-1 gap-6  mt-8  lg:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">10+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Brokers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">40+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Clients</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                       
                        <div dangerouslySetInnerHTML={{ __html: svgString }} />
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">₹ 8Cr+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Invested</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <div dangerouslySetInnerHTML={{ __html: svgString }} />
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">₹800cr+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Trading Volume</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                        </svg>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">10+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Backtested Index & Stock Based Strategies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                    <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">25+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Officially Vetted & Self Tested Online Courses to Choose</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}
