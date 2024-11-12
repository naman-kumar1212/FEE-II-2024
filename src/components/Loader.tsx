import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue === 21 || !counterRef.current) return;
      
      counterRef.current.textContent = currentValue.toString();
      currentValue++;
      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };

    updateCounter();

    gsap.to(".counter", 0.15, {
      delay: 1,
      opacity: 1,
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    gsap.to(".yo", 1.5, {
      delay: 2.5,
      opacity: 1,
      scale: 2.2,
      duration: 1.3,
      stagger: 0.3,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to(".yo", {
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.inOut",
        });
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <h2 ref={counterRef} className="counter fixed w-full h-full flex justify-end items-end text-[#00b4d8] text-[20vw] font-serif p-8">
        0
      </h2>
      <div className="overlayy fixed w-screen h-[180vw] z-[20000] flex bg-[url('https://images.unsplash.com/photo-1611251135345-18c56206b863')] bg-no-repeat bg-contain border-t-[7px] border-black -mt-36 -ml-3">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bar w-[10vw] h-[180vh] border-r-[0.5px] border-[rgba(198,187,187,0.649)] bg-[rgba(0,0,0,0.423)]">
            {i >= 5 && i <= 11 && (
              <h1 className="yo mt-52 text-4xl font-bold text-white opacity-0">
                {['U', 'S', 'P', 'O', 'R', 'T', 'S'][i - 5]}
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;