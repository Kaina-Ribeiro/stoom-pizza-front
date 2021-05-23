import Link from 'next/link';
import styles from './styles.module.scss';

interface ButtonProps {
  href: string;
  text: string;
  icon: any;
  style?: any;
}

const Button = ({text, icon, href, style} : ButtonProps) => {

  return (
    <Link href={href}>
      <div className={styles.buy} style={style}>
        {text} {icon}
      </div>
    </Link>
  )
}

export default Button;