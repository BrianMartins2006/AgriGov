# AgriGov Software Solutions — Site institucional

Site institucional da **AgriGov Software Solutions**, empresa simulada de desenvolvimento de
software para o agronegócio, desenvolvido na disciplina **Gestão de Sistemas da Informação**
(IFSULDEMINAS · Campus Machado — Prof. Fábio Corsini).

**Equipe:** Brian Gustavo M. Silva · José Carlos Souza · Lucas Antônio · Nicolas Alves

---

## Como rodar localmente

Basta abrir o `index.html` no navegador ou usar um servidor simples:

```bash
python3 -m http.server 8000
# abra http://localhost:8000/
```


## Estrutura

A seção **Como cuidamos dos nossos serviços**, acessível pelo menu **Serviços** ou
pelo fragmento `#servicos`, resume as práticas propostas de suporte, resposta a
incidentes e melhoria contínua no contexto acadêmico da empresa.
Após a publicação no GitHub Pages, o endereço previsto para a seção é
`https://BrianMartins2006.github.io/AgriGov/#servicos`.

```
index.html          estrutura da página
css/style.css       design system (claro/escuro)
js/dados.js         todo o conteúdo editável (textos, papéis, KPIs, projeto)
js/app.js           interações (navegação, KPIs animados, acordeão, tema)
```

---

## Log de interação com a IA

> Atendendo à observação da atividade: *"No caso de se utilizar IA Generativa para apoio nas
> atividades textuais, construir um arquivo de texto (log) com toda a interação com a IA
> (Ctrl + C, Ctrl + V)."*

**Ferramenta utilizada:** opencode (assistente de IA acionado por linha de comando).

**Declaração do grupo:** o conteúdo acadêmico foi **elaborado pelo grupo**. A IA atuou
exclusivamente como **ferramenta auxiliar** de organização de texto, sugestões de estrutura,
redação de rascunhos e implementação técnica do site. Todas as definições estratégicas —
nome, nicho, missão, visão, papéis de governança, comitê, processos críticos, KPIs, projeto
simulado e respostas às perguntas críticas — foram decididas, revisadas e validadas pelo
grupo antes da entrega. O site foi construído a partir das instruções do grupo.

### Interação 1 — Leitura da atividade

- **Grupo:** informa o texto integral da atividade (objetivo, detalhamento das tarefas,
  perguntas críticas e entregáveis).
- **IA (apoio):** resume os entregáveis e esclarece o escopo solicitado.

### Interação 2 — Definição do escopo

- **Grupo:** define que será produzido o conteúdo completo e que as definições da empresa
  seriam encaminhadas pelo grupo.
- **IA (apoio):** organiza um roteiro das seções a desenvolver.

### Interação 3 — Direção da empresa

- **Grupo:** analisa duas possibilidades de mercado (saúde e agronegócio) e **fixa a decisão
  final**: nome **AgriGov Software Solutions**, nicho de **software para o agronegócio**,
  missão, visão, papéis (Gerente de Projetos, DPOs, Arquiteto, Desenvolvedores) e composição
  do Comitê de TI — conforme o texto oficial do grupo.
- **IA (apoio):** propõe alternativas para discussão e, após a decisão do grupo, colabora na
  redação estruturada das seções finais (processos críticos, KPIs, projeto simulado e
  respostas às perguntas críticas), sem alterar as definições do grupo.

### Interação 4 — Desenvolvimento do site (etapa 1)

- **Grupo:** solicita um site para divulgar as informações.
- **IA (apoio):** implementa, conforme solicitado, um site com seções de empresa, governança,
  processos, KPIs, projeto e reflexões, seguindo as instruções do grupo.

### Interação 5 — Refinamento técnico

- **Grupo:** pede uma versão mais completa e dinâmica, e depois define o uso de **HTML, CSS e
  JavaScript** (sem frameworks).
- **IA (apoio):** implementa a versão HTML/CSS/JS com navegação, animações de KPIs, tema
  claro/escuro e menu responsivo, atendendo ao pedido do grupo.



- **Grupo:** relata erro 404 na publicação.
- **IA (apoio):** diagnostica a causa (arquivos dentro de subpasta, sem `index.html` na raiz),
  reorganiza a estrutura do repositório a pedido do grupo e o grupo publicou o resultado.

  https://docs.google.com/document/d/1OJHAHZo21impIAt4do6VpdYBHGSZ2JzuHXQox3vGhe4/edit?usp=sharing
