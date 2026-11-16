// ============================================================
// TODO O TEXTO DO SITE FICA AQUI. Edite com os dados reais do
// seu PFC/TCC. Os textos abaixo são uma proposta inicial.
// ============================================================

export const projeto = {
  nome: 'EduGuru',
  slogan: 'Estude com orientação, no seu ritmo.',
  resumo:
    'O EduGuru é uma aplicação web que ajuda estudantes a organizar a rotina de estudos, praticar o conteúdo e acompanhar a própria evolução.',
  linkApp: 'https://tttrisos.github.io/EduGuru/',
  linkRepo: 'https://github.com/tttrisos/EduGuru',
  curso: 'Sistema de Informação',
  instituicao: 'Universidade Mogi das Cruzes - UMC',
  ano: 2026,
}

export const perguntaDoDia = {
  pergunta: 'Qual hook do React guarda um valor que muda e atualiza a tela?',
  opcoes: ['useState', 'useRoute', 'useStyle'],
  correta: 0,
  explicacao: 'useState cria uma variável de estado: quando ela muda, o React redesenha o componente.',
}

export const destaques = [
  { titulo: 'Rotina organizada', texto: 'Planeje o que estudar em cada dia sem depender de planilhas soltas.' },
  { titulo: 'Prática constante', texto: 'Exercícios curtos para fixar o conteúdo logo depois de estudar.' },
  { titulo: 'Evolução visível', texto: 'Veja o que já dominou e o que ainda precisa de atenção.' },
]

export const passos = [
  { titulo: 'Escolha a matéria', texto: 'Selecione o assunto que quer estudar hoje.' },
  { titulo: 'Estude em blocos', texto: 'Conteúdo dividido em partes curtas, fáceis de acompanhar.' },
  { titulo: 'Pratique', texto: 'Responda perguntas para testar o que aprendeu.' },
  { titulo: 'Acompanhe', texto: 'Consulte seu progresso e ajuste o plano da semana.' },
]

export const sobre = {
  problema:
    'Muitos estudantes sabem que precisam estudar, mas não sabem por onde começar nem como medir se estão aprendendo. Sem organização, o estudo vira tentativa e erro.',
  objetivoGeral:
    'Desenvolver uma aplicação web que apoie estudantes na organização, na prática e no acompanhamento dos estudos.',
  objetivos: [
    'Permitir o planejamento da rotina de estudos por matéria.',
    'Oferecer atividades de prática com retorno imediato.',
    'Mostrar o progresso do estudante de forma clara.',
    'Funcionar bem em celulares e computadores.',
  ],
  publico:
    'Estudantes do ensino técnico e médio que querem melhorar a rotina de estudos, e também professores que queiram indicar a ferramenta à turma.',
  justificativa:
    'Ferramentas de estudo costumam ser complexas ou pagas. O EduGuru propõe uma solução simples, gratuita e pensada para a realidade do estudante brasileiro.',
}

export const funcionalidades = [
  { categoria: 'Organização', titulo: 'Plano semanal', texto: 'Monte a semana de estudos distribuindo as matérias nos dias disponíveis.' },
  { categoria: 'Organização', titulo: 'Lista de tarefas', texto: 'Registre trabalhos e provas e marque o que já foi concluído.' },
  { categoria: 'Prática', titulo: 'Quiz por matéria', texto: 'Perguntas de múltipla escolha com explicação após cada resposta.' },
  { categoria: 'Prática', titulo: 'Revisão espaçada', texto: 'O sistema sugere rever os temas em que você mais errou.' },
  { categoria: 'Acompanhamento', titulo: 'Painel de progresso', texto: 'Gráficos simples mostram o desempenho por matéria ao longo do tempo.' },
  { categoria: 'Acompanhamento', titulo: 'Metas', texto: 'Defina metas de estudo e acompanhe o quanto falta para cumpri-las.' },
]

export const tecnologias = [
  { nome: 'React', papel: 'Interface em componentes reutilizáveis e atualização automática da tela.' },
  { nome: 'Vite', papel: 'Ambiente de desenvolvimento rápido e build otimizado para produção.' },
  { nome: 'React Router', papel: 'Navegação entre as páginas sem recarregar o site.' },
  { nome: 'CSS', papel: 'Layout responsivo com variáveis, grid e flexbox, sem biblioteca externa.' },
  { nome: 'GitHub', papel: 'Controle de versão e hospedagem do código-fonte.' },
  { nome: 'Vercel', papel: 'Publicação do site com deploy automático a cada alteração.' },
]

export const etapas = [
  { titulo: 'Ideia', texto: 'Definição do problema, do público e do nome do projeto.' },
  { titulo: 'Protótipo', texto: 'Esboço das telas e da navegação antes de programar.' },
  { titulo: 'Código', texto: 'Desenvolvimento dos componentes e das páginas, com apoio de IA.' },
  { titulo: 'Ajustes', texto: 'Revisão do código gerado, correção de erros e melhoria do visual.' },
  { titulo: 'Entrega', texto: 'Publicação no GitHub e na Vercel.' },
]

export const equipe = [
  { nome: 'João Pedro Flor', funcao: 'Desenvolvimento e design' },
  { nome: 'Thiago e Luiz', funcao: 'Pesquisa e documentação' },
  { nome: 'Oscar Alvez', funcao: 'Orientação' },
]
