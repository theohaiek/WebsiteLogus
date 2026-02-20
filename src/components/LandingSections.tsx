import logoTransparente from '@/assets/logo_transparente.png';
import selfPortrait from '@/assets/self-portrait.png';
import bannerV2 from '@/assets/logus_banner_v2.png';
import banner2 from '@/assets/logus_banner2.png';
import escritorio from '@/assets/escritorio_logus.png';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden">
    {/* Office background - dark & blurred */}
    <div className="absolute inset-0 z-0">
      <img
        src={escritorio}
        alt=""
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.15) blur(3px)', transform: 'scale(1.05)' }}
      />
    </div>
    {/* Gradient fade to site background at bottom */}
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    <div className="absolute bottom-0 left-0 right-0 h-40 z-0 bg-gradient-to-b from-transparent to-background" />

    <div className="section-container w-full relative z-10">
      <div className="max-w-7xl mx-auto lg:flex lg:justify-end">
        <div className="text-center lg:text-right lg:max-w-3xl">
          <p className="text-base lg:text-lg font-heading tracking-[0.3em] uppercase text-primary mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Protocolo de Integração Digital Total
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Dono de clínica, elimine <span className="text-gradient">80% das Tarefas Repetitivas</span> em 60 Dias
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mb-12 animate-fade-in leading-relaxed lg:ml-auto" style={{ animationDelay: '0.4s' }}>
            Automatize operações e rastreie cada lead e paciente desde o anúncio e conversão até a consulta e o acompanhamento através de integrações personalizadas 24/7, sem depender de agências ou ter que aprender programação.
          </p>
          <a href="#diagnostico" className="btn-primary text-xl px-10 py-5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            AGENDAR DIAGNÓSTICO GRATUITO
          </a>
          <div className="flex flex-wrap justify-center lg:justify-end gap-10 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-3 text-base text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Primeira automação em 72h
            </span>
            <span className="flex items-center gap-3 text-base text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Suporte pessoal 24/7
            </span>
            <span className="flex items-center gap-3 text-base text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Garantia de 30 dias
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const problems = [
  { title: "Equipe Sobrecarregada", desc: "Sua equipe passa horas copiando dados entre planilhas e CRM manualmente, perdendo tempo que poderia ser investido em atendimento de qualidade." },
  { title: "Dados Dispersos", desc: "Métricas espalhadas em diferentes sistemas, impossibilitando uma visão clara do seu negócio e dificultando tomadas de decisão estratégicas." },
  { title: "Origem dos Pacientes Desconhecida", desc: "Você investe em captação de pacientes, mas não sabe exatamente qual ação trouxe qual paciente, desperdiçando verba em canais que não convertem." },
  { title: "Sistemas Desconectados", desc: "WhatsApp, CRM, planilhas e agendamento funcionam como ilhas isoladas, criando retrabalho e possibilidade de erros humanos." },
  { title: "Gastos com Soluções Ineficazes", desc: "Já contratou consultoria que entrega soluções genéricas que não se adaptam à realidade do seu negócio e acabam sendo abandonadas." },
  { title: "Dependência de Pessoas Chave", desc: "Quando aquele funcionário específico falta, o setor inteiro para porque só ele sabe como operar determinados processos." },
];

