import { Question, AnswerType, ModuleType } from './types';

export const QUESTIONS: Question[] = [
  // --- MÓDULO I - PARTE 1: CONCEITOS GERAIS (40 QUESTÕES) ---
  {
    id: 1,
    text: "O Estatuto da Criança e do Adolescente (ECA), Lei nº 8.069/1990, adota a Doutrina da Situação Irregular, focando apenas nos menores em conflito com a lei.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O ECA adota a Doutrina da Proteção Integral, considerando todas as crianças e adolescentes sujeitos de direitos.",
    module: ModuleType.MODULO_I
  },
  {
    id: 2,
    text: "Segundo o ECA, considera-se criança a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Definição legal estabelecida no Art. 2º do Estatuto.",
    module: ModuleType.MODULO_I
  },
  {
    id: 3,
    text: "A aplicação de medidas socioeducativas visa, primordialmente, à punição do adolescente pelo ato infracional cometido.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. As medidas têm caráter pedagógico e sancionatório, visando a responsabilização e integração social, não apenas punição.",
    module: ModuleType.MODULO_I
  },
  {
    id: 4,
    text: "O princípio da brevidade exige que a medida socioeducativa de internação tenha a menor duração possível, necessária para o alcance dos objetivos pedagógicos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A privação de liberdade deve ser breve e excepcional.",
    module: ModuleType.MODULO_I
  },
  {
    id: 5,
    text: "A excepcionalidade determina que a internação só deve ser aplicada quando não houver outra medida adequada.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A internação é a ultima ratio (último recurso) do sistema.",
    module: ModuleType.MODULO_I
  },
  {
    id: 6,
    text: "Os adolescentes portadores de doença ou deficiência mental receberão tratamento individual e especializado, em local adequado às suas condições.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Garantia de direito à saúde e tratamento adequado.",
    module: ModuleType.MODULO_I
  },
  {
    id: 7,
    text: "A medida de prestação de serviços à comunidade consiste na realização de tarefas gratuitas de interesse geral, por período não excedente a seis meses.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Conforme Art. 117 do ECA.",
    module: ModuleType.MODULO_I
  },
  {
    id: 8,
    text: "A liberdade assistida será fixada pelo prazo mínimo de três meses, podendo ser prorrogada, revogada ou substituída a qualquer tempo.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O prazo mínimo é de SEIS meses (Art. 118, § 2º ECA).",
    module: ModuleType.MODULO_I
  },
  {
    id: 9,
    text: "O regime de semiliberdade pode ser determinado desde o início, ou como forma de transição para o meio aberto, possibilitando a realização de atividades externas.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Permite escolarização e profissionalização externa.",
    module: ModuleType.MODULO_I
  },
  {
    id: 10,
    text: "A internação provisória pode ser decretada pelo prazo máximo de 90 dias.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O prazo máximo e improrrogável é de 45 dias.",
    module: ModuleType.MODULO_I
  },
  {
    id: 11,
    text: "O Plano Individual de Atendimento (PIA) é um instrumento obrigatório para a execução das medidas socioeducativas de prestação de serviço à comunidade, liberdade assistida, semiliberdade e internação.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O PIA norteia o trabalho pedagógico com o adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 12,
    text: "A escolarização e a profissionalização são obrigatórias apenas para adolescentes em regime de semiliberdade, sendo facultativas na internação.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. São obrigatórias também na internação, devendo ocorrer preferencialmente fora ou dentro da unidade.",
    module: ModuleType.MODULO_I
  },
  {
    id: 13,
    text: "O SINASE (Sistema Nacional de Atendimento Socioeducativo) é coordenado pela União, em articulação com os Estados, o Distrito Federal e os Municípios.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É um sistema descentralizado e participativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 14,
    text: "A municipalização do atendimento socioeducativo prioriza as medidas de meio aberto (PSC e LA).",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Os municípios são responsáveis pela execução das medidas em meio aberto.",
    module: ModuleType.MODULO_I
  },
  {
    id: 15,
    text: "É permitido o trabalho forçado para adolescentes em cumprimento de medida socioeducativa, como forma de disciplina.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O trabalho forçado é vedado pela Constituição e pelo ECA.",
    module: ModuleType.MODULO_I
  },
  {
    id: 16,
    text: "O respeito à condição peculiar de pessoa em desenvolvimento é um princípio fundamental na aplicação das medidas.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Reconhece que o adolescente está em formação física e psíquica.",
    module: ModuleType.MODULO_I
  },
  {
    id: 17,
    text: "As entidades de atendimento socioeducativo devem oferecer instalações físicas em condições adequadas de habitabilidade, higiene, salubridade e segurança.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A dignidade do ambiente é essencial para a socioeducação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 18,
    text: "O uso de algemas em adolescentes é regra geral para garantir a segurança da unidade.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O uso de algemas é excepcional (Súmula Vinculante 11), apenas em casos de resistência ou perigo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 19,
    text: "A revista vexatória é uma prática permitida para evitar a entrada de ilícitos nas unidades.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A revista vexatória é proibida, devendo-se usar equipamentos eletrônicos e revista humanizada.",
    module: ModuleType.MODULO_I
  },
  {
    id: 20,
    text: "O adolescente tem direito a receber visitas, ao menos, semanalmente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O vínculo familiar é essencial para a ressocialização.",
    module: ModuleType.MODULO_I
  },
  {
    id: 21,
    text: "A medida de advertência consiste em admoestação verbal, que será reduzida a termo e assinada.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É a medida mais branda, aplicada em atos leves.",
    module: ModuleType.MODULO_I
  },
  {
    id: 22,
    text: "A obrigação de reparar o dano pode envolver a restituição da coisa ou o ressarcimento do prejuízo à vítima.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Busca compensar a vítima pelo ato patrimonial.",
    module: ModuleType.MODULO_I
  },
  {
    id: 23,
    text: "O adolescente privado de liberdade não tem direito à assistência religiosa.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A liberdade de crença e assistência religiosa são garantidas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 24,
    text: "A avaliação da medida socioeducativa deve ocorrer, no máximo, a cada seis meses.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Para verificar a necessidade de manutenção ou substituição da medida.",
    module: ModuleType.MODULO_I
  },
  {
    id: 25,
    text: "O Conselho Tutelar é o órgão responsável por aplicar medidas socioeducativas de internação.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Apenas a autoridade judiciária (Juiz) pode aplicar medidas socioeducativas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 26,
    text: "A remissão pode ser concedida pelo Ministério Público antes de iniciado o procedimento judicial.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O MP pode conceder remissão como forma de exclusão do processo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 27,
    text: "O princípio da legalidade determina que nenhuma medida pode ser aplicada sem prévia cominação legal.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Nullum crimen, nulla poena sine lege aplica-se ao sistema socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 28,
    text: "O atendimento socioeducativo deve ser personalizado, respeitando a identidade, história e necessidades do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Evita-se a massificação do atendimento.",
    module: ModuleType.MODULO_I
  },
  {
    id: 29,
    text: "É dever do Estado assegurar à criança e ao adolescente ensino fundamental, obrigatório e gratuito.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Direito constitucional e do ECA.",
    module: ModuleType.MODULO_I
  },
  {
    id: 30,
    text: "A falta de recursos financeiros constitui motivo suficiente para a perda ou suspensão do pátrio poder.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A pobreza não é motivo para retirada dos filhos (Art. 23 ECA).",
    module: ModuleType.MODULO_I
  },
  {
    id: 31,
    text: "O adolescente civilmente identificado não será submetido a identificação compulsória, salvo hipóteses legais.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Proteção contra constrangimentos desnecessários.",
    module: ModuleType.MODULO_I
  },
  {
    id: 32,
    text: "A apreensão de qualquer adolescente deve ser comunicada imediatamente à autoridade judiciária e à família.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Garantia contra prisões ilegais ou secretas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 33,
    text: "O adolescente tem direito a ser ouvido pessoalmente pela autoridade competente e a solicitar a presença de seus pais ou responsáveis.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Direito à oitiva e acompanhamento.",
    module: ModuleType.MODULO_I
  },
  {
    id: 34,
    text: "A medida de internação não comporta prazo determinado, mas sua manutenção deve ser reavaliada periodicamente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Não há sentença de tempo fixo (ex: 'vai ficar 2 anos'), o tempo depende da avaliação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 35,
    text: "O limite máximo de cumprimento da medida de internação é de 5 anos.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O limite máximo é de 3 anos, com liberação compulsória aos 21 anos.",
    module: ModuleType.MODULO_I
  },
  {
    id: 36,
    text: "A participação da sociedade civil na formulação das políticas de atendimento é vedada.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A participação social é um princípio diretivo do ECA e SINASE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 37,
    text: "O socioeducador deve atuar como mediador de conflitos, utilizando o diálogo como principal ferramenta.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A mediação previne a violência e educa.",
    module: ModuleType.MODULO_I
  },
  {
    id: 38,
    text: "O adolescente em conflito com a lei é isento de qualquer responsabilidade pelos seus atos.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Ele é RESPONSABILIZADO através das medidas socioeducativas, embora seja penalmente inimputável.",
    module: ModuleType.MODULO_I
  },
  {
    id: 39,
    text: "A Justiça Restaurativa foca na reparação do dano e na restauração das relações rompidas pelo conflito.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Paradigma que vai além da punição retributiva.",
    module: ModuleType.MODULO_I
  },
  {
    id: 40,
    text: "O ECA completa a proteção integral estabelecida na Constituição Federal de 1988.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O ECA regulamenta o Art. 227 da Constituição.",
    module: ModuleType.MODULO_I
  },

  // --- MÓDULO I - PARTE 2: ESPECÍFICAS SEAS/CE (107 QUESTÕES) ---
  // (IDs 41 a 147 - Totalizando 147 no Módulo I)
  {
    id: 41,
    text: "A Superintendência do Sistema Estadual de Atendimento Socioeducativo SEAS - Lei Estadual nº 16.040/2016 no Ceará exige uma reflexão sobre o papel das instituições públicas na estruturação de políticas voltadas à responsabilização de adolescentes em conflito com a lei.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A Lei 16.040 instituiu a SEAS no Ceará, focando na especialização da gestão socioeducativa.",
    module: ModuleType.MODULO_I
  },
  {
    id: 42,
    text: "O Seas representa uma iniciativa do Estado do Ceará para institucionalizar e especializar a gestão da política socioeducativa, organizando o sistema estadual conforme as diretrizes nacionais estabelecidas pela Sinase Lei Federal nº 12.594/2012.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A SEAS busca alinhar o atendimento estadual com as normas federais do SINASE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 43,
    text: "A governança pública que não apenas execute medidas previstas em lei, mas que também promova a articulação Intersetorial e a qualificação do atendimento.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A articulação intersetorial é fundamental para garantir os direitos integrais do adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 44,
    text: "O Seas tem conexão com os dispositivos da Constituição Federal (CF), do Estatuto da Criança e do Adolescente (ECA) e da própria Lei do Sistema Nacional de Atendimento Socioeducativo (SINASE). Tais instrumentos estabelecem os fundamentos para a organização do atendimento socioeducativo como uma política pública pautada pela legalidade, pela Prioridade absoluta e pelo Proteção integral.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estes são os marcos legais e princípios que dão base à existência da SEAS.",
    module: ModuleType.MODULO_I
  },
  {
    id: 45,
    text: "Constituição Federal (CF) estabelece os Princípios dos direitos fundamentais e a Prioridade absoluta da criança e do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O artigo 227 da CF é a base da prioridade absoluta.",
    module: ModuleType.MODULO_I
  },
  {
    id: 46,
    text: "Estatuto da Criança e do Adolescente (ECA) regulamenta a Execução das medidas socioeducativas em âmbito nacional.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Quem regulamenta a execução das medidas de forma detalhada e operacional é a Lei do SINASE (Lei 12.594/2012).",
    module: ModuleType.MODULO_I
  },
  {
    id: 47,
    text: "A criação Seas não contribuir em nada para a superação de práticas meramente punitivas e desconsiderando a consolidação de uma Socioeducação orientada pela pedagogia da responsabilização.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A criação da SEAS visa justamente superar o caráter punitivo em prol da socioeducação pedagógica.",
    module: ModuleType.MODULO_I
  },
  {
    id: 48,
    text: "O Papel da Seas será formação de profissionais, supervisão das unidades e articulação com outras políticas públicas, articulação Intersetorial.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estas competências estão previstas no marco de gestão da política socioeducativa estadual.",
    module: ModuleType.MODULO_I
  },
  {
    id: 49,
    text: "A articulação Intersetorial, envolvendo políticas públicas de Saúde, Educação e Assistência Social, orientados pelos princípios Proteção Parcial do adolescente em cumprimento de medida.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O princípio correto é o da Proteção Integral, e não proteção parcial.",
    module: ModuleType.MODULO_I
  },
  {
    id: 50,
    text: "A Seas é responsável por promover a articulação Intersetorial para efetivar os direitos e a proteção integral, integrando o atendimento socioeducativo com outras políticas Privadas.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A integração deve ocorrer primordialmente com outras Políticas Públicas, no âmbito do Sistema de Garantia de Direitos.",
    module: ModuleType.MODULO_I
  },
  {
    id: 51,
    text: "A Seas é responsável por captar, gerir e Aplicar recursos específicos para a política socioeducativa no Ceará, o que envolve a gestão orçamentária.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Como órgão de gestão, a SEAS possui autonomia orçamentária para a execução da política.",
    module: ModuleType.MODULO_I
  },
  {
    id: 52,
    text: "E o Sinase que coordena a execução das políticas estaduais de atendimento, que inclui as medidas de privação e restrição de liberdade, como internação, semiliberdade e liberdade provisória; e também as medidas socioeducativas, como as de Meio aberto como: liberdade assistida e prestação de serviço à comunidade.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O SINASE é um sistema nacional. A coordenação da execução estadual é da SEAS, e o meio aberto é de responsabilidade municipal.",
    module: ModuleType.MODULO_I
  },
  {
    id: 53,
    text: "As medidas socioeducativas de meio aberto são aplicadas pelo Juiz da Infância e Juventude e executadas pela rede municipal de assistência social (CREAS).",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Liberdade Assistida e PSC são geridas pelos municípios através do CREAS.",
    module: ModuleType.MODULO_I
  },
  {
    id: 54,
    text: "O Sinase é o sistema estadual que estabelece as diretrizes gerais para a execução das medidas socioeducativas, enquanto a SEAS é um órgão municipal específico responsável por gerenciar e executar essas medidas em nível local, seguindo as normas do Sinase.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O SINASE é Nacional, a SEAS é Estadual e o meio aberto é Municipal.",
    module: ModuleType.MODULO_I
  },
  {
    id: 55,
    text: "As medidas de proteção são aplicadas quando há direitos ameaçados ou violados da criança e adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. As medidas de proteção (Art. 101 do ECA) visam garantir direitos violados, independente de ato infracional.",
    module: ModuleType.MODULO_I
  },
  {
    id: 56,
    text: "A Vinculação a uma lógica punitiva, formação inadequada de profissionais e a deficiência das políticas públicas. São alguns dos principais problemas vivenciados por adolescentes e profissionais que atuam nos serviços de medidas socioeducativas. A conjunção desses fatores, dentre outros elementos, faz com que os estabelecimentos onde os meninos são internados se assemelhem ao sistema prisional.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O item descreve desafios reais que a política socioeducativa busca superar.",
    module: ModuleType.MODULO_I
  },
  {
    id: 57,
    text: "Para Maria da Glória Gohn a Socioeducação vai muito além da simples transmissão de conteúdos escolares trata-se de um processo formativo que ocorre em espaços coletivos, muitas vezes fora da escola, e que visa à formação cidadã, emancipatória e crítica dos sujeitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Gohn defende a socioeducação como educação não formal voltada para a cidadania.",
    module: ModuleType.MODULO_I
  },
  {
    id: 58,
    text: "Para Gohn, a Socioeducação: está profundamente ligada à Educação formal, aquela que acontece em organizações não governamentais, movimentos sociais, projetos comunitários, conselhos gestores e outras formas de organização da sociedade civil.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Para a autora, a socioeducação está ligada à Educação NÃO FORMAL em espaços coletivos.",
    module: ModuleType.MODULO_I
  },
  {
    id: 59,
    text: "A Socioeducação: constitui um campo de atuação que ultrapassa a ideia de punição. Baseada na Responsabilização com dignidade e no reconhecimento da adolescência como uma fase peculiar do desenvolvimento humano, ela se ancora em Princípios Pedagógicos e em políticas de garantia de direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O foco é pedagógico e na condição peculiar de pessoa em desenvolvimento.",
    module: ModuleType.MODULO_I
  },
  {
    id: 60,
    text: "O Seas é responsável para organizar a execução das medidas socioeducativas.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Embora execute, o termo 'organizar' as diretrizes gerais cabe ao SINASE (Nível Federal).",
    module: ModuleType.MODULO_I
  },
  {
    id: 61,
    text: "O ECA: Institui Princípios da Proteção integral e Direitos Fundamentais aplicáveis às crianças e adolescentes em geral.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O ECA é a lei geral de direitos da infância e juventude.",
    module: ModuleType.MODULO_I
  },
  {
    id: 62,
    text: "Sinase detalha, de maneira operacional e normativa, a execução das medidas socioeducativas, estabelecendo diretrizes para o funcionamento das unidades, a formação dos profissionais e a atuação interinstitucional.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O SINASE complementa o ECA no que tange à execução das medidas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 63,
    text: "Um adolescente em cumprimento de medida de internação tem acesso à escolarização formal dentro e fora da unidade.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A educação é direito fundamental e deve ser garantida no sistema socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 64,
    text: "Tanto eca quanto o Sinase garantem o direito à Educação como parte do atendimento integral, a ausência desse direito compromete os objetivos pedagógicos da medida.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Sem educação, a medida torna-se meramente punitiva, perdendo o caráter socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 65,
    text: "A Socioeducação compreendida como um Processo educativo, Jurídico e Social que visa à Responsabilização do adolescente com Base nos Direitos Humanos, assegurando dignidade, Proteção integral e Oportunidades de reintegração social.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Esta é a definição moderna e humanista da socioeducação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 66,
    text: "O compromisso com os Direitos Humanos é um princípio estruturante e negociável de toda a política de Socioeducação, devendo pautar todas as ações institucionais.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Os Direitos Humanos são inegociáveis e devem guiar todo o atendimento.",
    module: ModuleType.MODULO_I
  },
  {
    id: 67,
    text: "A Responsabilização do adolescente não se confunde com punição, conforme previsto no estatuto da Criança e do Adolescente (ECA) Lei nº 8.069/1990, o processo de Responsabilização do adolescente deve ocorrer dentro dos parâmetros legais que garantem o Contraditório, a Ampla defesa, a Prioridade absoluta dos direitos e a Prevalência do interesse superior da somente da criança.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O interesse superior aplica-se à criança E ao adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 68,
    text: "O Sistema Nacional de Atendimento Socioeducativo (Sinase), instituído pela Lei federal nº 12.594/2012, detalha a forma da execução medidas socioeducativas, organiza o atendimento em Dimensões: Técnica, Administrativa e Pedagógica, definindo responsabilidades de cada ente federativo e garantindo que o foco da execução esteja na formação cidadã, e na contenção disciplinar.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O SINASE prevê a formação cidadã como eixo, mantendo o controle disciplinar necessário.",
    module: ModuleType.MODULO_I
  },
  {
    id: 69,
    text: "A Superintendência do Sistema Estadual de Atendimento Socioeducativo Seas responsável pela implementação das medidas socioeducativas em Meio fechado e Semiliberdade, e o Município é responsável pelas medidas socioeducativas de Meio Aberto.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Esta é a divisão de competências federativas estabelecida pelo SINASE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 70,
    text: "A Superintendência do Sistema Estadual de Atendimento Socioeducativo Seas e o Serviço Especializado em Abordagem Social, previsto no Sistema Único de Assistência Social (SUAS) trata-se de estruturas semelhantes.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. São serviços e estruturas distintas: um foca em medidas socioeducativas, o outro em assistência social de rua.",
    module: ModuleType.MODULO_I
  },
  {
    id: 71,
    text: "Os Direitos humanos são a Base de toda a estrutura normativa e institucional da Socioeducação eles orientam os limites das medidas aplicadas e fundamentam a necessidade de que essas medidas contribuam para a inclusão, a Autonomia e a Emancipação dos adolescentes.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Sem direitos humanos, a socioeducação perde seu propósito emancipador.",
    module: ModuleType.MODULO_I
  },
  {
    id: 72,
    text: "Medidas Socioeducativas estão alinhadas aos princípios da Proteção Integral e da Dignidade da Pessoa Humana.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O adolescente em cumprimento de medida mantém todos os direitos não atingidos pela sentença.",
    module: ModuleType.MODULO_I
  },
  {
    id: 73,
    text: "Medidas Socioeducativas são aplicadas por Ato Infracional e possuem natureza pedagógica e de responsabilização, diferenciando-se das Medidas de Proteção que são exclusivamente protetivas.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. São naturezas distintas: uma decorre de ato infracional, a outra de violação de direitos.",
    module: ModuleType.MODULO_I
  },
  {
    id: 74,
    text: "A medida de proteção à criança é aplicada quando seus direitos são ameaçados ou violados por ação ou omissão dos pais, responsáveis, sociedade ou Estado, ou devido à própria conduta da criança, abrangendo situações de abandono, negligência, violência, exploração, ou quando o ambiente compromete seu desenvolvimento.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Reflete o artigo 98 do Estatuto da Criança e do Adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 75,
    text: "A Seas articula diversas ações como coordena unidades de Internação e Semiliberdade, forma Profissionais que atuam no sistema, elabora políticas pedagógicas e de reintegração social.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estas são as funções administrativas e pedagógicas da Superintendência.",
    module: ModuleType.MODULO_I
  },
  {
    id: 76,
    text: "Socioeducador atua nas Organizações Não Governamentais (ONGs), Projetos Comunitários, Escolas e Instituições Sociais. Seu foco é a educação não formal, trabalhando com Pessoas em situação de vulnerabilidade Social para promover inclusão, cidadania e autonomia. Ele pode atuar com Crianças, Adolescentes, Adultos e Idosos, desenvolvendo atividades culturais, recreativas e educativas.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A descrição refere-se ao Educador Social. O Socioeducador atua especificamente no sistema de medidas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 77,
    text: "Educador Social está mais ligado ao Sistema Socioeducativo, especialmente no atendimento a adolescentes em conflito com a lei, seu trabalho ocorre em unidades de Internação ou Semiliberdade, onde busca reintegrar esses jovens à sociedade por meio de ações pedagógicas, disciplinares e de Ressocialização.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O profissional específico do sistema de medidas é o Socioeducador.",
    module: ModuleType.MODULO_I
  },
  {
    id: 78,
    text: "Socioeducador segue diretrizes do Estatuto da Criança e do Adolescente (ECA) e trabalha diretamente na execução das medidas socioeducativas e educador social tem um campo de atuação mais amplo e Preventivo.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O socioeducador é o agente executor das diretrizes do ECA/SINASE nas unidades.",
    module: ModuleType.MODULO_I
  },
  {
    id: 79,
    text: "O Sinase substitui o eca no que diz respeito às disposições sobre adolescentes em conflito com a lei.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O SINASE complementa e detalha o ECA, mas não o substitui.",
    module: ModuleType.MODULO_I
  },
  {
    id: 80,
    text: "A Seas foi criada em 2012, por meio da Lei Estadual nº 15.276/2012, para organizar o atendimento socioeducativo no Ceará segundo as diretrizes nacionais da lei do Sinase.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A SEAS foi criada em 2016 pela Lei 16.040. A lei citada em 2012 refere-se a outra estrutura.",
    module: ModuleType.MODULO_I
  },
  {
    id: 81,
    text: "A Constituição Federal, o Estatuto da Criança e do Adolescente (ECA) e a Lei do SINASE não têm relação direta com a estrutura normativa da SEAS.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Estas leis são justamente a base fundamental da estrutura normativa da SEAS.",
    module: ModuleType.MODULO_I
  },
  {
    id: 82,
    text: "A Socioeducação tem como objetivo principal a punição dos adolescentes infratores.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O objetivo primordial é a socioeducação e responsabilização pedagógica, não a punição.",
    module: ModuleType.MODULO_I
  },
  {
    id: 83,
    text: "A Constituição Federal, o ECA e a Lei do SINASE são marcos legais fundamentais da Socioeducação.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Juntos, formam o tripé jurídico do sistema socioeducativo brasileiro.",
    module: ModuleType.MODULO_I
  },
  {
    id: 84,
    text: "Socioeducação é mais do que a execução de medidas impostas judicialmente, ela constitui um espaço de atuação pedagógica que exige Escuta, Vínculo, Compromisso ético e Reconhecimento da singularidade de cada adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A socioeducação foca na transformação do sujeito através da relação educativa.",
    module: ModuleType.MODULO_I
  },
  {
    id: 85,
    text: "A Pedagogia da Presença se torna uma referência importante nesta formação, ao propor uma Prática Educativa Baseada na Atenção, na Sensibilidade e na Construção de Relações Respeitosas entre educadores e adolescentes.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A Pedagogia da Presença é essencial para criar o vínculo necessário à mudança.",
    module: ModuleType.MODULO_I
  },
  {
    id: 86,
    text: "As Competências dos Profissionais da Socioeducação são a escuta qualificada, mediação de conflitos, respeito à diversidade, promoção da autonomia juvenil.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estas habilidades são cruciais para o manejo cotidiano nas unidades.",
    module: ModuleType.MODULO_I
  },
  {
    id: 87,
    text: "Os Avanços Legislativos como a Promulgação do Sinase e a Instituição do Eca.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O item está incompleto ou sugere que são apenas esses, omitindo a CF/88 como marco inicial.",
    module: ModuleType.MODULO_I
  },
  {
    id: 88,
    text: "O Protagonismo Juvenil como Princípio Norteador de Práticas Pedagógicas que não reconhecem os adolescentes como Sujeitos de direitos e agentes capazes de participar ativamente na construção de seus próprios projetos de vida.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O protagonismo juvenil RECONHECE o adolescente como sujeito de direitos.",
    module: ModuleType.MODULO_I
  },
  {
    id: 89,
    text: "O Protagonismo Juvenil rompe com lógicas autoritárias e reforça o potencial emancipador da educação.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Coloca o jovem no centro de seu próprio processo de mudança.",
    module: ModuleType.MODULO_I
  },
  {
    id: 90,
    text: "O trabalho socioeducativo exige mais do que o domínio técnico e normativo, requer uma postura ética e pedagógica que se concretize no cotidiano das relações com os adolescentes em cumprimento de medidas.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A técnica sem a ética pedagógica falha no processo humano de socioeducação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 91,
    text: "Para Skliar, Pedagogia da Presença não é só apenas a presença física, mas implica atenção, escuta, reconhecimento e disponibilidade genuína diante.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estar presente é estar disponível para o outro.",
    module: ModuleType.MODULO_I
  },
  {
    id: 92,
    text: "A Pedagogia da Presença assume uma postura de acolhimento ético e de controle.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A Pedagogia da Presença foca no acolhimento e vínculo, não no controle repressivo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 93,
    text: "A Socioeducação significa estar com o adolescente de maneira autêntica, valorizando sua singularidade e criando condições para a escuta ativa e para o desenvolvimento da autonomia.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O respeito à individualidade é base para a construção do projeto de vida.",
    module: ModuleType.MODULO_I
  },
  {
    id: 94,
    text: "A Pedagogia da Presença torna-se, portanto, um instrumento pedagógico capaz de Produzir Vínculo, elemento central para a eficácia de qualquer medida socioeducativa, sem vínculo, a ação educativa corre o risco, de se tornar burocrática, distante ou, sem limite e autoritária.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O vínculo é o que permite a influência educativa do socioeducador.",
    module: ModuleType.MODULO_I
  },
  {
    id: 95,
    text: "São Competências Fundamentais Profissionais Socioeducativos Empatia e escuta qualificada, Gestão de conflitos e mediação, Postura ética e Antidiscriminatória, Reflexividade e Autocrítica e Protagonismo juvenil.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estas são as bases para um atendimento humanizado e seguro.",
    module: ModuleType.MODULO_I
  },
  {
    id: 96,
    text: "Um adolescente se recusa a participar das atividades escolares na unidade a Pedagogia da Presença propõe uma abordagem disciplinar que busque compreender os motivos da recusa, sem valorizar sua fala e sem envolve-lo na construção de alternativas.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A pedagogia da presença DEVE valorizar a fala e a escuta para entender o adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 97,
    text: "Pedagogia da Presença propõe uma abordagem que envolva a escuta, a educação e o reconhecimento do adolescente como sujeito de direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Opõe-se à pedagogia da ausência ou do silenciamento.",
    module: ModuleType.MODULO_I
  },
  {
    id: 98,
    text: "A Pedagogia da Presença é uma Proposta ético-pedagógica que desloca o foco da transmissão de conteúdos para a relação humana como núcleo do processo educativo.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A relação é o motor principal da transformação socioeducativa.",
    module: ModuleType.MODULO_I
  },
  {
    id: 99,
    text: "Segundo Skliar, estar presente não significa apenas ocupar o mesmo espaço físico que o educando. Trata-se de estar disponível afetiva, ética e intelectualmente, com disposição para ouvir com atenção, reconhecer a singularidade de cada sujeito e construir vínculos autênticos baseados no Respeito e na Dignidade.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É a chamada presença 'pedagógica'.",
    module: ModuleType.MODULO_I
  },
  {
    id: 100,
    text: "Os Princípios Centrais da Pedagogia da Presença são escuta qualificada, reconhecimento do outro como sujeito de direito, construção de vínculos, coexistência pedagógica.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estes elementos sustentam o atendimento individualizado.",
    module: ModuleType.MODULO_I
  },
  {
    id: 101,
    text: "A compreensão do atendimento socioeducativo no Brasil exige um olhar atento sobre sua trajetória histórica, marcada por ambiguidades, avanços e desafios, durante décadas, o Sistema foi estruturado em torno de práticas punitivas e institucionalizastes, herdeiras de um Modelo assistencialista e Repressivo que via os adolescentes pobres como ameaça social.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Passamos do modelo de 'menorismo' punitivo para o da 'proteção integral'.",
    module: ModuleType.MODULO_I
  },
  {
    id: 102,
    text: "O Marco de Inflexão ocorre com a Promulgação do Superintendência do Sistema Estadual de Atendimento Socioeducativo, em 2016, que introduz a doutrina da Proteção Integral e reconhece crianças e adolescentes como sujeitos de direitos.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A Doutrina da Proteção Integral foi introduzida pela Constituição Federal de 1988 e pelo ECA em 1990.",
    module: ModuleType.MODULO_I
  },
  {
    id: 103,
    text: "O Estatuto da Criança e do Adolescente (ECA) Lei Federal nº 12.594/2012, estabelece parâmetros para a Execução das Medidas socioeducativas, reforçando o Caráter Pedagógico da Socioeducação.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A Lei Federal nº 12.594/2012 é a Lei do SINASE, não o ECA (que é a Lei 8.069/1990).",
    module: ModuleType.MODULO_I
  },
  {
    id: 104,
    text: "Apesar dos avanços normativos, muitos desafios permanecem na implementação efetiva das políticas socioeducativas, entre eles, destacam-se Precariedade das estruturas físicas das unidades Rotatividade, baixa formação dos profissionais, ausência de articulação com outras políticas públicas, Permanência de práticas violadoras de direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A lacuna entre a lei e a prática ainda é um desafio sistêmico.",
    module: ModuleType.MODULO_I
  },
  {
    id: 105,
    text: "Como destaca Paulo Freire, a Educação só é libertadora quando reconhece o Educando Como Sujeito ativo do Processo Formativo.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Na socioeducação, o jovem deve ser sujeito, não objeto da medida.",
    module: ModuleType.MODULO_I
  },
  {
    id: 106,
    text: "O fortalecimento do Protagonismo Juvenil surge como uma estratégia fundamental o protagonismo juvenil não pode ser entendido apenas como participação pontual em atividades, mas como o reconhecimento do adolescente como agente de sua própria transformação, isso implica promover sua voz nos processos pedagógicos, valorizar seus Saberes, abrir espaços de escuta e Participação em decisões que envolvem sua rotina e trajetória.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Deve ser uma prática cotidiana de escuta e participação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 107,
    text: "As Estratégias para fomentar o Protagonismo juvenil incluem Assembleias e círculos de diálogos nas unidades socioeducativas, Projetos de intervenção social elaborados pelos próprios adolescentes, Práticas restaurativas que valorizem a reparação e a corresponsabilidade e Educação por projetos centrada em temas significativos para os jovens.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estas ferramentas dão voz ativa ao adolescente.",
    module: ModuleType.MODULO_I
  },
  {
    id: 108,
    text: "Construir Práticas Pedagógicas centradas na escuta, na presença e no protagonismo é apenas um imperativo ético, mas uma exigência ilegal e política no processo de consolidação de um sistema socioeducativo verdadeiramente disciplinar.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O sistema deve ser 'socioeducativo', e não meramente 'disciplinar'.",
    module: ModuleType.MODULO_I
  },
  {
    id: 109,
    text: "A Socioeducação é tratada como campo de tensão entre Práticas Pedagógicas emancipatórias e ações repressivas, ainda fortemente influenciadas por lógicas Punitivistas herdadas do período anterior ao ECA.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Existe uma luta constante entre a lógica do controle e a lógica da educação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 110,
    text: "A Socioeducação deve ser fundamentada na perspectiva crítica e dialética, comprometida com a superação das desigualdades sociais, e que sua efetividade depende da articulação entre Medidas Pedagógicas e Políticas Públicas Intersetoriais.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Deve-se considerar o contexto social do adolescente infrator.",
    module: ModuleType.MODULO_I
  },
  {
    id: 111,
    text: "A introdução de uma lógica educativa e de responsabilização pautada em direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É o objetivo central da reforma do atendimento socioeducativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 112,
    text: "Socioeducação não se limita a um único campo do conhecimento, mas se constrói a partir da intersecção entre diversas áreas, como Educação, Psicologia, Direito, Assistência social e Segurança pública.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É uma prática necessariamente interdisciplinar.",
    module: ModuleType.MODULO_I
  },
  {
    id: 113,
    text: "A Justiça Restaurativa e os Círculos de Paz promovem: a reparação de danos, o fortalecimento de vínculos e a resolução de conflitos, permitindo que adolescentes em conflito com a lei não tenham um papel ativo na reconstrução de suas trajetórias.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A Justiça Restaurativa EXIGE que o adolescente tenha papel ATIVO na reparação.",
    module: ModuleType.MODULO_I
  },
  {
    id: 114,
    text: "A Socioeducação é orientada por dimensões complementares que estruturam sua organização e prática em 5 eixos fundamentais.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O SINASE e as diretrizes do Ceará trabalham com 4 eixos principais (Pedagógico, Jurídico, Administrativo e Intersetorial).",
    module: ModuleType.MODULO_I
  },
  {
    id: 115,
    text: "Os Eixos da Socioeducação São independentes se articulados de maneira separada para melhor atender o adolescente.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Os eixos devem ser articulados de forma INTEGRADA e INTERDEPENDENTE.",
    module: ModuleType.MODULO_I
  },
  {
    id: 116,
    text: "Eixo pedagógico direciona a ação educativa centrada na formação cidadã, na escolarização, na qualificação profissional e no fortalecimento de vínculos comunitários, a prática pedagógica deve ser intencional e articulada com os projetos de vida dos adolescentes, considerando seu contexto sociocultural, dimensão pedagógica deve prevalecer sobre a dimensão administrativa e a dimensão técnica durante a execução da medida socioeducativa, pois dimensão pedagógica é o eixo central do sistema.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O caráter pedagógico é a finalidade principal, devendo guiar as demais gestões.",
    module: ModuleType.MODULO_I
  },
  {
    id: 117,
    text: "Eixo jurídico garante que o processo socioeducativo respeite os princípios constitucionais do Devido processo legal, da Ampla defesa e da legalidade, assegurando o controle judicial da medida aplicada. O atendimento deve respeitar as normas previstas no Estatuto da Criança e do Adolescente (ECA) e observar a excepcionalidade da privação de liberdade.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Garante que a medida não exceda os limites da sentença e da lei.",
    module: ModuleType.MODULO_I
  },
  {
    id: 118,
    text: "Eixo administrativo gestão, infraestrutura, recursos humanos, protocolos e mecanismos de controle e avaliação dos serviços prestados. Envolve planejamento, monitoramento, formação profissional e uso adequado de recursos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É o eixo que garante as condições materiais para a socioeducação ocorrer.",
    module: ModuleType.MODULO_I
  },
  {
    id: 119,
    text: "Eixo Intersetorial articulação entre diferentes políticas públicas saúde, educação, assistência social, cultura, esporte, trabalho promovendo a Proteção Integral do adolescente, a integração entre setores é essencial para garantir a aplicação da disciplina dentro do centro socioeducativo.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. A intersetorialidade visa garantir a PROTEÇÃO INTEGRAL e acesso a direitos, não apenas a disciplina.",
    module: ModuleType.MODULO_I
  },
  {
    id: 120,
    text: "A Transdisciplinaridade é uma abordagem epistemológica e metodológica que ultrapassa a simples justaposição de saberes, ela representa uma atitude de abertura à complexidade e à articulação entre diferentes níveis de realidade, possibilitando uma visão holística dos fenômenos humanos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Busca uma síntese que vá além da soma das disciplinas isoladas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 121,
    text: "Na Socioeducação a Transdisciplinaridade é desnecessária porque o adolescente em conflito com a lei é não atravessado por múltiplas vulnerabilidades como pobreza, racismo, exclusão escolar, violência urbana, ausência de políticas públicas efetivas.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Ela é NECESSÁRIA justamente porque o adolescente É atravessado por múltiplas vulnerabilidades.",
    module: ModuleType.MODULO_I
  },
  {
    id: 122,
    text: "A Transdisciplinaridade não significa diluição dos campos de saber, mas diálogo ativo entre diferentes áreas, com vistas à construção de respostas mais complexas e humanizadas para os desafios vividos pelos adolescentes e profissionais da Socioeducação.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Cada profissional mantém sua base, mas dialoga para uma solução comum.",
    module: ModuleType.MODULO_I
  },
  {
    id: 123,
    text: "A Socioeducação, enquanto política pública, deve ser compreendida como parte integrante do Sistema de Garantia de Direitos da Criança e do Adolescente, isso implica que sua efetividade não se restringe à aplicação de medidas jurídicas, mas depende da integração com ações de saúde, assistência, cultura, educação e justiça.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O sistema socioeducativo não é uma ilha, mas parte de uma rede.",
    module: ModuleType.MODULO_I
  },
  {
    id: 124,
    text: "A ausência de articulação entre os diferentes setores, eixo Intersetorial, produz lacunas no atendimento, Precariza a execução das medidas e enfraquece os vínculos entre adolescentes e comunidade.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Sem intersetorialidade, os direitos de saúde e educação do jovem ficam prejudicados.",
    module: ModuleType.MODULO_I
  },
  {
    id: 125,
    text: "O atendimento socioeducativo seja desenhado com base em planos de contenção disciplinar, que contemplem a singularidade dos sujeitos e promovam sua inserção social.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Deve ser desenhado com base no Plano Individual de Atendimento (PIA), focado em metas pedagógicas.",
    module: ModuleType.MODULO_I
  },
  {
    id: 126,
    text: "Os Eixos estruturantes e a Abordagem disciplinar se articulam para sustentar uma Socioeducação que não seja apenas jurídica, mas pedagógica, comunitária, cultural e emancipatória.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. O foco deve ser na abordagem pedagógica e restaurativa, e não puramente 'disciplinar'.",
    module: ModuleType.MODULO_I
  },
  {
    id: 127,
    text: "A Justiça Restaurativa é uma abordagem que propõe o Reconhecimento do dano causado por um ato infracional e a Reconstrução das relações a partir do Diálogo e da Reparação, envolvendo vítima, ofensor, comunidade e demais partes afetadas.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Foca na reparação à vítima e à comunidade, além do ofensor.",
    module: ModuleType.MODULO_I
  },
  {
    id: 128,
    text: "O Eca define o Ato Infracional como a conduta tipificada como crime ou contravenção penal na lei, cometida por adolescente 12 a 18 anos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Reflete fielmente o artigo 103 do ECA.",
    module: ModuleType.MODULO_I
  },
  {
    id: 129,
    text: "O Programa de Atendimento Socioeducativo deve ser submetido à avaliação externa a cada 2 anos, conforme exigência do SINASE.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A avaliação periódica é norma para garantir a qualidade do sistema.",
    module: ModuleType.MODULO_I
  },
  {
    id: 130,
    text: "A proposta pedagógica da SEAS deve ser revisada anualmente com a participação dos próprios adolescentes atendidos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. A participação dos adolescentes é forma de protagonismo e melhoria do serviço.",
    module: ModuleType.MODULO_I
  },
  {
    id: 131,
    text: "Encaminhamento aos pais ou responsável com termo de responsabilidade ou a programas de apoio à família, a Orientação e apoio temporário para a criança adolescente e família, são Medidas de Proteção aplicada quando seus direitos das crianças são ameaçados ou violados.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. São exemplos de medidas previstas no rol de proteção do ECA.",
    module: ModuleType.MODULO_I
  },
  {
    id: 132,
    text: "A Justiça Restaurativa se orientada por Princípios Voluntariedade e participação ativa, Reconhecimento dos danos e de suas consequências, Busca de soluções reparadoras e transformadoras, Reintegração comunitária, Responsabilização ativa e não punitiva.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Sem voluntariedade, não há prática restaurativa autêntica.",
    module: ModuleType.MODULO_I
  },
  {
    id: 133,
    text: "No Campo da Socioeducação, a Justiça Restaurativa propõe um deslocamento: da punição à responsabilização dialógica, da exclusão à inclusão, da repressão à reparação.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Troca-se o castigo pelo entendimento do impacto do ato.",
    module: ModuleType.MODULO_I
  },
  {
    id: 134,
    text: "Os Círculos de Paz são práticas restaurativas baseadas em tradições africanas e adaptadas para contextos urbanos e institucionais, que consiste na realização de encontros individuais com partes envolvidas em um conflito ou situação de tensão, conduzido facilitador imparcial, treinado.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Os Círculos de Paz mais comuns no sistema são baseados em tradições de povos nativos norte-americanos. Além disso, são circulares (coletivos) e não individuais.",
    module: ModuleType.MODULO_I
  },
  {
    id: 135,
    text: "Os Círculos de Paz Encontros Circulares seguem uma estrutura ritualizada, com abertura, estabelecimento de acordos, uso de objeto da palavra, escuta ativa e encerramento. As perguntas restaurativas guiam o processo, abordando o que aconteceu, quais foram os efeitos e o que pode ser feito para reparar e seguir em frente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O rito garante segurança emocional e respeito ao tempo de fala.",
    module: ModuleType.MODULO_I
  },
  {
    id: 136,
    text: "Como afirmam McCold e Wachtel, a Justiça Restaurativa é mais eficaz quando envolve apenas o ofensor e a vítima, elemento essencial para a Socioeducação como política Intersetorial.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Ela é mais eficaz quando envolve também as comunidades de apoio (família, amigos, etc).",
    module: ModuleType.MODULO_I
  },
  {
    id: 137,
    text: "Os Círculos de Paz vêm sendo aplicados para resolver conflitos entre adolescentes ou entre adolescentes e equipe, trabalhar vivências de violência institucional, fortalecer vínculos familiares e comunitários, apoiar adolescentes na transição para o meio aberto.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É uma ferramenta eficaz de gestão de convivência nas unidades.",
    module: ModuleType.MODULO_I
  },
  {
    id: 138,
    text: "Os Círculos de Paz são Metodologias Participativas, originadas de tradições de justiça comunitária indígena como a dos povos nativos da América do Norte, adaptadas para contextos contemporâneos de justiça restaurativa e resolução não violenta de conflitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Reconhece-se o saber ancestral na resolução de conflitos moderna.",
    module: ModuleType.MODULO_I
  },
  {
    id: 139,
    text: "O Círculos de Paz Constituem: Instrumentos Pedagógicos e Restaurativos, promovendo Diálogo, Escuta Qualificada, Responsabilização mútua, Reconstrução de vínculos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Harmonizam a segurança institucional com o caráter educativo.",
    module: ModuleType.MODULO_I
  },
  {
    id: 140,
    text: "Características centrais dos círculos de paz todos os participantes se sentam em formato circular simbolizando igualdade e inclusão, o uso de um objeto da palavra garante que todos tenham oportunidade de fala e escuta, sem interrupções, são formuladas perguntas restaurativas que conduzem à reflexão sobre o dano, suas consequências e possibilidades de reparação, o processo é voluntário, consensual e Guiado por valores como respeito, responsabilidade, empatia, confiança e pertencimento.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Estes elementos garantem a isonomia entre os participantes.",
    module: ModuleType.MODULO_I
  },
  {
    id: 141,
    text: "A institucionalização dos Círculos de Paz em unidades de atendimento socioeducativo como centros de Internação, Semiliberdade ou meio aberto requer não apenas boa vontade dos profissionais, mas planejamento institucional, formação especializada e respaldo normativo.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Não basta vontade, é preciso estrutura e capacitação técnica.",
    module: ModuleType.MODULO_I
  },
  {
    id: 142,
    text: "A introdução dos Círculos de Paz precisa ser incorporada nos documentos de referência da unidade Projeto Político-Pedagógico (PPP), Plano Individual de Atendimento (PIA) e Diretrizes de convivência e gestão de conflitos.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Deve ser uma política de estado da unidade, e não ação isolada.",
    module: ModuleType.MODULO_I
  },
  {
    id: 143,
    text: "A eficácia dos Círculos de Paz Deve ser acompanhada Qualitativamente e Quantitativamente.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. O monitoramento permite ajustes e comprova a redução de incidentes.",
    module: ModuleType.MODULO_I
  },
  {
    id: 144,
    text: "As Práticas Restaurativas substituem o sistema jurídico na abordagem socioeducativa para melhor atender o socioeducando.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. As práticas restaurativas COMPLEMENTAM o sistema jurídico, não o substituem.",
    module: ModuleType.MODULO_I
  },
  {
    id: 145,
    text: "Os Círculos de Paz retratam uma abordagem humanizadora, antagônica aos métodos punitivos, priorizando a escuta qualificada, a reparação do dano e a transformação coletiva, alinhando-se aos fundamentos centrais da Socioeducação e do fortalecimento comunitário.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. Focam no crescimento do sujeito em vez da dor da punição.",
    module: ModuleType.MODULO_I
  },
  {
    id: 146,
    text: "A Justiça Restaurativa é um conjunto ordenado e sistêmico de princípios, métodos, técnicas e atividades próprias, que visa à conscientização sobre os fatores relacionais, institucionais e sociais motivadores de conflitos e violências. Promovendo: espaços de escuta, de responsabilização ativa e de fortalecimento das relações humanas e institucionais.",
    answer: AnswerType.CORRETO,
    explanation: "Correto. É uma mudança de paradigma da justiça retributiva para a restaurativa.",
    module: ModuleType.MODULO_I
  },
  {
    id: 147,
    text: "Os círculos de construção de paz, enquanto processos circulares e práticas restaurativas, podem ser classificados como conflitivos ou não-conflitivos atrelados ao poder judiciário.",
    answer: AnswerType.ERRADO,
    explanation: "Errado. Embora possam ser usados em conflitos, sua classificação não é meramente 'atrelada ao judiciário', sendo também ferramentas comunitárias.",
    module: ModuleType.MODULO_I
  },

  // --- MÓDULO II: PROCESSO DE ATENDIMENTO (IDs REINDEXADOS: 148 a 207) ---
  {
    id: 148,
    text: "As três fases de atendimento socioeducativo, são: a fase inicial de atendimento, a fase intermediária e a fase conclusiva.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O atendimento é processual e se organiza nestas três etapas cronológicas e pedagógicas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 149,
    text: "A fase intermediária se inicia quando precisa ocorrer o acolhimento, a aplicação da medida cautelar de Internação Provisória, ocasião que é elaborado o Diagnóstico Polidimensional para subsidiar o judiciário na tomada de decisão quanto a necessidade de aplicação de medida socioeducativa ou não a ser proferida, documento este, que contribuirá para elaboração do Plano Individual de Atendimento (PIA) caso seja aplicada a medidas socioeducativas previstas no ECA.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à FASE INICIAL. A fase intermediária ocorre durante a execução plena da medida definitiva.",
    module: ModuleType.MODULO_II
  },
  {
    id: 150,
    text: "A fase Conclusiva corresponde ao período de acompanhamento do desenvolvimento das metas pactuadas no PIA, na qual a medida socioeducativa é executada e avaliada periodicamente quanto aos métodos aplicados e resultados obtidos.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à FASE INTERMEDIÁRIA. A fase conclusiva é quando se avalia o alcance final das metas para extinção ou progressão.",
    module: ModuleType.MODULO_II
  },
  {
    id: 151,
    text: "O Brasil possui um Sistema Nacional de Atendimento Socioeducativo (SINASE), instituído pela Lei nº 12.594/2012, voltado à regulação do atendimento socioeducativo. A citada Lei estabelece um arcabouço legal com foco na individualização, no caráter pedagógico e na garantia de direitos, buscando a efetivação de medidas socioeducativas como um processo de desenvolvimento do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Define o escopo e o espírito da Lei do SINASE.",
    module: ModuleType.MODULO_II
  },
  {
    id: 152,
    text: "A realização do Diagnóstico Polidimensional tem como objetivo conhecer e identificar o adolescente com vistas a elaboração de um quadro coletivo de características do adolescente para facilitar o processo de convivência, de orientação sobre as normas e regimento da Unidade, e após a elaboração do Plano Individual de Atendimento (PIA).",
    answer: AnswerType.ERRADO,
    explanation: "O objetivo é um quadro INDIVIDUAL, visando a singularidade do atendimento. Além disso, o diagnóstico PRECEDE a elaboração do PIA.",
    module: ModuleType.MODULO_II
  },
  {
    id: 153,
    text: "No Sistema de Atendimento Socioeducativo do Estado do Ceará, o(a) adolescente apreendido pela autoridade policial é conduzido à Delegacia da Infância e Juventude, um dos Órgãos que compõem o Núcleo de Atendimento Integrado (NAI).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o fluxo inicial de atendimento infracional no Ceará.",
    module: ModuleType.MODULO_II
  },
  {
    id: 154,
    text: "Ao ser ouvido na delegacia, o(a) adolescente poderá ser entregue ou não para seus pais ou responsáveis. Caso não seja entregue à família, será conduzido para Unidade de Recepção Luís Barros Montenegro (URLBM), local em que aguardará a audiência de apresentação, ocasião que não poderá ser acompanhado pela Defensoria Pública.",
    answer: AnswerType.ERRADO,
    explanation: "O adolescente tem direito constitucional e legal de ser acompanhado por defesa técnica (Defensoria ou advogado) em TODAS as etapas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 155,
    text: "Após a oitiva no procedimento, em sendo acolhida a representação do Ministério Público pelo judiciário, sugerindo a aplicação de medida cautelar – Internação Provisória, o(a) adolescente será conduzido para Centro Socioeducativo designado pela Central de Regulação de Vagas (CRV) da SEAS, que encaminhará a documentação pertinente expedida pela Vara da Infância e Juventude competente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o fluxo administrativo-judicial de vagas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 156,
    text: "Nos Centros Socioeducativos das Comarcas de Juazeiro do Norte – Centro Socioeducativo José Bezerra de Menezes e em Sobral – Centro Socioeducativo Zequinha Parente, ocorrem procedimentos similares da Capital (Fortaleza), no entanto, nas referidas comarcas não há unidade de recepção em local distinto a Internação Provisória, com a custódia se dando no Centro Socioeducativo, em dormitório destinado para aguardar a deliberação para cumprimento da medida cautelar.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta descrevendo a realidade das unidades do interior do Ceará.",
    module: ModuleType.MODULO_II
  },
  {
    id: 157,
    text: "A avaliação clínica de saúde, prioridade ao chegar no Centro Socioeducativo, busca verificar se o(a) adolescente veio acompanhado de exame de corpo de delito e se apresenta marcas e/ou sinais que possam sugerir que houve algum tipo de violação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Procedimento padrão para garantir a integridade física e os direitos do jovem.",
    module: ModuleType.MODULO_II
  },
  {
    id: 158,
    text: "A Fase Inicial de Atendimento refere-se ao período de compartilhamento em que o(a) socioeducando(a) apresenta avanços relacionados às metas consensuadas no PIA. Neste sentido se faz necessário ressaltar a importância de estabelecimento de encontros quinzenais e/ou ao menos uma vez ao mês para avaliar com o(a) socioeducando(a) os avanços ou dificuldades em relação a efetivação das metas pactuadas, considerando que não são estáticas e devem ser revisitadas sempre que necessárias, seja por demanda do(a) adolescente ou pela equipe multiprofissional de referência.",
    answer: AnswerType.ERRADO,
    explanation: "Este texto descreve a FASE INTERMEDIÁRIA, na qual ocorre o acompanhamento das metas do PIA já elaborado.",
    module: ModuleType.MODULO_II
  },
  {
    id: 159,
    text: "A Fase de Atendimento Intermediária segundo o SINASE, é o período em que o adolescente apresenta clareza e conscientização das metas conquistadas em seu processo socioeducativo. Na internação provisória, o corpo técnico elabora o relatório Diagnóstico Polidimencional a ser enviado ao Juiz, para apresentar as informações pertinentes ao período.",
    answer: AnswerType.ERRADO,
    explanation: "A clareza das metas conquistadas caracteriza a FASE CONCLUSIVA. O Diagnóstico Polidimensional ocorre na FASE INICIAL.",
    module: ModuleType.MODULO_II
  },
  {
    id: 160,
    text: "A legislação brasileira e, por consequência, a Superintendência do Sistema Estadual de Atendimento Socioeducativo, garante o direito à convivência familiar e comunitária aos jovens em cumprimento de medida socioeducativa privativa de liberdade, o que inclui as visitas de familiares e pessoas de seu convívio. Assegura também ao jovem a liberdade de crença e a não discriminação por sexo ou identidade de gênero. Todas, garantias essenciais para o desenvolvimento integral do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete os direitos fundamentais não suspensos pela internação.",
    module: ModuleType.MODULO_II
  },
  {
    id: 161,
    text: "A Portaria n° 366/2024, é a mais recente sobre o tema das visitas, representando uma atualização e reestruturação das normas gerais de visitação e substituindo, na prática, as regras emergenciais da Portaria Nº 123/2020.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A Portaria 366/2024 atualizou os fluxos após o período pandêmico.",
    module: ModuleType.MODULO_II
  },
  {
    id: 162,
    text: "São exemplos de características da Portaria nº 366/2024, número de visitantes até 2 por dia (ou 3 se houver cônjuge/companheiro(a) cadastrado(a)), crianças até 1 ano de idade não são computadas e não é permitida a alternância de visitantes durante o horário estabelecido.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme o regulamento estadual vigente.",
    module: ModuleType.MODULO_II
  },
  {
    id: 163,
    text: "A partir da publicação da Portaria nº 366/2024, tem-se a abolição do Conselho Disciplinar nas decisões sobre visitas, na introdução de regras menos detalhadas para visitas de cônjuges/companheiros, e a atualização dos procedimentos de segurança com menção a tecnologias como o Body Scanner, além de regras menos específicas sobre o fluxo de entrada e saída nos Centros Socioeducativos.",
    answer: AnswerType.ERRADO,
    explanation: "A portaria AMPLIOU e FORMALIZOU o papel do Conselho Disciplinar nas decisões sobre visitas, não o aboliu.",
    module: ModuleType.MODULO_II
  },
  {
    id: 164,
    text: "O Body Scanner, ou scanner corporal, é um aparelho que serve para detectar, sem a necessidade de contato físico, objetos que estejam no corpo de uma pessoa; seja sobre a roupa ou escondidos dentro do corpo. Seu uso no Estado do Ceará não iniciou com a Portaria nº 366/2024, mas a menção da tecnologia nesse documento é importante, pois registra sua necessidade, incentivando a aquisição e uso, então restrito a algumas unidades socioeducativas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O uso da tecnologia visa substituir a revista íntima manual, garantindo dignidade.",
    module: ModuleType.MODULO_II
  },
  {
    id: 165,
    text: "O Estatuto da Criança e do Adolescente (ECA) assegura aos adolescentes em cumprimento de medida socioeducativa o direito de receber assistência religiosa, de acordo com suas crenças, caso assim desejem. A Lei nº 12.594/2012 aborda a religiosidade de adolescentes em cumprimento de medida socioeducativa em seu Art. 49, inciso III, onde estabelece que são direitos do adolescente submetido ao cumprimento de medida socioeducativa, entre outros, “ser respeitado em sua personalidade, intimidade, liberdade de pensamento e religião e em todos os direitos não expressamente limitados na sentença”.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A liberdade religiosa é protegida mesmo na privação de liberdade.",
    module: ModuleType.MODULO_II
  },
  {
    id: 166,
    text: "A Portaria SEAS nº 133/2020, que regulamenta a prestação de assistência religiosa aos adolescentes atendidos nos Centros Socioeducativos do Estado do Ceará, enfatiza que a assistência religiosa deve ser uma opção para os adolescentes que desejarem, sendo aceita a obrigatoriedade de participação.",
    answer: AnswerType.ERRADO,
    explanation: "A obrigatoriedade de participação é VEDADA. A assistência deve ser sempre facultativa e por adesão do jovem.",
    module: ModuleType.MODULO_II
  },
  {
    id: 167,
    text: "Por conta da laicidade estatal é permitida a realização de rituais eclesiásticos no interior dos Centros Socioeducativos e a maneira de proporcionar o desenvolvimento espiritual aos adolescentes é a interferência no conjunto de crenças.",
    answer: AnswerType.ERRADO,
    explanation: "Em um Estado laico, deve haver a NÃO INTERFERÊNCIA no conjunto de crenças pessoais, garantindo o respeito à diversidade religiosa.",
    module: ModuleType.MODULO_II
  },
  {
    id: 168,
    text: "O Estatuto da Criança e do Adolescente apesar de não se referir diretamente à população LGBTQI+, ele se baseia na doutrina da proteção integral, que assegura direitos a todas as crianças e adolescentes, sem qualquer forma de discriminação. A Lei do SINASE (Lei nº 12.594/2012), por sua vez, aborda a não discriminação do adolescente, especificamente mencionando a não discriminação em razão de gênero ou orientação sexual. Ao complementar o ECA, esta Lei reforça tais princípios, incluindo a não discriminação por gênero e orientação sexual na execução das medidas socioeducativas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O princípio da não-discriminação é basilar no sistema.",
    module: ModuleType.MODULO_II
  },
  {
    id: 169,
    text: "Entre as principais disposições que se relacionam com os direitos das adolescentes LGBTQIAP+, destacam-se: no que diz respeito à alocação em Centros Socioeducativos, pessoas travestis e transexuais, tanto masculinas quanto femininas, atualmente cumprem medida cautelar de Internação Provisória, Internação e Semiliberdade no Centro Socioeducativo Aldaci Barbosa Mota, garantindo que recebam tratamento diferente das demais mulheres do sistema.",
    answer: AnswerType.ERRADO,
    explanation: "O correto é garantir tratamento ISONÔMICO (igualitário) às demais mulheres, respeitando a identidade de gênero conforme jurisprudência dos tribunais superiores.",
    module: ModuleType.MODULO_II
  },
  {
    id: 170,
    text: "Em relação ao vestuário e aparência, é obrigatório o uso de roupas femininas, e a manutenção de cabelos compridos, assegurando que seus caracteres secundários estejam de acordo com sua identidade de gênero. Já no cadastro deve conter seu nome social, se assim desejar e todos tem o direito de ser chamada pelo nome escolhido.",
    answer: AnswerType.ERRADO,
    explanation: "É FACULTADO o uso de roupas e aparência conforme o gênero, não obrigatório. O direito ao nome social é pleno.",
    module: ModuleType.MODULO_II
  },
  {
    id: 171,
    text: "Quanto à atenção integral à saúde, é garantida a atenção integral à saúde à população LGBTQIAP+ que esteja em cumprimento de medida socioeducativa, atendendo-se aos parâmetros da Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais (LGBT) e da Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O SUS e a socioeducação devem articular políticas de saúde específicas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 172,
    text: "O Projeto “Abraço em Família” é uma iniciativa da Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS) no Ceará, Brasil, que visa fortalecer os vínculos familiares de adolescentes em centros socioeducativos. Parte do princípio de que com a entrada no sistema socioeducativo o distanciamento familiar pode ser um desafio para o jovem, podendo desestabilizá-lo emocionalmente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a importância do projeto de fortalecimento de vínculos.",
    module: ModuleType.MODULO_II
  },
  {
    id: 173,
    text: "O prontuário é um instrumento técnico público essencial para o acompanhamento coletivo. De acordo com o “Manual de Instruções para utilização de Prontuários SUAS” (Brasil, 2014), ele deve conter todas as informações relevantes sobre o indivíduo e sua família, além dos registros de todas as ações e serviços oferecidos.",
    answer: AnswerType.ERRADO,
    explanation: "O prontuário é um instrumento SIGILOSO e visa o acompanhamento INDIVIDUALIZADO, não coletivo.",
    module: ModuleType.MODULO_II
  },
  {
    id: 174,
    text: "No contexto socioeducativo, o prontuário é um documento que registra o acompanhamento de adolescentes em cumprimento de medidas socioeducativas, como liberdade assistida, prestação de serviços à comunidade, advertência, obrigação de reparar o dano, semiliberdade e internação. Ele detalha o histórico do adolescente, a medida aplicada, o acompanhamento realizado pela equipe técnica e os resultados alcançados.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade do prontuário.",
    module: ModuleType.MODULO_II
  },
  {
    id: 175,
    text: "No âmbito da SEAS, a organization dos prontuários é supervisionada pela Assessoria Especial de Diretrizes Socioeducativas (ASDIS). Para além dos prontuários da equipe técnica, atualmente a SEAS instituiu a criação do Prontuário Processual, que é uma constante nos Centros. Encontra-se em fase inicial de implantação o Prontuário do socioeducador, que é uma ferramenta de registro das 24h assistida por esse profissional. Este documento subsidia os estudos de caso, bem como a construção dos relatórios no qual o socioeducador(a) faz parte da elaboração.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete a inovação na sistematização do registro diário na SEAS.",
    module: ModuleType.MODULO_II
  },
  {
    id: 176,
    text: "O Prontuário Processual é de responsabilidade exclusiva da Coordenação Técnica e a Coordenação de Segurança.",
    answer: AnswerType.ERRADO,
    explanation: "O Prontuário Processual é de responsabilidade da Coordenação Técnica e da SECRETARIA TÉCNICA das unidades.",
    module: ModuleType.MODULO_II
  },
  {
    id: 177,
    text: "O Prontuário Técnico é onde o trabalho direto da equipe multidisciplinar é registrado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. É o registro central da atuação psicossocial e pedagógica.",
    module: ModuleType.MODULO_II
  },
  {
    id: 178,
    text: "As unidades de internação provisórias são responsáveis pela elaboração do Relatório de Diagnóstico Polidimensional. Para os casos de internação ou semiliberdade são elaborados sucessivos relatórios ao longo do cumprimento da medida socioeducativa para registrar o progresso, os desafios e as necessidades de replanejamento.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O RDPI ocorre no início e os relatórios de avaliação durante a medida.",
    module: ModuleType.MODULO_II
  },
  {
    id: 179,
    text: "O Relatório de Diagnóstico Polidimensional tem como objetivo apresentar às autoridades judiciais uma síntese do trabalho desenvolvido pela equipe multiprofissional com o adolescente. Demonstra as intervenções realizadas durante seu processo socioeducativo e subsidia a decisão das autoridades judiciais.",
    answer: AnswerType.ERRADO,
    explanation: "O RDPI visa conhecer o adolescente antes/no início da medida. A síntese das intervenções e resultados refere-se ao RELATÓRIO DE AVALIAÇÃO DA MEDIDA (Fase Conclusiva).",
    module: ModuleType.MODULO_II
  },
  {
    id: 180,
    text: "O Plano Individual de Atendimento não é apenas uma diretriz institucional; sua existência e obrigatoriedade encontram respaldo direto em nossa legislação, notadamente no Estatuto da Criança e do Adolescente (ECA) e no Sistema Nacional de Atendimento Socioeducativo (SINASE). Além de sua base legal, o PIA carrega uma filosofia profunda: ele busca ir além da mera punição, almejando a responsabilização e a efetiva reintegração social do adolescente, garantindo a reafirmação de seus direitos fundamentais e promovendo seu desenvolvimento integral.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O PIA é o instrumento central de planejamento da trajetória do jovem.",
    module: ModuleType.MODULO_II
  },
  {
    id: 181,
    text: "Na Internação Provisória inicia-se a Fase Inicial de Atendimento, muito embora seja um período de curta duração, para se obter informações significativas do(a) adolescente. O Diagnóstico Polidimensional não subsidiará posteriormente a elaboração do Plano Individual de Atendimento, caso seja aplicada pelo Poder Judiciário uma das medidas socioeducativas previstas no ECA.",
    answer: AnswerType.ERRADO,
    explanation: "O Diagnóstico Polidimensional SUBSIDIARÁ sim a elaboração do PIA. Ele é a fundação informativa para o plano individual.",
    module: ModuleType.MODULO_II
  },
  {
    id: 182,
    text: "Sendo aplicada medida socioeducativa de Internação e/ou Semiliberdade, no que concerne ainda a Fase Inicial de Atendimento, a Equipe de Referência designada para atendimento ao(a) socioeducando(a) adotará as ações necessárias para elaboração do Plano Individual de Atendimento (PIA), cuja construção contará com as informações contidas no Diagnóstico Polidimensional, com o envio no prazo de 30 dias ao Judiciário para apreciação e homologação.",
    answer: AnswerType.ERRADO,
    explanation: "O SINASE prevê o envio do PIA ao judiciário em até 45 DIAS (Art. 54 da Lei 12.594/12).",
    module: ModuleType.MODULO_II
  },
  {
    id: 183,
    text: "O Regimento Disciplinar no âmbito do SEAS é instituído pela Portaria Nº 093/2022 e refere-se ao conjunto de normas e procedimentos que regulam a disciplina e o comportamento dos adolescentes internados nas unidades de atendimento socioeducativo do Estado do Ceará, gerenciadas pela Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o instrumento normativo estadual.",
    module: ModuleType.MODULO_II
  },
  {
    id: 184,
    text: "As faltas disciplinares dos adolescentes e jovens em cumprimento de medida socioeducativa são classificadas em três naturezas: Levíssimas, moderadas e graves.",
    answer: AnswerType.ERRADO,
    explanation: "São classificadas em LEVES, MÉDIAS e GRAVES.",
    module: ModuleType.MODULO_II
  },
  {
    id: 185,
    text: "As Faltas Médias são condutas que, embora representem um desrespeito às normas, não causam grandes prejuízos à segurança ou à ordem. Exemplos incluem possuir objetos não autorizados ou recusar-se a participar de atividades sem justificativa. As medidas aplicáveis para faltas médias podem ser advertência verbal ou escrita, suspensão de atividades recreativas ou esportivas por curtos períodos, ou privação de produtos recebidos em visitas.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se às FALTAS LEVES.",
    module: ModuleType.MODULO_II
  },
  {
    id: 186,
    text: "As faltas graves são infrações que causam um impacto maior na rotina da unidade. Isso inclui impedir atividades socioeducativas, vender objetos lícitos, danificar bens de terceiros ou da unidade, dificultar revistas pessoais, ou simular doenças para se eximir de deveres. As medidas para faltas graves são mais severas, podendo incluir advertência escrita, suspensão de práticas recreativas ou esportivas por prazos um pouco maiores, privação de produtos de visita, retratação verbal, restrição ao dormitório por até cinco dias ou reparação do dano.",
    answer: AnswerType.ERRADO,
    explanation: "O texto descreve as FALTAS MÉDIAS. Faltas graves são condutas extremas como fuga, ameaça, agressão ou motim.",
    module: ModuleType.MODULO_II
  },
  {
    id: 187,
    text: "É fundamental ressaltar que o adolescente tem assegurado o direito ao contraditório e à ampla defesa em todas as fases do procedimento. E que nenhuma medida disciplinar pode interromper a escolarização, o atendimento técnico, o atendimento à saúde, a visita familiar, o direito de peticionar, o direito de avistar-se com o defensor e de corresponder-se com familiares. Além disso, é vedada a aplicação de isolamento como medida disciplinar, exceto de forma cautelar para garantir a segurança, e nunca poderá ser aplicada medida disciplinar coletiva.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete as garantias básicas de direitos humanos no sistema disciplinar.",
    module: ModuleType.MODULO_II
  },
  {
    id: 188,
    text: "O Conselho Disciplinar, conforme a Portaria nº 93/2022, é a instância deliberativa de caráter penal responsável pela análise de ocorrências, sugestão de sanções, orientações sobre o comportamento do adolescente e resolução de questões pertinentes à dinâmica institucional. É por meio dele que as situações são avaliadas e as decisões são tomadas, sempre com foco na responsabilização e na perspectiva pedagógica da medida socioeducativa.",
    answer: AnswerType.ERRADO,
    explanation: "O Conselho Disciplinar tem caráter ADMINISTRATIVO, não penal. A responsabilização penal é exclusiva do Poder Judiciário.",
    module: ModuleType.MODULO_II
  },
  {
    id: 189,
    text: "A composição do Conselho Disciplinar geralmente inclui: Diretor e/ou Representante (função de presidência), Coordenador de Segurança e Coordenador Técnico, Um representante da equipe de socioeducadores, Equipe interdisciplinar (demais setores da unidade), Dois representantes da equipe técnica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a formação colegiada para apuração de faltas.",
    module: ModuleType.MODULO_II
  },
  {
    id: 190,
    text: "Em todas as unidades da Federação tais Conselhos Disciplinares devem ser um espaço democrático, com a participação do maior número possível de profissionais, havendo rodízio, especialmente entre os socioeducadores. E é crucial que os socioeducandos participem da apuração ou aplicação de medidas disciplinares.",
    answer: AnswerType.ERRADO,
    explanation: "Nenhum socioeducando deve participar da apuração ou aplicação de medidas disciplinares contra seus pares.",
    module: ModuleType.MODULO_II
  },
  {
    id: 191,
    text: "Uma das grandes prioridades do Conselho Disciplinar é encaminhar os casos de faltas disciplinares para a prática restaurativa, verificando sua aplicabilidade. A prática de Círculos Restaurativos é preferencialmente utilizada para resolução de conflitos em casos de faltas disciplinares leves e médias. Se a prática restaurativa não obtiver êxito, o procedimento ordinário é retomado. A prática restaurativa não deve ser cumulada com a medida disciplinar ou associada à restrição de atividades.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Incentiva a resolução dialógica em vez da sanção pura.",
    module: ModuleType.MODULO_II
  },
  {
    id: 192,
    text: "No caso de transgressão disciplinar média, a Direção da Unidade deve comunicar, em até 24 horas, o procedimento disciplinar, enviando cópia integral ao defensor público ou advogado da família. A participação como membro do Conselho Disciplinar é parte integrante das atribuições dos profissionais da unidade e gera benefício pecuniário, financeiro ou complementar. Para apuração e elucidação dos fatos, o Conselho Disciplinar pode arrolar testemunhas por iniciativa de seus membros ou a pedido do socioeducando ou responsável legal.",
    answer: AnswerType.ERRADO,
    explanation: "A comunicação em 24h refere-se a transgressão GRAVE. Além disso, a participação no Conselho NÃO gera benefício pecuniário adicional.",
    module: ModuleType.MODULO_II
  },
  {
    id: 193,
    text: "Os Círculos Restaurativos representam uma abordagem poderosa e humanizada para a resolução de conflitos, ao guiar os envolvidos por uma jornada estruturada de diálogo, compreensão e reconstrução. Este processo se desdobra em três fases distintas e complementares: o Pré-Círculo, os Círculos Restaurativos em si e o Pós Círculo, cada uma com objetivos específicos que visam promover a responsabilização, a reparação e o fortalecimento das relações pacíficas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as etapas do processo restaurativo.",
    module: ModuleType.MODULO_II
  },
  {
    id: 194,
    text: "Os Círculos Restaurativos são o ponto central do processo, onde a transformação coletiva começa. Os participantes se reúnem em grupo, conduzidos pelo facilitador, que assegura um ambiente seguro e respeitoso. O objetivo é o compartilhamento de narrativas, permitindo que cada um conte sua versão dos fatos e expresse seus sentimentos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a essência do círculo.",
    module: ModuleType.MODULO_II
  },
  {
    id: 195,
    text: "A fase de Pós-Círculo garante a efetividade e a continuidade dos acordos firmados, assegurando que a reparação se concretize e que as relações sejam restauradas. O acompanhamento é vital para monitorar o cumprimento das ações pactuadas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Sem o pós-círculo, a prática perde sua eficácia resolutiva.",
    module: ModuleType.MODULO_II
  },
  {
    id: 196,
    text: "As três fases dos Círculos da Paz trabalham em conjunto para oferecer uma alternativa construtiva e transformadora na resolução de conflitos, não priorizando o diálogo, a responsabilização e a reparação de danos.",
    answer: AnswerType.ERRADO,
    explanation: "Os círculos PRIORIZAM o diálogo, a responsabilização e a reparação de danos.",
    module: ModuleType.MODULO_II
  },
  {
    id: 197,
    text: "O Projeto “Abraço em Família” é uma iniciativa da Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS) no Ceará, Brasil, que visa fortalecer os vínculos familiares de adolescentes em centros socioeducativos. Parte do princípio de que com a entrada no sistema socioeducativo o distanciamento familiar pode ser um desafio para o jovem, podendo desestabilizá-lo emocionalmente.",
    answer: AnswerType.ERRADO,
    explanation: "O distanciamento familiar é visto como um desafio que DESESTABILIZA o jovem, por isso o projeto busca estreitar os laços, não manter a distância.",
    module: ModuleType.MODULO_II
  },
  {
    id: 198,
    text: "O Projeto “Abraço em Família” busca promover a cultura de paz e a ressocialização. Ou seja, além de cumprir uma medida por um ato infracional, os Centros Socioeducativos almejam que o jovem desenvolva um Plano Individual de Atendimento (PIA) que o possibilite construir uma nova trajetória de vida melhor com o apoio da família e das políticas públicas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade socioeducativa do projeto.",
    module: ModuleType.MODULO_II
  },
  {
    id: 199,
    text: "O Programa de Oportunidades e Cidadania (POC) foi instituído pela Portaria SEAS nº 120/2021, pela Superintendência do Sistema Estadual de Atendimento Socioeducativo (SEAS) do Ceará. Destina-se a adolescentes cumprindo medida socioeducativa de semiliberdade, adolescentes cumprindo medida de internação na Fase Conclusiva de Referência dos Centros Socioeducativos, adolescentes pós cumprimento de medidas restritivas de liberdade e do meio aberto e membros do núcleo familiar de vinculação afetiva com o adolescente atendido pelo programa.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o público-alvo e norma do POC.",
    module: ModuleType.MODULO_II
  },
  {
    id: 200,
    text: "O Programa de Oportunidades e Cidadania (POC), é organizado em diferentes eixos de atuação, desenvolvendo projetos que buscam garantir direitos, promover a inclusão social e propagar a reiteração de atos infracionais. O programa atua de forma individual, fortalecendo os vínculos familiares, comunitários e institucionais dos jovens.",
    answer: AnswerType.ERRADO,
    explanation: "O programa busca EVITAR (mitigar) a reiteração e atua de forma INTEGRADA com os territórios, não meramente individual.",
    module: ModuleType.MODULO_II
  },
  {
    id: 201,
    text: "São exemplos de Eixos de Ações do POC: Acompanhamento Multiprofissional, Ações de Arte e Culturais, Qualificação Profissional e Fortalecimento da Cidadania, Oficinas, formações e articulações com a rede de apoio.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a organização do programa.",
    module: ModuleType.MODULO_II
  },
  {
    id: 202,
    text: "O projeto Novas Trilhas atua em dois Polos, atendendo 10 municípios: polo 1: Fortaleza (presencial), Caucaia, Maracanaú e Maranguape, de forma virtual e o polo 2: Sobral (presencial), Juazeiro do Norte, Crato, Iguatu, Itapipoca e Queixada, também de forma virtual. O acesso ao programa é de livre adesão podendo ser encaminhados por profissionais da rede de apoio ou acessando o site da SEAS, tendo como requisito a idade de 12 a 21 anos, contemplando os adolescentes pós-medidas e familiares.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a capilaridade e funcionamento do projeto.",
    module: ModuleType.MODULO_II
  },
  {
    id: 203,
    text: "A Unidade de Internação Provisória (UIP) acolhe adolescentes que aguardam decisão judicial sobre a medida socioeducativa a ser aplicada, com duração máxima de 30 dias, conforme o Art. 185 do Estatuto da Criança e do Adolescente. No Ceará, essas unidades são administradas pelo governo estadual e integram o Sistema Socioeducativo local.",
    answer: AnswerType.ERRADO,
    explanation: "O prazo máximo da internação provisória é de 45 DIAS (Art. 108 do ECA).",
    module: ModuleType.MODULO_II
  },
  {
    id: 204,
    text: "A Unidade de Internação (UI) é a medida socioeducativa de privação de liberdade mais grave, aplicada em casos de atos infracionais mais sérios, com duração máxima de quatro anos, conforme o Art. 121 do Estatuto da Criança e do Adolescente e o Art. 43 da Lei do SINASE.",
    answer: AnswerType.ERRADO,
    explanation: "A internação tem prazo máximo de TRÊS ANOS (Art. 121, § 3º do ECA).",
    module: ModuleType.MODULO_II
  },
  {
    id: 205,
    text: "A rotina na Unidade de Internação (UI) é de estrutura rígida, com horários definidos para todas as atividades. Os eixos de atendimento abrangem escolarização, profissionalização, esporte, cultura, lazer, atendimento psicossocial (individual e em grupo) e acompanhamento da saúde, seguindo as diretrizes dos Arts. 70 a 73 da Lei do SINASE.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a organização da medida restritiva.",
    module: ModuleType.MODULO_II
  },
  {
    id: 206,
    text: "A Unidade de Semiliberdade (USL) é uma medida de privação total de liberdade, não permitindo ao adolescente realizar atividades externas (escola, trabalho e/ou cursos).",
    answer: AnswerType.ERRADO,
    explanation: "A semiliberdade é medida de privação PARCIAL. As atividades externas (escola, cursos, trabalho) são fundamentais e obrigatórias no regime.",
    module: ModuleType.MODULO_II
  },
  {
    id: 207,
    text: "A rotina na Unidade de Semiliberdade (USL), apresenta uma flexibilidade controlada, com regras claras e supervisão. O foco é na reinserção social do adolescente, com ênfase na construção de vínculos externos e na busca por oportunidades de estudo e trabalho, alinhado aos princípios de convivência familiar e comunitária do ECA.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a transição para a liberdade.",
    module: ModuleType.MODULO_II
  },

  // --- MÓDULO III: TRAJETÓRIA JURÍDICA (IDs REINDEXADOS: 208 a 307) ---
  {
    id: 208,
    text: "O art. 228 da Constituição Federal estabelece que os menores de 18 anos são imputáveis penalmente, de modo que respondem por crimes na forma prevista para adultos.",
    answer: AnswerType.ERRADO,
    explanation: "Os menores de 18 anos são INIMPUTÁVEIS penalmente. Eles respondem por 'ato infracional' sob a legislação especial (ECA).",
    module: ModuleType.MODULO_III
  },
  {
    id: 209,
    text: "O art. 103 do Estatuto da Criança e do Adolescente (ECA) define ato infracional como a conduta descrita como crime ou contravenção penal, a qual é praticada por criança ou adolescente, corroborando a inimputabilidade dos menores de 18 anos, conforme o art. 104, que reforça esse regime e estabelece a apuração por meio de procedimento próprio.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Define legalmente o que é ato infracional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 210,
    text: "Conforme o art. 105 do ECA, a apuração do ato infracional é realizada pela autoridade legislativa, assegurando ao adolescente o contraditório e a ampla defesa durante o referido procedimento.",
    answer: AnswerType.ERRADO,
    explanation: "A apuração é realizada pela autoridade JUDICIÁRIA (Justiça da Infância e Juventude).",
    module: ModuleType.MODULO_III
  },
  {
    id: 211,
    text: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente. A internação provisória pode ser determinada pelo prazo máximo de trinta e cinco dias.",
    answer: AnswerType.ERRADO,
    explanation: "O prazo máximo da internação provisória é de QUARENTA E CINCO DIAS.",
    module: ModuleType.MODULO_III
  },
  {
    id: 212,
    text: "O adolescente tem direito à identificação dos responsáveis pela sua apreensão, devendo ser informado acerca de seus direitos. A apreensão de qualquer adolescente e o local onde se encontra apreendido serão comunicados à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada. Examinar-se-á, desde logo e sob pena de responsabilidade, a possibilidade de liberação imediata.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Reflete os direitos constitucionais de todo detido.",
    module: ModuleType.MODULO_III
  },
  {
    id: 213,
    text: "A decisão pela internação provisória deverá ser fundamentada e basear-se em indícios suficientes de autoria e materialidade, demonstrada a necessidade imperiosa da medida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A internação provisória é medida cautelar de natureza excepcional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 214,
    text: "O adolescente civilmente identificado será submetido a identificação compulsória pelos órgãos policiais, de proteção e judiciais, em todos os casos.",
    answer: AnswerType.ERRADO,
    explanation: "Quem já possui identificação civil NÃO será submetido a nova identificação compulsória, SALVO se houver dúvida fundada ou necessidade de confrontação.",
    module: ModuleType.MODULO_III
  },
  {
    id: 215,
    text: "Compete à Justiça da Infância e Juventude processar e julgar as representações promovidas pelo Ministério Público para apuração de atos infracionais cometidos por adolescentes, assegurando o cumprimento das medidas socioeducativas cabíveis, em conformidade com os princípios do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) e do Sistema Nacional de Atendimento Socioeducativo (Lei nº 12.594/2012), observando os direitos fundamentais do adolescente, a proporcionalidade das medidas, a proteção integral e a finalidade educativa do atendimento.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a competência jurisdicional especializada.",
    module: ModuleType.MODULO_III
  },
  {
    id: 216,
    text: "O adolescente apreendido por ordem judicial será encaminhado à autoridade judiciária competente em até 48 (quarenta e oito) horas.",
    answer: AnswerType.ERRADO,
    explanation: "Deve ser encaminhado IMEDIATAMENTE (ou no primeiro dia útil subsequente se em fins de semana/plantão) à autoridade judiciária.",
    module: ModuleType.MODULO_III
  },
  {
    id: 217,
    text: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade policial competente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O primeiro destino é o Distrito Policial (Delegacia da Criança).",
    module: ModuleType.MODULO_III
  },
  {
    id: 218,
    text: "Quando houver repartição policial especializada no atendimento ao adolescente, e o ato infracional tiver sido praticado em coautoria com maior de idade, prevalecerá a competência da repartição especializada, que, após adotar as providências necessárias, encaminhará o adulto à repartição policial própria.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a prioridade do atendimento especializado juvenil.",
    module: ModuleType.MODULO_III
  },
  {
    id: 219,
    text: "Um dos exemplos de procedimentos Policiais após a apreensão de um adolescente, é que no caso de comparecimento dos pais ou responsável, o adolescente será prontamente liberado pela autoridade policial, sob termo de compromisso e responsabilidade de sua apresentação ao representante do Ministério público, no mesmo dia ou sendo impossível, no primeiro dia útil imediato, exceto quando pela gravidade do ato infracional e sua repercussão social, deva o adolescente permanecer apreendido para a garantia de sua segurança pessoal ou manutenção da ordem pública.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme o Art. 174 do ECA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 220,
    text: "A Remissão é uma forma de exclusão do processo, atendendo as circunstancias e consequências do fato, ao contexto social, bem como a personalidade do adolescente e sua maior ou menor participação no crime.",
    answer: AnswerType.ERRADO,
    explanation: "O termo correto no sistema socioeducativo é ATO INFRACIONAL. Remissão exclui, suspende ou extingue o processo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 221,
    text: "Previstas nos Artigos 126 à 128 e 188 do ECA, a remissão como forma de extinção ou suspensão do processo, poderá ser aplicada em qualquer fase do procedimento, antes da sentença.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o momento processual da remissão concedida pelo juiz.",
    module: ModuleType.MODULO_III
  },
  {
    id: 222,
    text: "A Remissão poderá vir acompanhada de medida socioeducativa em meio aberto, como Liberdade Assistida – LA, Prestação de serviço a comunidade – PSC, Advertência, exceto Internação e Semiliberdade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Remissão não pode ser cumulada com medidas restritivas ou privativas de liberdade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 223,
    text: "A Constituição Federal no artigo 227, garante prioridade absoluta à proteção de crianças e adolescentes. Isso inclui o dever de promover direitos e aplicar medidas que respeitem sua condição peculiar de pessoa em desenvolvimento. Na aplicação de Medidas Socioeducativas, o Estado deve agir com respeito à dignidade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Fundamentação constitucional da proteção integral.",
    module: ModuleType.MODULO_III
  },
  {
    id: 224,
    text: "A Lei do SINASE regulamenta a execução das medidas socioeducativas e estabelece critérios, princípios e regras para garantir um atendimento padronizado e humanizado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o objetivo da Lei 12.594/12.",
    module: ModuleType.MODULO_III
  },
  {
    id: 225,
    text: "O Princípio da legalidade diz que todas as medidas socioeducativas poderão ser aplicadas aos adolescentes em conflito com a lei, mesmo que sem a previsão legal expressa.",
    answer: AnswerType.ERRADO,
    explanation: "O princípio da legalidade diz que NENHUMA medida pode ser aplicada sem prévia e expressa previsão legal.",
    module: ModuleType.MODULO_III
  },
  {
    id: 226,
    text: "O Princípio da prioridade absoluta diz que as políticas e programas de atendimento socioeducativos, devem assegurar prioridade absoluta ao adolescente ao adolescente, garantindo-lhe atenção especial em todas as esferas da sociedade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O adolescente está em primeiro lugar nas verbas e atenções públicas.",
    module: ModuleType.MODULO_III
  },
  {
    id: 227,
    text: "O Princípio de brevidade estabelece que as medidas socioeducativas aplicadas devem ser executadas pelo maior tempo possível, sendo incompatível com a responsabilização, maximizando os impactos negativos.",
    answer: AnswerType.ERRADO,
    explanation: "Brevidade significa que a medida deve durar o MENOR tempo possível, visando a reintegração.",
    module: ModuleType.MODULO_III
  },
  {
    id: 228,
    text: "O Princípio da individualização diz que cada adolescente deve receber um plano individualizado de atendimento, considerando suas necessidades, potencialidades e seu histórico de vida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. É a base do Plano Individual de Atendimento (PIA).",
    module: ModuleType.MODULO_III
  },
  {
    id: 229,
    text: "O Princípio da Mínima Intervenção deve garantir que restrição de liberdade seja aplicada em todos os casos.",
    answer: AnswerType.ERRADO,
    explanation: "Mínima Intervenção significa intervir apenas quando necessário e da forma menos gravosa possível.",
    module: ModuleType.MODULO_III
  },
  {
    id: 230,
    text: "O Princípio da não discriminação diz que nenhum adolescente em conflito com a lei deve ser tratado de forma desigual em razão de origem, raça, gênero, religião, condição social ou qualquer outra característica pessoal.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Princípio de igualdade material.",
    module: ModuleType.MODULO_III
  },
  {
    id: 231,
    text: "O Princípio do fortalecimento dos vínculos orienta que deve priorizar a manutenção e o reestabelecimento dos laços afetivos do adolescente com a sua família e com a comunidade a qual está inserido.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A família é parceira no processo socioeducativo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 232,
    text: "Verificada a prática de ato infracional, a autoridade competente, poderá aplicar ao adolescente as seguintes medidas: advertência, obrigação de reparar o dano, prestação de serviço a comunidade, liberdade assistida, inserção em regime de semiliberdade, internação em Centros Socioeducativos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Lista as seis medidas socioeducativas previstas no Art. 112 do ECA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 233,
    text: "A medida aplicada ao adolescente levará em conta sua capacidade de cumpri-la, as circunstancias e a gravidade do ato infracional. Sendo que em alguns casos, será admitido a prestação de trabalho forçado.",
    answer: AnswerType.ERRADO,
    explanation: "Trabalho forçado é proibido pela Constituição Federal e por tratados de direitos humanos em qualquer hipótese.",
    module: ModuleType.MODULO_III
  },
  {
    id: 234,
    text: "Os adolescentes portadores de doença ou deficiência mental, receberão tratamento individual e especializado em local adequado às suas condições.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o direito à saúde e atendimento especializado.",
    module: ModuleType.MODULO_III
  },
  {
    id: 235,
    text: "A Medida Socioeducativa de Obrigação de reparar o dano, consiste na realização e tarefas voluntárias de interesse geral, por período não excedente a seis meses, junto a entidades assistenciais, hospitais, escolas e outros estabelecimentos congêneres, bem como em programas comunitários ou governamentais.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à Prestação de Serviços à Comunidade (PSC). A obrigação de reparar o dano foca na restituição do bem ou compensação do prejuízo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 236,
    text: "A Medida Socioeducativa de Prestação de serviços à comunidade, em se tratando de ato infracional com reflexos patrimoniais, a autoridade poderá determinar, se foro caso, que o adolescente restitua a coisa, promova o ressarcimento do dano, ou, por outra forma, compense o prejuízo da vítima. Havendo manifesta impossibilidade de reparar o dano, a medida poderá ser substituída por outra adequada.",
    answer: AnswerType.ERRADO,
    explanation: "Esta descrição refere-se à Obrigação de Reparar o Dano.",
    module: ModuleType.MODULO_III
  },
  {
    id: 237,
    text: "A Medida Socioeducativa de Advertência poderá ser aplicada sempre que houver prova da materialidade e indícios suficientes da autoria. A advertência consistirá na admoestação verbal, que será reduzida a termo e assinada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a medida de advertência.",
    module: ModuleType.MODULO_III
  },
  {
    id: 238,
    text: "A Medida Socioeducativa de Liberdade Assistida, será adotada sempre que se figurar a medida mais adequada, para o fim de acompanhar, orientar e auxiliar o adolescente. Na liberdade assistida, a autoridade designará um técnico responsável para acompanhar o caso, o qual poderá ser recomendado por entidade ou programa de atendimento.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a LA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 239,
    text: "A Medida Socioeducativa de Liberdade Assistida será fixada pelo prazo máximo de seis meses, não podendo ser prorrogada, revogada ou substituída por outra medida em nenhuma hipótese.",
    answer: AnswerType.ERRADO,
    explanation: "O prazo de 6 meses é MÍNIMO. Ela pode ser prorrogada, revogada ou substituída a qualquer tempo conforme a avaliação técnica.",
    module: ModuleType.MODULO_III
  },
  {
    id: 240,
    text: "A Medida Socioeducativa de Semiliberdade, pode ser determinado desde o início, como forma de transição para o meio aberto, possibilitando a realização de tarefas externas, independente de autorização judicial. São obrigatórias a escolarização e profissionalização, devendo sempre que possível, a utilização dos recursos existentes na comunidade. A medida não tem um prazo determinado, aplicando-se, no que couber, as disposições relativas à internação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a Semiliberdade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 241,
    text: "A Medida Socioeducativa de Internação em nenhum caso caberá incomunicabilidade. A autoridade judiciária poderá suspender temporariamente a visita, inclusive de pais ou responsáveis, se existirem motivos sérios e fundados de sua prejudicialidade aos interesses do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A visita pode ser suspensa se comprovado prejuízo ao jovem (ex: abusos familiares).",
    module: ModuleType.MODULO_III
  },
  {
    id: 242,
    text: "São exemplos de competências do Ministério Público no sistema socioeducativo: conceder a remissão, promover e acompanhar os procedimentos relativos as infrações atribuídas ao adolescente, promover ações para proteção dos interesses individuais, difusos ou coletivos relativos à infância e à adolescência.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o papel do MP.",
    module: ModuleType.MODULO_III
  },
  {
    id: 243,
    text: "O Ministério Público atuará preferencialmente na defesa dos direitos e interesses tratados no Estatuto da Criança e do Adolescente e a falta de intervenção do Ministério Público não resulta em nulidade. O representante do Ministério Público, no exercício de suas funções, terá livre acesso a todo local onde se encontre criança ou adolescente.",
    answer: AnswerType.ERRADO,
    explanation: "A atuação é OBRIGATÓRIA e a falta de intervenção RESULTA em nulidade absoluta do processo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 244,
    text: "O adolescente tem direito de se entrevistar pessoalmente com o Ministério Público. Além disso, o Ministério Público promove ações civis públicas quando há violações estruturais. Pode exigir melhorias em unidades, contratação de profissionais e oferta de programas. Sua atuação é estratégica para a efetivação de políticas públicas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o papel de fiscal da lei e protetor estrutural.",
    module: ModuleType.MODULO_III
  },
  {
    id: 245,
    text: "A Constituição Federal define o Ministério Público como defensor da ordem jurídica e dos interesses sociais e no sistema socioeducativo, isso inclui os direitos dos adolescentes. Ele atua como fiscal da lei e como parte processual.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme a Carta Magna.",
    module: ModuleType.MODULO_III
  },
  {
    id: 246,
    text: "O Ministério Público integra comissões e fóruns interinstitucionais e contribui para o planejamento e avaliação das políticas socioeducativas. Sua presença fortalece a transparência e o controle social do sistema.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O MP é ator político e jurídico no sistema de garantias.",
    module: ModuleType.MODULO_III
  },
  {
    id: 247,
    text: "A Lei do SINASE faculta os entes federativos a garantir o controle externo e interno, sendo o Ministério Público que exerce esses controles sobre os programas e unidades. Isso inclui visitas, relatórios e recomendações. A atuação deve ser contínua e efetiva.",
    answer: AnswerType.ERRADO,
    explanation: "A Lei do SINASE OBRIGA (não faculta) os entes federativos a garantir o controle.",
    module: ModuleType.MODULO_III
  },
  {
    id: 248,
    text: "O Ministério Público deve verificar se há superlotação ou violência institucional. Essas situações violam os direitos dos adolescentes. Identificando problemas, o MP pode recomendar providências imediatas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a fiscalização de dignidade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 249,
    text: "A atuação do MP deve ser somente proativa, bastando agir somente após a violação.",
    answer: AnswerType.ERRADO,
    explanation: "A atuação deve ser proativa e PREVENTIVA. Agir 'somente após a violação' é uma postura reativa insuficiente.",
    module: ModuleType.MODULO_III
  },
  {
    id: 250,
    text: "O Ministério Público deve manter diálogo com os gestores das unidades, também pode articular com conselhos e defensoria pública, sendo que essa articulação fortalece a rede de proteção.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a integração institucional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 251,
    text: "A fiscalização do MP é um instrumento de controle social, assegura que o sistema socioeducativo cumpra sua função, tendo sempre como foco a reintegração do adolescente à sociedade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade da fiscalização.",
    module: ModuleType.MODULO_III
  },
  {
    id: 252,
    text: "A Instrução Normativa SEAS/2023, regulamenta o uso de algemas nos centros socioeducativos do Ceará. Ela segue a Súmula Vinculante nº 11 do Supremo Tribunal Federal. O uso deve ser tratado como regra geral, sendo justificado e de modo proporcional.",
    answer: AnswerType.ERRADO,
    explanation: "O erro é dizer 'regra geral'. O uso de algemas é EXCEÇÃO, devendo ser justificado por escrito sob pena de responsabilidade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 253,
    text: "O uso de algemas deve respeitar a dignidade da pessoa humana. É proibido o uso como forma de punição ou intimidação. As algemas só podem ser usadas em caso de resistência ativa e quando há riscos à integridade física ou por determinação judicial fundamentada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre os critérios da Súmula Vinculante 11 e da IN SEAS.",
    module: ModuleType.MODULO_III
  },
  {
    id: 254,
    text: "O uso de algemas deve ser comunicado à Direção da Unidade e deve ser informado à Coordenação Técnica. E, em nenhuma hipótese, à Corregedoria da SEAS.",
    answer: AnswerType.ERRADO,
    explanation: "Deve sim ser comunicado à Corregedoria da SEAS SE NECESSÁRIO/conforme o procedimento de registro de incidentes críticos.",
    module: ModuleType.MODULO_III
  },
  {
    id: 255,
    text: "É proibido o uso de algemas em mulheres grávidas, sendo também vedado em adolescentes com deficiência ou em qualquer situação que cause constrangimento desnecessário. O uso deve ser feito com equipamento adequado, onde as algemas devem estar em bom estado de conservação e devem ser aplicadas de forma segura e controlada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Protege populações vulneráveis contra excessos.",
    module: ModuleType.MODULO_III
  },
  {
    id: 256,
    text: "O socioeducador deve evitar exposição pública do adolescente e garantir o respeito aos direitos humanos. É necessário relatar imediatamente qualquer incidente. O relato deve ser feito em livro próprio da unidade e conter assinatura do responsável pela decisão.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O dever de sigilo e a documentação são proteções para o servidor e o jovem.",
    module: ModuleType.MODULO_III
  },
  {
    id: 257,
    text: "O uso de algemas deve ser avaliado constantemente. A equipe deve buscar alternativas seguras. A prioridade é sempre a contenção verbal e preventiva. A instrução reforça o compromisso com a segurança e legalidade, buscando garantir o equilíbrio entre proteção e respeito, promovendo uma atuação ética e responsável.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o gerenciamento de crise progressivo.",
    module: ModuleType.MODULO_III
  },
  {
    id: 258,
    text: "O uso indevido das Algemas pode gerar responsabilização somente administrativa. Por isso, o uso deve ser sempre criterioso e documentado.",
    answer: AnswerType.ERRADO,
    explanation: "Pode gerar responsabilização administrativa, CIVIL e PENAL (crime de abuso de autoridade).",
    module: ModuleType.MODULO_III
  },
  {
    id: 259,
    text: "O uso de algemas é uma medida extrema e deve ser usada apenas quando não houver outra alternativa. E sempre com respeito à integridade do adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta reforçando a natureza da medida.",
    module: ModuleType.MODULO_III
  },
  {
    id: 260,
    text: "A circulação de pessoas pela área administrativa dos Centros Socioeducativos será permitida aos (às) funcionários (as) e visitantes, sendo restrita aos locais onde tenham que desenvolver ou participar de atividades, observadas as cautelas de segurança.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o fluxo de segurança predial.",
    module: ModuleType.MODULO_III
  },
  {
    id: 261,
    text: "A circulação de pessoas pela área de segurança dos Centros Socioeducativos é restrita ao pessoal escalado para trabalhar nessa área e a permanência terá a duração necessária à execução do trabalho.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta para evitar vulnerabilidades de segurança.",
    module: ModuleType.MODULO_III
  },
  {
    id: 262,
    text: "Os serviços de manutenção nas áreas de segurança serão executados mesmo sem a devida autorização da Coordenação de Segurança.",
    answer: AnswerType.ERRADO,
    explanation: "Todo serviço de manutenção requer autorização prévia e acompanhamento da segurança.",
    module: ModuleType.MODULO_III
  },
  {
    id: 263,
    text: "Todos os (as) funcionários (as) dos Centros Socioeducativos deverão passar pelo detector de metais e se submeteram à Revista de Busca Pessoal sempre que adentrarem na Unidade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A segurança preventiva aplica-se a todos que acessam o ambiente restrito.",
    module: ModuleType.MODULO_III
  },
  {
    id: 264,
    text: "Considera-se Revista Incerta para os efeitos da Portaria N° 004/2021, a revista realizada em dia e hora de conhecimento amplo, mediante determinação da Direção do Centro Socioeducativo.",
    answer: AnswerType.ERRADO,
    explanation: "A Revista Incerta é realizada em dia e hora de CONHECIMENTO RESTRITO (surpresa), para ser eficaz.",
    module: ModuleType.MODULO_III
  },
  {
    id: 265,
    text: "A Revista Estrutural tem natureza preventiva, devendo ser realizada pelo menos 01 (uma) vez por semana, sendo intensificada sempre que necessário por determinação da Direção ou do (a) Coordenador (a) de Segurança.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Visa encontrar danos físicos ou objetos ilícitos escondidos na estrutura.",
    module: ModuleType.MODULO_III
  },
  {
    id: 266,
    text: "Para realizar a Revista de Busca Pessoal após as visitas, o (a) Socioeducador (a) deverá realizar a busca corporal, aleatória e sem muitos cuidados.",
    answer: AnswerType.ERRADO,
    explanation: "Deve ser realizada de forma metódica e com OLHAR CUIDADOSO para garantir que nada foi introduzido na unidade.",
    module: ModuleType.MODULO_III
  },
  {
    id: 267,
    text: "Evento Simples é aquele cuja ameaça à segurança é superior à capacidade de resposta do (a) Coordenador (a) de Segurança e dos Socioeducadores (as) presentes no plantão.",
    answer: AnswerType.ERRADO,
    explanation: "Evento Simples é aquele cuja ameaça é INFERIOR à capacidade de resposta imediata da equipe de plantão.",
    module: ModuleType.MODULO_III
  },
  {
    id: 268,
    text: "Evento Crítico é aquele cuja ameaça à segurança é superior à capacidade de resposta de todos os setores do Centro Socioeducativo, cuja resolução só é alcançada com a cooperação do Sistema de Segurança Pública e de Justiça.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a tipologia de crises graves.",
    module: ModuleType.MODULO_III
  },
  {
    id: 269,
    text: "Evento Complexo é aquele cuja ameaça à segurança é superior à capacidade de resposta do (a) coordenador (a) e dos socioeducadores (as) presentes na Unidade, cuja resolução não é possível pela coordenação dos setores do Centro Socioeducativo e/ou pela atuação da Direção.",
    answer: AnswerType.ERRADO,
    explanation: "A resolução do evento complexo É POSSÍVEL pela coordenação interna ampliada com a Direção, sem necessariamente precisar de forças externas imediatas como no Crítico.",
    module: ModuleType.MODULO_III
  },
  {
    id: 270,
    text: "A partir da avaliação dos eventos de crise, pode ser feito o acionamento do Grupo de Intervenções Táticas (GIT), segundo decisão do diretor. E, apenas em casos excepcionais, o Coordenador de Segurança pode tomar essa decisão.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a cadeia de comando para intervenção tática.",
    module: ModuleType.MODULO_III
  },
  {
    id: 271,
    text: "O Diretor deve informar o gestor estadual antes de acionar o GIT. Se for necessário acionar a força policial, o Diretor deve comunicar os órgãos competentes. Esses órgãos são o Poder Judiciário, o Ministério Público e a Assembleia Legislativa.",
    answer: AnswerType.ERRADO,
    explanation: "Deverm ser comunicados: Poder Judiciário, MP e a DEFENSORIA PÚBLICA (não AL).",
    module: ModuleType.MODULO_III
  },
  {
    id: 272,
    text: "Os EPIs são usados para prevenir crises e controlar distúrbios nos Centros Socioeducativos do Ceará. Incluem capacete, luvas, escudo, protetores de cotovelo, escudo, protetores de canela, algemas, lanternas, alicate corta cadeado e extintor.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o kit de pronta resposta.",
    module: ModuleType.MODULO_III
  },
  {
    id: 273,
    text: "Os EPIs devem ser guardados em sala trancada, com chave sob a responsabilidade da Direção e do Coordenador de Segurança. O uso só é permitido com autorização da Direção e por pessoas aptas e capacitadas. Esses profissionais devem ser treinados pelo NUESO e escalados para o serviço de Ações de Pronta Resposta (APR).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o controle de equipamentos de força.",
    module: ModuleType.MODULO_III
  },
  {
    id: 274,
    text: "Só está autorizado a utilizar EPIs quem concluiu o curso do NUESO, podendo ter respondido ou estar respondendo processo na Corregedoria. É necessário ser designado pelo Coordenador de Segurança e atuar em evento simples ou complexo.",
    answer: AnswerType.ERRADO,
    explanation: "O servidor deve ser ISENTO de processos disciplinares graves na Corregedoria para compor o grupo de intervenção APR/GIT.",
    module: ModuleType.MODULO_III
  },
  {
    id: 275,
    text: "Devem ser escalados nove socioeducadores por dia para compor o posto de APR. As funções incluem coordenador, escudeiros, imobilizadores, chaveiro e operador de extintor. O Coordenador de Segurança define e registra as funções de cada integrante. Esse registro deve ser feito no Livro de Coordenadores ou na escala de serviço. O coordenador deve conferir e repassar os equipamentos ao substituto diariamente.",
    answer: AnswerType.ERRADO,
    explanation: "O número correto de socioeducadores escalados para APR é SETE (7).",
    module: ModuleType.MODULO_III
  },
  {
    id: 276,
    text: "A força nas Unidades de Medidas Socioeducativas só pode ser usada quando o diálogo se esgotar. Deve ser usada pelo tempo necessário, sem humilhar ou degradar o adolescente.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Uso diferenciado e proporcional da força.",
    module: ModuleType.MODULO_III
  },
  {
    id: 277,
    text: "O uso da força nas Unidades de Medidas Socioeducativas deve ser progressivo e proporcional à gravidade da situação. A autorização deve ser dada somente pelo Diretor em todos os casos.",
    answer: AnswerType.ERRADO,
    explanation: "Na ausência ou impossibilidade do Diretor, a autorização pode ser dada pelo COORDENADOR DE SEGURANÇA de plantão.",
    module: ModuleType.MODULO_III
  },
  {
    id: 278,
    text: "Entre as atribuições do socioeducador encontram-se realizar atividades recreativas, esportivas, culturais, artesanais e artísticas planejadas em conjunto com a área pedagógica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O socioeducador é também um agente pedagógico.",
    module: ModuleType.MODULO_III
  },
  {
    id: 279,
    text: "O socioeducador realiza revistas pessoais nos adolescentes em momentos específicos, como na entrada e saída, com o objetivo de impedir a posse de objetos ou substâncias proibidas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Atribuição ligada à segurança preventiva.",
    module: ModuleType.MODULO_III
  },
  {
    id: 280,
    text: "O socioeducador é responsável por zelar pela convivência entre os adolescentes, atuando na mediação de conflitos e na promoção do respeito mútuo. Sua postura influencia o ambiente coletivo.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a dimensão ética do trabalho.",
    module: ModuleType.MODULO_III
  },
  {
    id: 281,
    text: "A Lei nº 12.594/2012 (SINASE) estabelece princípios e diretrizes que orientam a atuação, especialmente no que diz respeito à segurança institucional e à convivência. Os objetivos das medidas são: a responsabilização do adolescente quanto às consequências do ato infracional, incentivando a reparação; a integração social do adolescente e a garantia de seus direitos, por meio do cumprimento de seu PIA.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta resumindo os objetivos do SINASE.",
    module: ModuleType.MODULO_III
  },
  {
    id: 282,
    text: "A Lei nº 12.594/2012 (Sinase) estabelece que a execução das medidas socioeducativas deve observar princípios como o: da mínima intervenção, não discriminação, legalidade, dentre outros.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre os princípios regentes da execução.",
    module: ModuleType.MODULO_III
  },
  {
    id: 283,
    text: "O socioeducador atua diretamente com adolescentes em cumprimento de medidas socioeducativas. Seu papel é garantir o respeito aos direitos fundamentais, incluindo o direito à vida, à dignidade e à educação.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a função primordial do agente.",
    module: ModuleType.MODULO_III
  },
  {
    id: 284,
    text: "A Constituição Federal assegura prioridade parcial à criança e ao adolescente. O ECA reforça essa proteção parcial. O SINASE organiza a execução das medidas com base nesses princípios.",
    answer: AnswerType.ERRADO,
    explanation: "A prioridade é ABSOLUTA e a proteção é INTEGRAL, não parciais.",
    module: ModuleType.MODULO_III
  },
  {
    id: 285,
    text: "O Socioeducador é um agente de direitos e sua atuação fortalece a cidadania e a justiça social. Respeitar os Direitos Fundamentais e os Direitos Humanos é dever de todos, especialmente no atendimento a adolescentes.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O servidor é a face do Estado perante o jovem.",
    module: ModuleType.MODULO_III
  },
  {
    id: 286,
    text: "Nenhuma criança ou adolescente será objeto de qualquer forma de negligência, discriminação, exploração, violência, crueldade e opressão, punido na forma da lei qualquer atentado, por ação ou omissão, aos seus direitos fundamentais.",
    answer: AnswerType.CORRETO,
    explanation: "Texto literal do Art. 5º do ECA.",
    module: ModuleType.MODULO_III
  },
  {
    id: 287,
    text: "A criança e o adolescente têm o direito de ser educados e cuidados, mas com o uso de castigo físico ou de tratamento cruel ou degradante, como formas de correção, disciplina, educação ou qualquer outro pretexto, pelos pais, pelos integrantes da família ampliada, pelos responsáveis, pelos agentes públicos executores de medidas socioeducativas.",
    answer: AnswerType.ERRADO,
    explanation: "O ECA e a Lei Menino Bernardo garantem o direito de ser educados SEM o uso de castigo físico ou tratamento cruel.",
    module: ModuleType.MODULO_III
  },
  {
    id: 288,
    text: "O ECA garante que nenhum adolescente será privado de sua liberdade, mesmo que em casos de flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    answer: AnswerType.ERRADO,
    explanation: "Haverá privação de liberdade SIM, justamente em casos de flagrante ou ordem judicial. Além disso, proíbe-se trabalho forçado.",
    module: ModuleType.MODULO_III
  },
  {
    id: 289,
    text: "A Convenção da ONU sobre os Direitos da Criança, adotada em 1989, é o tratado internacional de direitos humanos mais amplamente ratificado da história. Ela estabelece uma série de direitos civis, políticos, econômicos, sociais e culturais para todas as crianças.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o principal marco internacional da área.",
    module: ModuleType.MODULO_III
  },
  {
    id: 290,
    text: "As Regras de Beijing (Regras Mínimas das Nações Unidas para a Administração da Justiça Juvenil), adotadas pela ONU em 1985, estabelecem diretrizes para garantir que jovens em conflito com a lei sejam tratados com dignidade, justiça e respeito aos seus direitos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as diretrizes globais da justiça juvenil.",
    module: ModuleType.MODULO_III
  },
  {
    id: 291,
    text: "As Regras de Havana (Regras Mínimas das Nações Unidas para a Proteção dos Jovens Privados de Liberdade), adotadas em 1990, estabelecem diretrizes internacionais para garantir o respeito aos direitos humanos de adolescentes em privação de liberdade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as normas de proteção em ambiente fechado.",
    module: ModuleType.MODULO_III
  },
  {
    id: 292,
    text: "Segundo a Constituição Federal, todos são iguais perante a lei, com algumas distinções de natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a violabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade e ninguém será submetido a tortura, tão logo poderá ser submetido a tratamento desumano ou degradante.",
    answer: AnswerType.ERRADO,
    explanation: "Houve erro na redação: é 'sem distinção de qualquer natureza' e 'ninguém será submetido a tortura NEM a tratamento desumano'.",
    module: ModuleType.MODULO_III
  },
  {
    id: 293,
    text: "A Constituição, o art. 5º, inciso XLIII afirma que a lei considerará crime afiançável e suscetível de graça ou anistia a prática da tortura, por ele respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem.",
    answer: AnswerType.ERRADO,
    explanation: "Tortura é crime INAFIANÇÁVEL e INSUSCETÍVEL de graça ou anistia.",
    module: ModuleType.MODULO_III
  },
  {
    id: 294,
    text: "O Brasil, desde 1985 assinou a Convenção contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes, que obriga o país a tomar medidas eficazes de caráter legislativo, administrativo, judicial ou de outra natureza, a fim de impedir a prática de atos de tortura em qualquer território sob sua jurisdição.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a adesão brasileira aos tratados anti-tortura.",
    module: ModuleType.MODULO_III
  },
  {
    id: 295,
    text: "A pena para quem comete o crime de tortura, via de regra é de dois a oito anos de reclusão. E mais, quando alguém que tem o dever jurídico de apurar a conduta delituosa (tortura) não o faz, também responde criminalmente, mas por omissão. A pena pela omissão é de detenção de um a quatro anos.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a dosimetria da Lei 9.455/97.",
    module: ModuleType.MODULO_III
  },
  {
    id: 296,
    text: "Quando a prática do crime de tortura resulta em lesão corporal de natureza grave ou gravíssima ou se a vítima morre, a tortura passa a ser chamada de qualificada e as penas são menores.",
    answer: AnswerType.ERRADO,
    explanation: "Na tortura qualificada pelo resultado morte ou lesão grave, as penas são MAIORES (reclusão de 8 a 16 anos para morte).",
    module: ModuleType.MODULO_III
  },
  {
    id: 297,
    text: "Nos casos em que a tortura é cometida por agente público ou se o crime foi cometido contra criança, gestante ou adolescente, aplica-se a chamada causa de aumento de pena.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. São as causas de aumento de um sexto a um terço prevista na lei.",
    module: ModuleType.MODULO_III
  },
  {
    id: 298,
    text: "A condenação do agente público, por crime de tortura, implicará na perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. É efeito automático da condenação.",
    module: ModuleType.MODULO_III
  },
  {
    id: 299,
    text: "A Corregedoria no sistema socioeducativo é o setor que acompanha e fiscaliza o trabalho feito dentro das unidades e instituições que atendem adolescentes em cumprimento de medidas socioeducativas.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a finalidade correcional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 300,
    text: "A principal norma que rege a Corregedoria da SEAS é a Portaria nº 004/2021, que estabelece as atividades correicionais relacionadas à apuração das infrações disciplinares.",
    answer: AnswerType.ERRADO,
    explanation: "A norma atual é a Portaria nº 006/2023.",
    module: ModuleType.MODULO_III
  },
  {
    id: 301,
    text: "Entre as competências da Corregedoria, encontram-se, inspecionar periodicamente o funcionamento dos órgãos da Superintendência organizar, regulamentar e coordenar as comissões de processo sindicantes e de processos administrativos de acordo com a legislação vigentes, dentre outras.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o rol de competências.",
    module: ModuleType.MODULO_III
  },
  {
    id: 302,
    text: "Para executar as competências da corregedoria há o corregedor. O corregedor é the servidor responsável por fiscalizar e acompanhar o trabalho da corregedoria. Ele verifica se as regras estão sendo cumpridas, se há falhas ou irregularidades e se os servidores estão agindo corretamente. Também recebe denúncias, orienta sobre procedimentos e pode abrir investigações quando necessário.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a figura do corregedor.",
    module: ModuleType.MODULO_III
  },
  {
    id: 303,
    text: "Entre as competências do Corregedor, encontram-se, fiscalizar, controlar e orientar, disciplinarmente, as atividades desenvolvidas pelos servidores; realizar sindicância para investigar, identificar e apurar as responsabilidades administrativas por transgressões funcionais praticadas por servidores, dentre outras.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Detalha a atuação funcional.",
    module: ModuleType.MODULO_III
  },
  {
    id: 304,
    text: "Os instrumentos jurídicos correcionais utilizados pela SEAS são: Procedimento Administrativo (PA), Sindicância (SD) e o Processo Administrativo Disciplinar (PAD).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. São as ferramentas de apuração disciplinar.",
    module: ModuleType.MODULO_III
  },
  {
    id: 305,
    text: "Processo Administrativo Disciplinar (PAD): é um procedimento apuratório, aplicável aos servidores públicos, servidores temporários ou agentes públicos e que tem o objetivo de averiguar a autoria ou a existência de irregularidade praticada no serviço público, podendo resultar na aplicação das penalidades disciplinares de advertência, suspensão e demissão, sempre observado o contraditório e a ampla defesa.",
    answer: AnswerType.ERRADO,
    explanation: "O PAD aplica-se a SERVIDORES PÚBLICOS EFETIVOS. Para temporários e outros, os instrumentos seguem ritos simplificados como sindicância de demissão ou processo administrativo próprio.",
    module: ModuleType.MODULO_III
  },
  {
    id: 306,
    text: "Aos profissionais do sistema socioeducativo poderão ser empregadas medidas pedagógicas, de caráter não punitivo, com o objetivo de orientar e regular condutas de baixa complexidade. Como medidas pedagógicas poderão ser aplicados o Termo de Orientação Funcional e o Termo de Ajustamento do Conduta.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Visa educar o servidor antes de punir infrações leves.",
    module: ModuleType.MODULO_III
  },
  {
    id: 307,
    text: "São consideradas sanções disciplinares no âmbito da SEAS: Repreensão, na modalidade advertência, Suspensão até 30 (trinta) dias e a Demissão ou Rescisão Contratual.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta conforme a lei do funcionalismo estadual e regulamentos SEAS.",
    module: ModuleType.MODULO_III
  },

  // --- MÓDULO IV: SAÚDE E POLÍTICAS SETORIAIS (IDs REINDEXADOS: 308 a 337) ---
  {
    id: 308,
    text: "No Brasil, a Constituição Federal de 1988 estabelece a saúde como direito de todos e dever do Estado e que essa deve ser garantida por meio de políticas sociais e econômicas. O ECA aponta a saúde de crianças e adolescentes como um dever da família, da comunidade, da sociedade e do poder público.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. Fundamentação do direito à saúde como universal.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 309,
    text: "O Sistema Único de Saúde (SUS) não é o principal responsável pelo cuidado à saúde dos adolescentes. Os princípios e diretrizes do SUS, previstos na Lei 8.080 de 1990, direcionam para um descuido na perspectiva da universalidade, da integralidade, da equidade com atenção integral por meio de ações e serviços de promoção, proteção e recuperação.",
    answer: AnswerType.ERRADO,
    explanation: "O SUS É o principal responsável. A perspectiva deve ser de CUIDADO e integralidade, não 'descuido'.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 310,
    text: "Acolhimento, escuta e confidencialidade são elementos fundamentais para favorecer o cuidado integral à saúde de adolescentes.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. São os eixos do atendimento humanizado em saúde.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 311,
    text: "A Política Nacional de Atenção Integral à Saúde dos Adolescentes em Conflito com a Lei (PNAISARI) estabelece a necessidade de se priorizar o atendimento de saúde fora das unidades socioeducativas, bem como o fortalecimento da intersetorialidade.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. A ideia é usar a rede pública de saúde da comunidade para evitar guetização.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 312,
    text: "É necessário que a atenção em saúde aos adolescentes seja humanizada e de qualidade, orientada pelos princípios do SUS, SINASE e ECA, em articulação. Sabendo que o Plano Individual de Atendimento (PIA) é um instrumento fundamental no sistema socioeducativo e nele o eixo saúde deve ser contemplado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta. O eixo saúde é obrigatório no PIA.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 313,
    text: "As ações de atenção integral aos adolescentes em conflito com a lei devem contemplar somente o acompanhamento do seu crescimento e desenvolvimento físico e psicossocial; a saúde sexual e a saúde reprodutiva; a saúde bucal e por fim a saúde mental.",
    answer: AnswerType.ERRADO,
    explanation: "A palavra 'somente' restringe o cuidado. A PNAISARI prevê 8 ações integrais, incluindo nutrição, visão, vacinação e prevenção de agravos.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 314,
    text: "É importante também a articulação com Conselhos Tutelares e Conselhos Municipais e Estaduais de Defesa dos Direitos de Crianças e Adolescentes e Conselhos de Saúde.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a rede de proteção.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 315,
    text: "O conjunto de diretrizes do Ministério da Saúde para a promoção da saúde e organização dos serviços para a atenção integral à saúde de adolescentes deve ter três eixos fundamentais para viabilização da atenção integral à saúde de adolescentes e jovens: promoção da saúde e prevenção de agravos em adolescentes; ações de assistência e reabilitação de saúde de adolescentes e educação permanente dos trabalhadores(as).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre os pilares da política nacional.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 316,
    text: "Existem dois tipos de assédio sexual: o assédio por chantagem, caracterizado pela exigência de conduta sexual em troca de benefícios ou para evitar prejuízos na relação de trabalho, e o assédio por intimidação ou ambiente hostil, que ocorre quando provocações sexuais inoportunas criam um ambiente ofensivo, intimidatório ou humilhante, prejudicando o desempenho profissional.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as tipologias de assédio sexual no trabalho.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 317,
    text: "A Organização Pan-Americana de Saúde (OPAS) destaca três aspectos no que diz respeito à saúde mental de crianças e adolescentes: 1) Determinantes de Saúde Mental; 2) Promoção e prevenção e 3) Detecção precoce e tratamento. Entre os determinantes citados pela OPAS estão o desejo por autonomia, qualidade de vida, exploração da identidade sexual, acesso às tecnologias e violência.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre as diretrizes internacionais de saúde mental.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 318,
    text: "No Brasil, a Rede de Atenção Psicossocial (RAPS), com destaque para os Centros de Atenção Psicossocial Infantojuvenis (CAPSij), as Unidades Básicas de Saúde (UBS) e o Programa Saúde na Escola (PSE), representa a principal estrutura para o cuidado contínuo e intersetorial a essa população.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a estrutura do SUS para saúde mental.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 319,
    text: "A PNAISARI ressalta o papel do vínculo, do acolhimento e da escuta qualificada no cuidado em saúde mental. Para isso, ele irá observar, identificar, acolher, encaminhar, realizar mediações e promover atividades gerais de promoção da saúde e específicas de saúde mental, como ações relacionadas ao incentivo a bullying.",
    answer: AnswerType.ERRADO,
    explanation: "O erro é 'incentivo ao bullying'. O papel é o COMBATE ao bullying e a promoção da autoestima.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 320,
    text: "De acordo com as diretrizes do SINASE (Lei nº 12.594/2012), da PNAISARI (Portaria nº 1.082/2014) e do ECA, o socioeducador desempenha funções em articulação com as equipes interdisciplinares, incluindo a participação na elaboração e acompanhamento do Projeto Terapêutico Singular (PTS) e do Plano Individual de Atendimento (PIA), integrando o cuidado à rotina socioeducativa.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a interdisciplinaridade no cotidiano.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 321,
    text: "A Escola Nacional da Socioeducação (ENS) busca ofertar, de maneira onerosa e parcialmente, um espaço de formação qualificada para os(as) diferentes profissionais que atuam direta ou indiretamente no Sistema Nacional de Atendimento Socioeducativo (SINASE – Resolução do Conanda no 119/2006 e a Lei Federal no 12.594/2012).",
    answer: AnswerType.ERRADO,
    explanation: "A ENS deve ofertar formação de maneira GRATUITA e PERMANENTE.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 322,
    text: "A Escola Nacional da Socioeducação (ENS) surge para oferecer um espaço seguro onde profissionais das medidas socioeducativas (meio aberto, restritivas ou privativas de liberdade) possam qualificar sua prática e aprimorar instrumentos de trabalho, visando a melhoria dos serviços, programas, ações, e políticas voltadas aos adolescentes em cumprimento de medida.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a missão da ENS.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 323,
    text: "O termo DST (Doenças Sexualmente Transmissíveis) mudou para IST (Infecções Sexualmente Transmissíveis). “Doenças” remontam a sinais e sintomas visíveis no organismo da pessoa, já as “infecções” podem ter períodos sem sintomas e se manter assim por um tempo, e somente são detectadas por meio de exames laboratoriais. Por isso, o termo IST é o mais adequado.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a nomenclatura atual de saúde pública.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 324,
    text: "As manifestações mais comuns das IST (Infecções Sexualmente Transmissíveis), são: verrugas, corrimentos, feridas, HPV e herpes.",
    answer: AnswerType.ERRADO,
    explanation: "As manifestações são verrugas, corrimentos e feridas. HPV e Herpes são as PATOLOGIAS (causas/vírus), não os sintomas propriamente ditos no texto médico.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 325,
    text: "As IST (Infecções Sexualmente Transmissíveis) mais conhecidas são: HIV, Hepatites B e C, Sífilis, HPV, Cancro mole, Clamídia, Tricomoníase, Herpes, Gonorreia e Doença Inflamatória Pélvica (DIP).",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta listando as principais infecções vigentes.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 326,
    text: "O HIV (Vírus da Imunodeficiência Humana) é o agente que compromete o sistema imunológico, afetando principalmente as células de defesa CD4+.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a biologia do vírus.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 327,
    text: "A AIDS (Síndrome da Imunodeficiência Adquirida) é a fase mais avançada da infecção causada pelo vírus HIV, caracterizada por uma profunda deficiência do sistema imunológico, que torna o organismo vulnerável a infecções oportunistas. Nesse estágio, a ausência de tratamento adequado pode levar a complicações severas e até ao óbito.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a progressão da doença.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 328,
    text: "O HPV é uma infecção sexualmente transmissível (IST) causada pela bactéria Treponema pallidum, que pode afetar todo o corpo e evolui em fases, podendo apresentar manifestações clínicas distintas, com complicações graves a longo prazo, incluindo neurológicas, cardiovasculares e até a morte.",
    answer: AnswerType.ERRADO,
    explanation: "O HPV é causado por VÍRUS. A bactéria Treponema pallidum causa a SÍFILIS.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 329,
    text: "A tricomoníase é uma infecção sexualmente transmissível (IST) causada pelo protozoário flagelado Trichomonas vaginalis. É considerada a IST não viral mais comum no mundo, afetando principalmente mulheres em idade reprodutiva. No Brasil, estima-se que até 5% da população possa estar infectada, com maior prevalência em populações vulneráveis.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o protozoário.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 330,
    text: "A gonorreia é uma infecção sexualmente transmissível (IST) causada pela bactéria Neisseria gonorrhoeae, também conhecida como gonococo. Essa bactéria afeta principalmente as mucosas do trato genital, reto e garganta, podendo também atingir os olhos em casos raros (BRASIL, 2020; OMS, 2022). O diagnóstico da gonorreia é essencial para evitar complicações graves, como infertilidade, doença inflamatória pélvica (DIP) e artrite gonocócica.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a gonorreia.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 331,
    text: "O assédio sexual está relacionado ao ambiente de trabalho e é definido por comportamentos abusivos, recorrentes e duradouros, que submetem o empregado a situações humilhantes, constrangedoras ou vexatórias enquanto desempenha suas atividades. Essas ações, realizadas de maneira intencional ou sistemática, violam a dignidade, a integridade psíquica e a estabilidade emocional do profissional, afetando o ambiente de trabalho e podendo causar danos significativos à saúde mental e física da pessoa.",
    answer: AnswerType.ERRADO,
    explanation: "Esta é a definição de ASSÉDIO MORAL. O assédio sexual envolve comportamento de natureza sexual indesejada.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 332,
    text: "O assédio moral é qualquer comportamento de natureza sexual, verbal, escrita, gestual ou física, que tenha como objetivo obter favorecimento sexual ou constranger alguém. Pode ocorrer no ambiente de trabalho, acadêmico ou social.",
    answer: AnswerType.ERRADO,
    explanation: "Esta é a definição de ASSÉDIO SEXUAL.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 333,
    text: "A COVID-19 é provocada pelo vírus SARS-CoV-2, um coronavírus que foi identificado pela primeira vez em dezembro de 2019, na cidade de Wuhan, na China. Em janeiro de 2020, a Organização Mundial da Saúde (OMS) classificou o surto como uma Emergência de Saúde Pública de Importância Internacional. Devido à rápida propagação global, foi posteriormente classificado como pandemia.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o histórico da COVID-19.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 334,
    text: "A Endemia ocorre: quando uma doença se torna recorrente em uma região, com aumento de casos em determinada época do ano.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre o conceito de endemia.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 335,
    text: "A influenza é uma infecção respiratória aguda provocada por vírus da família Orthomyxoviridae. Os tipos A e B são os mais frequentes em humanos, com o tipo A sendo o mais usual e causador de epidemias e pandemias.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a gripe.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 336,
    text: "De acordo com a Organização Mundial da Saúde (OMS, 2022), drogas são compostos somente sintéticos que alteram as funções físicas, cognitivas ou comportamentais do organismo quando introduzidos, independentemente de sua legalidade. O uso problemático dessas substâncias pode afetar a saúde, a vida social e o bem-estar pessoal.",
    answer: AnswerType.ERRADO,
    explanation: "Drogas são compostos NATURAIS OU SINTÉTICOS. A palavra 'somente' invalida o item.",
    module: ModuleType.MODULO_IV
  },
  {
    id: 337,
    text: "A Política Nacional sobre Drogas (PNAD) é o conjunto de diretrizes oficiais do Governo Federal para lidar com o uso, posse, produção e tráfico de substâncias psicoativas, bem como mitigar os impactos sociais e de saúde associados ao seu consumo. Regulamentada principalmente pela Lei nº 11.343/2006, a PNAD orienta ações em saúde, assistência social, educação e segurança pública, buscando equilíbrio entre cuidado e repressão.",
    answer: AnswerType.CORRETO,
    explanation: "Afirmação correta sobre a PNAD.",
    module: ModuleType.MODULO_IV
  }
];
