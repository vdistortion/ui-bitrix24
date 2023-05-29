export function loadScript(src) {
  return new Promise((resolve, reject) => {
    let shouldAppend = false;
    let el = document.querySelector(`script[src^="${src}"]`);

    if (!el) {
      el = document.createElement('script');
      el.async = true;
      el.src = src;
      shouldAppend = true;
    } else {
      resolve(el);
      return;
    }

    el.addEventListener('error', reject);
    el.addEventListener('abort', reject);
    el.addEventListener('load', () => {
      el.dataset.loaded = 'loaded';
      resolve(el);
    });

    if (shouldAppend) document.head.append(el);
  });
}
