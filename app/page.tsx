import { Header } from './components/header'
import { Chessboard } from './components/chessboard'
import { MathComponent } from './components/math-component'
import { ChessMatrix } from './components/chess-matrix'
import { InteractiveNormalDistribution } from './components/interactive-normal-distribution'

export default function ChessInfoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section id="basics" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">O básico do xadrez</h2>
          <p className="mb-4">
            O xadrez é um jogo de estratégia para dois jogadores jogado em um tabuleiro com 64 quadrados dispostos em um tabuleiro de 8x8. Cada jogador começa com 16 peças: um rei, uma rainha, duas torres, dois cavalos, dois bispos e oito peões.
          </p>
          <p>
            O objetivo do jogo é dar xeque-mate no rei do adversário, o que significa que o rei está em posição de ser capturado (em xeque) e não há jogada legal para escapar da captura.
          </p>
        </section>

        <section id="pieces" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Peças do Xadrez</h2>
          <ul className="list-disc list-inside">
            <li>Rei (♔/♚): Move-se uma casa em qualquer direção</li>
            <li>Rainha (♕/♛): Move-se qualquer número de casas em qualquer direção</li>
            <li>Torre (♖/♜): Move-se qualquer número de casas na horizontal ou na vertical</li>
            <li>Bispo (♗/♝): Move-se qualquer número de casas na diagonal</li>
            <li>Cavalo (♘/♞): Move-se em "L" (dois quadrados em qualquer direção, depois um quadrado na perpendicular)</li>
            <li>Peão (♙/♟): Move-se uma casa por vez para frente, captura na diagonal</li>
          </ul>
        </section>

        <section id="board" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tabuleiro de Xadrez</h2>
          <p className="mb-4">
            O tabuleiro de xadrez consiste em 64 quadrados dispostos em uma grade de 8x8. Os quadrados alternam entre cores claras e escuras, geralmente branco e preto. Abaixo está uma representação de um tabuleiro de xadrez com as peças em suas posições iniciais:
          </p>
          <div className="flex flex-col items-center">
            <Chessboard />
            <p className="mt-4 text-sm text-gray-600">Tabuleiro de xadrez com peças em posição inicial</p>
          </div>
        </section>

        <section id="math" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Matemática do Xadrez</h2>
          <p className="mb-4">
            O xadrez tem muitas propriedades matemáticas e estatísticas interessantes. Aqui estão alguns aspectos matemáticos fascinantes do xadrez:
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Número de jogos possíveis</h3>
              <p>O número de possíveis jogos de xadrez únicos é estimado em cerca de:</p>
              <MathComponent equation="10^{120}" />
              <p className="text-sm text-gray-600">Esse número é conhecido como Shannon Number. Existem outras estimativas, mas Shannon desenvolveu a mais famosa.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Movimentos do Cavalo</h3>
              <p>O número de possíveis movimentos do cavalo em um tabuleiro de xadrez padrão 8x8 é:</p>
              <MathComponent equation="26.534.728.821.064" />
              <p className="text-sm text-gray-600">Euler iniciou os estudos sobre a quantidade de movimentos que um cavalo pode executar em uma partida de xadrez.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Probabilidade de vitória</h3>
              <p>Dado um jogo entre dois jogadores de igual habilidade, a chance das peças brancas ganharem é:</p>
              <MathComponent equation="P(\text{Branca vence}) \approx 0.55" />
              <p className="mt-2">Este valor é baseado em análises estatísticas de milhares de jogos. O cálculo da probabilidade exata é complexo e depende de muitos fatores, mas podemos modelar isso como uma distribuição binomial:</p>
              <MathComponent equation="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}" />
              <p className="mt-2">Onde:</p>
              <ul className="list-disc list-inside mt-2">
                <li>n é o número total de jogos</li>
                <li>k é o número de vitórias das brancas</li>
                <li>p é a probabilidade de vitória das brancas em um único jogo (aproximadamente 0.55)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sistema de Ranqueamento de Xadrez</h3>
              <p>A pontuação de um jogador é calculada pela seguinte fórmula:</p>
              <MathComponent equation="E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}" />
              <p className="text-sm text-gray-600">Onde E_A é a pontuação esperada do jogador A, R_A e R_B são as classificações dos jogadores A e B respectivamente.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Representação Matricial do Xadrez</h3>
              <p className="mb-4">Um jogo de xadrez pode ser representado como uma matriz 8x8, em que cada célula contém um valor que representa uma peça ou um quadrado vazio. Abaixo temos um exemplo do estado inicial do tabuleiro:</p>
              <ChessMatrix />
              <p className="mt-4">Nessa representação:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Números positivos representam as peças brancas</li>
                <li>Números negativos representam as peças pretas</li>
                <li>0 representa os quadrados vazios</li>
                <li>Os valores absolutos representam: 1 (Peão), 2 (Cavalo), 3 (Bispo), 4 (Torre), 5 (Rainha), 6 (Rei)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Distribuição Normal da duração de um jogo de xadrez</h3>
              <p className="mb-4">O número de movimentos de um jogo de xadrez respeita a distribuição normal. A função de densidade de probabilidade para a distribuição normal é dada por:</p>
              <MathComponent equation="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}" />
              <p className="mt-2">Onde:</p>
              <ul className="list-disc list-inside mt-2">
                <li>μ (mu) é a média</li>
                <li>σ (sigma) é o desvio padrão</li>
                <li>e é a constante de Euler (aproximadamente 2.71828)</li>
                <li>π (pi) é a constante pi (aproximadamente 3.14159)</li>
              </ul>
              <p className="mt-4">Para jogos de xadrez de alto nível:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Média (μ): Aproximadamente 40 movimentos</li>
                <li>Desvio padrão (σ): Cerca de 10 movimentos</li>
              </ul>
              <p className="mt-2">Isso significa que cerca de 68% dos jogos de nível mestre duram entre 30 e 50 movimentos, e cerca de 95% duram entre 20 e 60 movimentos.</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Distribuição Normal Interativa</h4>
                <p className="mb-2">Experimente ajustar a média e o desvio padrão para ver como a distribuição muda:</p>
                <InteractiveNormalDistribution />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Problema das Oito Rainhas</h3>
              <p className="mb-4">O problema das oito rainhas é um clássico problema matemático relacionado ao xadrez. O objetivo é posicionar oito rainhas em um tabuleiro de xadrez 8x8 de modo que nenhuma rainha possa atacar outra.</p>
              <p>O número total de soluções para este problema é:</p>
              <MathComponent equation="92" />
              <p className="text-sm text-gray-600">Existem 92 soluções distintas. No entanto, se considerarmos rotações e reflexões como equivalentes, há 12 soluções únicas.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Crescimento Exponencial dos Movimentos</h3>
              <p className="mb-4">O número de possíveis posições após n movimentos cresce exponencialmente. Uma aproximação para este crescimento é dada pela fórmula:</p>
              <MathComponent equation="P(n) \approx 30^n" />
              <p className="text-sm text-gray-600">Onde P(n) é o número de posições possíveis após n movimentos. Esta é uma aproximação grosseira, mas ilustra o rápido crescimento da complexidade do jogo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Teorema de Zermelo</h3>
              <p className="mb-4">O Teorema de Zermelo, aplicado ao xadrez, afirma que em um jogo de informação perfeita e soma zero como o xadrez, com um número finito de posições, uma das seguintes afirmações deve ser verdadeira:</p>
              <ul className="list-disc list-inside mt-2">
                <li>As brancas têm uma estratégia vencedora</li>
                <li>As pretas têm uma estratégia vencedora</li>
                <li>Ambos os jogadores têm uma estratégia para forçar um empate</li>
              </ul>
              <p className="mt-2">Embora este teorema prove que existe uma solução teórica para o xadrez, a complexidade do jogo torna impossível na prática determinar qual das três possibilidades é verdadeira.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

