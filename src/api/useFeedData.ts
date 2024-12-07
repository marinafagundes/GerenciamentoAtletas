import { useState, useEffect } from 'react';

interface FeedItem {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  image: string;
  likes: number;
  comments: number;
}

export function useFeedData() {
  const [data, setData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an API call with a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock data for feed items
        const mockData: FeedItem[] = [
          {
            id: 1,
            author: {
              name: "Neymar Jr.",
              avatar: "/placeholder.svg"
            },
            content: "Mais um dia de treino intenso. Focado na próxima partida! 💪⚽",
            image: "/placeholder.svg",
            likes: 15000,
            comments: 2500
          },
          {
            id: 2,
            author: {
              name: "Marta",
              avatar: "/placeholder.svg"
            },
            content: "Orgulhosa de representar o Brasil em mais uma competição internacional. Vamos com tudo! 🇧🇷",
            image: "/placeholder.svg",
            likes: 8700,
            comments: 1200
          },
          {
            id: 3,
            author: {
              name: "Gustavo Kuerten",
              avatar: "/placeholder.svg"
            },
            content: "Lembrança de um dos melhores momentos da minha carreira. Saudades das quadras! 🎾",
            image: "/placeholder.svg",
            likes: 5600,
            comments: 820
          }
        ];
        
        setData(mockData);
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

