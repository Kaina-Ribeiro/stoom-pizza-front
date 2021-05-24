import Link from 'next/link';
import styles from './styles.module.scss';

interface ButtonProps {
  href: string;
  text: string;
  icon?: any;
  style?: any;
  onClick?: () => void;
}

const Button = ({
  text,
  icon,
  href,
  style,
  onClick: handleClick = () => {}
} : ButtonProps) => {

  return (
    <Link href={href}>
      <div className={styles.buy} style={style} onClick={handleClick}>
        {text} {icon}
      </div>
    </Link>
  )
}

export default Button;