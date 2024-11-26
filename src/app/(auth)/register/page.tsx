'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { MonitorIcon as Running } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  const router = useRouter()

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 lg:p-8'>
      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='inline-block p-2 bg-primary/10 rounded-lg'>
              <Running className='w-6 h-6 text-primary' />
            </div>
            <h1 className='text-3xl font-bold'>Nova conta!</h1>
            <p className='text-muted-foreground'>Crie sua conta</p>
          </div>
          <Separator />
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Nome</Label>
                  <Input id='name' placeholder='Digite seu nome completo' type='text' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='birthdate'>Data de Nascimento</Label>
                  <Input id='birthdate' type="date" required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='sport'>Esporte</Label>
                  <Input id='sport' placeholder='Digite seu esporte' type='text' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='gender'>Gênero</Label>
                  <select
                    id='gender'
                    name='gender'
                    className='w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
                    required
                    aria-required="true"
                  >
                    <option value="">Selecione seu gênero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="O">Outro</option>
                  </select>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Informações de Acesso</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='username'>Usuário</Label>
                  <Input id='username' placeholder='Digite seu usuário' type='text' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='password'>Senha</Label>
                  <Input id='password' placeholder='Digite sua senha' type='password' required />
                </div>
              </CardContent>
            </Card>
            <Button onClick={() => router.push('/')} className='w-full' size='lg'>
              Criar
            </Button>
          </div>
          <div className='flex items-center justify-center gap-2 text-sm'>
            <span className='text-muted-foreground'>Já possui uma conta?</span>
            <Link href='/login' className='text-primary hover:underline'>
              Entrar
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