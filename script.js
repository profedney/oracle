document.getElementById("birthdate-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById("birthdate").value);
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();

    // Calcular Signo do Zodíaco
    let signo = "";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) signo = "Áries";
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) signo = "Touro";
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) signo = "Gêmeos";
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) signo = "Câncer";
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) signo = "Leão";
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) signo = "Virgem";
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) signo = "Libra";
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) signo = "Escorpião";
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) signo = "Sagitário";
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) signo = "Capricórnio";
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) signo = "Aquário";
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) signo = "Peixes";

    // Calcular Orixá
    let orixa = "";
    if (month == 1) orixa = "Iemanjá";
    else if (month == 2) orixa = "Ogum";
    else if (month == 3) orixa = "Xangô";
    else if (month == 4) orixa = "Oxóssi";
    else if (month == 5) orixa = "Oxum";
    else if (month == 6) orixa = "Iansã";
    else if (month == 7) orixa = "Obaluaiê";
    else if (month == 8) orixa = "Nanã";
    else if (month == 9) orixa = "Iemanjá";
    else if (month == 10) orixa = "Oxumaré";
    else if (month == 11) orixa = "Oxalá";
    else if (month == 12) orixa = "Exu";

    // Calcular Santo
    let santo = "";
    if (month == 1) santo = "Nossa Senhora da Conceição";
    else if (month == 2) santo = "São Sebastião";
    else if (month == 3) santo = "São José";
    else if (month == 4) santo = "São Jorge";
    else if (month == 5) santo = "Nossa Senhora de Fátima";
    else if (month == 6) santo = "São João";
    else if (month == 7) santo = "São Cosme e São Damião";
    else if (month == 8) santo = "Santa Ana";
    else if (month == 9) santo = "Nossa Senhora da Penha";
    else if (month == 10) santo = "São Judas Tadeu";
    else if (month == 11) santo = "Nossa Senhora Aparecida";
    else if (month == 12) santo = "São Lázaro";

    // Exibir resultados
    document.getElementById("signo").textContent = `Signo do Zodíaco: ${signo}`;
    document.getElementById("orixa").textContent = `Orixá Regente: ${orixa}`;
    document.getElementById("santo").textContent = `Santo Protetor: ${santo}`;

    document.getElementById("results").classList.remove("hidden");
});
