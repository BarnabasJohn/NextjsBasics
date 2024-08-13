import Link from "next/link";

export default function Home () {
    
    return (
        
        <div>
           <h1>Welcome Home !</h1> 
           <p><Link href="/blog">Blog</Link></p>
           <p><Link href="/docs">Doc</Link></p>
           <p><Link href="/profile">Profile</Link></p>
           <p><Link href="/register">Auth</Link></p>
           <p><Link href="/dashboard">Dashboard</Link></p>
           <p><Link href="/products">Products</Link></p>
           <p><Link href="/about" replace>About</Link></p>
           <p><Link href="/_lib">Lib not-so-private</Link></p>
        </div>
    
    );
}