# KamyLindona

Site interativo feito para a Kamilly com React, Vite e GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite. A página especial fica em:

```text
/#/aniversario
```

## Publicar no GitHub Pages

O projeto usa `HashRouter` e `base: "./"`, portanto funciona em repositórios GitHub Pages sem configuração de servidor.

```bash
npm install
npm run build
npm run deploy
```

Depois, acesse:

```text
https://grimmbtz.github.io/KamyProject/
```

A página de aniversário fica em:

```text
https://grimmbtz.github.io/KamyProject/#/aniversario
```

## O que existe no capítulo de aniversário

- destaque na tela inicial;
- mini-menu para Hogwarts, The Big Bang Theory, Frieren e Pets;
- carta de Hogwarts personalizada;
- Chapéu Seletor com perguntas sobre a Kamilly;
- aula de Trato das Criaturas Mágicas;
- Bestiário com animais reais;
- apartamento 4A, sofá reservado, elevador quebrado e Soft Kitty;
- experiência científica com conclusão Bazinga;
- quadro de relacionamentos;
- Museu da Kamilly;
- escolha de pet acompanhante;
- cinco presentes colecionáveis;
- teoria final e arquivo secreto.

## Personalizar o presente secreto

A senha atual do arquivo secreto é `sempre`. Para mudar, edite a comparação no arquivo:

```text
src/pages/Aniversario.jsx
```

Também é possível alterar a mensagem pessoal que aparece quando a senha é correta no mesmo trecho.

## Estrutura importante

- `src/pages/Aniversario.jsx`: conteúdo e interações do capítulo;
- `src/pages/Aniversario.css`: visual e responsividade;
- `src/components/Background/Hero.jsx`: destaque e mini-menu da home;
- `src/components/Background/Hero.css`: estilos do destaque;
- `src/router/Router.jsx`: rotas do aplicativo.
