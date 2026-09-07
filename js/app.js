/* ==================== AgriGov — interações e renderização ==================== */
(function () {
  'use strict'
  var D = window.DADOS

  /* ---------- ícones SVG (traço fino, 24x24) ---------- */
  var ICONES = {
    target: '<circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="0.8"></circle>',
    lock: '<rect x="4.5" y="10" width="15" height="10" rx="1.5"></rect><path d="M8 10V7.5a4 4 0 0 1 8 0V10"></path>',
    shield: '<path d="M12 3l7 2.8v5.4c0 4.6-3 7.6-7 9.4-4-1.8-7-4.8-7-9.4V5.8z"></path>',
    gauge: '<path d="M4 18a9 9 0 1 1 16 0"></path><path d="M12 14l4-4"></path><circle cx="12" cy="14" r="1.3"></circle>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"></path><path d="M3 13l9 5 9-5"></path><path d="M3 17l9 5 9-5"></path>',
    plug: '<path d="M9 3v5M15 3v5"></path><path d="M6 8h12v3a6 6 0 0 1-12 0z"></path><path d="M12 17v4"></path>',
    cloud: '<path d="M6.5 18A4.5 4.5 0 0 1 7 9.1a6 6 0 0 1 11.5 1.4A3.8 3.8 0 0 1 18 18z"></path>',
    box: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"></path><path d="M4 7.5l8 4.5 8-4.5M12 12v9"></path>',
    git: '<circle cx="6" cy="6" r="2.5"></circle><circle cx="6" cy="18" r="2.5"></circle><circle cx="18" cy="8" r="2.5"></circle><path d="M6 8.5v7M15.7 6.4l-7 4M16.3 9l-7.3 7"></path>',
    monitor: '<rect x="3.5" y="4.5" width="17" height="11" rx="1.5"></rect><path d="M9 20h6M12 15.5V20"></path>',
    db: '<ellipse cx="12" cy="6" rx="7" ry="3"></ellipse><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"></path><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"></path>',
    api: '<path d="M7 8l-4 4 4 4M17 8l4 4-4 4"></path><path d="M13 5l-2 14"></path>',
    code: '<path d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5"></path>',
    chip: '<rect x="6.5" y="6.5" width="11" height="11" rx="1.5"></rect><rect x="10" y="10" width="4" height="4"></rect><path d="M9 3v3.5M15 3v3.5M9 17.5V21M15 17.5V21M3 9h3.5M3 15h3.5M17.5 9H21M17.5 15H21"></path>',
    leaf: '<path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14z"></path><path d="M5 19c4-5 8-9 12-12"></path>',
    trend: '<path d="M3 17l6-6 4 4 8-8"></path><path d="M15 7h6v6"></path>',
    check: '<path d="M4 12l5 5 11-11"></path>',
    flask: '<path d="M9.5 3h5M10 3v5L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18L14 8V3"></path><path d="M7.5 14h9"></path>',
    calendar: '<rect x="4" y="6" width="16" height="15" rx="1.5"></rect><path d="M8 3v4M16 3v4M4 10h16"></path>',
    clock: '<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3.5 2"></path>',
    chat: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-6.5z"></path>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"></path>',
  }

  function icone(chave) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONES[chave] || ICONES.target) + '</svg>'
  }

  /* ---------- helpers ---------- */
  function $(sel) {
    return document.querySelector(sel)
  }
  function texto(sel, valor) {
    var destino = $(sel)
    if (destino) destino.textContent = valor
  }
  function html(sel, valor) {
    var destino = $(sel)
    if (destino) destino.innerHTML = valor
  }
  function cards(lista, num) {
    return lista
      .map(function (i, idx) {
        return (
          '<div class="card card--num">' +
          '<span class="card__num">' + (num ? String(idx + 1).padStart(2, '0') : '') + '</span>' +
          '<div class="card__icone">' + icone(i.icono) + '</div>' +
          '<h4>' + (i.titulo || i.criterio) + '</h4>' +
          '<p>' + i.desc + '</p>' +
          '</div>'
        )
      })
      .join('')
  }

  /* ---------- renderização ---------- */
  function render() {
    /* hero */
    texto('#heroDesc', D.empresa.hero)
    html(
      '#heroStats',
      D.estatisticas
        .map(function (e) {
          return (
            '<div class="stat"><span class="stat__rotulo">' + e.rotulo + '</span>' +
            '<div class="stat__valor">' + e.valor + '<span>' + e.sufixo + '</span></div></div>'
          )
        })
        .join('')
    )

    /* empresa */
    texto('#ramo', D.empresa.ramo)
    texto('#missao', D.empresa.missao)
    texto('#visao', D.empresa.visao)
    html(
      '#tags',
      D.empresa.tags
        .map(function (t) {
          return '<span class="chip">' + icone(t.icono) + t.rotulo + '</span>'
        })
        .join('')
    )

    /* governança */
    texto('#comiteConceito', D.comite.conceito)
    html(
      '#comiteMembros',
      D.comite.membros
        .map(function (m) {
          return '<li>' + icone('check') + '<span>' + m + '</span></li>'
        })
        .join('')
    )
    texto('#comiteFrequencia', D.comite.frequencia)
    html(
      '#tabelaCargos',
      D.cargos
        .map(function (c) {
          return (
            '<tr><td><span class="tag-area">' + c.area + '</span><br/><strong>' + c.cargo +
            '</strong></td><td>' + c.responsavel + '</td><td>' + c.atribuicoes + '</td></tr>'
          )
        })
        .join('')
    )
    html('#principios', cards(D.principios, true))
    html('#infraestrutura', cards(D.infraestrutura, true))
    html('#arquitetura', cards(D.arquitetura, true))
    html('#investimento', cards(D.investimento, true))

    /* processos */
    html(
      '#processos',
      D.processos
        .map(function (p) {
          return (
            '<li><div class="processo__num">' + p.n + '</div>' +
            '<div><div class="processo__titulo">' + p.titulo + '</div>' +
            '<p class="processo__desc">' + p.desc + '</p></div>' +
            '<div class="processo__just"><strong>Por que escolher</strong><p>' + p.just + '</p></div></li>'
          )
        })
        .join('')
    )

    /* KPIs — painel métrico */
    html(
      '#kpis',
      D.kpis
        .map(function (k) {
          return (
            '<div class="kpi" data-meta="' + k.meta + '" data-sufixo="' + k.sufixo +
            '" data-barra="' + k.barra + '" data-marcador="' + k.marcador + '">' +
            '<div><div class="kpi__nome">' + k.nome + '</div>' +
            '<p class="kpi__desc">' + k.desc + '</p></div>' +
            '<div class="kpi__grade">' +
            '<div class="barra"><span class="barra__marcador"></span><span class="barra__preenchimento"></span></div>' +
            '</div>' +
            '<div class="kpi__valor">0<span>' + k.sufixo + '</span></div>' +
            '</div>'
          )
        })
        .join('')
    )

    /* projeto */
    html(
      '#projetoDestaques',
      [
        ['Cliente', D.projeto.cliente],
        ['Perfil', D.projeto.descricao],
        ['Duração / escopo', D.projeto.duracao + ' · ' + D.projeto.escopo],
      ]
        .map(function (d) {
          return '<div class="destaque"><span>' + d[0] + '</span><strong>' + d[1] + '</strong></div>'
        })
        .join('')
    )
    texto('#projetoObjetivo .caso__objetivo-texto', D.projeto.objetivo)
    html(
      '#timeline',
      D.projeto.etapas
        .map(function (e, i) {
          return (
            '<li><h4>0' + (i + 1) + ' · ' + e.fase + '</h4><p>' + e.desc + '</p></li>'
          )
        })
        .join('')
    )
    texto('#projetoResultado', D.projeto.resultado)

    /* perguntas */
    html(
      '#perguntas',
      D.perguntas
        .map(function (p, i) {
          return (
            '<div class="acordeao' + (i === 0 ? ' aberto' : '') + '">' +
            '<button type="button" data-indice="' + i + '" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' +
            '<span>' + p.pergunta + '</span><span class="seta">+</span></button>' +
            '<div class="acordeao__conteudo"><p>' + p.resposta + '</p></div></div>'
          )
        })
        .join('')
    )

    /* rodapé */
    var link = $('#linkGithub')
    var url = 'https://' + D.github.usuario + '.github.io/' + D.github.repositorio + '/'
    link.textContent = url
    link.href = url
  }

  /* ---------- acordeão ---------- */
  function ligarAcordeao() {
    var container = $('#perguntas')
    var itens = container.querySelectorAll('.acordeao')
    itens.forEach(function (a) {
      if (a.classList.contains('aberto')) {
        var c0 = a.querySelector('.acordeao__conteudo')
        c0.style.maxHeight = c0.scrollHeight + 'px'
      }
    })
    container.addEventListener('click', function (ev) {
      var btn = ev.target.closest('button')
      if (!btn) return
      var atual = btn.closest('.acordeao')
      var estavaAberto = atual.classList.contains('aberto')
      itens.forEach(function (a) {
        a.classList.remove('aberto')
        a.querySelector('.acordeao__conteudo').style.maxHeight = '0px'
        a.querySelector('button').setAttribute('aria-expanded', 'false')
      })
      if (!estavaAberto) {
        atual.classList.add('aberto')
        btn.setAttribute('aria-expanded', 'true')
        var conteudo = atual.querySelector('.acordeao__conteudo')
        conteudo.style.maxHeight = conteudo.scrollHeight + 'px'
      }
    })
  }

  /* ---------- KPIs: contador + barra ---------- */
  function animarValor(el, alvo, sufixo) {
    var dur = 1300
    var t0 = performance.now()
    function passo(t) {
      var p = Math.min((t - t0) / dur, 1)
      var suav = 1 - Math.pow(1 - p, 3)
      el.innerHTML = Math.round(alvo * suav) + '<span>' + sufixo + '</span>'
      if (p < 1) requestAnimationFrame(passo)
    }
    requestAnimationFrame(passo)
  }

  function ligarKpis() {
    var secao = $('#kpis')
    if (!secao) return
    var animado = false

    function animar() {
      if (animado) return
      animado = true
      secao.querySelectorAll('.kpi').forEach(function (k) {
        var meta = parseInt(k.getAttribute('data-meta'), 10)
        var sufixo = k.getAttribute('data-sufixo') || ''
        var barra = k.querySelector('.barra__preenchimento')
        var marcador = k.querySelector('.barra__marcador')
        var valor = k.querySelector('.kpi__valor')
        animarValor(valor, meta, sufixo)
        setTimeout(function () {
          barra.style.width = k.getAttribute('data-barra') + '%'
          marcador.style.left = k.getAttribute('data-marcador') + '%'
        }, 150)
      })
    }

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animar()
              obs.disconnect()
            }
          })
        },
        { threshold: 0.12 }
      )
      obs.observe(secao)
    } else {
      animar()
    }

    /* fallback de segurança: garante que os KPIs nunca fiquem zerados */
    window.setTimeout(animar, 2500)
  }

  /* ---------- navegação: seção ativa ---------- */
  function ligarNavegacao() {
    var links = document.querySelectorAll('.nav__links a')
    var alvos = []
    links.forEach(function (a) {
      var alvo = document.querySelector(a.getAttribute('href'))
      if (alvo) alvos.push(alvo)
    })
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return
          links.forEach(function (a) {
            a.classList.toggle('ativo', a.getAttribute('href') === '#' + e.target.id)
          })
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    alvos.forEach(function (s) {
      obs.observe(s)
    })
  }

  /* ---------- menu mobile ---------- */
  function ligarMenuMobile() {
    var btn = $('#menuBtn')
    var links = $('#navLinks')
    btn.addEventListener('click', function () {
      links.classList.toggle('aberto')
      btn.textContent = links.classList.contains('aberto') ? '✕' : '☰'
    })
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('aberto')
        btn.textContent = '☰'
      })
    })
  }

  /* ---------- tema claro/escuro ---------- */
  function ligarTema() {
    var raiz = document.documentElement
    var btn = $('#temaBtn')
    var salvo = localStorage.getItem('agrigov-tema')
    if (salvo) {
      raiz.setAttribute('data-tema', salvo)
      btn.textContent = salvo === 'escuro' ? 'A' : 'A'
    }
    btn.addEventListener('click', function () {
      var novo = raiz.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro'
      raiz.setAttribute('data-tema', novo)
      btn.textContent = 'A'
      localStorage.setItem('agrigov-tema', novo)
    })
  }

  /* ---------- revelação ao rolar ---------- */
  function ligarReveal() {
    var alvos = document.querySelectorAll(
      '.hero__conteudo, .hero__stats, .hero__faixa, .secao__cabecalho, .ramo, .mv, .chips, ' +
        '.governanca__grade, .grid, .processos, .caso__dados, .caso__objetivo, .caso__etapas, ' +
        '.caso__resultado, .perguntas, .painel-comite, .tabela-wrap'
    )
    alvos.forEach(function (el) {
      el.classList.add('reveal')
    })
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    alvos.forEach(function (el) {
      obs.observe(el)
    })
  }

  /* ---------- inicializa ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    render()
    ligarAcordeao()
    ligarKpis()
    ligarNavegacao()
    ligarMenuMobile()
    ligarTema()
    ligarReveal()
  })
})()