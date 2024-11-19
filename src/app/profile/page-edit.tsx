"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp, Bell, Search, HomeIcon, UserCircle, Pencil, Check, X, Plus, Trash } from 'lucide-react';
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface PersonalInfo {
  name: string;
  birthDate: string;
  nationality: string;
  modality: string;
}

interface Achievement {
  title: string;
  achievements: string[];
}

interface Affiliation {
  name: string;
  period: string;
}

interface EditingState {
  personalInfo: boolean;
  conquistas: boolean;
  vinculos: boolean;
}

export default function Component() {
  const [isConquistasOpen, setIsConquistasOpen] = useState<boolean>(true);
  const [isVinculosOpen, setIsVinculosOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<EditingState>({
    personalInfo: false,
    conquistas: false,
    vinculos: false
  });
  const [editedInfo, setEditedInfo] = useState<PersonalInfo>({
    name: "Rebeca Rodrigues de Andrade",
    birthDate: "08/05/1999",
    nationality: "Brasileira",
    modality: "Ginástica artística",
  });
  const [conquistas, setConquistas] = useState<Achievement[]>([
    {
      title: "Olimpíadas Tóquio 2020",
      achievements: [
        "Prata por equipes",
        "Ouro em salto",
        "Prata individual geral"
      ]
    },
    {
      title: "Olimpíadas Paris 2024",
      achievements: [
        "Ouro por equipes",
        "Prata em salto",
        "Bronze em argolas"
      ]
    }
  ]);
  const [vinculos, setVinculos] = useState<Affiliation[]>([
    {
      name: "Seleção Brasileira de Ginástica",
      period: "Desde 2019"
    },
    {
      name: "São Paulo FC",
      period: "2022 - 2024"
    }
  ]);

  const isProfileOwner = true; // This should be determined by your authentication logic

  const handleEdit = (section: keyof EditingState) => {
    setIsEditing(prev => ({ ...prev, [section]: true }));
  };

  const handleSave = (section: keyof EditingState) => {
    setIsEditing(prev => ({ ...prev, [section]: false }));
    // Here you would typically send the updated info to your backend
  };

  const handleCancel = (section: keyof EditingState) => {
    setIsEditing(prev => ({ ...prev, [section]: false }));
    // Reset the edited info to the original values if needed
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConquistaChange = (index: number, field: keyof Achievement, value: string | string[]) => {
    const newConquistas = [...conquistas];
    if (field === 'title') {
      newConquistas[index].title = value as string;
    } else if (field === 'achievements') {
      newConquistas[index].achievements = value as string[];
    }
    setConquistas(newConquistas);
  };

  const handleAchievementChange = (conquistaIndex: number, achievementIndex: number, value: string) => {
    const newConquistas = [...conquistas];
    newConquistas[conquistaIndex].achievements[achievementIndex] = value;
    setConquistas(newConquistas);
  };

  const addConquista = () => {
    setConquistas([...conquistas, { title: "", achievements: [""] }]);
  };

  const removeConquista = (index: number) => {
    setConquistas(conquistas.filter((_, i) => i !== index));
  };

  const addAchievement = (conquistaIndex: number) => {
    const newConquistas = [...conquistas];
    newConquistas[conquistaIndex].achievements.push("");
    setConquistas(newConquistas);
  };

  const removeAchievement = (conquistaIndex: number, achievementIndex: number) => {
    const newConquistas = [...conquistas];
    newConquistas[conquistaIndex].achievements = newConquistas[conquistaIndex].achievements.filter((_, i) => i !== achievementIndex);
    setConquistas(newConquistas);
  };

  const handleVinculoChange = (index: number, field: keyof Affiliation, value: string) => {
    const newVinculos = [...vinculos];
    newVinculos[index][field] = value;
    setVinculos(newVinculos);
  };

  const addVinculo = () => {
    setVinculos([...vinculos, { name: "", period: "" }]);
  };

  const removeVinculo = (index: number) => {
    setVinculos(vinculos.filter((_, i) => i !== index));
  };

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
      <div className="bg-[#3b4992] h-48 mt-14"></div>

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
          <h1 className="text-2xl font-bold text-[#3b4992] mt-2">{editedInfo.name}</h1>
          <p className="text-gray-600">Ginasta</p>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6 mt-8">
          {/* Left Sidebar */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Informações Pessoais</h2>
              {isProfileOwner && !isEditing.personalInfo && (
                <Button variant="ghost" size="icon" onClick={() => handleEdit('personalInfo')}>
                  <Pencil className="h-4 w-4" />
                </Button>
              )}
              {isEditing.personalInfo && (
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleSave('personalInfo')}>
                    <Check className="h-4 w-4 text-green-500" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleCancel('personalInfo')}>
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                {isEditing.personalInfo ? (
                  <Input
                    name="name"
                    value={editedInfo.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                ) : (
                  <p>{editedInfo.name}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Nascimento</p>
                {isEditing.personalInfo ? (
                  <Input
                    name="birthDate"
                    value={editedInfo.birthDate}
                    onChange={handleChange}
                    className="mt-1"
                  />
                ) : (
                  <p>{editedInfo.birthDate}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Nacionalidade</p>
                {isEditing.personalInfo ? (
                  <Input
                    name="nationality"
                    value={editedInfo.nationality}
                    onChange={handleChange}
                    className="mt-1"
                  />
                ) : (
                  <p>{editedInfo.nationality}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Modalidade</p>
                {isEditing.personalInfo ? (
                  <Input
                    name="modality"
                    value={editedInfo.modality}
                    onChange={handleChange}
                    className="mt-1"
                  />
                ) : (
                  <p>{editedInfo.modality}</p>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Conquistas Section */}
            <div className="bg-white rounded-lg">
              <div className="p-6 flex justify-between items-center">
                <h2 className="font-bold">Conquistas</h2>
                <div className="flex items-center gap-2">
                  {isProfileOwner && !isEditing.conquistas && (
                    <Button variant="ghost" size="icon" onClick={() => handleEdit('conquistas')}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                  )}
                  {isEditing.conquistas && (
                    <>
                      <Button variant="ghost" size="icon" onClick={() => handleSave('conquistas')}>
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleCancel('conquistas')}>
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsConquistasOpen(!isConquistasOpen)}
                  >
                    {isConquistasOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              {isConquistasOpen && (
                <div className="px-6 pb-6 space-y-4">
                  {conquistas.map((conquista, index) => (
                    <div key={index} className="space-y-2">
                      {isEditing.conquistas ? (
                        <div className="flex items-center gap-2">
                          <Input
                            value={conquista.title}
                            onChange={(e) => handleConquistaChange(index, 'title', e.target.value)}
                            className="font-semibold"
                          />
                          <Button variant="ghost" size="icon" onClick={() => removeConquista(index)}>
                            <Trash className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      ) : (
                        <h3 className="font-semibold mb-2">{conquista.title}</h3>
                      )}
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {conquista.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>
                            {isEditing.conquistas ? (
                              <div className="flex items-center gap-2">
                                <Input
                                  value={achievement}
                                  onChange={(e) => handleConquistaChange(index, 'achievements', [e.target.value])}
                                />
                                <Button variant="ghost" size="icon" onClick={() => removeAchievement(index, achievementIndex)}>
                                  <X className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            ) : (
                              achievement
                            )}
                          </li>
                        ))}
                      </ul>
                      {isEditing.conquistas && (
                        <Button variant="outline" size="sm" onClick={() => addAchievement(index)}>
                          <Plus className="h-4 w-4 mr-2" /> Adicionar Conquista
                        </Button>
                      )}
                    </div>
                  ))}
                  {isEditing.conquistas && (
                    <Button variant="outline" onClick={addConquista}>
                      <Plus className="h-4 w-4 mr-2" /> Adicionar Categoria de Conquista
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Vínculos Section */}
            <div className="bg-white rounded-lg">
              <div className="p-6 flex justify-between items-center">
                <h2 className="font-bold">Vínculos</h2>
                <div className="flex items-center gap-2">
                  {isProfileOwner && !isEditing.vinculos && (
                    <Button variant="ghost" size="icon" onClick={() => handleEdit('vinculos')}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                  )}
                  {isEditing.vinculos && (
                    <>
                      <Button variant="ghost" size="icon" onClick={() => handleSave('vinculos')}>
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleCancel('vinculos')}>
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsVinculosOpen(!isVinculosOpen)}
                  >
                    {isVinculosOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              {isVinculosOpen && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {vinculos.map((vinculo, index) => (
                      <div key={index} className="space-y-1">
                        {isEditing.vinculos ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Input
                                value={vinculo.name}
                                onChange={(e) => handleVinculoChange(index, 'name', e.target.value)}
                                className="font-semibold"
                              />
                              <Button variant="ghost" size="icon" onClick={() => removeVinculo(index)}>
                                <Trash className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                            <Input
                              value={vinculo.period}
                              onChange={(e) => handleVinculoChange(index, 'period', e.target.value)}
                              className="text-sm text-gray-500"
                            />
                          </div>
                        ) : (
                          <>
                            <h3 className="font-semibold">{vinculo.name}</h3>
                            <p className="text-sm text-gray-500">{vinculo.period}</p>
                          </>
                        )}
                      </div>
                    ))}
                    {isEditing.vinculos && (
                      <Button variant="outline" onClick={addVinculo}>
                        <Plus className="h-4 w-4 mr-2" /> Adicionar Vínculo
                      </Button>
                    )}
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