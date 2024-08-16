const lista = [["Aryane", "Breno", "Kaylany", "Moriam"], [10, 8, 7.5, 5]];

// Criando a função
function exibeNomeENota(aluno) {
  const [alunos, medias] = lista; // Desestruturação para obter alunos e médias

  // Verifica se o aluno está na lista
  if (alunos.includes(aluno)) {
    const indice = alunos.indexOf(aluno); // Obtém o índice do aluno
    const mediaAluno = medias[indice]; // Obtém a média correspondente
    console.log(`${aluno} tem média ${mediaAluno}`);
  } else {
    console.log('Estudante não existe na lista');
  }
}

exibeNomeENota('Wallace'); // Executando a função
