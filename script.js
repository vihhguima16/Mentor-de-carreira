function descobrir(){

    let interesse = document.getElementById("interesse").value;
    let resultado = document.getElementById("resultado");

    if(interesse == ""){
        resultado.innerHTML = "Escolha uma opção.";
        return;
    }

    if(interesse == "exatas"){
        resultado.innerHTML =
        "💻 Você pode gostar dos cursos de Ciência da Computação, Engenharia, Sistemas de Informação ou Matemática.";
    }

    else if(interesse == "humanas"){
        resultado.innerHTML =
        "📚 Você pode gostar dos cursos de Direito, Psicologia, História, Jornalismo ou Pedagogia.";
    }

    else if(interesse == "biologicas"){
        resultado.innerHTML =
        "🩺 Você pode gostar dos cursos de Medicina, Enfermagem, Biomedicina, Odontologia ou Farmácia.";
    }

    else if(interesse == "artes"){
        resultado.innerHTML =
        "🎨 Você pode gostar dos cursos de Design, Arquitetura, Publicidade, Moda ou Artes Visuais.";
    }

}
