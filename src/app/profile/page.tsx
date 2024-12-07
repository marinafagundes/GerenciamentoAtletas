"use client"

import { NavigationBar } from "@/components/ui/navigation-bar"
import { ChevronDown, ChevronUp, UserCircle } from 'lucide-react'
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useProfileData } from "@/api/useProfileData"
import { Loading } from "@/components/ui/loading"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Profile = () => {
  const [isConquistasOpen, setIsConquistasOpen] = useState(true)
  const [isVinculosOpen, setIsVinculosOpen] = useState(false)
  const { data, loading, error } = useProfileData()
  
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">Error: {error}</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />

      <div className="bg-[#3b4992] h-48"></div>
      <div className="max-w-5xl mx-auto px-6 -mt-24">
        <div className="flex flex-col items-center mb-8 relative z-10">
          <Avatar className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white bg-white">
            <AvatarImage src="/user.png" className=" w-full h-full object-cover h-160 w-160" />
            <AvatarFallback>{data?.atleta.nomeUsuario}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold text-[#3b4992] mt-2">{data?.atleta.nomeUsuario}</h1>
          <p className="text-gray-600">{data?.atleta.esporte}</p>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6 pb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                <p>{data?.atleta.nome}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Nascimento</p>
                <p>{data?.atleta.dataNascimento}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Genêro</p>
                <p>
                  {{
                    M: "Masculino",
                    F: "Feminino",
                    O: "Outro",
                  }[data?.atleta.genero ?? "O"]}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Modalidade</p>
                <p>{data?.atleta.esporte}</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
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
                  {data?.conquistas.map((conquista, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{conquista.eventoNome}</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {conquista.premiacoes.map((premiacao, itemIndex) => (
                          <li key={itemIndex}>{premiacao}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>

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
                    <h3 className="font-semibold">{data?.atleta.agenciaCnpj}</h3>
                    {/* <p className="text-sm text-gray-500">{affiliation.period}</p> */}
                  </div>
                  <div>
                    <h3 className="font-semibold">{data?.atleta.equipeCnpj}</h3>
                    {/* <p className="text-sm text-gray-500">{affiliation.period}</p> */}
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;