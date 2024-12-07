import { useState, useEffect } from 'react';
import axios from 'axios';

interface ProfileData {
  name: string;
  fullName: string;
  birthDate: string;
  nationality: string;
  sport: string;
  image: string;
  achievements: {
    title: string;
    items: string[];
  }[];
  affiliations: {
    organization: string;
    period: string;
  }[];
}

export function useProfileData() {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an API call with a longer delay
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // This is where you would normally make the actual API call
        // const response = await axios.get('https://api.example.com/profile');
        // setData(response.data);
        
        // For simulation, we'll use mock data
        const mockData: ProfileData = {
          name: "Rebeca Andrade",
          fullName: "Rebeca Rodrigues de Andrade",
          birthDate: "08/05/1999",
          nationality: "Brasileira",
          sport: "Ginástica artística",
          image: "/placeholder.svg",
          achievements: [
            {
              title: "Olimpíadas Tóquio 2020",
              items: [
                "Prata por equipes",
                "Ouro em salto",
                "Prata individual geral"
              ]
            },
            {
              title: "Olimpíadas Paris 2024",
              items: [
                "Ouro por equipes",
                "Prata em salto",
                "Bronze em argolas"
              ]
            }
          ],
          affiliations: [
            {
              organization: "Seleção Brasileira de Ginástica",
              period: "Desde 2019"
            },
            {
              organization: "São Paulo FC",
              period: "2022 - 2024"
            }
          ]
        };
        
        setData(mockData);
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

