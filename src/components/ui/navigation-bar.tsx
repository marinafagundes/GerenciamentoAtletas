import Link from "next/link"
import Image from "next/image"
import { Bell, HomeIcon, Search, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#3b5998] text-white z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Sportify Logo" width={32} height={32} className="rounded" />
          <span className="text-xl font-bold">Sportify</span>
        </Link>
        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar"
              className="pl-8 bg-white/90 text-black"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href='/'>
            <Button variant="ghost" size="icon">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Link href='/profile'>
            <Button variant="ghost" size="icon">
                <UserCircle className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export { NavigationBar };