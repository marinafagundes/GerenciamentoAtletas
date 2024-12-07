'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MonitorIcon as Running } from 'lucide-react'
import { useContext, useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { AuthContext } from '@/contexts/auth'

interface FormData {
  nomeUsuario: string
  senha: string
}

interface FormErrors {
  [key: string]: string
}

const Login = () => {
  const router = useRouter()
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormData>({
    nomeUsuario: '',
    senha: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (formData.nomeUsuario.length > 255 || !/^[a-zA-Z0-9]+$/.test(formData.nomeUsuario)) newErrors.username = 'O usuário deve ter no máximo 255 caracteres e conter apenas letras e números'
    if (formData.senha.length > 20) newErrors.password = 'A senha deve ter no máximo 20 caracteres'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        console.log(formData)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, formData);
        console.log('Registration successful:', response.data)
        login({username: formData.nomeUsuario});
        router.push('/')
      } catch (error) {
        console.error('Registration failed:', error)
      }
    }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 lg:p-8'>
      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='inline-block p-2 bg-primary/10 rounded-lg'>
              <Running className='w-6 h-6 text-primary' />
            </div>
            <h1 className='text-3xl font-bold'>Bem vindo!</h1>
            <p className='text-muted-foreground'>Entre na sua conta</p>
          </div>
          <Separator />
          <form onSubmit={handleSubmit} className='space-y-6'>
            <Card>
              <CardContent className='space-y-4 pt-6'>
                <div className='space-y-2'>
                  <Label htmlFor='username'>Usuário</Label>
                  <Input
                    id='username'
                    name='nomeUsuario'
                    placeholder='Digite seu usuário'
                    type='text'
                    required
                    maxLength={255}
                    value={formData.nomeUsuario}
                    onChange={handleInputChange}
                  />
                  {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='password'>Senha</Label>
                  <Input
                    id='password'
                    name='senha'
                    placeholder='Digite sua senha'
                    type='password'
                    required
                    maxLength={20}
                    value={formData.senha}
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                </div>
              </CardContent>
            </Card>
            <Button type="submit" className='w-full' size='lg'>
              Entrar
            </Button>
          </form>
          <div className='flex items-center justify-center gap-2 text-sm'>
            <span className='text-muted-foreground'>Ainda não possui uma conta?</span>
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

export default Login;