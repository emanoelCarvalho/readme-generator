# Gerador de READMEs Personalizados  

Bem-vindo ao **Gerador de READMEs Personalizados**!  

## 🎯 Motivação  
Criar READMEs detalhados e profissionais pode ser um processo trabalhoso. Este projeto foi criado para **automatizar a criação de READMEs**, facilitando a documentação de projetos e economizando tempo.  

## 🚧 Status do Projeto  
Atualmente, o projeto está **em fase de finalização**, mas já está disponível para testes e utilização.  

## 🛠️ Tecnologias Utilizadas  
- **NestJS**: Framework para construção da API.  
- **TypeScript**: Para garantir maior segurança e robustez no código.  
- **Axios**: Para comunicação com APIs externas.  
- **OpenAI API**: Modelo de IA responsável por gerar os textos personalizados.  

## 📖 Funcionalidades  
- Receber um prompt descritivo do projeto.  
- Gerar um README adaptado às necessidades informadas no prompt.  
- Retornar o conteúdo pronto para ser utilizado ou ajustado.  

## 🚀 Como Utilizar  
Siga estas instruções para começar a usar a ferramenta:  

### Pré-requisitos  
1. Certifique-se de ter o Node.js e o npm instalados.  
2. Configure uma conta na OpenAI para obter uma chave de API.  

### Instalação  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```  
2. Instale as dependências:  
   ```bash
   npm install
   ```  
3. Configure as variáveis de ambiente:  
   Crie um arquivo `.env` na raiz do projeto e adicione:  
   ```env
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_API_URL=https://api.openai.com/v1/chat/completions
   ```  

### Uso  
1. Inicie o servidor:  
   ```bash
   npm run start
   ```  
2. Faça uma requisição para o endpoint da API utilizando ferramentas como Postman ou cURL:  
   ```bash
   curl -X POST http://localhost:3000/openai/generate-readme \
   -H "Content-Type: application/json" \
   -d '{"prompt": "Crie um README para um projeto em NestJS"}'
   ```  
3. O README gerado será retornado como resposta da API.  

### Exemplo de Resposta  
```json
{
  "readme": "# Projeto X\nDescrição do projeto, motivação e detalhes gerados automaticamente."
}
```  

## 💡 Como Contribuir  
Contribuições são muito bem-vindas! Se você tem sugestões, encontrou algum bug ou deseja colaborar, siga estes passos:  
1. Faça um *fork* do repositório.  
2. Crie uma *branch* para sua funcionalidade ou correção:  
   ```bash
   git checkout -b minha-contribuicao
   ```  
3. Envie suas alterações via *pull request*.  

## 📬 Contato  
- **E-mail**: hemanoel718@gmail.com  
- **LinkedIn**: [Emanoel Carvalho](https://www.linkedin.com/in/emanoelcarvalho/)  

---  

Obrigado por apoiar este projeto! Vamos juntos transformar ideias em realidade! 🚀  
