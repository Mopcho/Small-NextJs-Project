import Link from 'next/link';
import classNames from 'classnames';

interface MenuLinkProps {
  href: string;
  children?: string | JSX.Element | JSX.Element[];
  additionalClassNames?: string;
}

export const MenuLink = ({
  href,
  children,
  additionalClassNames,
}: MenuLinkProps): JSX.Element => {
  return (
    <Link href={href} className={classNames(additionalClassNames)}>
      {children}
    </Link>
  );
};
