import axios from 'axios';
import { useState, useEffect } from 'react';

interface FeedItem {
  id: number;
  nomeUsuario: string;
  dataHora: string;
  curtidas: number;
  comentarios: number;
  conteudos: string | null;
  image: string | null;
}

export function useFeedData() {
  const [data, setData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/postagem`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch feed data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

