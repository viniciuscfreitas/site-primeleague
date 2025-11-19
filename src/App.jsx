import React, { useState, useEffect } from 'react';
import {
    Trophy,
    Sword,
    Coins,
    BarChart3,
    Users,
    Shield,
    Zap,
    Globe,
    Lock,
    ChevronRight,
    Menu,
    X,
    Activity,
    Hourglass,
    AlertTriangle
} from 'lucide-react';
import logo from './logo_prime_league.png';

// Simulação de dados de Leaderboard (MOCKUP VISUAL)
const MOCK_LEADERBOARD = [
    { rank: 1, name: "Tryhard_Killer", kdr: "4.20", elo: 2450, guild: "Imperium" },
    { rank: 2, name: "ZeroDelay_God", kdr: "3.95", elo: 2380, guild: "Void" },
    { rank: 3, name: "Combo_Machine", kdr: "3.80", elo: 2310, guild: "Imperium" },
    { rank: 4, name: "ClickSpeedBr", kdr: "3.55", elo: 2250, guild: "Legacy" },
    { rank: 5, name: "AirComboKing", kdr: "3.40", elo: 2190, guild: "Void" },
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="group p-6 bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/50 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
            <Icon className="text-amber-500 w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

const StatBox = ({ label, value, sub, highlight }) => (
    <div className="text-center p-4 border-r border-neutral-800 last:border-0 group hover:bg-white/5 transition-colors cursor-default">
        <div className={`text-2xl font-bold font-mono ${highlight ? 'text-amber-500' : 'text-white'}`}>{value}</div>
        <div className="text-neutral-400 text-xs uppercase tracking-widest font-bold group-hover:text-amber-500 transition-colors">{label}</div>
        {sub && <div className="text-neutral-600 text-[10px] mt-1">{sub}</div>}
    </div>
);

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-amber-500/30">
            {/* Custom Styles Injection for Animations */}
            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>

            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative">
                            <img src={logo} alt="Prime League Logo" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                            <div className="hidden w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 rounded flex items-center justify-center font-bold text-black text-xl">P</div>
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tighter uppercase italic hidden sm:block">
                            Prime<span className="text-amber-500">League</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
                        <a href="#" className="text-white hover:text-amber-500 transition-colors">Manifesto</a>
                        <a href="#pillars" className="text-neutral-400 hover:text-white transition-colors">O Sistema</a>
                        <a href="#rankings" className="text-neutral-400 hover:text-white transition-colors">Preview</a>
                        <a href="#" className="px-5 py-2 bg-neutral-800 border border-neutral-700 hover:border-amber-500 hover:text-amber-500 text-white font-bold rounded skew-x-[-10deg] transition-all flex items-center gap-2">
                            <Hourglass size={14} /> Status: Em Desenvolvimento
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-4">
                        <a href="#" className="text-white font-bold">Manifesto</a>
                        <a href="#pillars" className="text-neutral-400">O Sistema</a>
                        <a href="#rankings" className="text-neutral-400">Preview</a>
                        <button className="w-full py-3 bg-amber-600 text-black font-bold rounded">Entrar na Waitlist</button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Acesso Restrito: Vagas Limitadas
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic leading-none">
                        O Coliseu Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600">Está Chegando</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
                        A engenharia definitiva do 1.5.2 está sendo forjada.
                        Uma liga fechada, livre de trapaceiros e focada na elite.
                        <span className="text-white font-bold"> Garanta seu lugar na vanguarda antes que os portões se abram.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-black text-lg uppercase tracking-widest rounded skew-x-[-10deg] transition-transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)] w-full sm:w-auto flex items-center justify-center gap-2">
                            <span className="skew-x-[10deg] inline-block">Aplicar para Waitlist</span>
                            <ChevronRight className="w-5 h-5 skew-x-[10deg]" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-white font-bold text-lg uppercase tracking-widest rounded skew-x-[-10deg] transition-colors w-full sm:w-auto">
                            <span className="skew-x-[10deg] inline-block">Ler Whitepaper</span>
                        </button>
                    </div>

                    <p className="mt-6 text-neutral-500 text-xs font-mono uppercase tracking-widest">
                        <span className="text-amber-500">*</span> Apenas 500 vagas iniciais para a Fase Beta
                    </p>
                </div>
            </header>

            {/* Live Stats Ticker - WAITLIST MODE */}
            <div className="border-y border-neutral-800 bg-black/50 backdrop-blur-sm relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
                    <StatBox label="Inscritos na Waitlist" value="14,502" sub="Jogadores aguardando" highlight />
                    <StatBox label="Clãs Pré-Registrados" value="312" sub="Organizações prontas" />
                    <StatBox label="Lançamento Beta" value="Q4 2025" sub="Previsão Oficial" />
                    <StatBox label="Prize Pool Inicial" value="R$ 5.000" sub="Temporada Genesis" highlight />
                </div>
            </div>

            {/* The 4 Pillars Section */}
            <section id="pillars" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                            O Que Está Sendo <span className="text-amber-500">Construído</span>
                        </h2>
                        <p className="text-neutral-400 max-w-xl mx-auto">
                            Não estamos apenas abrindo um servidor. Estamos desenvolvendo uma infraestrutura proprietária para garantir a integridade da competição desde o dia 1.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={Sword}
                            title="Warfare & Clãs"
                            desc="O sistema de territórios e hierarquia está pronto. Prepare sua organização para dominar o mapa finito desde o lançamento."
                        />
                        <FeatureCard
                            icon={Coins}
                            title="Eco 100% Player"
                            desc="Economia desenhada para ser Anti-P2W. Chest Shops descentralizadas. A riqueza será construída, não comprada."
                        />
                        <FeatureCard
                            icon={BarChart3}
                            title="Data-Driven PvP"
                            desc="Seu KDR será sua identidade. Estamos finalizando o algoritmo de ELO e Ranking para classificar a elite real."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Core Proprietário"
                            desc="Engine customizada em desenvolvimento final. Foco total em Hit Registration perfeito e latência zero."
                        />
                    </div>
                </div>
            </section>

            {/* Interactive Terminal/Philosophy */}
            <section className="py-20 relative bg-neutral-900/30 border-y border-neutral-800">
                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-amber-500 font-bold uppercase tracking-widest mb-2">A Missão</h3>
                        <h2 className="text-4xl font-black text-white mb-6 uppercase italic">Restaurando a Era de Ouro</h2>
                        <div className="space-y-6 text-neutral-400 leading-relaxed">
                            <p>
                                O Minecraft 1.5.2 é o ápice mecânico do combate. Mas o cenário atual está fragmentado. Nós estamos unificando a elite.
                            </p>
                            <p>
                                O <span className="text-white font-bold">Prime League</span> não será para todos. Será uma liga fechada, acessível apenas via <span className="text-amber-500 font-bold">Season Pass</span> após aprovação na Waitlist.
                            </p>
                            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded flex gap-3 mt-6">
                                <AlertTriangle className="text-amber-500 shrink-0" />
                                <p className="text-sm text-amber-200/80">
                                    <span className="font-bold text-amber-500">Aviso:</span> O pré-lançamento priorizará líderes de clãs e jogadores com histórico competitivo comprovado. Inscreva-se agora para aumentar suas chances.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mock Code/Terminal Visual */}
                    <div className="bg-[#1e1e1e] rounded-lg border border-neutral-800 p-4 font-mono text-sm shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
                        <div className="flex gap-2 mb-4 border-b border-neutral-700 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-auto text-neutral-500 text-xs">status_check.sh</span>
                        </div>
                        <div className="text-neutral-300 space-y-1">
                            <div><span className="text-green-400">$</span> ./check_launch_readiness.sh</div>
                            <div className="pl-0 pt-2 text-neutral-400">Iniciando verificação de sistemas...</div>
                            <div className="pl-0 flex justify-between"><span className="text-white">Core Physics Engine</span> <span className="text-green-500">[READY]</span></div>
                            <div className="pl-0 flex justify-between"><span className="text-white">Anti-Cheat Sentinel</span> <span className="text-green-500">[READY]</span></div>
                            <div className="pl-0 flex justify-between"><span className="text-white">Economy Database</span> <span className="text-yellow-500">[MIGRATING]</span></div>
                            <div className="pl-0 flex justify-between"><span className="text-white">Territory Logic</span> <span className="text-green-500">[READY]</span></div>
                            <div className="pl-0 flex justify-between"><span className="text-white">Waitlist Queue</span> <span className="text-green-500 text-blink">[OPEN]</span></div>
                            <br />
                            <div><span className="text-green-400">$</span> echo "Launch sequence pending admin approval..."</div>
                            <div className="text-amber-500 font-bold blink">WAITING FOR GENESIS_KEY...</div>
                        </div>
                        {/* Glitch effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Leaderboard Preview */}
            <section id="rankings" className="py-24 relative">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase italic">Preview do Sistema de Rank</h2>
                            <p className="text-neutral-500 text-sm mt-1">Mockup Visual • Como funcionará o sistema ELO</p>
                        </div>
                        <div className="px-3 py-1 rounded bg-neutral-800 text-neutral-400 text-xs font-bold uppercase tracking-widest">
                            Em Desenvolvimento
                        </div>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                        <div className="grid grid-cols-12 bg-black/40 p-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-800">
                            <div className="col-span-1 text-center">Rank</div>
                            <div className="col-span-5">Jogador</div>
                            <div className="col-span-3">Organização</div>
                            <div className="col-span-2 text-center">ELO (Previsto)</div>
                            <div className="col-span-1 text-right">KDR (Meta)</div>
                        </div>

                        {MOCK_LEADERBOARD.map((player, idx) => (
                            <div key={idx} className="grid grid-cols-12 p-4 items-center border-b border-neutral-800/50 hover:bg-white/5 transition-colors group">
                                <div className="col-span-1 text-center font-mono font-bold text-neutral-400 group-hover:text-white">
                                    {player.rank === 1 ? <span className="text-amber-500 text-lg">#1</span> : `#${player.rank}`}
                                </div>
                                <div className="col-span-5 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-neutral-800 rounded overflow-hidden blur-[2px] group-hover:blur-0 transition-all">
                                        {/* Placeholder head */}
                                        <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${player.name}`} alt="Skin" />
                                    </div>
                                    <span className="font-bold text-white group-hover:text-amber-500 transition-colors">{player.name}</span>
                                    {player.rank === 1 && <Trophy size={14} className="text-amber-500" />}
                                </div>
                                <div className="col-span-3 text-neutral-400 text-sm font-mono">
                                    [{player.guild}]
                                </div>
                                <div className="col-span-2 text-center font-mono text-amber-500 font-bold">
                                    {player.elo}
                                </div>
                                <div className="col-span-1 text-right font-mono text-neutral-300">
                                    {player.kdr}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-neutral-600 text-xs mt-4 uppercase tracking-widest">
                        * Dados simulados para demonstração da interface
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#050505] border-t border-neutral-900 pt-16 pb-8 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 relative">
                                    <img src={logo} alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                                    <div className="hidden w-full h-full bg-amber-500 rounded items-center justify-center font-bold text-black">P</div>
                                </div>
                                <span className="text-xl font-bold text-white uppercase italic">
                                    Prime<span className="text-amber-500">League</span>
                                </span>
                            </div>
                            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                                A futura plataforma definitiva para o Minecraft 1.5.2 Competitivo.
                                Cadastre-se na Waitlist para receber atualizações sobre o Beta Fechado.
                                Não somos afiliados à Mojang AB.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Acesso</h4>
                            <ul className="space-y-3 text-neutral-500 text-sm">
                                <li><a href="#" className="hover:text-amber-500 transition-colors">Aplicar para Waitlist</a></li>
                                <li><a href="#" className="hover:text-amber-500 transition-colors">Pré-registro de Clã</a></li>
                                <li><a href="#" className="hover:text-amber-500 transition-colors">Cronograma de Launch</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Comunidade</h4>
                            <ul className="space-y-3 text-neutral-500 text-sm">
                                <li><a href="#" className="hover:text-amber-500 transition-colors">Discord (Oficial)</a></li>
                                <li><a href="#" className="hover:text-amber-500 transition-colors">Twitter / X</a></li>
                                <li><a href="#" className="hover:text-amber-500 transition-colors">YouTube</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
                        <p>&copy; 2024 Prime League. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white">Termos de Serviço</a>
                            <a href="#" className="hover:text-white">Privacidade</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
