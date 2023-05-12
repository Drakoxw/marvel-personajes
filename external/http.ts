import { CardData, MarvelResponse } from '@/domain/interfaces';
import axios, { AxiosResponse } from 'axios'

export const getHeroes = async (): Promise<CardData[]> => {
  const key = "a1bfbf51599dfee6d9b2195e642e1651";
  const hash = "8291aa386f14f30dd8f080dd890fcee4";
  const ts = 1;
  const url = `http://gateway.marvel.com/v1/public/characters?apikey=${key}&ts=${ts}&hash=${hash}&limit=50`
  const res = await axios.get<MarvelResponse>(url)

  return res.data.data.results.map((hero) => {
    return {
      img: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
      name: hero.name,
      comics: hero.comics.available,
      series: hero.series.available,
    };
  });
}