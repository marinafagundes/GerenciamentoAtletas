import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link href='/auth/login' className='text-primary hover:underline'>
        Já tenho uma conta. Ir para login
      </Link>
    </div>
  );
}
