'use client';
import { ReactSVG } from 'react-svg';
import styles from './index.module.css';

interface SvgProps {
  src: string;
  className: string;
}

const SvgComponent = ({ src, className }: SvgProps) => {
  const classNames = [];
  if (className) classNames.push(className);

  return <ReactSVG src={src} className={`${styles[classNames.join(' ')]}`} />;
};

export { SvgComponent };
