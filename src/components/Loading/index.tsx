import styles from './styles.module.scss';
import { FaSpinner } from 'react-icons/fa';

export default function Loading({ className }: { className?: string }) {
  return (
    <div className={`${styles.center} ${className}`}>
      <FaSpinner color="black" />
    </div>
  )
}