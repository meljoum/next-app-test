import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/hooksComp'>Hooks</Link>
            <Link href='/advices'>Advices</Link>
        </nav>
    );
}