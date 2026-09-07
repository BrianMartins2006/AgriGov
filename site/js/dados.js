
var DADOS = {
  empresa: {
    hero: 'Desenvolvemos software sob medida e soluções SaaS para a gestão do agronegócio — combinando princípios rigorosos de governança de TI, segurança de dados e conformidade LGPD em cada entrega.',
    ramo: 'Desenvolvimento de software sob medida e soluções SaaS voltadas à gestão do agronegócio, automação de processos agroindustriais e sistemas de tomada de decisão.',
    missao: 'Desenvolver soluções digitais eficientes, seguras e inovadoras para o setor agroindustrial e corporativo, aplicando princípios rigorosos de governança de TI para entregar valor mensurável, conformidade regulatória e transformação digital aos nossos clientes.',
    visao: 'Ser reconhecida nacionalmente até 2030 como referência em engenharia de software com governança integrada, destacando-se pela excelência em segurança da informação, agilidade de entrega e alinhamento estratégico com o mercado.',
    tags: [
      { icono: 'leaf', rotulo: 'Gestão operacional agrícola' },
      { icono: 'gauge', rotulo: 'Painéis de decisão' },
      { icono: 'trend', rotulo: 'Gestão financeira' },
      { icono: 'chip', rotulo: 'Integração IoT' },
      { icono: 'lock', rotulo: 'Conformidade LGPD' },
    ],
  },

  estatisticas: [
    { rotulo: 'Cobertura de testes', valor: 90, sufixo: '%' },
    { rotulo: 'Disponibilidade alvo', valor: 99, sufixo: '%' },
    { rotulo: 'MTTR incidente crítico', valor: 4, sufixo: 'h' },
    { rotulo: 'Ganho no fechamento mensal', valor: 60, sufixo: '%' },
  ],

  cargos: [
    { cargo: 'Gerente de Projetos', responsavel: 'Lucas Antônio', area: 'Gestão', atribuicoes: 'Alinhar todos os projetos aos objetivos de negócio.' },
    { cargo: 'DPO (Encarregado de Dados)', responsavel: 'José Carlos Souza e Brian Gustavo M. Silva', area: 'Compliance', atribuicoes: 'Garantir conformidade com a LGPD, relatórios de impacto à proteção de dados e canal com titulares e ANPD.' },
    { cargo: 'Arquiteto de Software', responsavel: 'Nicolas Alves', area: 'Técnica', atribuicoes: 'Definir a arquitetura das soluções e apoiar as decisões técnicas no comitê.' },
    { cargo: 'Desenvolvedores', responsavel: 'José Carlos Souza, Brian Gustavo M. Silva e Nicolas Alves', area: 'Técnica', atribuicoes: 'Projetar, codificar, testar e manter os sistemas com código limpo, arquitetura segura e integração contínua.' },
  ],

  comite: {
    conceito: 'O Comitê de TI é um órgão colegiado e consultivo encarregado de direcionar a estratégia tecnológica, aprovar investimentos significativos, avaliar riscos e garantir que as iniciativas de TI estejam alinhadas às metas estratégicas do negócio.',
    membros: [
      'Gerente de Projetos (Lucas Antônio)',
      'DPOs (José Carlos Souza e Brian Gustavo M. Silva)',
      'Arquiteto de Software (Nicolas Alves)',
      'Representante da área administrativa/financeira',
    ],
    frequencia: 'Reuniões periódicas para direcionar a estratégia tecnológica, aprovar investimentos, avaliar riscos e revisar KPIs.',
  },

  principios: [
    { icono: 'target', titulo: 'Valor direto ao cliente', desc: 'A TI deve atuar como geradora de valor direto ao cliente.' },
    { icono: 'lock', titulo: 'Privacidade por padrão', desc: 'Toda aplicação concebida com Privacy by Design.' },
    { icono: 'shield', titulo: 'Segurança por padrão', desc: 'Security by Design em todos os produtos.' },
    { icono: 'gauge', titulo: 'Escalabilidade', desc: 'Arquitetura que prioriza escalabilidade e desempenho.' },
    { icono: 'layers', titulo: 'Reuso de código', desc: 'Componentes reutilizáveis e padronizados.' },
    { icono: 'plug', titulo: 'Interoperabilidade', desc: 'Integrações limpas entre sistemas e IoT.' },
  ],

  infraestrutura: [
    { icono: 'cloud', titulo: 'Cloud-First', desc: 'Adoção da nuvem com provedores como AWS e Vercel.' },
    { icono: 'box', titulo: 'Contêineres (Docker)', desc: 'Padronização dos ambientes de desenvolvimento e produção.' },
    { icono: 'git', titulo: 'CI/CD', desc: 'Automação de deploys via pipelines no GitHub Actions.' },
    { icono: 'layers', titulo: 'Ambientes isolados', desc: 'Desenvolvimento, homologação e produção separados.' },
    { icono: 'monitor', titulo: 'Monitoramento 24x7', desc: 'Disponibilidade, desempenho e alertas em tempo real.' },
    { icono: 'db', titulo: 'Backup e DR', desc: 'Recuperação de desastres com políticas definidas.' },
  ],

  arquitetura: [
    { icono: 'layers', titulo: 'Microsserviços', desc: 'Arquitetura orientada a serviços desacoplados.' },
    { icono: 'api', titulo: 'APIs RESTful', desc: 'Interfaces limpas entre os microsserviços.' },
    { icono: 'code', titulo: 'Frameworks estruturados', desc: 'Backend em Laravel, Python/Streamlit e Java.' },
    { icono: 'db', titulo: 'Bancos relacionais', desc: 'PostgreSQL/MySQL com migrations e controle de versão.' },
    { icono: 'gauge', titulo: 'Painéis analíticos', desc: 'Dashboards de tomada de decisão para o agro.' },
    { icono: 'chip', titulo: 'Integração IoT', desc: 'Sensores de clima e solo conectados à plataforma.' },
  ],

  investimento: [
    { icono: 'trend', criterio: 'Retorno (ROI)', desc: 'Relação entre retorno e custo do investimento.' },
    { icono: 'shield', criterio: 'Redução de riscos', desc: 'Mitigação de riscos operacionais e jurídicos.' },
    { icono: 'target', criterio: 'Meta anual do cliente', desc: 'Alinhamento direto com as metas de crescimento do cliente.' },
  ],

  processos: [
    {
      n: '01',
      titulo: 'Gestão do Desenvolvimento de Software (PDLC)',
      desc: 'Conduz o ciclo de vida das entregas sob metodologia ágil (Scrum), com sprints curtas, backlog priorizado pelo Gerente de Projetos e integração contínua.',
      just: 'É o processo central da empresa: transforma requisitos do cliente agro em produto funcional com previsibilidade. Sem disciplina, a empresa perde previsibilidade, qualidade e competitividade.',
    },
    {
      n: '02',
      titulo: 'Gestão de Projetos',
      desc: 'Planeja, executa e controla escopo, cronograma, orçamento, riscos e comunicação, garantindo que as entregas estejam alinhadas aos objetivos de negócio dos clientes.',
      just: 'O alinhamento projeto-negócio evita retrabalho, estouro de prazos e insatisfação — crítico em contratos que acompanham a sazonalidade da safra agro.',
    },
    {
      n: '03',
      titulo: 'Garantia da Qualidade e Testes (QA)',
      desc: 'Verificação e validação contínuas: testes automatizados (unitários, integração, ponta a ponta), testes de segurança e testes de aceitação com o cliente.',
      just: 'Decisões agro (plantio, crédito, logística) dependem de dados processados pelos painéis. Um erro pode gerar prejuízos financeiros e perda de confiança.',
    },
    {
      n: '04',
      titulo: 'Segurança da Informação e Privacidade (LGPD)',
      desc: 'Protege confidencialidade, integridade e disponibilidade: políticas de acesso, criptografia, gestão de vulnerabilidades, backup e resposta a incidentes, com conformidade à LGPD conduzida pelos DPOs.',
      just: 'A empresa trata dados pessoais e sensíveis de negócio. Um vazamento gera sanções da ANPD, danos jurídicos e destruição da reputação — é sobrevivência organizacional.',
    },
    {
      n: '05',
      titulo: 'Operação, Suporte e Gestão de Incidentes',
      desc: 'Operação contínua em produção com monitoramento 24x7, atendimento a chamados com SLA e tratamento de incidentes até a resolução (boas práticas inspiradas no ITIL).',
      just: 'Nas janelas de plantio e colheita, uma indisponibilidade paralisa decisões dos produtores. Suporte ágil e operação estável retêm clientes.',
    },
  ],

  kpis: [
    { icono: 'flask', nome: 'Cobertura de Testes Automatizados', meta: 90, sufixo: '%', barra: 90, marcador: 90, desc: 'Percentual do código exercitado por testes automatizados. Mede a blindagem de qualidade e sustenta o processo de QA.' },
    { icono: 'calendar', nome: 'Entregas no Prazo', meta: 95, sufixo: '%', barra: 95, marcador: 80, desc: 'Percentual de sprints e releases concluídos no cronograma. Reflete previsibilidade da gestão de projetos.' },
    { icono: 'clock', nome: 'MTTR (Resolução de Incidentes)', meta: 4, sufixo: 'h', barra: 100, marcador: 75, desc: 'Tempo médio entre abertura e resolução de incidentes. Mede a eficiência da operação e do suporte.' },
    { icono: 'monitor', nome: 'Disponibilidade do Sistema', meta: 99, sufixo: '%', barra: 99, marcador: 99, desc: 'Percentual de tempo em que os sistemas permanecem operacionais. Requisito crítico nas janelas de safra.' },
    { icono: 'chat', nome: 'Satisfação do Cliente (NPS)', meta: 50, sufixo: '', barra: 50, marcador: 40, desc: 'Medida da satisfação e recomendação dos clientes. Satisfeitos renovam contratos e reduzem o custo de aquisição.' },
  ],

  projeto: {
    cliente: 'Cooperativa AgroVale',
    descricao: 'Cooperativa de produtores de soja e milho, com 300 cooperados e 25.000 hectares cultivados.',
    objetivo: 'Implantar o módulo de gestão operacional e financeira agrícola + painel analítico de tomada de decisão, integrando sensores IoT de clima e solo, substituindo planilhas e controles manuais.',
    duracao: '4 meses',
    escopo: 'Gestão operacional · Financeiro · Painel IoT',
    resultado: 'Reduzir em 60% o tempo de fechamento financeiro mensal, consolidar decisões de compra de insumos baseadas em dados e dar visibilidade em tempo real das lavouras via IoT.',
    etapas: [
      { fase: 'Descoberta e Escopo', desc: 'Levantar requisitos, definir integrações IoT e sprints.' },
      { fase: 'Sprints de Desenvolvimento', desc: 'Gestão operacional, financeira e painel analítico em ciclos de 2 semanas.' },
      { fase: 'Homologação com Cliente', desc: 'Testes de aceitação com produtores e equipe financeira.' },
      { fase: 'Treinamento e Go-live', desc: 'Capacitação dos cooperados e abertura oficial.' },
      { fase: 'Operação e Suporte', desc: 'SLA definido, monitoramento 24x7 e acompanhamento dos KPIs.' },
    ],
  },

  perguntas: [
    {
      pergunta: 'Como sua empresa define Governança de TI e como garantirá uma TI alinhada aos objetivos de negócio?',
      resposta: 'Para a AgriGov, governança de TI é o conjunto de estruturas, processos e decisões que garantem que a tecnologia gere valor mensurável, gerencie riscos e cumpra a estratégia da empresa — a TI é ativo estratégico, não custo. O alinhamento é garantido por três mecanismos: o Comitê de TI, que aprova o portfólio de projetos e investimentos a partir do alinhamento estratégico; a cascata de objetivos, em que cada projeto e sprint possuem indicadores de valor ligados às metas de negócio; e a revisão contínua de KPIs com decisões corretivas. Assim, a TI da AgriGov e dos seus clientes permanece orientada a resultados de negócio.',
    },
    {
      pergunta: 'Quais mecanismos de monitoramento de desempenho de TI serão adotados?',
      resposta: 'Painel de governança (quadro de KPIs) — cobertura de testes, entregas no prazo, MTTR, disponibilidade e NPS/CSAT — revisado periodicamente pelo comitê e em revisão estratégica. Além disso, monitoramento técnico automatizado de infraestrutura 24x7 (disponibilidade, desempenho e alertas), auditorias periódicas de processos e segurança com base em boas práticas da ISO/IEC 27001 e da LGPD, e revisões de sprint. Cada medição gera planos de ação com responsáveis e prazos.',
    },
    {
      pergunta: 'Como sua empresa propõe a integração de culturas Agile e DevOps à Governança de TI?',
      resposta: 'A AgriGov integra Agile e DevOps à governança na estrutura, e não apesar dela. O Agile (Scrum) traz ciclos curtos, transparência e foco em valor, disciplinado pela governança por meio da definição de pronto (DoD), da priorização conduzida pelo comitê e de KPIs de qualidade. O DevOps automatiza a entrega contínua (CI/CD no GitHub Actions), a conteinerização e o monitoramento, disciplinados por trilhas de auditoria, controle de acesso à produção e revisão de mudanças críticas. O resultado é velocidade com controle — essencial para inovar nos sistemas críticos do agronegócio sem comprometer segurança e conformidade.',
    },
  ],

}