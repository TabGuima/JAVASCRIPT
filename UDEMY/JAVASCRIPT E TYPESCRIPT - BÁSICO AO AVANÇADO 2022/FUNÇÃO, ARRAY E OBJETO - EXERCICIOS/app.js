//SALVAR OS DADOS DE CADA CAMPO DO FORMULÁRIO EM UMA VARIÁVEL E EXIBIR ELES NO RODAPÉ DO FORM AO CLICAR NO BOTÃO ENVIAR

console.log('teste de conexão ok');

function meuEscopo() {
	const form = document.querySelector('.form');
	const resultado = document.querySelector('.resultado');
	const pessoas = [];

	function recebeEventoForm(evento) {
		evento.preventDefault();

		const nome = form.querySelector('.nome');
		const sobreNome = form.querySelector('.sobreNome');
		const peso = form.querySelector('.peso');
		const altura = form.querySelector('.altura');
		// console.log(nome.value, sobreNome.value, peso.value, altura.value);

		pessoas.push({
			nome: nome.value,
			sobreNome: sobreNome.value,
			peso: peso.value,
			altura: altura.value,
		});
		console.log(pessoas);

		resultado.innerHTML += `<p> ${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}\n</p>`;
	}

	form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
