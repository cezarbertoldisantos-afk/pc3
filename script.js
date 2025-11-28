const historia = {
    inicio: {
        texto: "Você acorda no meio de uma floresta estranha. À sua frente existem três rotas: um caminho iluminado, uma trilha escura e uma ponte velha.",
        opcoes: [
            { texto: "Seguir pelo caminho iluminado", proximo: "luz" },
            { texto: "Entrar na trilha escura", proximo: "escuro" },
            { texto: "Atravesar a ponte velha", proximo: "ponte" }
        ]
    },

    luz: {
        texto: "O caminho iluminado leva até um campo aberto onde um espírito guardião aparece.",
        opcoes: [
            { texto: "Falar com o guardião", proximo: "guardiao" },
            { texto: "Voltar para a floresta", proximo: "inicio" }
        ]
    },

    escuro: {
        texto: "A trilha escura fica cada vez mais fechada. Você escuta passos atrás de você.",
        opcoes: [
            { texto: "Correr!", proximo: "correr" },
            { texto: "Virar e ver quem é", proximo: "criatura" }
        ]
    },

    ponte: {
        texto: "A ponte range, mas você avança. No meio dela, uma parte quebra e você quase cai.",
        opcoes: [
            { texto: "Tentar continuar", proximo: "queda" },
            { texto: "Voltar imediatamente", proximo: "inicio" }
        ]
    },

    guardiao: {
        texto: "O guardião revela que você é escolhido para proteger a floresta. Ele concede um amuleto mágico. Fim bom!",
        opcoes: []
    },

    correr: {
        texto: "Você corre desesperadamente e, sem perceber, sai da floresta em segurança. Fim neutro.",
        opcoes: []
    },

    criatura: {
        texto: "Uma criatura aparece — metade sombra, metade fumaça — e engole você. Fim ruim.",
        opcoes: []
    },

    queda: {
        texto: "A ponte não aguenta e você cai no rio abaixo. A correnteza te leva para longe. Fim incerto.",
        opcoes: []
    }
};

const passoEl = document.getElementById("passo");
const opcoesEl = document.getElementById("opcoes");

function mostrar(passo) {
    const etapa = historia[passo];

    passoEl.textContent = etapa.texto;
    opcoesEl.innerHTML = "";

    etapa.opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op.texto;
        btn.onclick = () => mostrar(op.proximo);
        opcoesEl.appendChild(btn);
    });
}

mostrar("inicio");
