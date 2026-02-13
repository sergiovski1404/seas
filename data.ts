
import { Question, AnswerType, ModuleType } from './types';

export const QUESTIONS: Question[] = [
  // MÓDULO I – FUNDAMENTOS DA SOCIOEDUCAÇÃO (01 a 40)
  {
    id: 1,
    text: "Ao analisarmos a estrutura normativa da SEAS, observamos sua conexão com os dispositivos da Constituição Federal (CF), do Estatuto da Criança e do Adolescente (ECA) e da própria Lei do Sistema Nacional de Atendimento Socioeducativo (SINASE). Tais instrumentos estabelecem os fundamentos para a organização do atendimento socioeducativo como uma política pública pautada pela legalidade, pela prioridade absoluta e pelo princípio da proteção integral.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A estrutura da SEAS está fundamentada na integração das normas constitucionais e infraconstitucionais que garantem a proteção integral.",
    module: ModuleType.MODULO_I
  },
  {
    id: 2,
    text: "A Lei do Sistema Nacional de Atendimento Socioeducativo (SINASE), define os direitos específicos da infância e juventude e orienta a execução das medidas socioeducativas.",
    answer: AnswerType.ERRADO,
    explanation: "O Estatuto da Criança e do Adolescente (ECA) é quem define os direitos específicos da infância e juventude. A Lei do SINASE regulamenta a execução das medidas socioeducativas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 3,
    text: "A Constituição Federal (CF) do Brasil, regulamenta a execução das medidas socioeducativas em âmbito nacional.",
    answer: AnswerType.ERRADO,
    explanation: "Quem regulamenta a execução das medidas socioeducativas em âmbito nacional é a Lei do SINASE (Lei nº 12.594/2012). A CF estabelece os princípios fundamentais de prioridade absoluta.",
    module: ModuleType.MODULO_I
  },
  {
    id: 4,
    text: "A SEAS atua na formação de profissionais, na supervisão das unidades e na articulação com outras políticas públicas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Entre as funções da SEAS estão a formação, supervisão e articulação intersetorial para garantir o atendimento socioeducativo qualificado.",
    module: ModuleType.MODULO_I
  },
  {
    id: 5,
    text: "A socioeducação constitui um campo de atuação que ultrapassa a idea de punição. Baseada na responsabilização com dignidade e no reconhecimento da adolescência como uma fase peculiar do desenvolvimento humano, ela se ancora em princípios pedagógicos e em políticas de garantia de direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O foco da socioeducação é pedagógico e de responsabilização, diferenciando-se de um sistema puramente punitivo/carcerário.",
    module: ModuleType.MODULO_I
  },
  {
    id: 6,
    text: "Enquanto o SINASE institui princípios e direitos fundamentais aplicáveis às crianças e adolescentes em geral, o ECA detalha, de maneira operacional e normativa, a execução das medidas socioeducativas, estabelecendo diretrizes para o funcionamento das unidades, a formação dos profissionais e a atuação interinstitucional.",
    answer: AnswerType.ERRADO,
    explanation: "Houve uma inversão: o ECA institui os princípios e direitos fundamentais, enquanto o SINASE detalha de maneira operacional e normativa a execução das medidas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 7,
    text: "Tanto o ECA quanto o SINASE garantem o direito à educação como parte do atendimento integral. A ausência desse direito compromete os objetivos pedagógicos da medida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A educação é o eixo central da medida socioeducativa e sua ausência descaracteriza o objetivo pedagógico do sistema.",
    module: ModuleType.MODULO_I
  },
  {
    id: 8,
    text: "No centro da política pública voltada ao adolescente em conflito com a lei, está a socioeducação, compreendida como um processo educativo, jurídico e social que visa à responsabilização com base nos Direitos Humanos, assegurando dignidade, proteção parcial e oportunidades de reintegração social.",
    answer: AnswerType.ERRADO,
    explanation: "O erro está no termo 'proteção parcial'. A doutrina adotada pelo Brasil é a da PROTEÇÃO INTEGRAL.",
    module: ModuleType.MODULO_I
  },
  {
    id: 9,
    text: "Conforme previsto no Estatuto da Criança e do Adolescente (ECA) — Lei nº 8.069/1990 o processo de responsabilização dos adolescentes deve ocorrer dentro dos parâmetros legais que garantem o contraditório, a ampla defesa, a prioridade absoluta dos direitos e a prevalência do interesse superior da criança e do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O devido processo legal e a proteção do interesse superior do adolescente são pilares da responsabilização juvenil.",
    module: ModuleType.MODULO_I
  },
  {
    id: 10,
    text: "O Sistema Nacional de Atendimento Socioeducativo, instituído pela Lei nº 12.594/2012, detalha a forma como as medidas socioeducativas devem ser executadas. Ele organiza o atendimento em dimensões técnica, administrativa e pedagógica, definindo responsabilidades de cada ente federativo e garantindo que o foco da execução esteja na formação cidadã, e na contenção disciplinar.",
    answer: AnswerType.ERRADO,
    explanation: "A finalidade precípua não é a contenção disciplinar. O foco deve ser na formação cidadã e na NÃO contenção disciplinar como fim em si mesma.",
    module: ModuleType.MODULO_I
  },
  {
    id: 11,
    text: "No Ceará, destaca-se a Superintendência do Sistema Estadual de Atendimento Socioeducativo, que é responsável pela implementação das medidas socioeducativas em meio fechado e semiliberdade. A SEAS organiza o atendimento, forma os profissionais e articula-se com outros serviços públicos — como saúde, educação e assistência —, em conformidade com as diretrizes estabelecidas pelo ECA e pelo SINASE.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o papel institucional da SEAS no estado do Ceará.",
    module: ModuleType.MODULO_I
  },
  {
    id: 12,
    text: "A SEAS e o Serviço Especializado em Abordagem Social, previsto no Sistema Único de Assistência Social (SUAS), trata-se da mesma estrutura. O Serviço Especializado em Abordagem Social atua no âmbito da proteção social especial de média complexidade, com foco na população em situação de rua, igualmente a SEAS.",
    answer: AnswerType.ERRADO,
    explanation: "São estruturas distintas. O Serviço de Abordagem Social (SUAS) foca na população em situação de rua, enquanto a SEAS foca na gestão da política socioeducativa de internação e semiliberdade.",
    module: ModuleType.MODULO_I
  },
  {
    id: 13,
    text: "Os direitos humanos são a base de toda a estrutura normativa e institucional da socioeducação. Eles orientam os limites das medidas aplicadas e fundamentam a necessidade de que essas medidas contribuam para a inclusão, a autonomia e a emancipação dos adolescentes. Sem essa base, a socioeducação corre o risco de se transformar em mero instrumento de repressão, contrariando os objetivos constitucionais e legais da proteção integral.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Os Direitos Humanos funcionam como um 'limitador' ético e jurídico da intervenção estatal na vida do adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 14,
    text: "A SEAS articula diversas ações como a Coordenação de unidades de internação e semiliberdade, a formação de profissionais que atuam no sistema e elabora políticas pedagógicas e de reintegração social.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Estas são competências típicas de uma superintendência de atendimento socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 15,
    text: "O Educador Social está mais ligado ao sistema socioeducativo, especialmente no atendimento a adolescentes em conflito com a lei. Seu trabalho ocorre em unidades de internação ou semiliberdade, onde busca reintegrar esses jovens à sociedade por meio de ações pedagógicas, disciplinares e de ressocialização. O Educador Social segue diretrizes do Estatuto da Criança e do Adolescente (ECA) e trabalha diretamente na execução das medidas socioeducativas.",
    answer: AnswerType.ERRADO,
    explanation: "O texto descreve o SOCIOEDUCADOR. O Educador Social atua em diversos contextos (ONGs, comunidades, assistência social), enquanto o Socioeducador tem atuação específica no sistema de medidas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 16,
    text: "Socioeducador atua em diversos contextos, como Organizações Não Governamentais (ONGs), projetos comunitários, escolas e instituições sociais. Seu foco é a educação não formal, trabalhando com pessoas em situação de vulnerabilidade social para promover inclusão, cidadania e autonomia. Ele pode atuar com crianças, adolescente, adultos e idosos, desenvolvendo atividades culturais, recreativas e educativas.",
    answer: AnswerType.ERRADO,
    explanation: "O texto descreve o EDUCADOR SOCIAL. O termo Socioeducador é reservado para os profissionais que executam as medidas do SINASE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 17,
    text: "Para Carlos Skliar, a Pedagogia da Presença não é apenas física, mas implica atenção, escuta, reconhecimento e disponibilidade genuína diante do outro. A Pedagogia da Presença assume, assim, uma postura de acolhimento ético e não de controle. No campo da socioeducação, isso significa estar com o adolescente de maneira autêntica, valorizando sua singularidade e criando condições para a escuta ativa e para o desenvolvimento da autonomia.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A Pedagogia da Presença foca no vínculo e no reconhecimento do outro como sujeito, em vez de focar no controle repressivo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 18,
    text: "São competências fundamentais para os profissionais que atuam com adolescentes em medida socioeducativa, como propõem Brasil (SINASE, 2012) e estudiosos da área: a Empatia e escuta qualificada, a Gestão de conflitos e mediação, a Postura ética e antidiscriminatória, a Reflexividade e autocrítica e o Protagonismo juvenil.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Estas competências são essenciais para um atendimento que respeite a dignidade e promova a mudança de trajetória do jovem.",
    module: ModuleType.MODULO_I
  },
  {
    id: 19,
    text: "Os princípios centrais da Pedagogia da Presença são: Escuta qualificada, Reconhecimento do outro como sujeito, Construção de vínculos e a Coexistência pedagógica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Estes pilares sustentam a relação entre educador e educando no ambiente socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 20,
    text: "O marco de inflexão (mudança), ocorre com a promulgação da a Lei nº 12.594/2012, que institui o Sistema Nacional de Atendimento Socioeducativo (SINASE), que introduz a doutrina da proteção integral e reconhece crianças e adolescentes como sujeitos de direitos. Posteriormente, com o Estatuto da Criança e do Adolescente (ECA), em 1990, estabelece parâmetros para a execução das medidas, reforçando o caráter pedagógico da socioeducação.",
    answer: AnswerType.ERRADO,
    explanation: "O cronograma está invertido. A mudança histórica para a Proteção Integral veio com a CF/88 e o ECA em 1990. O SINASE (2012) consolidou a execução administrativa dessas medidas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 21,
    text: "Apesar dos avanços normativos, muitos desafios permanecem na implementação efetiva das políticas socioeducativas. Entre eles, destacam-se: a precariedade das estruturas físicas das unidades; a rotatividade e baixa formação dos profissionais; a ausência de articulação com outras políticas públicas; e a permanência de práticas violadoras de direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Aponta os gargalos estruturais e humanos que ainda dificultam a plena efetivação do SINASE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 22,
    text: "As estratégias para fomentar o protagonismo juvenil incluem as Assembleias e círculos de diálogos nas unidades socioeducativas os Projetos de intervenção social elaborados pelos próprios adolescentes, as Práticas restaurativas que valorizem a reparação e a corresponsabilidade e a Educação por projetos centrada em temas significativos para os jovens.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O protagonismo juvenil é um objetivo pedagógico que visa tornar o adolescente sujeito ativo de seu processo de mudança.",
    module: ModuleType.MODULO_I
  },
  {
    id: 23,
    text: "A socioeducação é orientada por dimensões complementares que estruturam sua organização e prática. O Sistema Nacional de Atendimento Socioeducativo (SINASE) estabelece somente três eixos fundamentais.",
    answer: AnswerType.ERRADO,
    explanation: "O SINASE estabelece QUATRO eixos fundamentais: Pedagógico, Jurídico, Administrativo e de Gestão.",
    module: ModuleType.MODULO_I
  },
  {
    id: 24,
    text: "O Eixo pedagógico: direciona a ação educativa centrada na formação cidadã, na escolarização, na qualificação profissional e no fortalecimento de vínculos comunitários. A prática pedagógica deve ser intencional e articulada com os projetos de vida dos adolescentes, considerando seu contexto sociocultural (BRASIL, 2012).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O eixo pedagógico é a 'alma' do atendimento socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 25,
    text: "O Eixo jurídico: diz respeito à gestão, infraestrutura, recursos humanos, protocolos e mecanismos de controle e avaliação dos serviços prestados. Envolve planejamento, monitoramento, formação profissional e uso adequado de recursos (BRASIL, 2012).",
    answer: AnswerType.ERRADO,
    explanation: "O texto descreve o Eixo ADMINISTRATIVO. O Eixo Jurídico foca no devido processo legal e no respeito às normas do ECA/SINASE quanto à aplicação da medida.",
    module: ModuleType.MODULO_I
  },
  {
    id: 26,
    text: "Os eixos estruturantes são interdependentes e devem ser articulados de maneira integrada, evitando abordagens fragmentadas ou burocratizadas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A fragmentação entre o pedagógico e o segurança/administrativo compromete o resultado da medida.",
    module: ModuleType.MODULO_I
  },
  {
    id: 27,
    text: "A transdisciplinaridade é uma abordagem epistemológica e metodológica que ultrapassa a simples justaposição de saberes. Segundo Nicolescu (1999), ela representa “uma atitude de abertura à complexidade e à articulação entre diferentes níveis de realidade”, possibilitando uma visão holística dos fenômenos humanos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o conceito de transdisciplinaridade aplicado às ciências sociais e humanas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 28,
    text: "Na socioeducação, a transdisciplinaridade é desnecessária porque o adolescente em conflito com a lei não é atravessado por múltiplas vulnerabilidades como: pobreza, racismo, exclusão escolar, violência urbana, ausência de políticas públicas efetivas.",
    answer: AnswerType.ERRADO,
    explanation: "A transdisciplinaridade é NECESSÁRIA justamente porque o adolescente É atravessado por múltiplas vulnerabilidades simultâneas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 29,
    text: "Nenhuma área do conhecimento — Direito, Pedagogia, Psicologia, Serviço Social é suficiente por si só para dar conta da complexidade envolvida na execução das medidas socioeducativas. Assim, a transdisciplinaridade não significa diluição dos campos de saber, mas diálogo ativo entre diferentes áreas, com vistas à construção de respostas mais complexas e humanizadas para os desafios vividos pelos adolescentes e profissionais da socioeducação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O trabalho intersetorial e transdisciplinar é a base do SINASE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 30,
    text: "A socioeducação, enquanto política pública, deve ser compreendida como parte integrante do Sistema de Garantia de Direitos da Criança e do Adolescente. Isso implica que sua efetividade se restringe à aplicação de medidas jurídicas, e independe da integração com ações de saúde, assistência, cultura, educação e justiça.",
    answer: AnswerType.ERRADO,
    explanation: "Sua efetividade NÃO se restringe a medidas jurídicas e DEPENDE crucialmente da integração intersetorial (saúde, assistência, etc.).",
    module: ModuleType.MODULO_I
  },
  {
    id: 31,
    text: "Os eixos estruturantes e a abordagem transdisciplinar se articulam para sustentar uma socioeducação que não seja apenas jurídica, mas pedagógica, comunitária, cultural e emancipatória.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a visão contemporânea da socioeducação brasileira.",
    module: ModuleType.MODULO_I
  },
  {
    id: 32,
    text: "A Justiça Restaurativa é uma abordagem que propõe o reconhecimento do dano causado por um ato infracional e a reconstrução das relações a partir do diálogo e da reparação, envolvendo vítima, ofensor, comunidade e demais partes afetadas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Foca no dano e na reparação das relações, não apenas na punição do fato típico.",
    module: ModuleType.MODULO_I
  },
  {
    id: 33,
    text: "Os Círculos de Paz são práticas restaurativas baseadas em tradições indígenas sul-americanas e adaptadas para contextos urbanos e institucionais. A metodologia consiste na realização de encontros de modo individual com as partes envolvidas em um conflito ou situação de tensão, conduzidos por um(a) facilitador(a) treinado(a).",
    answer: AnswerType.ERRADO,
    explanation: "Os Círculos de Paz são baseados em tradições indígenas NORTE-AMERICANAS. Além disso, são encontros CIRCULARES (coletivos) e não individuais.",
    module: ModuleType.MODULO_I
  },
  {
    id: 34,
    text: "Os encontros de Círculos de Paz seguem uma estrutura ritualizada, com abertura, estabelecimento de acordos, uso de objeto da palavra, escuta ativa e encerramento. As perguntas restaurativas guiam o processo, abordando o que aconteceu, quais foram os efeitos e o que pode ser feito para reparar e seguir em frente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a estrutura metodológica dos círculos de construção de paz.",
    module: ModuleType.MODULO_I
  },
  {
    id: 35,
    text: "No contexto socioeducativo, os Círculos de Paz vêm sendo aplicados para: resolver conflitos entre adolescentes ou entre adolescentes e equipe; trabalhar vivências de violência institucional; fortalecer vínculos familiares e comunitários e apoiar adolescentes na transição para o meio aberto.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Mostra a versatilidade das práticas restaurativas na socioeducação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 36,
    text: "Os Círculos de Paz são metodologias participativas, originadas de tradições de justiça comunitária indígena (como a dos povos nativos da América do Norte), adaptadas para contemporâneos da justiça restaurativa e resolução não violenta de conflitos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta reforçando a origem histórica da prática.",
    module: ModuleType.MODULO_I
  },
  {
    id: 37,
    text: "A institucionalização dos Círculos de Paz em unidades de atendimento socioeducativo (como centros de internação, semiliberdade ou programas de meio aberto), requer apenas boa vontade dos profissionais.",
    answer: AnswerType.ERRADO,
    explanation: "Requer planejamento institucional, formação especializada e respaldo normativo, não apenas boa vontade.",
    module: ModuleType.MODULO_I
  },
  {
    id: 38,
    text: "As práticas restaurativas não substituem o sistema jurídico, mas o complementam com abordagens humanizadoras e transformadoras. Elas contribuem para: redução da reincidência (recidiva), melhoria no clima institucional, participação ativa dos adolescentes nos processos de resolução de conflitos e a promoção da escuta qualificada e da cultura de paz.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A JR e as medidas socioeducativas devem coexistir.",
    module: ModuleType.MODULO_I
  },
  {
    id: 39,
    text: "Como afirmam McCold e Wachtel (2003), a Justiça Restaurativa é mais eficaz quando envolve apenas o ofensor e a vítima.",
    answer: AnswerType.ERRADO,
    explanation: "É mais eficaz quando envolve não apenas ofensor e vítima, mas também a comunidade e as instituições, garantindo suporte social.",
    module: ModuleType.MODULO_I
  },
  {
    id: 40,
    text: "Os círculos de construção de paz, enquanto processos circulares e práticas restaurativas, podem ser classificados como conflitivos ou não-conflitivos. Dentro dessas duas categorias, apresentamos algumas terminologias que subclassificam os círculos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a tipologia dos círculos restaurativos.",
    module: ModuleType.MODULO_I
  },

  // MÓDULO II – PROCESSO DE ATENDIMENTO SOCIOEDUCATIVO (41 a 100)
  {
    id: 41,
    text: "As três fases de atendimento socioeducativo, são: a fase inicial de atendimento, a fase intermediária e a fase conclusiva.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O atendimento é processual e se organiza nestas três etapas cronológicas e pedagógicas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 42,
    text: "A fase intermediária se inicia quando precisa ocorrer o acolhimento, a aplicação da medida cautelar de Internação Provisória, ocasião que é elaborado o Diagnóstico Polidimensional para subsidiar o judiciário na tomada de decisão quanto a necessidade de aplicação de medida socioeducativa ou não a ser proferida, documento este, que contribuirá para elaboração do Plano Individual de Atendimento (PIA) caso seja aplicada a medidas socioeducativas previstas no ECA.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à FASE INICIAL. A fase intermediária ocorre durante a execução plena da medida definitiva.",
    module: ModuleType.MODULO_II
  },
  {
    id: 43,
    text: "A fase Conclusiva corresponde ao período de acompanhamento do desenvolvimento das metas pactuadas no PIA, na qual a medida socioeducativa é executada e avaliada periodicamente quanto aos métodos aplicados e resultados obtidos.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à FASE INTERMEDIÁRIA. A fase conclusiva é quando se avalia o alcance final das metas para extinção ou progressão.",
    module: ModuleType.MODULO_II
  },
  {
    id: 44,
    text: "O Brasil possui um Sistema Nacional de Atendimento Socioeducativo (SINASE), instituído pela Lei nº 12.594/2012, voltado à regulação do atendimento socioeducativo. A citada Lei estabelece um arcabouço legal com foco na individualização, no caráter pedagógico e na garantia de direitos, buscando a efetivação de medidas socioeducativas como um processo de desenvolvimento do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Define o escopo e o espírito da Lei do SINASE.",
    module: ModuleType.MODULO_II
  },
  {
    id: 45,
    text: "A realização do Diagnóstico Polidimensional tem como objetivo conhecer e identificar o adolescente com vistas a elaboração de um quadro coletivo de características do adolescente para facilitar o processo de convivência, de orientação sobre as normas e regimento da Unidade, e após a elaboração do Plano Individual de Atendimento (PIA).",
    answer: AnswerType.ERRADO,
    explanation: "O objetivo é um quadro INDIVIDUAL, visando a singularidade do atendimento. Além disso, o diagnóstico PRECEDE a elaboração do PIA.",
    module: ModuleType.MODULO_II
  },
  {
    id: 46,
    text: "No Sistema de Atendimento Socioeducativo do Estado do Ceará, o(a) adolescente apreendido pela autoridade policial é conduzido à Delegacia da Infância e Juventude, um dos Órgãos que compõem o Núcleo de Atendimento Integrado (NAI).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o fluxo inicial de atendimento infracional no Ceará.",
    module: ModuleType.MODULO_II
  },
  {
    id: 47,
    text: "Ao ser ouvido na delegacia, o(a) adolescente poderá ser entregue ou não para seus pais ou responsáveis. Caso não seja entregue à família, será conduzido para Unidade de Recepção Luís Barros Montenegro (URLBM), local em que aguardará a audiência de apresentação, ocasião que não poderá ser acompanhado pela Defensoria Pública.",
    answer: AnswerType.ERRADO,
    explanation: "O adolescente tem direito constitucional e legal de ser acompanhado por defesa técnica (Defensoria ou advogado) em TODAS as etapas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 48,
    text: "Após a oitiva no procedimento, em sendo acolhida a representação do Ministério Público pelo judiciário, sugerindo a aplicação de medida cautelar – Internação Provisória, o(a) adolescente será conduzido para Centro Socioeducativo designado pela Central de Regulação de Vagas (CRV) da SEAS, que encaminhará a documentação pertinente expedida pela Vara da Infância e Juventude competente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o fluxo administrativo-judicial de vagas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 49,
    text: "Nos Centros Socioeducativos das Comarcas de Juazeiro do Norte – Centro Socioeducativo José Bezerra de Menezes e em Sobral – Centro Socioeducativo Zequinha Parente, ocorrem procedimentos similares da Capital (Fortaleza), no entanto, nas referidas comarcas não há unidade de recepção em local distinto a Internação Provisória, com a custódia se dando no Centro Socioeducativo, em dormitório destinado para aguardar a deliberação para cumprimento da medida cautelar.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta descrevendo a realidade das unidades do interior do Ceará.",
    module: ModuleType.MODULO_II
  },
  {
    id: 50,
    text: "A avaliação clínica de saúde, prioridade ao chegar no Centro Socioeducativo, busca verificar se o(a) adolescente veio acompanhado de exame de corpo de delito e se apresenta marcas e/ou sinais que possam sugerir que houve algum tipo de violação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Procedimento padrão para garantir a integridade física e os direitos do jovem.",
    module: ModuleType.MODULO_II
  },
  {
    id: 51,
    text: "A Fase Inicial de Atendimento refere-se ao período de compartilhamento em que o(a) socioeducando(a) apresenta avanços relacionados às metas consensuadas no PIA. Neste sentido se faz necessário ressaltar a importância de estabelecimento de encontros quinzenais e/ou ao menos uma vez ao mês para avaliar com o(a) socioeducando(a) os avanços ou dificuldades em relação a efetivação das metas pactuadas, considerando que não são estáticas e devem ser revisitadas sempre que necessárias, seja por demanda do(a) adolescente ou pela equipe multiprofissional de referência.",
    answer: AnswerType.ERRADO,
    explanation: "Este texto descreve a FASE INTERMEDIÁRIA, na qual ocorre o acompanhamento das metas do PIA já elaborado.",
    module: ModuleType.MODULO_II
  },
  {
    id: 52,
    text: "A Fase de Atendimento Intermediária segundo o SINASE, é o período em que o adolescente apresenta clareza e conscientização das metas conquistadas em seu processo socioeducativo. Na internação provisória, o corpo técnico elabora o relatório Diagnóstico Polidimencional a ser enviado ao Juiz, para apresentar as informações pertinentes ao período.",
    answer: AnswerType.ERRADO,
    explanation: "A clareza das metas conquistadas caracteriza a FASE CONCLUSIVA. O Diagnóstico Polidimensional ocorre na FASE INICIAL.",
    module: ModuleType.MODULO_II
  },
  {
    id: 53,
    text: "A legislação brasileira e, por consequência, a Superintendência do Sistema Estadual de Atendimento Socioeducativo, garante o direito à convivência familiar e comunitária aos jovens em cumprimento de medida socioeducativa privativa de liberdade, o que inclui as visitas de familiares e pessoas de seu convívio. Assegura também ao jovem a liberdade de crença e a não discriminação por sexo ou identidade de gênero. Todas, garantias essenciais para o desenvolvimento integral do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete os direitos fundamentais não suspensos pela internação.",
    module: ModuleType.MODULO_II
  },
  {
    id: 54,
    text: "A Portaria n° 366/2024, é a mais recente sobre o tema das visitas, representando uma atualização e reestruturação das normas gerais de visitação e substituindo, na prática, as regras emergenciais da Portaria Nº 123/2020.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A Portaria 366/2024 atualizou os fluxos após o período pandêmico.",
    module: ModuleType.MODULO_II
  },
  {
    id: 55,
    text: "São exemplos de características da Portaria nº 366/2024, número de visitantes até 2 por dia (ou 3 se houver cônjuge/companheiro(a) cadastrado(a)), crianças até 1 ano de idade não são computadas e não é permitida a alternância de visitantes durante o horário estabelecido.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme o regulamento estadual vigente.",
    module: ModuleType.MODULO_II
  },
  {
    id: 56,
    text: "A partir da publicação da Portaria nº 366/2024, tem-se a abolição do Conselho Disciplinar nas decisões sobre visitas, na introdução de regras menos detalhadas para visitas de cônjuges/companheiros, e a atualização dos procedimentos de segurança com menção a tecnologias como o Body Scanner, além de regras menos específicas sobre o fluxo de entrada e saída nos Centros Socioeducativos.",
    answer: AnswerType.ERRADO,
    explanation: "A portaria AMPLIOU e FORMALIZOU o papel do Conselho Disciplinar nas decisões sobre visitas, não o aboliu.",
    module: ModuleType.MODULO_II
  },
  {
    id: 57,
    text: "O Body Scanner, ou scanner corporal, é um aparelho que serve para detectar, sem a necessidade de contato físico, objetos que estejam no corpo de uma pessoa; seja sobre a roupa ou escondidos dentro do corpo. Seu uso no Estado do Ceará não iniciou com a Portaria nº 366/2024, mas a menção da tecnologia nesse documento é importante, pois registra sua necessidade, incentivando a aquisição e uso, então restrito a algumas unidades socioeducativas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O uso da tecnologia visa substituir a revista íntima manual, garantindo dignidade.",
    module: ModuleType.MODULO_II
  },
  {
    id: 58,
    text: "O Estatuto da Criança e do Adolescente (ECA) assegura aos adolescentes em cumprimento de medida socioeducativa o direito de receber assistência religiosa, de acordo com suas crenças, caso assim desejem. A Lei nº 12.594/2012 aborda a religiosidade de adolescentes em cumprimento de medida socioeducativa em seu Art. 49, inciso III, onde estabelece que são direitos do adolescente submetido ao cumprimento de medida socioeducativa, entre outros, “ser respeitado em sua personalidade, intimidade, liberdade de pensamento e religião e em todos os direitos não expressamente limitados na sentença”.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A liberdade religiosa é protegida mesmo na privação de liberdade.",
    module: ModuleType.MODULO_II
  },
  {
    id: 59,
    text: "A Portaria SEAS nº 133/2020, que regulamenta a prestação de assistência religiosa aos adolescentes atendidos nos Centros Socioeducativos do Estado do Ceará, enfatiza que a assistência religiosa deve ser uma opção para os adolescentes que desejarem, sendo aceita a obrigatoriedade de participação.",
    answer: AnswerType.ERRADO,
    explanation: "A obrigatoriedade de participação é VEDADA. A assistência deve ser sempre facultativa e por adesão do jovem.",
    module: ModuleType.MODULO_II
  },
  {
    id: 60,
    text: "Por conta da laicidade estatal é permitida a realização de rituais eclesiásticos no interior dos Centros Socioeducativos e a maneira de proporcionar o desenvolvimento espiritual aos adolescentes é a interferência no conjunto de crenças.",
    answer: AnswerType.ERRADO,
    explanation: "Em um Estado laico, deve haver a NÃO INTERFERÊNCIA no conjunto de crenças pessoais, garantindo o respeito à diversidade religiosa.",
    module: ModuleType.MODULO_II
  },
  {
    id: 61,
    text: "O Estatuto da Criança e do Adolescente apesar de não se referir diretamente à população LGBTQI+, ele se baseia na doutrina da proteção integral, que assegura direitos a todas as crianças e adolescentes, sem qualquer forma de discriminação. A Lei do SINASE (Lei nº 12.594/2012), por sua vez, aborda a não discriminação do adolescente, especificamente mencionando a não discriminação em razão de gênero ou orientação sexual. Ao complementar o ECA, esta Lei reforça tais princípios, incluindo a não discriminação por gênero e orientação sexual na execução das medidas socioeducativas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O princípio da não-discriminação é basilar no sistema.",
    module: ModuleType.MODULO_II
  },
  {
    id: 62,
    text: "Entre as principais disposições que se relacionam com os direitos das adolescentes LGBTQIAP+, destacam-se: no que diz respeito à alocação em Centros Socioeducativos, pessoas travestis e transexuais, tanto masculinas quanto femininas, atualmente cumprem medida cautelar de Internação Provisória, Internação e Semiliberdade no Centro Socioeducativo Aldaci Barbosa Mota, garantindo que recebam tratamento diferente das demais mulheres do sistema.",
    answer: AnswerType.ERRADO,
    explanation: "O correto é garantir tratamento ISONÔMICO (igualitário) às demais mulheres, respeitando a identidade de gênero conforme jurisprudência dos tribunais superiores.",
    module: ModuleType.MODULO_II
  },
  {
    id: 63,
    text: "Em relação ao vestuário e aparência, é obrigatório o uso de roupas femininas, e a manutenção de cabelos compridos, assegurando que seus caracteres secundários estejam de acordo com sua identidade de gênero. Já no cadastro deve conter seu nome social, se assim desejar e todos tem o direito de ser chamada pelo nome escolhido.",
    answer: AnswerType.ERRADO,
    explanation: "É FACULTADO o uso de roupas e aparência conforme o gênero, não obrigatório. O direito ao nome social é pleno.",
    module: ModuleType.MODULO_II
  },
  {
    id: 64,
    text: "Quanto à atenção integral à saúde, é garantida a atenção integral à saúde à população LGBTQIAP+ que esteja em cumprimento de medida socioeducativa, atendendo-se aos parâmetros da Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais (LGBT) e da Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O SUS e a socioeducação devem articular políticas de saúde específicas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 65,
    text: "O Projeto “Abraço em Família” é uma iniciativa da Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS) no Ceará, Brasil, que visa fortalecer os vínculos familiares de adolescentes em centros socioeducativos. Parte do princípio de que com a entrada no sistema socioeducativo o distanciamento familiar pode ser um desafio para o jovem, podendo desestabilizá-lo emocionalmente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a importância do projeto de fortalecimento de vínculos.",
    module: ModuleType.MODULO_II
  },
  {
    id: 66,
    text: "O prontuário é um instrumento técnico público essencial para o acompanhamento coletivo. De acordo com o “Manual de Instruções para utilização de Prontuários SUAS” (Brasil, 2014), ele deve conter todas as informações relevantes sobre o indivíduo e sua família, além dos registros de todas as ações e serviços oferecidos.",
    answer: AnswerType.ERRADO,
    explanation: "O prontuário é um instrumento SIGILOSO e visa o acompanhamento INDIVIDUALIZADO, não coletivo.",
    module: ModuleType.MODULO_II
  },
  {
    id: 67,
    text: "No contexto socioeducativo, o prontuário é um documento que registra o acompanhamento de adolescentes em cumprimento de medidas socioeducativas, como liberdade assistida, prestação de serviços à comunidade, advertência, obrigação de reparar o dano, semiliberdade e internação. Ele detalha o histórico do adolescente, a medida aplicada, o acompanhamento realizado pela equipe técnica e os resultados alcançados.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade do prontuário.",
    module: ModuleType.MODULO_II
  },
  {
    id: 68,
    text: "No âmbito da SEAS, a organization dos prontuários é supervisionada pela Assessoria Especial de Diretrizes Socioeducativas (ASDIS). Para além dos prontuários da equipe técnica, atualmente a SEAS instituiu a criação do Prontuário Processual, que é uma constante nos Centros. Encontra-se em fase inicial de implantação o Prontuário do socioeducador, que é uma ferramenta de registro das 24h assistida por esse profissional. Este documento subsidia os estudos de caso, bem como a construção dos relatórios no qual o socioeducador(a) faz parte da elaboração.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete a inovação na sistematização do registro diário na SEAS.",
    module: ModuleType.MODULO_II
  },
  {
    id: 69,
    text: "O Prontuário Processual é de responsabilidade exclusiva da Coordenação Técnica e a Coordenação de Segurança.",
    answer: AnswerType.ERRADO,
    explanation: "O Prontuário Processual é de responsabilidade da Coordenação Técnica e da SECRETARIA TÉCNICA das unidades.",
    module: ModuleType.MODULO_II
  },
  {
    id: 70,
    text: "O Prontuário Técnico é onde o trabalho direto da equipe multidisciplinar é registrado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. É o registro central da atuação psicossocial e pedagógica.",
    module: ModuleType.MODULO_II
  },
  {
    id: 71,
    text: "As unidades de internação provisórias são responsáveis pela elaboração do Relatório de Diagnóstico Polidimensional. Para os casos de internação ou semiliberdade são elaborados sucessivos relatórios ao longo do cumprimento da medida socioeducativa para registrar o progresso, os desafios e as necessidades de replanejamento.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O RDPI ocorre no início e os relatórios de avaliação durante a medida.",
    module: ModuleType.MODULO_II
  },
  {
    id: 72,
    text: "O Relatório de Diagnóstico Polidimensional tem como objetivo apresentar às autoridades judiciais uma síntese do trabalho desenvolvido pela equipe multiprofissional com o adolescente. Demonstra as intervenções realizadas durante seu processo socioeducativo e subsidia a decisão das autoridades judiciais.",
    answer: AnswerType.ERRADO,
    explanation: "O RDPI visa conhecer o adolescente antes/no início da medida. A síntese das intervenções e resultados refere-se ao RELATÓRIO DE AVALIAÇÃO DA MEDIDA (Fase Conclusiva).",
    module: ModuleType.MODULO_II
  },
  {
    id: 73,
    text: "O Plano Individual de Atendimento não é apenas uma diretriz institucional; sua existência e obrigatoriedade encontram respaldo direto em nossa legislação, notadamente no Estatuto da Criança e do Adolescente (ECA) e no Sistema Nacional de Atendimento Socioeducativo (SINASE). Além de sua base legal, o PIA carrega uma filosofia profunda: ele busca ir além da mera punição, almejando a responsabilização e a efetiva reintegração social do adolescente, garantindo a reafirmação de seus direitos fundamentais e promovendo seu desenvolvimento integral.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O PIA é o instrumento central de planejamento da trajetória do jovem.",
    module: ModuleType.MODULO_II
  },
  {
    id: 74,
    text: "Na Internação Provisória inicia-se a Fase Inicial de Atendimento, muito embora seja um período de curta duração, para se obter informações significativas do(a) adolescente. O Diagnóstico Polidimensional não subsidiará posteriormente a elaboração do Plano Individual de Atendimento, caso seja aplicada pelo Poder Judiciário uma das medidas socioeducativas previstas no ECA.",
    answer: AnswerType.ERRADO,
    explanation: "O Diagnóstico Polidimensional SUBSIDIARÁ sim a elaboração do PIA. Ele é a fundação informativa para o plano individual.",
    module: ModuleType.MODULO_II
  },
  {
    id: 75,
    text: "Sendo aplicada medida socioeducativa de Internação e/ou Semiliberdade, no que concerne ainda a Fase Inicial de Atendimento, a Equipe de Referência designada para atendimento ao(a) socioeducando(a) adotará as ações necessárias para elaboração do Plano Individual de Atendimento (PIA), cuja construção contará com as informações contidas no Diagnóstico Polidimensional, com o envio no prazo de 30 dias ao Judiciário para apreciação e homologação.",
    answer: AnswerType.ERRADO,
    explanation: "O SINASE prevê o envio do PIA ao judiciário em até 45 DIAS (Art. 54 da Lei 12.594/12).",
    module: ModuleType.MODULO_II
  },
  {
    id: 76,
    text: "O Regimento Disciplinar no âmbito do SEAS é instituído pela Portaria Nº 093/2022 e refere-se ao conjunto de normas e procedimentos que regulam a disciplina e o comportamento dos adolescentes internados nas unidades de atendimento socioeducativo do Estado do Ceará, gerenciadas pela Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o instrumento normativo estadual.",
    module: ModuleType.MODULO_II
  },
  {
    id: 77,
    text: "As faltas disciplinares dos adolescentes e jovens em cumprimento de medida socioeducativa são classificadas em três naturezas: Levíssimas, moderadas e graves.",
    answer: AnswerType.ERRADO,
    explanation: "São classificadas em LEVES, MÉDIAS e GRAVES.",
    module: ModuleType.MODULO_II
  },
  {
    id: 78,
    text: "As Faltas Médias são condutas que, embora representem um desrespeito às normas, não causam grandes prejuízos à segurança ou à ordem. Exemplos incluem possuir objetos não autorizados ou recusar-se a participar de atividades sem justificativa. As medidas aplicáveis para faltas médias podem ser advertência verbal ou escrita, suspensão de atividades recreativas ou esportivas por curtos períodos, ou privação de produtos recebidos em visitas.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se às FALTAS LEVES.",
    module: ModuleType.MODULO_II
  },
  {
    id: 79,
    text: "As faltas graves são infrações que causam um impacto maior na rotina da unidade. Isso inclui impedir atividades socioeducativas, vender objetos lícitos, danificar bens de terceiros ou da unidade, dificultar revistas pessoais, ou simular doenças para se eximir de deveres. As medidas para faltas graves são mais severas, podendo incluir advertência escrita, suspensão de práticas recreativas ou esportivas por prazos um pouco maiores, privação de produtos de visita, retratação verbal, restrição ao dormitório por até cinco dias ou reparação do dano.",
    answer: AnswerType.ERRADO,
    explanation: "O texto descreve as FALTAS MÉDIAS. Faltas graves são condutas extremas como fuga, ameaça, agressão ou motim.",
    module: ModuleType.MODULO_II
  },
  {
    id: 80,
    text: "É fundamental ressaltar que o adolescente tem assegurado o direito ao contraditório e à ampla defesa em todas as fases do procedimento. E que nenhuma medida disciplinar pode interromper a escolarização, o atendimento técnico, o atendimento à saúde, a visita familiar, o direito de peticionar, o direito de avistar-se com o defensor e de corresponder-se com familiares. Além disso, é vedada a aplicação de isolamento como medida disciplinar, exceto de forma cautelar para garantir a segurança, e nunca poderá ser aplicada medida disciplinar coletiva.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete as garantias básicas de direitos humanos no sistema disciplinar.",
    module: ModuleType.MODULO_II
  },
  {
    id: 81,
    text: "O Conselho Disciplinar, conforme a Portaria nº 93/2022, é a instância deliberativa de caráter penal responsável pela análise de ocorrências, sugestão de sanções, orientações sobre o comportamento do adolescente e resolução de questões pertinentes à dinâmica institucional. É por meio dele que as situações são avaliadas e as decisões são tomadas, sempre com foco na responsabilização e na perspectiva pedagógica da medida socioeducativa.",
    answer: AnswerType.ERRADO,
    explanation: "O Conselho Disciplinar tem caráter ADMINISTRATIVO, não penal. A responsabilização penal é exclusiva do Poder Judiciário.",
    module: ModuleType.MODULO_II
  },
  {
    id: 82,
    text: "A composição do Conselho Disciplinar geralmente inclui: Diretor e/ou Representante (função de presidência), Coordenador de Segurança e Coordenador Técnico, Um representante da equipe de socioeducadores, Equipe interdisciplinar (demais setores da unidade), Dois representantes da equipe técnica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a formação colegiada para apuração de faltas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 83,
    text: "Em todas as unidades da Federação tais Conselhos Disciplinares devem ser um espaço democrático, com a participação do maior número possível de profissionais, havendo rodízio, especialmente entre os socioeducadores. E é crucial que os socioeducandos participem da apuração ou aplicação de medidas disciplinares.",
    answer: AnswerType.ERRADO,
    explanation: "Nenhum socioeducando deve participar da apuração ou aplicação de medidas disciplinares contra seus pares.",
    module: ModuleType.MODULO_II
  },
  {
    id: 84,
    text: "Uma das grandes prioridades do Conselho Disciplinar é encaminhar os casos de faltas disciplinares para a prática restaurativa, verificando sua aplicabilidade. A prática de Círculos Restaurativos é preferencialmente utilizada para resolução de conflitos em casos de faltas disciplinares leves e médias. Se a prática restaurativa não obtiver êxito, o procedimento ordinário é retomado. A prática restaurativa não deve ser cumulada com a medida disciplinar ou associada à restrição de atividades.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Incentiva a resolução dialógica em vez da sanção pura.",
    module: ModuleType.MODULO_II
  },
  {
    id: 85,
    text: "No caso de transgressão disciplinar média, a Direção da Unidade deve comunicar, em até 24 horas, o procedimento disciplinar, enviando cópia integral ao defensor público ou advogado da família. A participação como membro do Conselho Disciplinar é parte integrante das atribuições dos profissionais da unidade e gera benefício pecuniário, financeiro ou complementar. Para apuração e elucidação dos fatos, o Conselho Disciplinar pode arrolar testemunhas por iniciativa de seus membros ou a pedido do socioeducando ou responsável legal.",
    answer: AnswerType.ERRADO,
    explanation: "A comunicação em 24h refere-se a transgressão GRAVE. Além disso, a participação no Conselho NÃO gera benefício pecuniário adicional.",
    module: ModuleType.MODULO_II
  },
  {
    id: 86,
    text: "Os Círculos Restaurativos representam uma abordagem poderosa e humanizada para a resolução de conflitos, ao guiar os envolvidos por uma jornada estruturada de diálogo, compreensão e reconstrução. Este processo se desdobra em três fases distintas e complementares: o Pré-Círculo, os Círculos Restaurativos em si e o Pós Círculo, cada uma com objetivos específicos que visam promover a responsabilização, a reparação e o fortalecimento das relações pacíficas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as etapas do processo restaurativo.",
    module: ModuleType.MODULO_II
  },
  {
    id: 87,
    text: "Os Círculos Restaurativos são o ponto central do processo, onde a transformação coletiva começa. Os participantes se reúnem em grupo, conduzidos pelo facilitador, que assegura um ambiente seguro e respeitoso. O objetivo é o compartilhamento de narrativas, permitindo que cada um conte sua versão dos fatos e expresse seus sentimentos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a essência do círculo.",
    module: ModuleType.MODULO_II
  },
  {
    id: 88,
    text: "A fase de Pós-Círculo garante a efetividade e a continuidade dos acordos firmados, assegurando que a reparação se concretize e que as relações sejam restauradas. O acompanhamento é vital para monitorar o cumprimento das ações pactuadas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Sem o pós-círculo, a prática perde sua eficácia resolutiva.",
    module: ModuleType.MODULO_II
  },
  {
    id: 89,
    text: "As três fases dos Círculos da Paz trabalham em conjunto para oferecer uma alternativa construtiva e transformadora na resolução de conflitos, não priorizando o diálogo, a responsabilização e a reparação de danos.",
    answer: AnswerType.ERRADO,
    explanation: "Os círculos PRIORIZAM o diálogo, a responsabilização e a reparação de danos.",
    module: ModuleType.MODULO_II
  },
  {
    id: 90,
    text: "O Projeto “Abraço em Família” é uma iniciativa da Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS) no Ceará, Brasil, que visa fortalecer os vínculos familiares de adolescentes em centros socioeducativos. Parte do princípio de que com a entrada no sistema socioeducativo o distanciamento familiar pode ajudar no amadurecimento dos adolescentes e no seu emocional.",
    answer: AnswerType.ERRADO,
    explanation: "O distanciamento familiar é visto como um desafio que DESESTABILIZA o jovem, por isso o projeto busca estreitar os laços, não manter a distância.",
    module: ModuleType.MODULO_II
  },
  {
    id: 91,
    text: "O Projeto “Abraço em Família” busca promover a cultura de paz e a ressocialização. Ou seja, além de cumprir uma medida por um ato infracional, os Centros Socioeducativos almejam que o jovem desenvolva um Plano Individual de Atendimento (PIA) que o possibilite construir uma nova trajetória de vida melhor com o apoio da família e das políticas públicas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade socioeducativa do projeto.",
    module: ModuleType.MODULO_II
  },
  {
    id: 92,
    text: "O Programa de Oportunidades e Cidadania (POC) foi instituído pela Portaria SEAS nº 120/2021, pela Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS) do Ceará. Destina-se a adolescentes cumprindo medida socioeducativa de semiliberdade, adolescentes cumprindo medida de internação na Fase Conclusiva de Referência dos Centros Socioeducativos, adolescentes pós cumprimento de medidas restritivas de liberdade e do meio aberto e membros do núcleo familiar de vinculação afetiva com o adolescente atendido pelo programa.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o público-alvo e norma do POC.",
    module: ModuleType.MODULO_II
  },
  {
    id: 93,
    text: "O Programa de Oportunidades e Cidadania (POC), é organizado em diferentes eixos de atuação, desenvolvendo projetos que buscam garantir direitos, promover a inclusão social e propagar a reiteração de atos infracionais. O programa atua de forma individual, fortalecendo os vínculos familiares, comunitários e institucionais dos jovens.",
    answer: AnswerType.ERRADO,
    explanation: "O programa busca EVITAR (mitigar) a reiteração e atua de forma INTEGRADA com os territórios, não meramente individual.",
    module: ModuleType.MODULO_II
  },
  {
    id: 94,
    text: "São exemplos de Eixos de Ações do POC: Acompanhamento Multiprofissional, Ações de Arte e Culturais, Qualificação Profissional e Fortalecimento da Cidadania, Oficinas, formações e articulações com a rede de apoio.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a organização do programa.",
    module: ModuleType.MODULO_II
  },
  {
    id: 95,
    text: "O projeto Novas Trilhas atua em dois Polos, atendendo 10 municípios: polo 1: Fortaleza (presencial), Caucaia, Maracanaú e Maranguape, de forma virtual e o polo 2: Sobral (presencial), Juazeiro do Norte, Crato, Iguatu, Itapipoca e Queixada, também de forma virtual. O acesso ao programa é de livre adesão podendo ser encaminhados por profissionais da rede de apoio ou acessando o site da SEAS, tendo como requisito a idade de 12 a 21 anos, contemplando os adolescentes pós-medidas e familiares.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a capilaridade e funcionamento do projeto.",
    module: ModuleType.MODULO_II
  },
  {
    id: 96,
    text: "A Unidade de Internação Provisória (UIP) acolhe adolescentes que aguardam decisão judicial sobre a medida socioeducativa a ser aplicada, com duração máxima de 30 dias, conforme o Art. 185 do Estatuto da Criança e do Adolescente. No Ceará, essas unidades são administradas pelo governo estadual e integram o Sistema Socioeducativo local.",
    answer: AnswerType.ERRADO,
    explanation: "O prazo máximo da internação provisória é de 45 DIAS (Art. 108 do ECA).",
    module: ModuleType.MODULO_II
  },
  {
    id: 97,
    text: "A Unidade de Internação (UI) é a medida socioeducativa de privação de liberdade mais grave, aplicada em casos de atos infracionais mais sérios, com duração máxima de quatro anos, conforme o Art. 121 do Estatuto da Criança e do Adolescente e o Art. 43 da Lei do SINASE.",
    answer: AnswerType.ERRADO,
    explanation: "A internação tem prazo máximo de TRÊS ANOS (Art. 121, § 3º do ECA).",
    module: ModuleType.MODULO_II
  },
  {
    id: 98,
    text: "A rotina na Unidade de Internação (UI) é de estrutura rígida, com horários definidos para todas as atividades. Os eixos de atendimento abrangem escolarização, profissionalização, esporte, cultura, lazer, atendimento psicossocial (individual e em grupo) e acompanhamento da saúde, seguindo as diretrizes dos Arts. 70 a 73 da Lei do SINASE.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a organização da medida restritiva.",
    module: ModuleType.MODULO_II
  },
  {
    id: 99,
    text: "A Unidade de Semiliberdade (USL) é uma medida de privação total de liberdade, não permitindo ao adolescente realizar atividades externas (escola, trabalho e/ou cursos).",
    answer: AnswerType.ERRADO,
    explanation: "A semiliberdade é medida de privação PARCIAL. As atividades externas (escola, cursos, trabalho) são fundamentais e obrigatórias no regime.",
    module: ModuleType.MODULO_II
  },
  {
    id: 100,
    text: "A rotina na Unidade de Semiliberdade (USL), apresenta uma flexibilidade controlada, com regras claras e supervisão. O foco é na reinserção social do adolescente, com ênfase na construção de vínculos externos e na busca por oportunidades de estudo e trabalho, alinhado aos princípios de convivência familiar e comunitária do ECA.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a transição para a liberdade.",
    module: ModuleType.MODULO_II
  },

  // MÓDULO III – TRAJETÓRIA JURÍDICO-PROCESSUAL (101 a 200)
  {
    id: 101,
    text: "O art. 228 da Constituição Federal estabelece que os menores de 18 anos são imputáveis penalmente, de modo que respondem por crimes na forma prevista para adultos.",
    answer: AnswerType.ERRADO,
    explanation: "Os menores de 18 anos são INIMPUTÁVEIS penalmente. Eles respondem por 'ato infracional' sob a legislação especial (ECA).",
    module: ModuleType.MODULO_III
  },
  {
    id: 102,
    text: "O art. 103 do Estatuto da Criança e do Adolescente (ECA) define ato infracional como a conduta descrita como crime ou contravenção penal, a qual é praticada por criança ou adolescente, corroborando a inimputabilidade dos menores de 18 anos, conforme o art. 104, que reforça esse regime e estabelece a apuração por meio de procedimento próprio.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Define legalmente o que é ato infracional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 103,
    text: "Conforme o art. 105 do ECA, a apuração do ato infracional é realizada pela autoridade legislativa, assegurando ao adolescente o contraditório e a ampla defesa durante o referido procedimento.",
    answer: AnswerType.ERRADO,
    explanation: "A apuração é realizada pela autoridade JUDICIÁRIA (Justiça da Infância e Juventude).",
    module: ModuleType.MODULO_III
  },
  {
    id: 104,
    text: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente. A internação provisória pode ser determinada pelo prazo máximo de trinta e cinco dias.",
    answer: AnswerType.ERRADO,
    explanation: "O prazo máximo da internação provisória é de QUARENTA E CINCO DIAS.",
    module: ModuleType.MODULO_III
  },
  {
    id: 105,
    text: "O adolescente tem direito à identificação dos responsáveis pela sua apreensão, devendo ser informado acerca de seus direitos. A apreensão de qualquer adolescente e o local onde se encontra apreendido serão comunicados à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada. Examinar-se-á, desde logo e sob pena de responsabilidade, a possibilidade de liberação imediata.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete os direitos constitucionais de todo detido.",
    module: ModuleType.MODULO_III
  },
  {
    id: 106,
    text: "A decisão pela internação provisória deverá ser fundamentada e basear-se em indícios suficientes de autoria e materialidade, demonstrada a necessidade imperiosa da medida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A internação provisória é medida cautelar de natureza excepcional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 107,
    text: "O adolescente civilmente identificado será submetido a identificação compulsória pelos órgãos policiais, de proteção e judiciais, em todos os casos.",
    answer: AnswerType.ERRADO,
    explanation: "Quem já possui identificação civil NÃO será submetido a nova identificação compulsória, SALVO se houver dúvida fundada ou necessidade de confrontação.",
    module: ModuleType.MODULO_III
  },
  {
    id: 108,
    text: "Compete à Justiça da Infância e Juventude processar e julgar as representações promovidas pelo Ministério Público para apuração de atos infracionais cometidos por adolescentes, assegurando o cumprimento das medidas socioeducativas cabíveis, em conformidade com os princípios do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) e do Sistema Nacional de Atendimento Socioeducativo (Lei nº 12.594/2012), observando os direitos fundamentais do adolescente, a proporcionalidade das medidas, a proteção integral e a finalidade educativa do atendimento.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a competência jurisdicional especializada.",
    module: ModuleType.MODULO_III
  },
  {
    id: 109,
    text: "O adolescente apreendido por ordem judicial será encaminhado à autoridade judiciária competente em até 48 (quarenta e oito) horas.",
    answer: AnswerType.ERRADO,
    explanation: "Deve ser encaminhado IMEDIATAMENTE (ou no primeiro dia útil subsequente se em fins de semana/plantão) à autoridade judiciária.",
    module: ModuleType.MODULO_III
  },
  {
    id: 110,
    text: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade policial competente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O primeiro destino é o Distrito Policial (Delegacia da Criança).",
    module: ModuleType.MODULO_III
  },
  {
    id: 111,
    text: "Quando houver repartição policial especializada no atendimento ao adolescente, e o ato infracional tiver sido praticado em coautoria com maior de idade, prevalecerá a competência da repartição especializada, que, após adotar as providências necessárias, encaminhará o adulto à repartição policial própria.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a prioridade do atendimento especializado juvenil.",
    module: ModuleType.MODULO_III
  },
  {
    id: 112,
    text: "Um dos exemplos de procedimentos Policiais após a apreensão de um adolescente, é que no caso de comparecimento dos pais ou responsável, o adolescente será prontamente liberado pela autoridade policial, sob termo de compromisso e responsabilidade de sua apresentação ao representante do Ministério público, no mesmo dia ou sendo impossível, no primeiro dia útil imediato, exceto quando pela gravidade do ato infracional e sua repercussão social, deva o adolescente permanecer apreendido para a garantia de sua segurança pessoal ou manutenção da ordem pública.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme o Art. 174 do ECA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 113,
    text: "A Remissão é uma forma de exclusão do processo, atendendo as circunstancias e consequências do fato, ao contexto social, bem como a personalidade do adolescente e sua maior ou menor participação no crime.",
    answer: AnswerType.ERRADO,
    explanation: "O termo correto no sistema socioeducativo é ATO INFRACIONAL. Remissão exclui, suspende ou extingue o processo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 114,
    text: "Previstas nos Artigos 126 à 128 e 188 do ECA, a remissão como forma de extinção ou suspensão do processo, poderá ser aplicada em qualquer fase do procedimento, antes da sentença.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o momento processual da remissão concedida pelo juiz.",
    module: ModuleType.MODULO_III
  },
  {
    id: 115,
    text: "A Remissão poderá vir acompanhada de medida socioeducativa em meio aberto, como Liberdade Assistida – LA, Prestação de serviço a comunidade – PSC, Advertência, exceto Internação e Semiliberdade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Remissão não pode ser cumulada com medidas restritivas ou privativas de liberdade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 116,
    text: "A Constituição Federal no artigo 227, garante prioridade absoluta à proteção de crianças e adolescentes. Isso inclui o dever de promover direitos e aplicar medidas que respeitem sua condição peculiar de pessoa em desenvolvimento. Na aplicação de Medidas Socioeducativas, o Estado deve agir com respeito à dignidade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Fundamentação constitucional da proteção integral.",
    module: ModuleType.MODULO_III
  },
  {
    id: 117,
    text: "A Lei do SINASE regulamenta a execução das medidas socioeducativas e estabelece critérios, princípios e regras para garantir um atendimento padronizado e humanizado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o objetivo da Lei 12.594/12.",
    module: ModuleType.MODULO_III
  },
  {
    id: 118,
    text: "O Princípio da legalidade diz que todas as medidas socioeducativas poderão ser aplicadas aos adolescentes em conflito com a lei, mesmo que sem a previsão legal expressa.",
    answer: AnswerType.ERRADO,
    explanation: "O princípio da legalidade diz que NENHUMA medida pode ser aplicada sem prévia e expressa previsão legal.",
    module: ModuleType.MODULO_III
  },
  {
    id: 119,
    text: "O Princípio da prioridade absoluta diz que as políticas e programas de atendimento socioeducativos, devem assegurar prioridade absoluta ao adolescente ao adolescente, garantindo-lhe atenção especial em todas as esferas da sociedade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O adolescente está em primeiro lugar nas verbas e atenções públicas.",
    module: ModuleType.MODULO_III
  },
  {
    id: 120,
    text: "O Princípio de brevidade estabelece que as medidas socioeducativas aplicadas devem ser executadas pelo maior tempo possível, sendo incompatível com a responsabilização, maximizando os impactos negativos.",
    answer: AnswerType.ERRADO,
    explanation: "Brevidade significa que a medida deve durar o MENOR tempo possível, visando a reintegração.",
    module: ModuleType.MODULO_III
  },
  {
    id: 121,
    text: "O Princípio da individualização diz que cada adolescente deve receber um plano individualizado de atendimento, considerando suas necessidades, potencialidades e seu histórico de vida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. É a base do Plano Individual de Atendimento (PIA).",
    module: ModuleType.MODULO_III
  },
  {
    id: 122,
    text: "O Princípio da Mínima Intervenção deve garantir que restrição de liberdade seja aplicada em todos os casos.",
    answer: AnswerType.ERRADO,
    explanation: "Mínima Intervenção significa intervir apenas quando necessário e da forma menos gravosa possível.",
    module: ModuleType.MODULO_III
  },
  {
    id: 123,
    text: "O Princípio da não discriminação diz que nenhum adolescente em conflito com a lei deve ser tratado de forma desigual em razão de origem, raça, gênero, religião, condição social ou qualquer outra característica pessoal.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Princípio de igualdade material.",
    module: ModuleType.MODULO_III
  },
  {
    id: 124,
    text: "O Princípio do fortalecimento dos vínculos orienta que deve priorizar a manutenção e o reestabelecimento dos laços afetivos do adolescente com a sua família e com a comunidade a qual está inserido.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A família é parceira no processo socioeducativo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 125,
    text: "Verificada a prática de ato infracional, a autoridade competente, poderá aplicar ao adolescente as seguintes medidas: advertência, obrigação de reparar o dano, prestação de serviço a comunidade, liberdade assistida, inserção em regime de semiliberdade, internação em Centros Socioeducativos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Lista as seis medidas socioeducativas previstas no Art. 112 do ECA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 126,
    text: "A medida aplicada ao adolescente levará em conta sua capacidade de cumpri-la, as circunstancias e a gravidade do ato infracional. Sendo que em alguns casos, será admitido a prestação de trabalho forçado.",
    answer: AnswerType.ERRADO,
    explanation: "Trabalho forçado é proibido pela Constituição Federal e por tratados de direitos humanos em qualquer hipótese.",
    module: ModuleType.MODULO_III
  },
  {
    id: 127,
    text: "Os adolescentes portadores de doença ou deficiência mental, receberão tratamento individual e especializado em local adequado às suas condições.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o direito à saúde e atendimento especializado.",
    module: ModuleType.MODULO_III
  },
  {
    id: 128,
    text: "A Medida Socioeducativa de Obrigação de reparar o dano, consiste na realização e tarefas voluntárias de interesse geral, por período não excedente a seis meses, junto a entidades assistenciais, hospitais, escolas e outros estabelecimentos congêneres, bem como em programas comunitários ou governamentais.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à Prestação de Serviços à Comunidade (PSC). A obrigação de reparar o dano foca na restituição do bem ou compensação do prejuízo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 129,
    text: "A Medida Socioeducativa de Prestação de serviços à comunidade, em se tratando de ato infracional com reflexos patrimoniais, a autoridade poderá determinar, se foro caso, que o adolescente restitua a coisa, promova o ressarcimento do dano, ou, por outra forma, compense o prejuízo da vítima. Havendo manifesta impossibilidade de reparar o dano, a medida poderá ser substituída por outra adequada.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à Obrigação de Reparar o Dano.",
    module: ModuleType.MODULO_III
  },
  {
    id: 130,
    text: "A Medida Socioeducativa de Advertência poderá ser aplicada sempre que houver prova da materialidade e indícios suficientes da autoria. A advertência consistirá na admoestação verbal, que será reduzida a termo e assinada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a medida de advertência.",
    module: ModuleType.MODULO_III
  },
  {
    id: 131,
    text: "A Medida Socioeducativa de Liberdade Assistida, será adotada sempre que se figurar a medida mais adequada, para o fim de acompanhar, orientar e auxiliar o adolescente. Na liberdade assistida, a autoridade designará um técnico responsável para acompanhar o caso, o qual poderá ser recomendado por entidade ou programa de atendimento.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a LA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 132,
    text: "A Medida Socioeducativa de Liberdade Assistida será fixada pelo prazo máximo de seis meses, não podendo ser prorrogada, revogada ou substituída por outra medida em nenhuma hipótese.",
    answer: AnswerType.ERRADO,
    explanation: "O prazo de 6 meses é MÍNIMO. Ela pode ser prorrogada, revogada ou substituída a qualquer tempo conforme a avaliação técnica.",
    module: ModuleType.MODULO_III
  },
  {
    id: 133,
    text: "A Medida Socioeducativa de Semiliberdade, pode ser determinado desde o início, como forma de transição para o meio aberto, possibilitando a realização de tarefas externas, independente de autorização judicial. São obrigatórias a escolarização e profissionalização, devendo sempre que possível, a utilização dos recursos existentes na comunidade. A medida não tem um prazo determinado, aplicando-se, no que couber, as disposições relativas à internação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a Semiliberdade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 134,
    text: "A Medida Socioeducativa de Internação em nenhum caso caberá incomunicabilidade. A autoridade judiciária poderá suspender temporariamente a visita, inclusive de pais ou responsáveis, se existirem motivos sérios e fundados de sua prejudicialidade aos interesses do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A visita pode ser suspensa se comprovado prejuízo ao jovem (ex: abusos familiares).",
    module: ModuleType.MODULO_III
  },
  {
    id: 135,
    text: "São exemplos de competências do Ministério Público no sistema socioeducativo: conceder a remissão, promover e acompanhar os procedimentos relativos as infrações atribuídas ao adolescente, promover ações para proteção dos interesses individuais, difusos ou coletivos relativos à infância e à adolescência.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o papel do MP.",
    module: ModuleType.MODULO_III
  },
  {
    id: 136,
    text: "O Ministério Público atuará preferencialmente na defesa dos direitos e interesses tratados no Estatuto da Criança e do Adolescente e a falta de intervenção do Ministério Público não resulta em nulidade. O representante do Ministério Público, no exercício de suas funções, terá livre acesso a todo local onde se encontre criança ou adolescente.",
    answer: AnswerType.ERRADO,
    explanation: "A atuação é OBRIGATÓRIA e a falta de intervenção RESULTA em nulidade absoluta do processo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 137,
    text: "O adolescente tem direito de se entrevistar pessoalmente com o Ministério Público. Além disso, o Ministério Público promove ações civis públicas quando há violações estruturais. Pode exigir melhorias em unidades, contratação de profissionais e oferta de programas. Sua atuação é estratégica para a efetivação de políticas públicas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o papel de fiscal da lei e protetor estrutural.",
    module: ModuleType.MODULO_III
  },
  {
    id: 138,
    text: "A Constituição Federal define o Ministério Público como defensor da ordem jurídica e dos interesses sociais e no sistema socioeducativo, isso inclui os direitos dos adolescentes. Ele atua como fiscal da lei e como parte processual.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme a Carta Magna.",
    module: ModuleType.MODULO_III
  },
  {
    id: 139,
    text: "O Ministério Público integra comissões e fóruns interinstitucionais e contribui para o planejamento e avaliação das políticas socioeducativas. Sua presença fortalece a transparência e o controle social do sistema.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O MP é ator político e jurídico no sistema de garantias.",
    module: ModuleType.MODULO_III
  },
  {
    id: 140,
    text: "A Lei do SINASE faculta os entes federativos a garantir o controle externo e interno, sendo o Ministério Público que exerce esses controles sobre os programas e unidades. Isso inclui visitas, relatórios e recomendações. A atuação deve ser contínua e efetiva.",
    answer: AnswerType.ERRADO,
    explanation: "A Lei do SINASE OBRIGA (não faculta) os entes federativos a garantir o controle.",
    module: ModuleType.MODULO_III
  },
  {
    id: 141,
    text: "O Ministério Público deve verificar se há superlotação ou violência institucional. Essas situações violam os direitos dos adolescentes. Identificando problemas, o MP pode recomendar providências imediatas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a fiscalização de dignidade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 142,
    text: "A atuação do MP deve ser somente proativa, bastando agir somente após a violação.",
    answer: AnswerType.ERRADO,
    explanation: "A atuação deve ser proativa e PREVENTIVA. Agir 'somente após a violação' é uma postura reativa insuficiente.",
    module: ModuleType.MODULO_III
  },
  {
    id: 143,
    text: "O Ministério Público deve manter diálogo com os gestores das unidades, também pode articular com conselhos e defensoria pública, sendo que essa articulação fortalece a rede de proteção.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a integração institucional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 144,
    text: "A fiscalização do MP é um instrumento de controle social, assegura que o sistema socioeducativo cumpra sua função, tendo sempre como foco a reintegração do adolescente à sociedade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade da fiscalização.",
    module: ModuleType.MODULO_III
  },
  {
    id: 145,
    text: "A Instrução Normativa SEAS/2023, regulamenta o uso de algemas nos centros socioeducativos do Ceará. Ela segue a Súmula Vinculante nº 11 do Supremo Tribunal Federal. O uso deve ser tratado como regra geral, sendo justificado e de modo proporcional.",
    answer: AnswerType.ERRADO,
    explanation: "O erro é dizer 'regra geral'. O uso de algemas é EXCEÇÃO, devendo ser justificado por escrito sob pena de responsabilidade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 146,
    text: "O uso de algemas deve respeitar a dignidade da pessoa humana. É proibido o uso como forma de punição ou intimidação. As algemas só podem ser usadas em caso de resistência ativa e quando há riscos à integridade física ou por determinação judicial fundamentada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre os critérios da Súmula Vinculante 11 e da IN SEAS.",
    module: ModuleType.MODULO_III
  },
  {
    id: 147,
    text: "O uso de algemas deve ser comunicado à Direção da Unidade e deve ser informado à Coordenação Técnica. E, em nenhuma hipótese, à Corregedoria da SEAS.",
    answer: AnswerType.ERRADO,
    explanation: "Deve sim ser comunicado à Corregedoria da SEAS SE NECESSÁRIO/conforme o procedimento de registro de incidentes críticos.",
    module: ModuleType.MODULO_III
  },
  {
    id: 148,
    text: "É proibido o uso de algemas em mulheres grávidas, sendo também vedado em adolescentes com deficiência ou em qualquer situação que cause constrangimento desnecessário. O uso deve ser feito com equipamento adequado, onde as algemas devem estar em bom estado de conservação e devem ser aplicadas de forma segura e controlada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Protege populações vulneráveis contra excessos.",
    module: ModuleType.MODULO_III
  },
  {
    id: 149,
    text: "O socioeducador deve evitar exposição pública do adolescente e garantir o respeito aos direitos humanos. É necessário relatar imediatamente qualquer incidente. O relato deve ser feito em livro próprio da unidade e conter assinatura do responsável pela decisão.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O dever de sigilo e a documentação são proteções para o servidor e o jovem.",
    module: ModuleType.MODULO_III
  },
  {
    id: 150,
    text: "O uso de algemas deve ser avaliado constantemente. A equipe deve buscar alternativas seguras. A prioridade é sempre a contenção verbal e preventiva. A instrução reforça o compromisso com a segurança e legalidade, buscando garantir o equilíbrio entre proteção e respeito, promovendo uma atuação ética e responsável.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o gerenciamento de crise progressivo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 151,
    text: "O uso indevido das Algemas pode gerar responsabilização somente administrativa. Por isso, o uso deve ser sempre criterioso e documentado.",
    answer: AnswerType.ERRADO,
    explanation: "Pode gerar responsabilização administrativa, CIVIL e PENAL (crime de abuso de autoridade).",
    module: ModuleType.MODULO_III
  },
  {
    id: 152,
    text: "O uso de algemas é uma medida extrema e deve ser usada apenas quando não houver outra alternativa. E sempre com respeito à integridade do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta reforçando a natureza da medida.",
    module: ModuleType.MODULO_III
  },
  {
    id: 153,
    text: "A circulação de pessoas pela área administrativa dos Centros Socioeducativos será permitida aos (às) funcionários (as) e visitantes, sendo restrita aos locais onde tenham que desenvolver ou participar de atividades, observadas as cautelas de segurança.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o fluxo de segurança predial.",
    module: ModuleType.MODULO_III
  },
  {
    id: 154,
    text: "A circulação de pessoas pela área de segurança dos Centros Socioeducativos é restrita ao pessoal escalado para trabalhar nessa área e a permanência terá a duração necessária à execução do trabalho.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta para evitar vulnerabilidades de segurança.",
    module: ModuleType.MODULO_III
  },
  {
    id: 155,
    text: "Os serviços de manutenção nas áreas de segurança serão executados mesmo sem a devida autorização da Coordenação de Segurança.",
    answer: AnswerType.ERRADO,
    explanation: "Todo serviço de manutenção requer autorização prévia e acompanhamento da segurança.",
    module: ModuleType.MODULO_III
  },
  {
    id: 156,
    text: "Todos os (as) funcionários (as) dos Centros Socioeducativos deverão passar pelo detector de metais e se submeteram à Revista de Busca Pessoal sempre que adentrarem na Unidade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A segurança preventiva aplica-se a todos que acessam o ambiente restrito.",
    module: ModuleType.MODULO_III
  },
  {
    id: 157,
    text: "Considera-se Revista Incerta para os efeitos da Portaria N° 004/2021, a revista realizada em dia e hora de conhecimento amplo, mediante determinação da Direção do Centro Socioeducativo.",
    answer: AnswerType.ERRADO,
    explanation: "A Revista Incerta é realizada em dia e hora de CONHECIMENTO RESTRITO (surpresa), para ser eficaz.",
    module: ModuleType.MODULO_III
  },
  {
    id: 158,
    text: "A Revista Estrutural tem natureza preventiva, devendo ser realizada pelo menos 01 (uma) vez por semana, sendo intensificada sempre que necessário por determinação da Direção ou do (a) Coordenador (a) de Segurança.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Visa encontrar danos físicos ou objetos ilícitos escondidos na estrutura.",
    module: ModuleType.MODULO_III
  },
  {
    id: 159,
    text: "Para realizar a Revista de Busca Pessoal após as visitas, o (a) Socioeducador (a) deverá realizar a busca corporal, aleatória e sem muitos cuidados.",
    answer: AnswerType.ERRADO,
    explanation: "Deve ser realizada de forma metódica e com OLHAR CUIDADOSO para garantir que nada foi introduzido na unidade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 160,
    text: "Evento Simples é aquele cuja ameaça à segurança é superior à capacidade de resposta do (a) Coordenador (a) de Segurança e dos Socioeducadores (as) presentes no plantão.",
    answer: AnswerType.ERRADO,
    explanation: "Evento Simples é aquele cuja ameaça é INFERIOR à capacidade de resposta imediata da equipe de plantão.",
    module: ModuleType.MODULO_III
  },
  {
    id: 161,
    text: "Evento Crítico é aquele cuja ameaça à segurança é superior à capacidade de resposta de todos os setores do Centro Socioeducativo, cuja resolução só é alcançada com a cooperação do Sistema de Segurança Pública e de Justiça.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a tipologia de crises graves.",
    module: ModuleType.MODULO_III
  },
  {
    id: 162,
    text: "Evento Complexo é aquele cuja ameaça à segurança é superior à capacidade de resposta do (a) coordenador (a) e dos socioeducadores (as) presentes na Unidade, cuja resolução não é possível pela coordenação dos setores do Centro Socioeducativo e/ou pela atuação da Direção.",
    answer: AnswerType.ERRADO,
    explanation: "A resolução do evento complexo É POSSÍVEL pela coordenação interna ampliada com a Direção, sem necessariamente precisar de forças externas imediatas como no Crítico.",
    module: ModuleType.MODULO_III
  },
  {
    id: 163,
    text: "A partir da avaliação dos eventos de crise, pode ser feito o acionamento do Grupo de Intervenções Táticas (GIT), segundo decisão do diretor. E, apenas em casos excepcionais, o Coordenador de Segurança pode tomar essa decisão.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a cadeia de comando para intervenção tática.",
    module: ModuleType.MODULO_III
  },
  {
    id: 164,
    text: "O Diretor deve informar o gestor estadual antes de acionar o GIT. Se for necessário acionar a força policial, o Diretor deve comunicar os órgãos competentes. Esses órgãos são o Poder Judiciário, o Ministério Público e a Assembleia Legislativa.",
    answer: AnswerType.ERRADO,
    explanation: "Deverm ser comunicados: Poder Judiciário, MP e a DEFENSORIA PÚBLICA (não AL).",
    module: ModuleType.MODULO_III
  },
  {
    id: 165,
    text: "Os EPIs são usados para prevenir crises e controlar distúrbios nos Centros Socioeducativos do Ceará. Incluem capacete, luvas, escudo, protetores de cotovelo, escudo, protetores de canela, algemas, lanternas, alicate corta cadeado e extintor.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o kit de pronta resposta.",
    module: ModuleType.MODULO_III
  },
  {
    id: 166,
    text: "Os EPIs devem ser guardados em sala trancada, com chave sob a responsabilidade da Direção e do Coordenador de Segurança. O uso só é permitido com autorização da Direção e por pessoas aptas e capacitadas. Esses profissionais devem ser treinados pelo NUESO e escalados para o serviço de Ações de Pronta Resposta (APR).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o controle de equipamentos de força.",
    module: ModuleType.MODULO_III
  },
  {
    id: 167,
    text: "Só está autorizado a utilizar EPIs quem concluiu o curso do NUESO, podendo ter respondido ou estar respondendo processo na Corregedoria. É necessário ser designado pelo Coordenador de Segurança e atuar em evento simples ou complexo.",
    answer: AnswerType.ERRADO,
    explanation: "O servidor deve ser ISENTO de processos disciplinares graves na Corregedoria para compor o grupo de intervenção APR/GIT.",
    module: ModuleType.MODULO_III
  },
  {
    id: 168,
    text: "Devem ser escalados nove socioeducadores por dia para compor o posto de APR. As funções incluem coordenador, escudeiros, imobilizadores, chaveiro e operador de extintor. O Coordenador de Segurança define e registra as funções de cada integrante. Esse registro deve ser feito no Livro de Coordenadores ou na escala de serviço. O coordenador deve conferir e repassar os equipamentos ao substituto diariamente.",
    answer: AnswerType.ERRADO,
    explanation: "O número correto de socioeducadores escalados para APR é SETE (7).",
    module: ModuleType.MODULO_III
  },
  {
    id: 169,
    text: "A força nas Unidades de Medidas Socioeducativas só pode ser usada quando o diálogo se esgotar. Deve ser usada pelo tempo necessário, sem humilhar ou degradar o adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Uso diferenciado e proporcional da força.",
    module: ModuleType.MODULO_III
  },
  {
    id: 170,
    text: "O uso da força nas Unidades de Medidas Socioeducativas deve ser progressivo e proporcional à gravidade da situação. A autorização deve ser dada somente pelo Diretor em todos os casos.",
    answer: AnswerType.ERRADO,
    explanation: "Na ausência ou impossibilidade do Diretor, a autorização pode ser dada pelo COORDENADOR DE SEGURANÇA de plantão.",
    module: ModuleType.MODULO_III
  },
  {
    id: 171,
    text: "Entre as atribuições do socioeducador encontram-se realizar atividades recreativas, esportivas, culturais, artesanais e artísticas planejadas em conjunto com a área pedagógica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O socioeducador é também um agente pedagógico.",
    module: ModuleType.MODULO_III
  },
  {
    id: 172,
    text: "O socioeducador realiza revistas pessoais nos adolescentes em momentos específicos, como na entrada e saída, com o objetivo de impedir a posse de objetos ou substâncias proibidas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Atribuição ligada à segurança preventiva.",
    module: ModuleType.MODULO_III
  },
  {
    id: 173,
    text: "O socioeducador é responsável por zelar pela convivência entre os adolescentes, atuando na mediação de conflitos e na promoção do respeito mútuo. Sua postura influencia o ambiente coletivo.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a dimensão ética do trabalho.",
    module: ModuleType.MODULO_III
  },
  {
    id: 174,
    text: "A Lei nº 12.594/2012 (SINASE) estabelece princípios e diretrizes que orientam a atuação, especialmente no que diz respeito à segurança institucional e à convivência. Os objetivos das medidas são: a responsabilização do adolescente quanto às consequências do ato infracional, incentivando a reparação; a integração social do adolescente e a garantia de seus direitos, por meio do cumprimento de seu PIA.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta resumindo os objetivos do SINASE.",
    module: ModuleType.MODULO_III
  },
  {
    id: 175,
    text: "A Lei nº 12.594/2012 (Sinase) estabelece que a execução das medidas socioeducativas deve observar princípios como o: da mínima intervenção, não discriminação, legalidade, dentre outros.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre os princípios regentes da execução.",
    module: ModuleType.MODULO_III
  },
  {
    id: 176,
    text: "O socioeducador atua diretamente com adolescentes em cumprimento de medidas socioeducativas. Seu papel é garantir o respeito aos direitos fundamentais, incluindo o direito à vida, à dignidade e à educação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a função primordial do agente.",
    module: ModuleType.MODULO_III
  },
  {
    id: 177,
    text: "A Constituição Federal assegura prioridade parcial à criança e ao adolescente. O ECA reforça essa proteção parcial. O SINASE organiza a execução das medidas com base nesses princípios.",
    answer: AnswerType.ERRADO,
    explanation: "A prioridade é ABSOLUTA e a proteção é INTEGRAL, não parciais.",
    module: ModuleType.MODULO_III
  },
  {
    id: 178,
    text: "O Socioeducador é um agente de direitos e sua atuação fortalece a cidadania e a justiça social. Respeitar os Direitos Fundamentais e os Direitos Humanos é dever de todos, especialmente no atendimento a adolescentes.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O servidor é a face do Estado perante o jovem.",
    module: ModuleType.MODULO_III
  },
  {
    id: 179,
    text: "Nenhuma criança ou adolescente será objeto de qualquer forma de negligência, discriminação, exploração, violência, crueldade e opressão, punido na forma da lei qualquer atentado, por ação ou omissão, aos seus direitos fundamentais.",
    answer: AnswerType.CORRETO,
    explanation: "Texto literal do Art. 5º do ECA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 180,
    text: "A criança e o adolescente têm o direito de ser educados e cuidados, mas com o uso de castigo físico ou de tratamento cruel ou degradante, como formas de correção, disciplina, educação ou qualquer outro pretexto, pelos pais, pelos integrantes da família ampliada, pelos responsáveis, pelos agentes públicos executores de medidas socioeducativas.",
    answer: AnswerType.ERRADO,
    explanation: "O ECA e a Lei Menino Bernardo garantem o direito de ser educados SEM o uso de castigo físico ou tratamento cruel.",
    module: ModuleType.MODULO_III
  },
  {
    id: 181,
    text: "O ECA garante que nenhum adolescente será privado de sua liberdade, mesmo que em casos de flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    answer: AnswerType.ERRADO,
    explanation: "Haverá privação de liberdade SIM, justamente em casos de flagrante ou ordem judicial. Além disso, proíbe-se trabalho forçado.",
    module: ModuleType.MODULO_III
  },
  {
    id: 182,
    text: "A Convenção da ONU sobre os Direitos da Criança, adotada em 1989, é o tratado internacional de direitos humanos mais amplamente ratificado da história. Ela estabelece uma série de direitos civis, políticos, econômicos, sociais e culturais para todas as crianças.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o principal marco internacional da área.",
    module: ModuleType.MODULO_III
  },
  {
    id: 183,
    text: "As Regras de Beijing (Regras Mínimas das Nações Unidas para a Administração da Justiça Juvenil), adotadas pela ONU em 1985, estabelecem diretrizes para garantir que jovens em conflito com a lei sejam tratados com dignidade, justiça e respeito aos seus direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as diretrizes globais da justiça juvenil.",
    module: ModuleType.MODULO_III
  },
  {
    id: 184,
    text: "As Regras de Havana (Regras Mínimas das Nações Unidas para a Proteção dos Jovens Privados de Liberdade), adotadas em 1990, estabelecem diretrizes internacionais para garantir o respeito aos direitos humanos de adolescentes em privação de liberdade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as normas de proteção em ambiente fechado.",
    module: ModuleType.MODULO_III
  },
  {
    id: 185,
    text: "Segundo a Constituição Federal, todos são iguais perante a lei, com algumas distinções de natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a violabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade e ninguém será submetido a tortura, tão logo poderá ser submetido a tratamento desumano ou degradante.",
    answer: AnswerType.ERRADO,
    explanation: "Houve erro na redação: é 'sem distinção de qualquer natureza' e 'ninguém será submetido a tortura NEM a tratamento desumano'.",
    module: ModuleType.MODULO_III
  },
  {
    id: 186,
    text: "A Constituição, o art. 5º, inciso XLIII afirma que a lei considerará crime afiançável e suscetível de graça ou anistia a prática da tortura, por ele respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem.",
    answer: AnswerType.ERRADO,
    explanation: "Tortura é crime INAFIANÇÁVEL e INSUSCETÍVEL de graça ou anistia.",
    module: ModuleType.MODULO_III
  },
  {
    id: 187,
    text: "O Brasil, desde 1985 assinou a Convenção contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes, que obriga o país a tomar medidas eficazes de caráter legislativo, administrativo, judicial ou de outra natureza, a fim de impedir a prática de atos de tortura em qualquer território sob sua jurisdição.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a adesão brasileira aos tratados anti-tortura.",
    module: ModuleType.MODULO_III
  },
  {
    id: 188,
    text: "A pena para quem comete o crime de tortura, via de regra é de dois a oito anos de reclusão. E mais, quando alguém que tem o dever jurídico de apurar a conduta delituosa (tortura) não o faz, também responde criminalmente, mas por omissão. A pena pela omissão é de detenção de um a quatro anos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a dosimetria da Lei 9.455/97.",
    module: ModuleType.MODULO_III
  },
  {
    id: 189,
    text: "Quando a prática do crime de tortura resulta em lesão corporal de natureza grave ou gravíssima ou se a vítima morre, a tortura passa a ser chamada de qualificada e as penas são menores.",
    answer: AnswerType.ERRADO,
    explanation: "Na tortura qualificada pelo resultado morte ou lesão grave, as penas são MAIORES (reclusão de 8 a 16 anos para morte).",
    module: ModuleType.MODULO_III
  },
  {
    id: 190,
    text: "Nos casos em que a tortura é cometida por agente público ou se o crime foi cometido contra criança, gestante ou adolescente, aplica-se a chamada causa de aumento de pena.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. São as causas de aumento de um sexto a um terço prevista na lei.",
    module: ModuleType.MODULO_III
  },
  {
    id: 191,
    text: "A condenação do agente público, por crime de tortura, implicará na perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. É efeito automático da condenação.",
    module: ModuleType.MODULO_III
  },
  {
    id: 192,
    text: "A Corregedoria no sistema socioeducativo é o setor que acompanha e fiscaliza o trabalho feito dentro das unidades e instituições que atendem adolescentes em cumprimento de medidas socioeducativas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade correcional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 193,
    text: "A principal norma que rege a Corregedoria da SEAS é a Portaria nº 004/2021, que estabelece as atividades correicionais relacionadas à apuração das infrações disciplinares.",
    answer: AnswerType.ERRADO,
    explanation: "A norma atual é a Portaria nº 006/2023.",
    module: ModuleType.MODULO_III
  },
  {
    id: 194,
    text: "Entre as competências da Corregedoria, encontram-se, inspecionar periodicamente o funcionamento dos órgãos da Superintendência organizar, regulamentar e coordenar as comissões de processo sindicantes e de processos administrativos de acordo com a legislação vigentes, dentre outras.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o rol de competências.",
    module: ModuleType.MODULO_III
  },
  {
    id: 195,
    text: "Para executar as competências da corregedoria há o corregedor. O corregedor é the servidor responsável por fiscalizar e acompanhar o trabalho da corregedoria. Ele verifica se as regras estão sendo cumpridas, se há falhas ou irregularidades e se os servidores estão agindo corretamente. Também recebe denúncias, orienta sobre procedimentos e pode abrir investigações quando necessário.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a figura do corregedor.",
    module: ModuleType.MODULO_III
  },
  {
    id: 196,
    text: "Entre as competências do Corregedor, encontram-se, fiscalizar, controlar e orientar, disciplinarmente, as atividades desenvolvidas pelos servidores; realizar sindicância para investigar, identificar e apurar as responsabilidades administrativas por transgressões funcionais praticadas por servidores, dentre outras.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Detalha a atuação funcional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 197,
    text: "Os instrumentos jurídicos correcionais utilizados pela SEAS são: Procedimento Administrativo (PA), Sindicância (SD) e o Processo Administrativo Disciplinar (PAD).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. São as ferramentas de apuração disciplinar.",
    module: ModuleType.MODULO_III
  },
  {
    id: 198,
    text: "Processo Administrativo Disciplinar (PAD): é um procedimento apuratório, aplicável aos servidores públicos, servidores temporários ou agentes públicos e que tem o objetivo de averiguar a autoria ou a existência de irregularidade praticada no serviço público, podendo resultar na aplicação das penalidades disciplinares de advertência, suspensão e demissão, sempre observado o contraditório e a ampla defesa.",
    answer: AnswerType.ERRADO,
    explanation: "O PAD aplica-se a SERVIDORES PÚBLICOS EFETIVOS. Para temporários e outros, os instrumentos seguem ritos simplificados como sindicância de demissão ou processo administrativo próprio.",
    module: ModuleType.MODULO_III
  },
  {
    id: 199,
    text: "Aos profissionais do sistema socioeducativo poderão ser empregadas medidas pedagógicas, de caráter não punitivo, com o objetivo de orientar e regular condutas de baixa complexidade. Como medidas pedagógicas poderão ser aplicados o Termo de Orientação Funcional e o Termo de Ajustamento do Conduta.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Visa educar o servidor antes de punir infrações leves.",
    module: ModuleType.MODULO_III
  },
  {
    id: 200,
    text: "São consideradas sanções disciplinares no âmbito da SEAS: Repreensão, na modalidade advertência, Suspensão até 30 (trinta) dias e a Demissão ou Rescisão Contratual.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme a lei do funcionalismo estadual e regulamentos SEAS.",
    module: ModuleType.MODULO_III
  },

  // MÓDULO IV – SAÚDE E POLÍTICAS SETORIAIS (201 a 230)
  {
    id: 201,
    text: "No Brasil, a Constituição Federal de 1988 estabelece a saúde como direito de todos e dever do Estado e que essa deve ser garantida por meio de políticas sociais e econômicas. O ECA aponta a saúde de crianças e adolescentes como um dever da família, da comunidade, da sociedade e do poder público.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Fundamentação do direito à saúde como universal.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 202,
    text: "O Sistema Único de Saúde (SUS) não é o principal responsável pelo cuidado à saúde dos adolescentes. Os princípios e diretrizes do SUS, previstos na Lei 8.080 de 1990, direcionam para um descuido na perspectiva da universalidade, da integralidade, da equidade com atenção integral por meio de ações e serviços de promoção, proteção e recuperação.",
    answer: AnswerType.ERRADO,
    explanation: "O SUS É o principal responsável. A perspectiva deve ser de CUIDADO e integralidade, não 'descuido'.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 203,
    text: "Acolhimento, escuta e confidencialidade são elementos fundamentais para favorecer o cuidado integral à saúde de adolescentes.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. São os eixos do atendimento humanizado em saúde.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 204,
    text: "A Política Nacional de Atenção Integral à Saúde dos Adolescentes em Conflito com a Lei (PNAISARI) estabelece a necessidade de se priorizar o atendimento de saúde fora das unidades socioeducativas, bem como o fortalecimento da intersetorialidade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A ideia é usar a rede pública de saúde da comunidade para evitar guetização.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 205,
    text: "É necessário que a atenção em saúde aos adolescentes seja humanizada e de qualidade, orientada pelos princípios do SUS, SINASE e ECA, em articulação. Sabendo que o Plano Individual de Atendimento (PIA) é um instrumento fundamental no sistema socioeducativo e nele o eixo saúde deve ser contemplado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O eixo saúde é obrigatório no PIA.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 206,
    text: "As ações de atenção integral aos adolescentes em conflito com a lei devem contemplar somente o acompanhamento do seu crescimento e desenvolvimento físico e psicossocial; a saúde sexual e a saúde reprodutiva; a saúde bucal e por fim a saúde mental.",
    answer: AnswerType.ERRADO,
    explanation: "A palavra 'somente' restringe o cuidado. A PNAISARI prevê 8 ações integrais, incluindo nutrição, visão, vacinação e prevenção de agravos.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 207,
    text: "É importante também a articulação com Conselhos Tutelares e Conselhos Municipais e Estaduais de Defesa dos Direitos de Crianças e Adolescentes e Conselhos de Saúde.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a rede de proteção.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 208,
    text: "O conjunto de diretrizes do Ministério da Saúde para a promoção da saúde e organização dos serviços para a atenção integral à saúde de adolescentes deve ter três eixos fundamentais para viabilização da atenção integral à saúde de adolescentes e jovens: promoção da saúde e prevenção de agravos em adolescentes; ações de assistência e reabilitação de saúde de adolescentes e educação permanente dos trabalhadores(as).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre os pilares da política nacional.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 209,
    text: "Existem dois tipos de assédio sexual: o assédio por chantagem, caracterizado pela exigência de conduta sexual em troca de benefícios ou para evitar prejuízos na relação de trabalho, e o assédio por intimidação ou ambiente hostil, que ocorre quando provocações sexuais inoportunas criam um ambiente ofensivo, intimidatório ou humilhante, prejudicando o desempenho profissional.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as tipologias de assédio sexual no trabalho.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 210,
    text: "A Organização Pan-Americana de Saúde (OPAS) destaca três aspectos no que diz respeito à saúde mental de crianças e adolescentes: 1) Determinantes de Saúde Mental; 2) Promoção e prevenção e 3) Detecção precoce e tratamento. Entre os determinantes citados pela OPAS estão o desejo por autonomia, qualidade de vida, exploração da identidade sexual, acesso às tecnologias e violência.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as diretrizes internacionais de saúde mental.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 211,
    text: "No Brasil, a Rede de Atenção Psicossocial (RAPS), com destaque para os Centros de Atenção Psicossocial Infantojuvenis (CAPSij), as Unidades Básicas de Saúde (UBS) e o Programa Saúde na Escola (PSE), representa a principal estrutura para o cuidado contínuo e intersetorial a essa população.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a estrutura do SUS para saúde mental.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 212,
    text: "A PNAISARI ressalta o papel do vínculo, do acolhimento e da escuta qualificada no cuidado em saúde mental. Para isso, ele irá observar, identificar, acolher, encaminhar, realizar mediações e promover atividades gerais de promoção da saúde e específicas de saúde mental, como ações relacionadas ao incentivo a bullying.",
    answer: AnswerType.ERRADO,
    explanation: "O erro é 'incentivo ao bullying'. O papel é o COMBATE ao bullying e a promoção da autoestima.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 213,
    text: "De acordo com as diretrizes do SINASE (Lei nº 12.594/2012), da PNAISARI (Portaria nº 1.082/2014) e do ECA, o socioeducador desempenha funções em articulação com as equipes interdisciplinares, incluindo a participação na elaboração e acompanhamento do Projeto Terapêutico Singular (PTS) e do Plano Individual de Atendimento (PIA), integrando o cuidado à rotina socioeducativa.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a interdisciplinaridade no cotidiano.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 214,
    text: "A Escola Nacional da Socioeducação (ENS) busca ofertar, de maneira onerosa e parcialmente, um espaço de formação qualificada para os(as) diferentes profissionais que atuam direta ou indiretamente no Sistema Nacional de Atendimento Socioeducativo (SINASE – Resolução do Conanda no 119/2006 e a Lei Federal no 12.594/2012).",
    answer: AnswerType.ERRADO,
    explanation: "A ENS deve ofertar formação de maneira GRATUITA e PERMANENTE.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 215,
    text: "A Escola Nacional da Socioeducação (ENS) surge para oferecer um espaço seguro onde profissionais das medidas socioeducativas (meio aberto, restritivas ou privativas de liberdade) possam qualificar sua prática e aprimorar instrumentos de trabalho, visando a melhoria dos serviços, programas, ações, e políticas voltadas aos adolescentes em cumprimento de medida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a missão da ENS.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 216,
    text: "O termo DST (Doenças Sexualmente Transmissíveis) mudou para IST (Infecções Sexualmente Transmissíveis). “Doenças” remontam a sinais e sintomas visíveis no organismo da pessoa, já as “infecções” podem ter períodos sem sintomas e se manter assim por um tempo, e somente são detectadas por meio de exames laboratoriais. Por isso, o termo IST é o mais adequado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a nomenclatura atual de saúde pública.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 217,
    text: "As manifestações mais comuns das IST (Infecções Sexualmente Transmissíveis), são: verrugas, corrimentos, feridas, HPV e herpes.",
    answer: AnswerType.ERRADO,
    explanation: "As manifestações são verrugas, corrimentos e feridas. HPV e Herpes são as PATOLOGIAS (causas/vírus), não os sintomas propriamente ditos no texto médico.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 218,
    text: "As IST (Infecções Sexualmente Transmissíveis) mais conhecidas são: HIV, Hepatites B e C, Sífilis, HPV, Cancro mole, Clamídia, Tricomoníase, Herpes, Gonorreia e Doença Inflamatória Pélvica (DIP).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta listando as principais infecções vigentes.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 219,
    text: "O HIV (Vírus da Imunodeficiência Humana) é o agente que compromete o sistema imunológico, afetando principalmente as células de defesa CD4+.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a biologia do vírus.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 220,
    text: "A AIDS (Síndrome da Imunodeficiência Adquirida) é a fase mais avançada da infecção causada pelo vírus HIV, caracterizada por uma profunda deficiência do sistema imunológico, que torna o organismo vulnerável a infecções oportunistas. Nesse estágio, a ausência de tratamento adequado pode levar a complicações severas e até ao óbito.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a progressão da doença.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 221,
    text: "O HPV é uma infecção sexualmente transmissível (IST) causada pela bactéria Treponema pallidum, que pode afetar todo o corpo e evolui em fases, podendo apresentar manifestações clínicas distintas, com complicações graves a longo prazo, incluindo neurológicas, cardiovasculares e até a morte.",
    answer: AnswerType.ERRADO,
    explanation: "O HPV é causado por VÍRUS. A bactéria Treponema pallidum causa a SÍFILIS.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 222,
    text: "A tricomoníase é uma infecção sexualmente transmissível (IST) causada pelo protozoário flagelado Trichomonas vaginalis. É considerada a IST não viral mais comum no mundo, afetando principalmente mulheres em idade reprodutiva. No Brasil, estima-se que até 5% da população possa estar infectada, com maior prevalência em populações vulneráveis.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o protozoário.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 223,
    text: "A gonorreia é uma infecção sexualmente transmissível (IST) causada pela bactéria Neisseria gonorrhoeae, também conhecida como gonococo. Essa bactéria afeta principalmente as mucosas do trato genital, reto e garganta, podendo também atingir os olhos em casos raros (BRASIL, 2020; OMS, 2022). O diagnóstico da gonorreia é essencial para evitar complicações graves, como infertilidade, doença inflamatória pélvica (DIP) e artrite gonocócica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a gonorreia.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 224,
    text: "O assédio sexual está relacionado ao ambiente de trabalho e é definido por comportamentos abusivos, recorrentes e duradouros, que submetem o empregado a situações humilhantes, constrangedoras ou vexatórias enquanto desempenha suas atividades. Essas ações, realizadas de maneira intencional ou sistemática, violam a dignidade, a integridade psíquica e a estabilidade emocional do profissional, afetando o ambiente de trabalho e podendo causar danos significativos à saúde mental e física da pessoa.",
    answer: AnswerType.ERRADO,
    explanation: "Esta é a definição de ASSÉDIO MORAL. O assédio sexual envolve comportamento de natureza sexual indesejada.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 225,
    text: "O assédio moral é qualquer comportamento de natureza sexual, verbal, escrita, gestual ou física, que tenha como objetivo obter favorecimento sexual ou constranger alguém. Pode ocorrer no ambiente de trabalho, acadêmico ou social.",
    answer: AnswerType.ERRADO,
    explanation: "Esta é a definição de ASSÉDIO SEXUAL.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 226,
    text: "A COVID-19 é provocada pelo vírus SARS-CoV-2, um coronavírus que foi identificado pela primeira vez em dezembro de 2019, na cidade de Wuhan, na China. Em janeiro de 2020, a Organização Mundial da Saúde (OMS) classificou o surto como uma Emergência de Saúde Pública de Importância Internacional. Devido à rápida propagação global, foi posteriormente classificado como pandemia.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o histórico da COVID-19.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 227,
    text: "A Endemia ocorre: quando uma doença se torna recorrente em uma região, com aumento de casos em determinada época do ano.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o conceito de endemia.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 228,
    text: "A influenza é uma infecção respiratória aguda provocada por vírus da família Orthomyxoviridae. Os tipos A e B são os mais frequentes em humanos, com o tipo A sendo o mais usual e causador de epidemias e pandemias.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a gripe.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 229,
    text: "De acordo com a Organização Mundial da Saúde (OMS, 2022), drogas são compostos somente sintéticos que alteram as funções físicas, cognitivas ou comportamentais do organismo quando introduzidos, independentemente de sua legalidade. O uso problemático dessas substâncias pode afetar a saúde, a vida social e o bem-estar pessoal.",
    answer: AnswerType.ERRADO,
    explanation: "Drogas são compostos NATURAIS OU SINTÉTICOS. A palavra 'somente' invalida o item.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 230,
    text: "A Política Nacional sobre Drogas (PNAD) é o conjunto de diretrizes oficiais do Governo Federal para lidar com o uso, posse, produção e tráfico de substâncias psicoativas, bem como mitigar os impactos sociais e de saúde associados ao seu consumo. Regulamentada principalmente pela Lei nº 11.343/2006, a PNAD orienta ações em saúde, assistência social, educação e segurança pública, buscando equilíbrio entre cuidado e repressão.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a PNAD.",
    module: ModuleType.MODULO_IV
  }
];
