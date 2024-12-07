"use client";

import { NavigationBar } from "@/components/ui/navigation-bar";
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Component() {
  const [isConquistasOpen, setIsConquistasOpen] = useState(true);
  const [isVinculosOpen, setIsVinculosOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavigationBar/>

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

        <div className="grid md:grid-cols-[300px,1fr] gap-6 pb-6">
          {/* Left Sidebar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Conquistas Section */}
            <Card>
              <CardHeader className="p-0">
                <button
                  onClick={() => setIsConquistasOpen(!isConquistasOpen)}
                  className="w-full p-6 flex justify-between items-center"
                >
                  <CardTitle className="text-lg">Conquistas</CardTitle>
                  {isConquistasOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </CardHeader>
              {isConquistasOpen && (
                <CardContent className="space-y-4">
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
                </CardContent>
              )}
            </Card>

            {/* Vínculos Section */}
            <Card>
              <CardHeader className="p-0">
                <button
                  onClick={() => setIsVinculosOpen(!isVinculosOpen)}
                  className="w-full p-6 flex justify-between items-center"
                >
                  <CardTitle className="text-lg">Vínculos</CardTitle>
                  {isVinculosOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </CardHeader>
              {isVinculosOpen && (
                <CardContent className="space-y-2">
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
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

