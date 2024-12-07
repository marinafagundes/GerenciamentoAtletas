import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '@/contexts/auth';
import { useRouter } from 'next/navigation';

interface ProfileData {
  atleta: {
    nomeUsuario: string;
    senha: string;
    nome: string;
    dataNascimento: string;
    esporte: string;
    genero: "M" | "F" | "O";
    agenciaCnpj: string;
    equipeCnpj: string;
  };
  conquistas: {
      eventoNome: string;
      premiacoes: string[];
  }[];
}

export function useProfileData() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/profile/${user?.username}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

