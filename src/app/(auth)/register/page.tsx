'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MonitorIcon as Running } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FormData {
  name: string
  birthdate: string
  sport: string
  gender: string
  agency: string
  team: string
  username: string
  password: string
}

interface FormErrors {
  [key: string]: string
}

const Register = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthdate: '',
    sport: '',
    gender: '',
    agency: '',
    team: '',
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    console.log(formData.birthdate)
    if (formData.name.length > 255) newErrors.name = 'O nome deve ter no máximo 255 caracteres'
    if (new Date(formData.birthdate).getTime() > new Date().setHours(0, 0, 0, 0)) newErrors.birthdate = 'A data de nascimento não pode ser no futuro'
    if (formData.sport.length > 255) newErrors.sport = 'O esporte deve ter no máximo 255 caracteres'
    if (!['M', 'F', 'O'].includes(formData.gender)) newErrors.gender = 'Gênero inválido'
    if (formData.agency.length > 255) newErrors.agency = 'A agência deve ter no máximo 255 caracteres'
    if (formData.team.length > 255) newErrors.team = 'A equipe deve ter no máximo 255 caracteres'
    if (formData.username.length > 255 || !/^[a-zA-Z0-9]+$/.test(formData.username)) newErrors.username = 'O usuário deve ter no máximo 255 caracteres e conter apenas letras e números'
    if (formData.password.length > 20) newErrors.password = 'A senha deve ter no máximo 20 caracteres'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        // Simulating API call
        const response = await axios.post('https://api.example.com/register', formData)
        console.log('Registration successful:', response.data)
        // toast({
        //   title: "Conta criada com sucesso!",
        //   description: "Você será redirecionado para a página inicial.",
        // })
        router.push('/')
      } catch (error) {
        console.error('Registration failed:', error)
        // toast({
        //   title: "Erro ao criar conta",
        //   description: "Por favor, tente novamente mais tarde.",
        //   variant: "destructive",
        // })
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
            <h1 className='text-3xl font-bold'>Nova conta!</h1>
            <p className='text-muted-foreground'>Crie sua conta</p>
          </div>
          <Separator />
          <form onSubmit={handleSubmit} className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Nome</Label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Digite seu nome completo'
                    type='text'
                    required
                    maxLength={255}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='birthdate'>Data de Nascimento</Label>
                  <Input
                    id='birthdate'
                    name='birthdate'
                    type="date"
                    required
                    value={formData.birthdate}
                    onChange={handleInputChange}
                  />
                  {errors.birthdate && <p className='text-red-500 text-sm'>{errors.birthdate}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='sport'>Esporte</Label>
                  <Input
                    id='sport'
                    name='sport'
                    placeholder='Digite seu esporte'
                    type='text'
                    required
                    maxLength={255}
                    value={formData.sport}
                    onChange={handleInputChange}
                  />
                  {errors.sport && <p className='text-red-500 text-sm'>{errors.sport}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='gender'>Gênero</Label>
                  <select
                    id='gender'
                    name='gender'
                    className='w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione seu gênero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="O">Outro</option>
                  </select>
                  {errors.gender && <p className='text-red-500 text-sm'>{errors.gender}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='agency'>Agência</Label>
                  <Input
                    id='agency'
                    name='agency'
                    placeholder='Digite o nome da sua agência'
                    type='text'
                    maxLength={255}
                    value={formData.agency}
                    onChange={handleInputChange}
                  />
                  {errors.agency && <p className='text-red-500 text-sm'>{errors.agency}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='team'>Equipe</Label>
                  <Input
                    id='team'
                    name='team'
                    placeholder='Digite o nome da sua equipe'
                    type='text'
                    maxLength={255}
                    value={formData.team}
                    onChange={handleInputChange}
                  />
                  {errors.team && <p className='text-red-500 text-sm'>{errors.team}</p>}
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
                  <Input
                    id='username'
                    name='username'
                    placeholder='Digite seu usuário'
                    type='text'
                    required
                    maxLength={255}
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='password'>Senha</Label>
                  <Input
                    id='password'
                    name='password'
                    placeholder='Digite sua senha'
                    type='password'
                    required
                    maxLength={20}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                </div>
              </CardContent>
            </Card>
            <Button type="submit" className='w-full' size='lg'>
              Criar
            </Button>
          </form>
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

export default Register;