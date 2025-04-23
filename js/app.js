const { createApp } = Vue;

createApp({
  data() {
    return {
      mostrar: true,
      bonecas: [
        { nome: 'Ariel', preco: 89.90, imagem: 'assets/images/ariel.png', estoque: 5 },
        { nome: 'Bela', preco: 99.90, imagem: 'assets/images/bela.png', estoque: 0 },
        { nome: 'Cinderela', preco: 89.90, imagem: 'assets/images/cinderela.png', estoque: 3 },
        { nome: 'Aurora', preco: 109.90, imagem: 'assets/images/aurora.png', estoque: 2 },
        { nome: 'Branca de Neve', preco: 109.90, imagem: 'assets/images/brancadeneve.png', estoque: 4 },
        { nome: 'Rapunzel', preco: 95.90, imagem: 'assets/images/rapunzel.png', estoque: 1 },
        { nome: 'Jasmine', preco: 89.90, imagem: 'assets/images/jasmine.png', estoque: 0 },
        { nome: 'Merida', preco: 99.90, imagem: 'assets/images/merida.png', estoque: 2 },
        { nome: 'Mulan', preco: 109.90, imagem: 'assets/images/mulan.png', estoque: 3 },
        { nome: 'Tiana', preco: 89.90, imagem: 'assets/images/tiana.png', estoque: 5 }
      ]
    };
  },
  methods: {
    comprar(boneca) {
      alert(`Você comprou: ${boneca.nome}`);
    },
    irParaDetalhes(boneca) {
      // Redirecionar para uma página de detalhes passando o nome como parâmetro (ex: detalhes.html?nome=Cinderela)
      window.location.href = `detalhes.html?nome=${encodeURIComponent(boneca.nome)}`;
    }
  }
}).mount('#app');