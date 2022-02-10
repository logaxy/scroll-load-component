import React, { useEffect, useRef } from 'react';

interface IProps {
  children: JSX.Element
  root: Element | null | undefined
  rootMargin?: string
  loading?: JSX.Element | React.ReactNode
  threshold?: number
}

const ScrollLoadComponent = (props: IProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current

    const options = {
      root: props.root,
      rootMargin: props.rootMargin || '0px 0px 50% 0px', // 50%表示检测交叉区域向下扩展50%，即元素在进入下一屏的50%时加载
      threshold: props.threshold || 0.0,
    }

    const iObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          if (node) {
            observer.unobserve(node as unknown as Element);
          }
        }
      });
    }, options);

    if (node) {
      iObserver.observe(node as unknown as Element);
    }

    return () => { iObserver.disconnect() }

  });

  if (loaded) {
    return props.children
  }
  const defaultLoading = <p>loading...</p>
  return (
    <div ref={ref}>{props.loading || defaultLoading}</div>
  )
}

export default ScrollLoadComponent;

