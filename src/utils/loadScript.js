function loadScript(src) {
  return new Promise((resolve, reject) => {
    const attribute = 'loaded';
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);

    if (!el) {
      el = document.createElement('script');
      el.async = true;
      el.src = src;
      shouldAppend = true;
    } else if (el.dataset[attribute]) {
      resolve(el);
      return;
    }

    el.addEventListener('error', reject);
    el.addEventListener('abort', reject);
    el.addEventListener('load', () => {
      el.dataset[attribute] = attribute;
      resolve(el);
    });

    if (shouldAppend) document.head.append(el);
  });
}

export default (...loadedScripts) => {
  const scripts = loadedScripts.reduce((acc, script) => {
    if (typeof script === 'string') acc.push(script);
    if (Array.isArray(script)) acc.push(...script);
    return acc;
  }, []);

  return Promise.all(scripts.flat(Infinity).map(loadScript));
};
