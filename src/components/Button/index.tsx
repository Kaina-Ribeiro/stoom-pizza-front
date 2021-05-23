import Link from 'next/link';
import styles from './styles.module.scss';

interface ButtonProps {
  href: string;
  text: string;
  icon: any;
}

const Button = ({text, icon, href} : ButtonProps) => {

  return (
    <Link href={href}>
      <div className={styles.buy}>
        {text} {icon}
      </div>
    </Link>
  )
}

export default Button;