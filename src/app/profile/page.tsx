"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Bell, Search, HomeIcon, UserCircle } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";

export default function Component() {
  const [isConquistasOpen, setIsConquistasOpen] = useState(true);
  const [isVinculosOpen, setIsVinculosOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[#3b5998] text-white z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Sportify Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold">Sportify</span>
          </div>
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
            <Button variant="ghost" size="icon">
              <HomeIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Blue background div */}
      <div className="bg-[#3b4992] h-48"></div>

      {/* Profile Content */}
      <div className="max-w-5xl mx-auto px-6 -mt-24">
        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white bg-white">
            <Image
              src="/placeholder.svg"
              alt="Rebeca Andrade"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#3b4992] mt-2">Rebeca Andrade</h1>
          <p className="text-gray-600">Ginasta</p>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6 mt-8">
          {/* Left Sidebar */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-bold mb-4">Informações Pessoais</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                <p>Rebeca Rodrigues de Andrade</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Nascimento</p>
                <p>08/05/1999</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nacionalidade</p>
                <p>Brasileira</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Modalidade</p>
                <p>Ginástica artística</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Conquistas Section */}
            <div className="bg-white rounded-lg">
              <button
                onClick={() => setIsConquistasOpen(!isConquistasOpen)}
                className="w-full p-6 flex justify-between items-center"
              >
                <h2 className="font-bold">Conquistas</h2>
                {isConquistasOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {isConquistasOpen && (
                <div className="px-6 pb-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">
                      Olimpíadas Tóquio 2020
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Prata por equipes</li>
                      <li>Ouro em salto</li>
                      <li>Prata individual geral</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Olimpíadas Paris 2024
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Ouro por equipes</li>
                      <li>Prata em salto</li>
                      <li>Bronze em argolas</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Vínculos Section */}
            <div className="bg-white rounded-lg">
              <button
                onClick={() => setIsVinculosOpen(!isVinculosOpen)}
                className="w-full p-6 flex justify-between items-center"
              >
                <h2 className="font-bold">Vínculos</h2>
                {isVinculosOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {isVinculosOpen && (
                <div className="px-6 pb-6">
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold">
                        Seleção Brasileira de Ginástica
                      </h3>
                      <p className="text-sm text-gray-500">Desde 2019</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">São Paulo FC</h3>
                      <p className="text-sm text-gray-500">2022 - 2024</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}