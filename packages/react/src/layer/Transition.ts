import { useEffect, useState } from 'react';

export function useLayerTransition(isOpen: boolean, duration = 200) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [state, setState] = useState<'open' | 'closed'>(isOpen ? 'open' : 'closed');

  useEffect(() => {
    let timeoutId: number;

    if (isOpen) {
      setShouldRender(true);
      // Small delay to allow the element to be mounted before triggering the transition
      timeoutId = window.setTimeout(() => {
        setState('open');
      }, 10);
    } else {
      setState('closed');
      timeoutId = window.setTimeout(() => {
        setShouldRender(false);
      }, duration);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isOpen, duration]);

  return { shouldRender, state };
}
