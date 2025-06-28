import axios from 'axios';

export class IaService {
  static async responder(pergunta: string): Promise<string> {
    // Exemplo com OpenAI
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions ',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: pergunta }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const data = response.data as { choices: { message: { content: string } }[] };
    return data.choices[0].message.content;
  }
}