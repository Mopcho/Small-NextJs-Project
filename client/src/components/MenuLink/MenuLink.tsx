import Link from "next/link";
import classNames from 'classnames';

interface MenuLinkProps {
    href: string,
    children?: string | JSX.Element | JSX.Element[],
    additionalClassNames?: string,
}

export const MenuLink = ({href, children, additionalClassNames}: MenuLinkProps) => {
    return (
        <Link href={href} className={classNames('hover:text-red-500 hover:scale-110', additionalClassNames)}>
            {children}
        </Link>
    )
}