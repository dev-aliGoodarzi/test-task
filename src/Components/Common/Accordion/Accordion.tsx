// React
import React, { useEffect, useRef, useState, type ReactNode } from "react";
// React

// Reveal
import { Fade } from "react-awesome-reveal";
// Reveal

// Icons
import { SlArrowUp } from "react-icons/sl";
// Icons

type T_AccordionProps = {
  title: string;
  children: ReactNode;
  onOpen?: () => void;
  forceClose?: boolean;
  optionalOpen?: boolean;
  fadeDuration?: number;
};

const Accordion: React.FC<T_AccordionProps> = ({
  children,
  title,
  forceClose,
  onOpen,
  optionalOpen,
  fadeDuration = 1000,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(optionalOpen || false);

  const isRan = useRef<boolean>(false);

  useEffect(() => {
    isRan.current = true;
  }, [onOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forceClose) {
        setIsOpen(false);
      }
    }, 1);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, forceClose]);

  return (
    <div className="w-full">
      <Fade direction="down" triggerOnce>
        <h2
          onClick={() => {
            if (onOpen) {
              onOpen();
            }
            setIsOpen((prevState) => !prevState);
          }}
        >
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-300 bg-white p-5 text-left font-medium text-gray-800 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900"
          >
            <span>{title}</span>
            <SlArrowUp
              className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                !isOpen ? "rotate-180" : "rotate-0"
              } `}
            />
          </button>
        </h2>
      </Fade>
      {isOpen && (
        <Fade
          direction="down"
          className="mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300"
          triggerOnce
        >
          {children}
        </Fade>
      )}
    </div>
  );
};

export default Accordion;
