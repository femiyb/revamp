'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ScrollToHash() {
  const router = useRouter();

  useEffect(() => {
    function scrollToHash(hash) {
      const targetId = hash.replace('#', ''); // Remove #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function handleClick(event) {
      const target = event.target.closest('a');

      if (target && target.hash) {
        event.preventDefault(); // Stop default behavior (prevent page reload)
        const hash = target.hash;
        router.push(hash, undefined, { shallow: true }); // Update URL without reload
        scrollToHash(hash);
      }
    }

    // Scroll to hash if it's present on initial load
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    // Listen for clicks on hash links
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [router]);

  return null; // This component doesn't render anything
}
