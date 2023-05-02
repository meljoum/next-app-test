import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about' replace>About</Link>
            <Link href='/posts'>Posts</Link>
        </nav>
    );
}