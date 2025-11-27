'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, BarChart3, Shield, Check, ArrowRight, Phone, Lock, Sparkles, Edit3, Play, RotateCcw, TrendingUp, PieChart, Wallet, Target, Bell, Calendar, User, Briefcase, Users, Home as HomeIcon, Star, CheckCircle2, Zap, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const checkoutUrl = "https://pay.cakto.com.br/5tm3ppj_653075"

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header - Fixo com Logo Axis Finance */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <Image 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e3737dd6-833b-4bb1-956d-88d002863d66.png"
              alt="Axis Finance Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
              priority
            />
            <span className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
              Axis Finance
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Recursos</a>
            <a href="#precos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Preços</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Depoimentos</a>
            <Button 
              asChild
              className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Começar Agora
              </a>
            </Button>
          </nav>
          {/* Menu Mobile */}
          <Button 
            asChild
            size="sm"
            className="md:hidden bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Acessar
            </a>
          </Button>
        </div>
      </header>

      {/* Espaçamento para Header Fixo */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section - REDESENHADO */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center relative overflow-hidden">
        {/* Background Gradient Animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 opacity-50 -z-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full px-5 py-2 mb-8 shadow-lg animate-bounce">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">CONTROLE FINANCEIRO INTELIGENTE</span>
          </div>

          {/* Título Principal - IMPACTANTE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Suas finanças sob{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 animate-gradient">
              controle total
            </span>
            {' '}pelo WhatsApp
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Organize receitas, despesas e conquiste seus objetivos financeiros com inteligência artificial e simplicidade.
          </p>

          {/* Botão de Ação Principal - DESTAQUE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:scale-110 active:scale-95 font-bold"
            >
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5" />
                Começar Agora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-teal-200 border-2 border-white"></div>
              </div>
              <span className="text-sm font-semibold">+5.000 usuários</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold">4.9/5 avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold">100% Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Mockup Principal - REDESENHADA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Título acima da mockup */}
          <div className="text-center mb-16">
            {/* Badge Verde */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full px-5 py-2 mb-6 shadow-lg">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-bold">SEU ASSISTENTE FINANCEIRO PESSOAL</span>
            </div>

            {/* Título com WhatsApp em gradiente */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Simples como enviar uma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                mensagem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Registre suas finanças conversando naturalmente pelo WhatsApp
            </p>
          </div>

          {/* Mockup com Efeitos Visuais Profissionais */}
          <div className="relative w-full group">
            {/* Efeito de Glow/Brilho de Fundo Animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 blur-3xl -z-10 animate-pulse"></div>
            
            {/* Container da Imagem com Sombra e Efeitos */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 transform hover:scale-[1.02] active:scale-[0.98]">
              {/* Mobile: altura otimizada */}
              <div className="block md:hidden relative w-full h-[500px] sm:h-[600px]">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a4eee26-f9e5-4c14-95c2-4d63bfcc922e.jpg"
                  alt="Mockup do Axis Finance App em Celulares"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                  quality={100}
                  sizes="100vw"
                />
              </div>
              
              {/* Tablet: altura média */}
              <div className="hidden md:block lg:hidden relative w-full h-[700px]">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a4eee26-f9e5-4c14-95c2-4d63bfcc922e.jpg"
                  alt="Mockup do Axis Finance App em Celulares"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                  quality={100}
                  sizes="(min-width: 768px) 900px, 100vw"
                />
              </div>

              {/* Desktop: altura grande */}
              <div className="hidden lg:block relative w-full h-[800px] xl:h-[900px]">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a4eee26-f9e5-4c14-95c2-4d63bfcc922e.jpg"
                  alt="Mockup do Axis Finance App em Celulares"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                  quality={100}
                  sizes="(min-width: 1280px) 1400px, (min-width: 1024px) 1200px, 100vw"
                />
              </div>
            </div>

            {/* Efeito de Reflexo Sutil */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-b from-emerald-400/10 to-transparent blur-2xl"></div>
          </div>

          {/* Features Rápidas Abaixo da Mockup */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Registro Instantâneo</h3>
                <p className="text-sm text-gray-600">Em segundos pelo WhatsApp</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Análises Visuais</h3>
                <p className="text-sm text-gray-600">Gráficos em tempo real</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">100% Seguro</h3>
                <p className="text-sm text-gray-600">Criptografia de ponta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Texto Explicativo - REDESENHADA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Sua vida financeira{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                organizada
              </span>
              <br />sem esforço
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-center">
              Você já se viu perdido com tantas despesas no seu dia a dia? Esqueceu compromissos importantes ou se assustou ao ver a fatura do cartão de crédito?
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-600">
              <p className="font-semibold text-gray-900 mb-4">
                Sabemos como isso pode ser frustrante.
              </p>
              <p>
                Agendas, planilhas, aplicativos complicados... Infelizmente, nada disso é prático e eficiente.
              </p>
            </div>

            <p className="text-center text-xl font-semibold">
              Foi por isso que criamos o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Axis Finance
              </span>
              , uma ferramenta inteligente que combina o melhor da organização financeira com a simplicidade do WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Tudo na Palma da Mão - REDESENHADA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda - Texto */}
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                  CONTROLE TOTAL
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Tudo na{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                    palma da sua mão
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Com o Axis Finance, você tem controle total das suas finanças direto do seu celular. Simples, rápido e eficiente.
                </p>
              </div>

              {/* Lista de Benefícios - REDESENHADA */}
              <div className="space-y-4">
                {[
                  'Registre despesas em segundos pelo WhatsApp',
                  'Visualize gráficos e relatórios em tempo real',
                  'Receba lembretes automáticos de contas a pagar',
                  'Acesse de qualquer lugar, a qualquer momento'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Experimente Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Coluna Direita - Mockup do Celular */}
            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 blur-3xl -z-10 group-hover:opacity-75 transition-opacity duration-700"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 transform hover:scale-[1.02]">
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                  <Image
                    src="https://meorganizy.com/assets/images/mockup-celular-new-CtR_P0dU.webp"
                    alt="Mockup do Axis Finance App no Celular"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                    sizes="(min-width: 1024px) 600px, (min-width: 768px) 500px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona - REDESENHADA */}
      <section id="recursos" className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              COMO FUNCIONA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Simples em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                3 passos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece a organizar suas finanças em minutos
            </p>
          </div>

          {/* Grid de Passos - REDESENHADO */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Passo 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <Card className="relative border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-3xl">1</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Envie sua mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Envie suas despesas e receitas diretamente para o assistente no WhatsApp de forma natural.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Passo 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <Card className="relative border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-3xl">2</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Análise inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Nossa IA processa automaticamente suas informações e categoriza tudo de forma inteligente.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Passo 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <Card className="relative border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-3xl">3</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">Resultados instantâneos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Suas movimentações são registradas instantaneamente e seus relatórios atualizados em tempo real.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Seção de Segurança Destacada - REDESENHADA */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Lock className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
              <div className="text-white text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Criptografia de Ponta a Ponta
                </h3>
                <p className="text-xl text-emerald-50 leading-relaxed">
                  Seus dados são protegidos com a mesma tecnologia usada por bancos. Todas as suas informações financeiras são criptografadas e apenas você tem acesso a elas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Vídeo e Texto - REDESENHADA COM WISTIA PLAYER - RESPONSIVA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Coluna Esquerda - Vídeo Wistia */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-[1.02]">
                {/* Wistia Player Container - RESPONSIVO */}
                <div className="w-full p-4 sm:p-6 md:p-8 bg-white">
                  <div className="relative w-full" style={{ paddingTop: '51.88%' }}>
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/k8b4susn92"
                      title="Wistia video player"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl md:rounded-3xl blur-xl opacity-20 -z-10"></div>
              </div>
            </div>

            {/* Coluna Direita - Texto */}
            <div className="order-1 md:order-2 space-y-4 md:space-y-6">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-2 md:mb-4">
                VEJA EM AÇÃO
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Suas soluções completas no{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  WhatsApp
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Com o <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Axis Finance</strong>, você gerencia suas finanças direto pelo WhatsApp de forma simples e intuitiva. Sem complicações, sem aplicativos extras.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Registre despesas, acompanhe receitas, visualize relatórios e muito mais - tudo através de mensagens naturais, como se estivesse conversando com um amigo.
              </p>

              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mt-2"
              >
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Experimente Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Funcionalidades - REDESENHADA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              FUNCIONALIDADES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              O que você ganha usando o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Axis Finance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme sua relação com o dinheiro e alcance seus objetivos financeiros
            </p>
          </div>

          {/* Grid de Funcionalidades - REDESENHADO */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Visualize Seu Futuro Financeiro', desc: 'Gráficos inteligentes que mostram para onde seu dinheiro está indo e como você pode economizar mais.' },
              { icon: PieChart, title: 'Categorização Automática', desc: 'A IA organiza suas despesas automaticamente em categorias, sem você precisar fazer nada.' },
              { icon: Wallet, title: 'Controle Total do Orçamento', desc: 'Defina limites de gastos por categoria e receba alertas quando estiver próximo do limite.' },
              { icon: Target, title: 'Metas Financeiras Inteligentes', desc: 'Crie metas de economia e acompanhe seu progresso em tempo real com sugestões personalizadas.' },
              { icon: Bell, title: 'Lembretes Automáticos', desc: 'Nunca mais esqueça de pagar uma conta. Receba notificações antes do vencimento.' },
              { icon: Calendar, title: 'Planejamento de Longo Prazo', desc: 'Projete seus gastos futuros e veja como suas decisões de hoje impactam seu amanhã.' }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Para Quem É - REDESENHADA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              PARA VOCÊ
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              O Axis Finance é para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                qualquer pessoa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não importa sua situação financeira ou conhecimento, o Axis Finance se adapta às suas necessidades
            </p>
          </div>

          {/* Grid de Cards - REDESENHADO */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <Card className="border-none shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <HomeIcon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Vida Pessoal e Familiar</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Organize suas finanças pessoais e familiares de forma simples e eficiente.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Acompanhe despesas da casa, mercado, contas e lazer',
                    'Defina e alcance metas como viagens, compras ou reserva de emergência',
                    'Planeje o orçamento familiar e evite surpresas no fim do mês',
                    'Organize veículos, imóveis e outros bens da família'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Gestão Empresarial Completa</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ideal para microempreendedores, freelancers e pequenos negócios.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Separe receitas empresariais das pessoais com facilidade',
                    'Acompanhe entradas e saídas do seu negócio em tempo real',
                    'Organize pagamentos a fornecedores e recebimentos de clientes',
                    'Gere relatórios profissionais para análise de desempenho'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Seção Destacada Final - REDESENHADA */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Star className="w-10 h-10 text-emerald-600 fill-emerald-600" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Sem Conhecimento Financeiro? Perfeito!
                </h3>
                <p className="text-xl text-emerald-50 leading-relaxed">
                  O Axis Finance foi criado justamente para quem não tem tempo ou paciência com planilhas complicadas. Nossa inteligência artificial cuida de tudo automaticamente, você só precisa enviar suas mensagens naturalmente pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos - REDESENHADO */}
      <section id="depoimentos" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              DEPOIMENTOS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              O que nossos usuários{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                dizem
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Depoimento 1 */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] bg-gradient-to-br from-emerald-100 to-green-100 overflow-hidden group">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/98f8e1c5-fabf-4fac-a1bd-6584f690ba83.jpg"
                    alt="Feedback de Ricardo Mendes"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={100}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-600">
                      <Image
                        src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4107c87a-cf1b-4558-b5a2-2a07b71e4eae.png"
                        alt="Ricardo Mendes"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Ricardo Mendes</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    &quot;O Axis Finance mudou completamente minha relação com dinheiro. Agora tenho controle total!&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] bg-gradient-to-br from-green-100 to-teal-100 overflow-hidden group">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1e128be9-276a-4ccf-a294-8ea48842458b.jpg"
                    alt="Feedback de Thaís Silva"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={100}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-600">
                      <Image
                        src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a24a7275-d7ca-426f-b3c7-b10b4be024e4.png"
                        alt="Carlos Azevedo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Carlos Azevedo</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    &quot;Simplesmente incrível! Registrar gastos pelo WhatsApp é muito prático e rápido.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] bg-gradient-to-br from-teal-100 to-emerald-100 overflow-hidden group">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a7111fcb-f1d9-443f-a2d3-1d00b30cafef.png"
                    alt="Feedback de Felipe Costa"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={100}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-600">
                      <Image
                        src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/cd394ef0-c35d-41c8-8faf-b3ca9f69aa38.png"
                        alt="Felipe Costa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Felipe Costa</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    &quot;Os gráficos são incríveis! Consigo visualizar exatamente para onde vai meu dinheiro.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PREÇOS - REDESENHADA E OTIMIZADA PARA MOBILE */}
      <section id="precos" className="container mx-auto px-4 py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Título e Subtítulo */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              OFERTA ESPECIAL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2">
              Pronto para transformar suas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                finanças?
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Junte-se a milhares de pessoas que já estão no controle total do seu dinheiro.
            </p>
          </div>

          {/* Card de Preço Principal - OTIMIZADO PARA MOBILE */}
          <Card className="border-none shadow-2xl overflow-hidden mb-8 md:mb-12 hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-[1.02] bg-white relative">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full blur-3xl opacity-50"></div>
            
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative">
              {/* Preço com Destaque - RESPONSIVO */}
              <div className="text-center mb-8 md:mb-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl md:text-3xl text-gray-500 line-through">R$ 149,90</span>
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-bold animate-pulse shadow-lg">
                    80% OFF
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-semibold">por apenas</span>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
                    R$ 29,90
                  </span>
                </div>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">pagamento único</p>
              </div>

              {/* Lista de Benefícios - OTIMIZADA PARA MOBILE */}
              <div className="space-y-3 sm:space-y-4 mb-8 md:mb-10">
                {[
                  { text: 'Perfil Pessoal e Empresarial', highlight: true },
                  { text: 'Perfil Casal - Compartilhe com seu cônjuge', highlight: true },
                  { text: 'Todas funcionalidades incluídas', highlight: false },
                  { text: 'Assistente WhatsApp inteligente', highlight: false },
                  { text: 'Suporte prioritário vitalício', highlight: false },
                  { text: 'Todas atualizações futuras incluídas', highlight: false }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className={`text-sm sm:text-base md:text-lg ${benefit.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botão de Compra - RESPONSIVO */}
              <Button 
                asChild
                size="lg" 
                className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white text-lg sm:text-xl md:text-2xl py-6 sm:py-8 md:py-10 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:scale-105 active:scale-95 font-bold"
              >
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-center">Garantir Minha Vaga Agora</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              {/* Badges de Confiança - RESPONSIVO */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-semibold">Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-semibold">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-semibold">Garantia 7 Dias</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção de Garantia - OTIMIZADA PARA MOBILE */}
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-600" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-emerald-50 mb-3 sm:mb-4 leading-relaxed">
                  Teste o Axis Finance por 7 dias completos sem nenhum risco.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-emerald-50 leading-relaxed">
                  Se por qualquer motivo você não ficar 100% satisfeito com a plataforma, basta enviar um email dentro dos primeiros 7 dias e restituiremos todo o seu investimento, sem perguntas, sem burocracia.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-xl hover:scale-105 transition-transform duration-300">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                <span className="text-base sm:text-lg font-bold text-gray-900">100% Seguro e Garantido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - REDESENHADO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                PERGUNTAS FREQUENTES
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Tire suas{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  dúvidas
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Tudo o que você precisa saber sobre o Axis Finance
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-emerald-100 hover:shadow-emerald-500/20 transition-all duration-500">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    Por que não usar planilhas do Excel ou Google Sheets?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Planilhas funcionam, mas exigem muito trabalho manual e conhecimento técnico. O Axis Finance automatiza tudo: categorização inteligente, gráficos em tempo real, lembretes automáticos e até assistente no WhatsApp. Você economiza horas toda semana e ainda tem insights profissionais que planilhas não oferecem.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    Funciona no celular? E se eu quiser usar no computador?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Funciona perfeitamente em ambos! Você pode acessar pelo celular, tablet ou computador. Seus dados ficam sincronizados em todos os dispositivos automaticamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    Meus dados financeiros estão seguros?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Sim! Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos padrões de segurança. Seus dados são privados e jamais compartilhados com terceiros.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    É difícil de usar? Preciso entender de finanças?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Não! O Axis Finance foi criado justamente para quem não tem tempo ou paciência com planilhas. É simples como enviar uma mensagem no WhatsApp. A inteligência artificial cuida de tudo automaticamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    Como funciona o assistente WhatsApp?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Você conversa naturalmente pelo WhatsApp como se fosse com um amigo. Envie &apos;gastei 50 reais no mercado&apos; e pronto! O assistente registra, categoriza e ainda pode enviar relatórios quando você pedir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    Vale a pena o investimento? Vou economizar dinheiro?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Sim! Nossos usuários economizam em média 30% nos gastos mensais apenas por terem clareza de para onde vai o dinheiro. O investimento se paga em poucos dias.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="pb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                    Vocês oferecem suporte? E se eu tiver dúvidas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 text-base">
                    Sim! Temos suporte via WhatsApp e email. Nossa equipe está sempre pronta para ajudar você a aproveitar ao máximo o Axis Finance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA Final no FAQ */}
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 mb-6 font-semibold">
                Ainda tem dúvidas? Fale com a gente!
              </p>
              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 font-bold"
              >
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Começar Agora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - REDESENHADO */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e3737dd6-833b-4bb1-956d-88d002863d66.png"
                alt="Axis Finance Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                Axis Finance
              </span>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400">© 2024 Axis Finance. Todos os direitos reservados.</p>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-400 text-sm">Pagamentos 100% Seguros</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
