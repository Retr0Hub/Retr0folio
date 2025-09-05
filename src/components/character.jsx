import React from 'react';

const Character = () => {
  // Star icon component for rankings
  const StarIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path d="M65 40C65 40 66.3794 52.8748 71.7523 58.2477C77.1252 63.6206 90 65 90 65C90 65 77.1252 66.3794 71.7523 71.7523C66.3794 77.1252 65 90 65 90C65 90 63.6206 77.1252 58.2477 71.7523C52.8748 66.3794 40 65 40 65C40 65 52.8748 63.6206 58.2477 58.2477C63.6206 52.8748 65 40 65 40Z" fill="#486284"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="20"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.964706 0 0 0 0 0.682353 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  );

  // Gallery icon component
  const GalleryIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 348 348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M130.5 150.51C149.559 150.51 165.01 135.059 165.01 116C165.01 96.9406 149.559 81.49 130.5 81.49C111.441 81.49 95.99 96.9406 95.99 116C95.99 135.059 111.441 150.51 130.5 150.51Z" fill="white"/>
      <path d="M234.755 29H113.245C60.465 29 29 60.465 29 113.245V234.755C29 250.56 31.755 264.335 37.12 275.935C49.59 303.485 76.27 319 113.245 319H234.755C287.535 319 319 287.535 319 234.755V201.55V113.245C319 60.465 287.535 29 234.755 29ZM295.365 181.25C284.055 171.535 265.785 171.535 254.475 181.25L194.155 233.015C182.845 242.73 164.575 242.73 153.265 233.015L148.335 228.955C138.04 219.965 121.655 219.095 110.055 226.925L55.825 263.32C52.635 255.2 50.75 245.775 50.75 234.755V113.245C50.75 72.355 72.355 50.75 113.245 50.75H234.755C275.645 50.75 297.25 72.355 297.25 113.245V182.845L295.365 181.25Z" fill="white"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white text-[#161722]" style={{ fontFamily: 'Quicksand, -apple-system, Roboto, Helvetica, sans-serif' }}>
      {/* Header */}
      <header className="flex w-full max-w-[1400px] mx-auto px-5 py-5 justify-between items-center h-[104px]">
        {/* Logo */}
        <div className="w-16 h-16 bg-black rounded-full flex-shrink-0"></div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-[150px]">
          <span className="text-black font-bold text-xl">HOME</span>
          <span className="text-[#161722] font-bold text-xl">CHARACTER</span>
          <span className="text-[#161722] font-bold text-xl">Build</span>
        </nav>
        
        {/* Login Button */}
        <button className="flex px-[50px] py-[15px] justify-center items-center rounded-[20px] border-3 border-[#161722] font-bold text-xl text-[#161722]">
          Login
        </button>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Character Title */}
        <h1 className="text-[150px] font-normal text-[#161722] leading-none mb-8" style={{ fontFamily: 'Mrs Sheppards, -apple-system, Roboto, Helvetica, sans-serif' }}>
          Lumi
        </h1>

        {/* Main Character Section */}
        <div className="flex gap-8 mb-16">
          {/* Left Side - Story and Skills */}
          <div className="flex-1 max-w-[909px]">
            {/* Background Container */}
            <div className="relative w-full h-[620px] mb-8">
              {/* Main background */}
              <div className="absolute inset-0 bg-[#9D3C51]"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[326px] h-[234px] bg-[#D9D9D9]"></div>
              <div className="absolute bottom-0 left-0 w-[481px] h-[100px] bg-[#D9D9D9]"></div>
              <div className="absolute -top-[34px] left-0 w-[350px] h-[100px] bg-[#D9D9D9]"></div>
              <div className="absolute top-[168px] left-[534px] w-[100px] h-[100px] bg-[#D9D9D9] rounded-full"></div>
              
              {/* Story Content */}
              <div className="absolute top-[104px] left-0 w-full px-2 py-4">
                <div className="max-w-[580px] space-y-6">
                  <div className="px-2">
                    <p className="text-[25px] font-normal text-[#161722] leading-normal">
                      Lumi (Chinese: 灯灯 Dēngdēng) is a playable Electro Congenital Resonator in Wuthering Waves. She is a navigator at Lollo Logistics and serves as the captain of a transport team.
                    </p>
                  </div>
                  <div className="px-2">
                    <p className="text-[25px] font-normal text-[#161722] leading-normal">
                      From dense forests to vast desolate lands, every place that Lollo Logistics' navigator Lumi has traveled bears witness to her radiant charm, like a ray of sunshine.
                      <br />
                      Born with a disciplined nature, she now embraces her daily work as a diligent courier, taking pride in fulfilling her mission of timely deliveries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex gap-[30px] items-center">
              <div className="w-[90px] h-[90px] bg-[#9D3C51] rounded-full"></div>
              <div className="w-[90px] h-[90px] bg-[#9D3C51] rounded-full"></div>
              <div className="w-[90px] h-[90px] bg-[#9D3C51] rounded-full"></div>
              <div className="w-[90px] h-[90px] bg-[#9D3C51] rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Character Portrait */}
          <div className="relative w-[443px] h-[711px] flex-shrink-0">
            {/* Background shapes */}
            <div className="absolute top-0 left-[28px] w-[388px] h-[711px]">
              <div className="w-full h-full bg-[#CED7E4] rounded-[35px_35px_26px_100px]"></div>
              {/* Additional decorative elements */}
              <div className="absolute top-[578px] left-[244px] w-[133px] h-[67px] bg-[#CED7E4] rotate-90"></div>
              <div className="absolute top-[384px] left-[165px] w-[250px] h-[80px] bg-[#CED7E4]"></div>
              <div className="absolute top-[93px] left-[315px] w-[100px] h-[100px] bg-[#CED7E4]"></div>
            </div>

            {/* Character container */}
            <div className="absolute top-[93px] left-0 w-[443px] h-[618px] bg-[#9D3C51]">
              {/* Decorative overlays */}
              <div className="absolute top-[485px] left-[272px] w-[133px] h-[67px] bg-[#D9D9D9] rotate-90"></div>
              <div className="absolute top-[291px] left-[193px] w-[250px] h-[80px] bg-[#D9D9D9]"></div>
              <div className="absolute top-0 left-[343px] w-[100px] h-[100px] bg-[#D9D9D9]"></div>
            </div>

            {/* Character elements */}
            <div className="absolute top-[108px] left-[358px] w-[70px] h-[70px] bg-[#9D3C51] rounded-full"></div>
            
            {/* Icon elements */}
            <div className="absolute top-[525px] left-[278px] w-[90px] h-[90px] bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-600 rounded"></div>
            </div>
            <div className="absolute top-[619px] left-[351px] w-[80px] h-[80px] bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </div>

            {/* Ranking stars */}
            <div className="absolute top-[389px] left-[201px] flex gap-1">
              <StarIcon className="w-[50px] h-[50px]" />
              <StarIcon className="w-[50px] h-[50px]" />
              <StarIcon className="w-[50px] h-[50px]" />
              <StarIcon className="w-[50px] h-[50px]" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex gap-16 mb-16">
          {/* Resonator Information */}
          <div className="relative w-[579px] h-[821px]">
            {/* Outer background */}
            <div className="absolute inset-0 bg-[#CED7E4] rounded-[40px]">
              <div className="absolute top-[500px] right-0 w-[79px] h-[79px] bg-[#CED7E4] rounded-full"></div>
            </div>
            
            {/* Inner background */}
            <div className="absolute top-[20px] left-[20px] w-[539px] h-[781px] bg-[#AAB5C3] rounded-[40px]">
              <div className="absolute top-[66px] left-[129px] w-[40px] h-[106px] bg-[#AAB5C3]"></div>
              <div className="absolute top-[453px] right-[89px] w-[129px] h-[46px] bg-[#AAB5C3]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">
              <h2 className="text-[39px] font-bold text-center mb-12 mt-4">
                Resonator Information
              </h2>

              {/* Gallery placeholder */}
              <div className="w-[348px] h-[348px] mx-auto mb-8 bg-white rounded-lg flex items-center justify-center">
                <GalleryIcon />
              </div>

              {/* Information list */}
              <div className="space-y-7 px-6">
                <div className="text-[31px]">
                  <span className="font-bold">Element: </span>
                  <span className="font-normal">Electro</span>
                </div>
                <div className="text-[31px]">
                  <span className="font-bold">Weapon: </span>
                  <span className="font-normal">Broadblade</span>
                </div>
                <div className="text-[31px]">
                  <span className="font-bold">How to get: </span>
                  <span className="font-normal">any Convene Banner</span>
                </div>
                <div className="text-[31px]">
                  <span className="font-bold">Voice Actor (EN): </span>
                  <span className="font-normal">Emily Cass</span>
                </div>
              </div>

              {/* Ranking stars (vertical) */}
              <div className="absolute top-[216px] right-[20px] flex flex-col gap-1">
                <StarIcon className="w-[60px] h-[60px]" />
                <StarIcon className="w-[60px] h-[60px]" />
                <StarIcon className="w-[60px] h-[60px]" />
                <StarIcon className="w-[60px] h-[60px]" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex-1 space-y-[50px]">
            {/* Level header */}
            <div className="flex justify-center items-center gap-[180px] p-[10px] rounded-[20px] bg-[#E5E9ED]">
              <span className="text-[25px] font-bold text-center">HP</span>
              <span className="text-[25px] font-bold text-center">Lv 1</span>
              <span className="text-[25px] font-bold text-center">Lv 90</span>
            </div>

            {/* Stats grid */}
            <div className="flex gap-[50px]">
              {/* Labels column */}
              <div className="flex flex-col gap-[50px] w-[189px]">
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">HP</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">ATK</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">DEF</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">Energy Regen</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">Crit. Rate</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">Crit. DMG</span>
                </div>
              </div>

              {/* Lv 1 values column */}
              <div className="flex flex-col gap-[50px] w-[189px]">
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">680</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">27</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">72</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">100%</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">5%</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">150%</span>
                </div>
              </div>

              {/* Lv 90 values column */}
              <div className="flex flex-col gap-[50px] w-[189px]">
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">8500</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">337</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">879</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">-</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">-</span>
                </div>
                <div className="flex justify-center items-center p-[10px] rounded-[20px] bg-[#E5E9ED]">
                  <span className="text-[25px] font-bold">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
