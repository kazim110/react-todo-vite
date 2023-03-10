/* eslint-disable */
import { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    return () => {
      document.addEventListener('mousedown', handler);
    };
  }, [dropdown]);

  const ref = useRef();
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
          <ul>
            <li>Design</li>
            <li>Development</li>
          </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
