const counter = (counterRef: HTMLElement, max: number) => {
  let now = max;

  const handle = setInterval(() => {
    counterRef.innerHTML = Math.ceil(max - now).toLocaleString();
  
    if (now < 1) {
      clearInterval(handle);
    }
    
    const step = now / 10;
    
    now -= step;
  }, 10);
}

export default counter;