import Link from "next/link"
import Image from "next/image"
import { Bell, HomeIcon, Search, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { NavigationBar } from "@/components/ui/navigation-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />

      {/* Main Content */}
      <div className="container mx-auto pt-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader className="font-semibold">Engajamento</CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Aumente seu engajamento na plataforma compartilhando suas conquistas
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Certificados</span>
                    <Button variant="outline" size="sm">Fazer Post</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Medalhas</span>
                    <Button variant="outline" size="sm">Fazer Post</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="font-semibold">Sugestões</CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Kaka", role: "Jogador de Futebol" },
                  { name: "Guga", role: "Tenista" },
                  { name: "Nene", role: "Jogador de Basquete" },
                  { name: "Rayssa Leal", role: "Skatista" }
                ].map((person) => (
                  <div key={person.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{person.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{person.name}</div>
                        <div className="text-sm text-muted-foreground">{person.role}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Seguir</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6 space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <Input placeholder="Compartilhe suas conquistas e sentimentos" />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">Imagem</Button>
                  <Button variant="outline" size="sm">Vídeo</Button>
                  <Button variant="outline" size="sm">Música</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Rogério Ceni</div>
                      <div className="text-sm text-muted-foreground">há 6 minutos</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <span className="sr-only">Menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg"
                  alt="Post image"
                  width={600}
                  height={400}
                  className="rounded-lg w-full"
                />
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    ❤️ 15
                  </Button>
                  <Button variant="ghost" size="sm">
                    💬 42
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="font-semibold">Últimas Notícias</CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Convocado para a Seleção sub-20, volante renova contrato com o Juventude",
                  "Maringá usa inteligência artificial para buscar reforços e montar elenco no acesso à Série C",
                  "Técnico Tite sofre tentativa de golpe bancário no Piauí após saída do Flamengo; PF investiga",
                  "Cartola Express: semifinais da Copa do Brasil distribuem mais de R$ 20 mil em prêmios"
                ].map((news, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <p className="text-sm">{news}</p>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}