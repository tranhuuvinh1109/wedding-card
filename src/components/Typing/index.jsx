import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [''],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} className="typing text-center mb-4 font-semibold tracking-widest font-playpen"></span>;
};

export default TypingEffect;