const ProblemsSection = () => (
  <section className="py-24">
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
        Você Reconhece <span className="text-gradient">Esses Problemas?</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
        Se você é dono ou gestor de uma clínica de estética ou odontologia, provavelmente já viveu pelo menos uma dessas situações:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div key={i} className="problem-card card-glass glow-border p-6 transition-all duration-300 group">
            <span className="problem-label text-xs font-heading tracking-wider uppercase">Problema #{i + 1}</span>
            <h3 className="text-xl font-heading font-semibold text-foreground mt-2 mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
        E se você pudesse resolver <span className="text-primary font-semibold">TODOS</span> esses problemas de uma vez? É exatamente isso que o Protocolo de Integração Digital Total faz pela sua clínica.
      </p>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
        A Solução que Sua Clínica <span className="text-gradient">Precisa</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg">
        A Logus Automação não vende soluções prontas de prateleira. Nós desenvolvemos um ecossistema de automação personalizado para o seu negócio, conectando todos os seus sistemas atuais sem precisar migrar para novas plataformas.
      </p>
      <p className="text-foreground text-center max-w-3xl mx-auto mb-16 text-lg font-medium">
        Imagine acordar amanhã e descobrir que 80% das tarefas repetitivas da sua equipe simplesmente acontecem sozinhas. Sem erros. Sem atrasos. Sem depender de ninguém.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          "Automações rodando 24/7 conectando WhatsApp, CRM, planilhas e sistemas internos",
          "Dashboards em tempo real das áreas de atendimento, vendas e gestão de processos",
          "Rastreamento completo da jornada do lead desde o anúncio até o fechamento",
          "Equipe liberada para focar no que realmente importa: atendimento de qualidade",
          "Suporte pessoal 24/7 com o CEO da empresa",
        ].map((feat, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
            <p className="text-foreground">{feat}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        {[
          { num: "80%", label: "Redução de tarefas manuais" },
          { num: "72h", label: "Primeira automação funcionando" },
          { num: "24/7", label: "Monitoramento ativo" },
        ].map((m, i) => (
          <div key={i} className="text-center">
            <div className="metric-number">{m.num}</div>
            <p className="text-muted-foreground text-sm mt-2">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Mapeamento Completo", desc: "Identificamos todos os sistemas atuais, processos manuais, membros da equipe responsáveis e pontos de atrito. Em 2-4 dias você recebe um relatório completo mostrando exatamente onde está perdendo tempo e dinheiro." },
  { num: "02", title: "Arquitetura da Solução", desc: "Desenvolvemos em conjunto com sua equipe o diagrama técnico de como todos os sistemas serão conectados via webhooks e APIs. Você vê exatamente o que será entregue ANTES de começarmos a construir." },
  { num: "03", title: "Construção e Testes", desc: "Implementamos todas as automações em ambiente de testes para validação. Você consegue testar tudo sem risco de quebrar sua operação atual. E aqui está o diferencial: em 72h você já tem a primeira automação funcionando." },
  { num: "04", title: "Validação em Produção", desc: "Monitoramento intensivo de 1-2 semanas analisando cada execução das automações em ambiente real, identificando e corrigindo incompatibilidades antes que se tornem problemas." },
  { num: "05", title: "Extração de Insights e Manutenção", desc: "Relatórios periódicos com insights estratégicos extraídos dos seus dados + manutenção ativa 24/7 garantindo que tudo continue funcionando perfeitamente, mesmo quando seus sistemas mudarem." },
];

const StepsSection = () => (
  <section className="py-24">
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
        Como Funciona o <span className="text-gradient">Protocolo</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
        5 passos estratégicos para transformar sua clínica em uma operação digital integrada
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="card-glass glow-border p-8 relative overflow-hidden">
            <span className="step-number absolute -top-2 -left-2">{s.num}</span>
            <div className="relative z-10 ml-12">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Passo {s.num} — {s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const benefits = [
  { title: "Velocidade Expressa", desc: "Primeira automação funcionando em 72h. Não trabalhamos com horário comercial - sua urgência é nossa prioridade." },
  { title: "ROI Imediato", desc: "Comece economizando horas da equipe desde a primeira semana. Veja o retorno do investimento antes mesmo do projeto terminar." },
  { title: "Zero Risco", desc: "Testamos tudo em ambiente separado. Sua operação continua funcionando normalmente enquanto construímos as automações." },
  { title: "Decisões Baseadas em Dados", desc: "Dashboards em tempo real mostrando métricas que realmente importam. Saiba exatamente qual anúncio trouxe qual paciente." },
  { title: "Suporte Pessoal 24/7", desc: "Número pessoal do CEO Theo Haiek disponível 24 horas por dia, 7 dias por semana para atender emergências." },
  { title: "Sem Migração", desc: "Não precisa trocar de CRM ou sistema. Trabalhamos com o que você já usa e conectamos tudo de forma inteligente." },
];

const BenefitsSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
        O Que Você Vai <span className="text-gradient">Ganhar</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
        Benefícios tangíveis que impactam diretamente seus resultados
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="card-glass glow-border p-6 hover:bg-card/80 transition-all duration-300">
            <span className="text-xs font-heading tracking-wider text-primary uppercase">Benefício #{i + 1}</span>
            <h3 className="text-xl font-heading font-semibold text-foreground mt-2 mb-3">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const differentials = [
  { title: "Soluções 100% Personalizadas", desc: "Não vendemos templates prontos. Cada automação é desenvolvida do zero para atender exatamente as necessidades do SEU negócio. Nada de soluções genéricas que não funcionam na prática." },
  { title: "Entrega Expressa Quando Você Precisa", desc: "Não trabalhamos com horário comercial tradicional. Em casos de urgência, ativamos modo de entrega expressa e resolvemos seu problema rapidamente." },
  { title: "Linha Direta com o CEO 24/7", desc: "Você tem acesso direto ao número pessoal do CEO Theo Haiek. Problema às 2h da manhã? Ligação atendida. Esse nível de suporte simplesmente não existe em outras consultorias." },
  { title: "Adaptamos ao SEU Sistema", desc: "Você não precisa mudar nada. Não precisa migrar de CRM, trocar de plataforma ou adaptar processos. Nós nos adaptamos ao ecossistema que VOCÊ já usa." },
];

const DifferentialsSection = () => (
  <section className="py-24">
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
        Por Que a Logus é <span className="text-gradient">Diferente?</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
        Não somos mais uma consultoria genérica. Veja o que nos torna únicos:
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {differentials.map((d, i) => (
          <div key={i} className="card-glass glow-border p-6 hover:bg-card/80 transition-all duration-300">
            <span className="text-xs font-heading tracking-wider text-primary uppercase">Diferencial #{i + 1}</span>
            <h3 className="text-xl font-heading font-semibold text-foreground mt-2 mb-3">{d.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FounderSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="section-container">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img src={selfPortrait} alt="Theo Haiek - Fundador" className="w-64 h-80 object-cover rounded-2xl border border-border/50" />
        <div>
          <p className="text-xs font-heading tracking-[0.3em] uppercase text-primary mb-4">Fundador</p>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Theo Haiek</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Nossa missão central é promover a modernização de pequenos e médios negócios de maneira acessível e intuitiva. Automatize desde processos simples e de pequeno escopo até grandes projetos que integram diversos sistemas sem conexão nativa.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="diagnostico" className="py-24">
    <div className="section-container">
      <div className="max-w-6xl mx-auto lg:flex lg:items-start lg:gap-16">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Está Pronto Para <span className="text-gradient">Transformar Sua Clínica?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Agende agora uma reunião de diagnóstico gratuita. Vamos mapear seus processos atuais e mostrar exatamente como podemos eliminar 80% das tarefas repetitivas da sua equipe em 60 dias.
          </p>
          <p className="text-primary text-sm font-semibold mb-8">
            ⚡ Atendemos apenas 5 clínicas por mês para garantir qualidade máxima na entrega. Garanta sua vaga agora.
          </p>
          <div className="card-glass p-6 text-left">
            <p className="text-sm font-heading text-foreground font-semibold mb-3">O que NÃO vai mudar se você não agir:</p>
            <ul className="space-y-2">
              {[
                "Equipe continuará sobrecarregada com tarefas manuais",
                "Você continuará sem saber de onde vêm seus pacientes",
                "Dinheiro desperdiçado em anúncios que não convertem",
                "Processos dependentes de pessoas específicas",
                "Dados dispersos sem visão clara do negócio",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-destructive mt-0.5">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form className="space-y-4 mb-10" onSubmit={e => e.preventDefault()}>
            {["Nome", "Nome da clínica", "Email corporativo", "Telefone para contato"].map((label) => (
              <input
                key={label}
                type="text"
                placeholder={label}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
              />
            ))}
            <button type="submit" className="btn-primary w-full">
              AGENDAR DIAGNÓSTICO GRATUITO
            </button>
            <img src={logoTransparente} alt="Logus Soluções em Automação" className="w-full max-w-lg mx-auto mt-10 opacity-80" />
          </form>
        </div>
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="section-container text-center">
      <p className="text-muted-foreground text-sm">
        Copyright © 2026 Logus Soluções em Automação
      </p>
    </div>
  </footer>
);

export {
  HeroSection,
  ProblemsSection,
  SolutionSection,
  StepsSection,
  BenefitsSection,
  DifferentialsSection,
  FounderSection,
  CTASection,
  FooterSection,
};
