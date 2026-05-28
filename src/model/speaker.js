import loiane from 'url:../assets/images/loiane.png'
import diego from 'url:../assets/images/diego.png'
import henrique from 'url:../assets/images/henrique.png'
import rodrigo from 'url:../assets/images/rodrigo.png'

const speakers = [
    {
        id: 0,
        name: "Loiane Groner",
        personalSite: "https://www.youtube.com/@loianegroner/about",
        image: loiane,
        description: "Possui 10+ anos de experiência em TI, trabalha como desenvolvedora e analista de negócios nos Estados Unidos e ama compartilhar conhecimento! Já palestrou por vários eventos no Brasil e Estados Unidos."
    },
    {
        id: 1,
        name: "Rodrigo Branas",
        personalSite: "https://www.youtube.com/c/rodrigobranas",
        image: rodrigo,
        description: "Rodrigo Branas é arquiteto de software, professor, autor e palestrante com mais de 20 anos de experiência, tendo treinado milhares de devs em Clean Code, Refactoring, TDD, Ports and Adapters, Clean Architecture, Domain-Driven Design e SOLID. Atualmente é CTO de uma empresa que desenvolve soluções para a área de educação, com mais de 1000 clientes em todo o país e tem um canal no YouTube onde fala sobre JavaScript, Node, Vue.js, React, Angular, Testes, API, Rest, GraphQL e muito mais!"
    },
    {
        id: 2,
        name: "Henrique Bastos",
        personalSite: "https://www.youtube.com/@hbnetworkoficial",
        image: henrique,
        description: "Henrique Bastos é arquiteto de software, professor, autor e palestrante com mais de 20 anos de experiência, tendo treinado milhares de devs em Clean Code, Refactoring, TDD, Ports and Adapters, Clean Architecture, Domain-Driven Design e SOLID. Atualmente é CTO de uma empresa que desenvolve soluções para a área de educação, com mais de 1000 clientes em todo o país e tem um canal no YouTube onde fala sobre Python, Django, Testes, API, Rest e muito mais!"
    },
    {
        id: 3,
        name: "Diego Fernandes",
        personalSite: "https://blog.rocketseat.com.br/author/diego/",
        image: diego,
        description: "Programador full-stack, apaixonado pelas melhores tecnologias de desenvolvimento back-end, front-end e mobile, é co-fundador e CTO na Rocketseat."
    }
]

function getSpeakers() {
    return speakers
}

function getSpeaker(speakerId) {
    return speakers.filter(speaker => speaker.id == speakerId)
}

export { getSpeaker, getSpeakers }
