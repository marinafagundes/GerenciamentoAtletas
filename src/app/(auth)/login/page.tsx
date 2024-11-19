'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { MonitorIcon as Running } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function Login() {
  const router = useRouter()

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 lg:p-8'>
      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center'>
        <div className='space-y-6 max-w-md'>
          <div className='space-y-2'>
            <div className='inline-block p-2 bg-primary/10 rounded-lg'>
              <Running className='w-6 h-6 text-primary' />
            </div>
            <h1 className='text-3xl font-bold'>Bem-vindo!</h1>
            <p className='text-muted-foreground'>Crie sua conta</p>
          </div>
          <Separator />
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='username'>Usuário</Label>
              <Input id='username' placeholder='Digite seu usuário' required />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Senha</Label>
              <Input id='password' type='password' required />
            </div>
            <div className='text-sm'>
              <Link
                href='/forgot-password'
                className='text-primary hover:underline'
              >
                Esqueci minha senha
              </Link>
            </div>
            <Button onClick={() => router.push('/')} className='w-full mt-16' size='lg'>
              Entrar
            </Button>
          </div>
          <div className='flex items-center justify-center gap-2 text-sm'>
            <span className='text-muted-foreground'>Ainda nao possui uma conta?</span>
            <Link href='/register' className='text-primary hover:underline'>
              Cadastre-se
            </Link>
          </div>
        </div>
        <div className='hidden lg:block relative'>
          <div className='relative rounded-2xl overflow-hidden'>
            <Image
              src='/banner-login.svg'
              width={600}
              height={800}
              className='object-cover w-full aspect-[3/4]'
              alt='Athlete running on a track'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
