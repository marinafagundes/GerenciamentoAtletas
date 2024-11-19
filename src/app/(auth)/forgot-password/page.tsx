import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div>
      <h1>Recuperar senha</h1>
      <Link href='/auth/login' className='text-primary hover:underline'>
        Ir para login
      </Link>
    </div>
  );
}
