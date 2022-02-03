/* eslint-disable consistent-return */
import axios from 'axios';

// eslint-disable-next-line import/named
import { redisClient } from '../RedisConfig/redisConfig';

export default async function searchApi(req, res) {
  const { cep } = req.params;

  const responseCache = JSON.parse(await redisClient.get('cepNovo'));

  if (responseCache) {
    if (responseCache.cep.replace('-', '') === cep) {
      return res.status(200).json({ Cache: responseCache });
    }
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    if (response.status === 200) {
      redisClient.set('cepNovo', JSON.stringify(response.data));
      redisClient.expire('cepNovo', 300);
      return res.status(200).json({ API: response.data });
    }
  } catch (e) {
    return res.status(400).json({ error: 'Cep not found' });
  }
}
