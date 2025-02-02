# To-Do App

## Descrição

Este é um simples **To-Do App** desenvolvido em **React**. A aplicação permite que você adicione, marque como concluída, remova e visualize suas tarefas de maneira interativa. O design foi pensado para ser simples, mas funcional, com recursos como:

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas.
- Funciona com teclas de atalho (Enter para adicionar e Escape para limpar).

Este projeto foi criado com **React** e **UUID** para gerar IDs únicos para cada tarefa.

## Tecnologias Utilizadas

- **React**: Biblioteca para a construção de interfaces de usuário.
- **React Icons**: Biblioteca para ícones (utilizada para o ícone de remover).
- **UUID**: Gerador de identificadores únicos para as tarefas.
- **CSS**: Estilização personalizada.

## Funcionalidades

- **Adicionar tarefas**: Você pode adicionar tarefas digitando no campo de texto e pressionando **Enter** ou clicando fora do campo de entrada.
- **Marcar como concluída**: Clique sobre o nome de uma tarefa para riscar e marcar como concluída.
- **Remover tarefas**: Clique no ícone de lixo para remover tarefas.
- **Limpar entrada**: Ao pressionar **Escape**, o campo de entrada será limpo.
- **Teclas de atalho**: Pressione **Enter** para adicionar uma nova tarefa ou **Escape** para limpar o campo de entrada.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/MBCapello/todoapp.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd todoapp
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute a aplicação:
   ```bash
   npm start
   ```

A aplicação será iniciada em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
todoapp/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Contribuições

Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua nova funcionalidade ou correção de bug (`git checkout -b minha-nova-funcionalidade`).
3. Faça suas alterações.
4. Commit suas alterações (`git commit -am 'Adicionando nova funcionalidade'`).
5. Push para a branch (`git push origin minha-nova-funcionalidade`).
6. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
