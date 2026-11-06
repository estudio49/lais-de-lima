/*
  Laís de Lima: cardápio, preços e prazos.
  ---------------------------------------------------------------
  Este é o ÚNICO arquivo que precisa ser editado para mudar sabores, preços, tamanhos e prazos.
  O layout (index.html, CSS) não muda. Depois de editar, salve e publique de novo.

  Regras para editar:
  - Valores em reais, sem "R$" (ex.: 98, 115). Use ponto para decimais (ex.: 1.2 kg).
  - "min" e "max" formam a faixa mostrada no site ("R$ 98 a R$ 115"). Se o preço for um só, repita o número.
  - Para dar um preço exato a um sabor, preencha "precoKg" (bolos e tortas) ou "precoFatia" (slice cake)
    dentro do sabor. Enquanto estiver null, vale a faixa geral do tipo.
  - Para o sabor aparecer só em alguns tipos, use "tipos": ["bolo", "torta"]. null = aparece em todos.
  - Depoimentos: preencha a lista "depoimentos" (veja o modelo no fim). Vazia, o site mostra um convite.

  PENDENTE com a cliente (ver clientes/lais-de-lima/pendencias.md):
  preço exato por sabor, lista completa de sabores, quais sabores existem em slice cake,
  se tortas usam os mesmos tamanhos e o mesmo preço por kg, bairros e valor da taxa de entrega.
*/
window.CARDAPIO = {
  negocio: {
    nome: "Laís de Lima",
    cidade: "Lages, SC",
    whatsapp: "5549998073537",          // só números, com 55 e DDD
    whatsappExibicao: "(49) 99807-3537",
    instagram: "laisdlima_"
  },

  // Prazo mínimo (em dias) para bolos e tortas sob encomenda (A CONFIRMAR para tortinhas mini). Slice cake é pronta entrega.
  prazoEncomendaDias: 5,

  pagamento: "Pix ou dinheiro, na entrega do pedido.",
  avisoEntrega: "A taxa de entrega é combinada com a Laís pelo WhatsApp.",

  // Tipos de produto. venda: "fatia" (por fatia), "inteiro" (por kg, em tamanhos) ou "unidade" (preço fixo por formato).
  tipos: [
    {
      id: "slice",
      nome: "Slice cake",
      venda: "fatia",
      prontaEntrega: true,
      precoFatia: { min: 15, max: 25 },
      descricao: "Fatia individual, de pronta entrega.",
      foto: "assets/img/fotos/slice-cake.webp", fotoAlt: "Fatia de bolo de chocolate com três camadas de massa e recheio de brigadeiro, num prato branco"
    },
    {
      id: "bolo",
      nome: "Bolo recheado",
      venda: "inteiro",
      precoKg: { min: 98, max: 115 },   // faixa geral; cada sabor tem o seu preço do kg (precoKg) quando informado
      descricao: "Sob encomenda, em três tamanhos e com decoração simples."
    },
    {
      id: "torta",
      nome: "Torta",
      venda: "unidade",
      formatos: [
        { id: "inteira", nome: "Torta inteira", plural: "tortas inteiras", diametro: 20, fatias: [8, 10], detalhe: "20 cm, rende de 8 a 10 fatias" },
        { id: "mini", nome: "Tortinha mini", plural: "tortinhas mini", diametro: 10, detalhe: "10 cm" }
      ],
      descricao: "Sob encomenda, em dois sabores."
    }
  ],

  // Tamanhos dos bolos inteiros. O peso varia com a massa e o recheio.
  tamanhos: [
    { id: "15", diametro: 15, fatias: [10, 12], pesoKg: [1.2, 1.5] },
    { id: "20", diametro: 20, fatias: [20, 25], pesoKg: [1.8, 2.8] },
    { id: "25", diametro: 25, fatias: [35, 45], pesoKg: [3.5, 4.5] }
  ],

  // Sabores. "tipos" diz em qual tipo cada um aparece no cardápio e no formulário.
  // descricao = os ingredientes, escritos como texto ("" = ainda sem texto: o cartão aparece só com o preço).
  // Bolos: precoKg = { min, max } do kg. Tortas: precos = { inteira, mini } em reais.
  // Para mostrar a foto real de um sabor: foto: "assets/img/fotos/nome.webp", fotoAlt: "descrição da foto".
  sabores: [
    { id: "matilda", nome: "Torta Matilda", tipos: ["bolo"], precoKg: { min: 115, max: 115 }, descricao: "",
      foto: "assets/img/fotos/torta-matilda.webp", fotoAlt: "Torta Matilda inteira, coberta com ganache de chocolate escorrendo pelas laterais, com bicos de brigadeiro na base" },
    { id: "doce-de-leite-nozes", nome: "Doce de Leite com Nozes", tipos: ["bolo"], precoKg: { min: 115, max: 115 }, descricao: "",
      foto: "assets/img/fotos/doce-de-leite-nozes.webp", fotoAlt: "Bolo de doce de leite com nozes: cobertura de creme claro, calda de doce de leite escorrendo, nozes e bicos de doce de leite por cima" },
    { id: "cha-da-tarde", nome: "Chá da Tarde", tipos: ["bolo"], precoKg: { min: 98, max: 98 },
      descricao: "Incrivelmente Leve e Saboroso. Massa pão de ló úmida e aerada. Recheio creme diplomata e geleia de frutas vermelhas. Cobertura Buttercream (Creme de manteiga)." },
    { id: "red-velvet", nome: "Red Velvet", tipos: ["bolo"], precoKg: { min: 115, max: 115 }, descricao: "" },
    { id: "limao", nome: "Limão", tipos: ["torta"], precos: { inteira: 115, mini: 14 }, descricao: "",
      foto: "assets/img/fotos/torta-de-limao.webp", fotoAlt: "Tortinha de limão com merengue maçaricado em cima, sobre um prato branco" },
    { id: "banoffe", nome: "Banoffe", tipos: ["torta"], precos: { inteira: 130, mini: 16 }, descricao: "" }
  ],

  // Modelo: { texto: "…", nome: "Maria", detalhe: "cliente em Lages", imagem: "assets/img/depoimento-1.webp" }
  // Use "texto" para o texto exato do depoimento OU "imagem" para o print da mensagem (com "alt" descrevendo).
  depoimentos: []
};
