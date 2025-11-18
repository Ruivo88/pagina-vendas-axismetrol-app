'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, BarChart3, Shield, Check, ArrowRight, Phone, Lock, Sparkles, Edit3, Play, RotateCcw, TrendingUp, PieChart, Wallet, Target, Bell, Calendar, User, Briefcase, Users, Home as HomeIcon, Star, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const checkoutUrl = "https://pay.cakto.com.br/5tm3ppj_653075"

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Fixo com Logo Real */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6612cac6-e181-4595-952c-7812d19ac89b.png"
              alt="Axis Finance App"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-gray-700 hover:text-[#3aae4d] transition-colors">Recursos</a>
            <a href="#precos" className="text-gray-700 hover:text-[#3aae4d] transition-colors">Preços</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-[#3aae4d] transition-colors">Depoimentos</a>
            <Button 
              asChild
              className="bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white shadow-lg hover:shadow-xl transition-all"
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
            className="md:hidden bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white"
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
        </div>
      </header>

      {/* Espaçamento para Header Fixo */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Ícone */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3aae4d] via-[#2d8a3e] to-[#1e7a30] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Controle suas finanças de forma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e]">simples</span> e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d8a3e] to-[#1e7a30]">rápida</span> pelo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#25D366]">WhatsApp</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Organize suas receitas, despesas e tenha o controle total sobre suas finanças.
          </p>

          {/* Botão de Ação - Mobile Otimizado */}
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Adquirir Agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Segunda Seção - Mockup Responsivo */}
      <section className="container mx-auto px-4 py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Título acima da mockup */}
          <div className="text-center mb-12">
            {/* Badge Verde */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] text-white rounded-full px-4 py-2 mb-6 shadow-lg">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">SEU AGENTE FINANCEIRO PARTICULAR</span>
            </div>

            {/* Título com WhatsApp em gradiente */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Veja como é simples registrar pelo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#25D366]">
                WhatsApp
              </span>
            </h2>
          </div>

          {/* Mockup com Efeitos Visuais Sutis */}
          <div className="relative w-full">
            {/* Efeito de Glow/Brilho de Fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3aae4d]/10 via-[#2d8a3e]/10 to-[#3aae4d]/10 blur-3xl -z-10"></div>
            
            {/* Container da Imagem com Sombra e Efeitos */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              {/* Mobile: altura otimizada */}
              <div className="block md:hidden relative w-full h-[500px] sm:h-[600px]">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a4eee26-f9e5-4c14-95c2-4d63bfcc922e.jpg"
                  alt="Mockup do Axis Finance App em Celulares"
                  fill
                  className="object-contain"
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
                  className="object-contain"
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
                  className="object-contain"
                  priority
                  quality={100}
                  sizes="(min-width: 1280px) 1400px, (min-width: 1024px) 1200px, 100vw"
                />
              </div>
            </div>

            {/* Efeito de Reflexo Sutil */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-b from-[#3aae4d]/10 to-transparent blur-2xl"></div>
          </div>

          {/* Badge abaixo da mockup */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] text-white rounded-full px-6 py-3 shadow-lg">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm md:text-base font-semibold">Análises Visuais Completas</span>
            </div>
          </div>

          {/* Texto Completo Abaixo da Mockup */}
          <div className="max-w-4xl mx-auto mt-16 px-4 text-left">
            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sua vida organizada
            </h2>

            {/* Subtítulo Verde */}
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] mb-8">
              Sem esforço
            </h3>

            {/* Parágrafos Explicativos */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Você já se viu perdido com tantas tarefas e despesas no seu dia a dia? Esqueceu compromissos importantes ou se assustou ao ver a fatura do cartão de crédito?
              </p>

              <p>
                Sabemos como isso pode ser frustrante. Agendas, planilhas, aplicativos complicados... Infelizmente, nada disso é prático e eficiente.
              </p>

              <p>
                Foi por isso que criamos o <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e]">Axis Finance App</span>, uma ferramenta inteligente que combina o melhor da organização financeira com a gestão de compromissos, tudo de forma simples e direta pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terceira Seção - Mockup com Texto */}
      <section className="container mx-auto px-4 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Coluna Esquerda - Texto */}
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Tudo na{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e]">palma da sua mão</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Com o Axis Finance, você tem controle total das suas finanças direto do seu celular. Simples, rápido e eficiente.
              </p>

              {/* Lista de Benefícios */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">Registre despesas em segundos pelo WhatsApp</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">Visualize gráficos e relatórios em tempo real</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">Receba lembretes automáticos de contas a pagar</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">Acesse de qualquer lugar, a qualquer momento</p>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Mockup do Celular */}
            <div className="order-1 md:order-2 relative">
              {/* Efeito de Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3aae4d]/10 via-[#2d8a3e]/10 to-[#3aae4d]/10 blur-3xl -z-10"></div>
              
              {/* Container da Imagem */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                  <Image
                    src="https://meorganizy.com/assets/images/mockup-celular-new-CtR_P0dU.webp"
                    alt="Mockup do Axis Finance App no Celular"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="(min-width: 1024px) 600px, (min-width: 768px) 500px, 100vw"
                  />
                </div>
              </div>

              {/* Efeito de Reflexo */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-b from-[#3aae4d]/10 to-transparent blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção - Como Funciona */}
      <section id="recursos" className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Como funciona o Organizy
          </h2>

          {/* Grid de Passos */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Passo 1 */}
            <Card className="border-2 border-[#3aae4d]/20 shadow-lg hover:shadow-xl transition-all hover:border-[#3aae4d]/40">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3aae4d] to-[#2d8a3e] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <CardTitle className="text-xl">Envie sua mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Envie suas despesas e receitas diretamente para o assistente no WhatsApp de forma natural.
                </p>
              </CardContent>
            </Card>

            {/* Passo 2 */}
            <Card className="border-2 border-[#3aae4d]/20 shadow-lg hover:shadow-xl transition-all hover:border-[#3aae4d]/40">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3aae4d] to-[#2d8a3e] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <CardTitle className="text-xl">Análise inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nossa IA processa automaticamente suas informações e categoriza tudo de forma inteligente.
                </p>
              </CardContent>
            </Card>

            {/* Passo 3 */}
            <Card className="border-2 border-[#3aae4d]/20 shadow-lg hover:shadow-xl transition-all hover:border-[#3aae4d]/40">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3aae4d] to-[#2d8a3e] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <CardTitle className="text-xl">Lançamento automático</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suas movimentações são registradas instantaneamente e seus relatórios atualizados em tempo real.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Seção de Segurança Destacada */}
          <div className="bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] rounded-2xl p-8 mb-12 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Lock className="w-7 h-7 text-[#3aae4d]" />
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-3">Criptografia de Ponta a Ponta</h3>
                <p className="text-green-50 leading-relaxed">
                  Seus dados são protegidos com a mesma tecnologia usada por bancos. Todas as suas informações financeiras são criptografadas e apenas você tem acesso a elas.
                </p>
              </div>
            </div>
          </div>

          {/* Funcionalidades Adicionais */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* IA que entende linguagem natural */}
            <Card className="border-2 border-[#3aae4d]/20 bg-green-50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-8 h-8 text-[#3aae4d]" />
                  <CardTitle className="text-xl">IA que entende a sua linguagem natural</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Não precisa seguir comandos rígidos. Escreva como você fala: &quot;gastei 50 no mercado&quot; ou &quot;recebi 1000 do trabalho&quot; e a IA entende perfeitamente.
                </p>
              </CardContent>
            </Card>

            {/* Crie e Edite Transações */}
            <Card className="border-2 border-[#3aae4d]/20 bg-green-50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Edit3 className="w-8 h-8 text-[#3aae4d]" />
                  <CardTitle className="text-xl">Crie e Edite Transações</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Gerencie suas transações diretamente no WhatsApp. Edite valores, categorias ou exclua lançamentos com comandos simples.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Chamada para Ação */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Deixe para trás planilhas complexas e apps confusos!
            </p>
            <Button 
              asChild
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white px-8 sm:px-10 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Começar Agora Mesmo
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Nova Seção - Vídeo e Soluções no WhatsApp */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Coluna Esquerda - Mockup do Vídeo */}
            <div className="order-2 md:order-1">
              <div className="relative bg-gradient-to-br from-[#3aae4d] to-[#2d8a3e] rounded-3xl p-8 shadow-2xl">
                {/* Conteúdo do Vídeo Mockup */}
                <div className="text-white space-y-6">
                  <p className="text-lg font-semibold">
                    Você já começou a assistir esse vídeo
                  </p>
                  
                  {/* Botões de Ação do Vídeo */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 transition-all">
                      <Play className="w-5 h-5" />
                      <span className="font-medium">Continuar assistindo?</span>
                    </button>
                    
                    <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 transition-all">
                      <RotateCcw className="w-5 h-5" />
                      <span className="font-medium">Assistir do início?</span>
                    </button>
                  </div>
                </div>

                {/* Efeito de Brilho */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] rounded-3xl blur-xl opacity-30 -z-10"></div>
              </div>
            </div>

            {/* Coluna Direita - Texto */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Suas soluções completas no{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#25D366]">WhatsApp</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Com o seu <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e]">Organizy</strong>, você gerencia suas finanças direto pelo WhatsApp de forma simples e intuitiva. Sem complicações, sem aplicativos extras.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Registre despesas, acompanhe receitas, visualize relatórios e muito mais - tudo através de mensagens naturais, como se estivesse conversando com um amigo.
              </p>

              {/* Botão de Ação */}
              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
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

      {/* Nova Seção - O que você ganha usando o Organizy */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge e Título */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg">
              FUNCIONALIDADES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que você ganha usando o Organizy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme sua relação com o dinheiro e alcance seus objetivos financeiros com ferramentas poderosas e intuitivas
            </p>
          </div>

          {/* Grid de Funcionalidades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#3aae4d]" />
                </div>
                <CardTitle className="text-xl">Visualize Seu Futuro Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gráficos inteligentes que mostram para onde seu dinheiro está indo e como você pode economizar mais.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="w-6 h-6 text-[#3aae4d]" />
                </div>
                <CardTitle className="text-xl">Categorização Automática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A IA organiza suas despesas automaticamente em categorias, sem você precisar fazer nada.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-[#3aae4d]" />
                </div>
                <CardTitle className="text-xl">Controle Total do Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Defina limites de gastos por categoria e receba alertas quando estiver próximo do limite.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#3aae4d]" />
                </div>
                <CardTitle className="text-xl">Metas Financeiras Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Crie metas de economia e acompanhe seu progresso em tempo real com sugestões personalizadas.
                </p>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-[#3aae4d]" />
                </div>
                <CardTitle className="text-xl">Lembretes Automáticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nunca mais esqueça de pagar uma conta. Receba notificações antes do vencimento.
                </p>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-[#3aae4d]" />
                </div>
                <CardTitle className="text-xl">Planejamento de Longo Prazo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Projete seus gastos futuros e veja como suas decisões de hoje impactam seu amanhã.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nova Seção - O Organizy é para qualquer pessoa */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge e Título */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg">
              PARA VOCÊ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O Organizy é para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e]">qualquer pessoa</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não importa sua situação financeira ou conhecimento, o Organizy se adapta às suas necessidades
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 - Vida Pessoal e Familiar */}
            <Card className="border-2 border-[#3aae4d]/20 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <HomeIcon className="w-8 h-8 text-[#3aae4d]" />
                  </div>
                  <CardTitle className="text-2xl">Vida Pessoal e Familiar</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Organize suas finanças pessoais e familiares de forma simples e eficiente.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Acompanhe despesas da casa, mercado, contas e lazer
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Defina e alcance metas como viagens, compras ou reserva de emergência
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Planeje o orçamento familiar e evite surpresas no fim do mês
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Organize veículos, imóveis e outros bens da família
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 - Gestão Empresarial Completa */}
            <Card className="border-2 border-[#3aae4d]/20 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-[#3aae4d]" />
                  </div>
                  <CardTitle className="text-2xl">Gestão Empresarial Completa</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Ideal para microempreendedores, freelancers e pequenos negócios.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Separe receitas empresariais das pessoais com facilidade
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Acompanhe entradas e saídas do seu negócio em tempo real
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Organize pagamentos a fornecedores e recebimentos de clientes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Gere relatórios profissionais para análise de desempenho
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Seção Destacada Final */}
          <div className="bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Ícone de Estrela */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Star className="w-9 h-9 text-[#3aae4d] fill-[#3aae4d]" />
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Sem Conhecimento Financeiro? Perfeito!
                </h3>
                <p className="text-lg text-green-50 leading-relaxed">
                  O Organizy foi criado justamente para quem não tem tempo ou paciência com planilhas complicadas. Nossa inteligência artificial cuida de tudo automaticamente, você só precisa enviar suas mensagens naturalmente pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">O que nossos usuários dizem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Depoimento 1 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] bg-gray-100">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/98f8e1c5-fabf-4fac-a1bd-6584f690ba83.jpg"
                    alt="Feedback de Ricardo Mendes"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4107c87a-cf1b-4558-b5a2-2a07b71e4eae.png"
                        alt="Ricardo Mendes"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ricardo Mendes</p>
                      <p className="text-sm text-gray-600">Cliente Verificado</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    &quot;O Axis Finance mudou completamente minha relação com dinheiro. Agora tenho controle total!&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] bg-gray-100">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1e128be9-276a-4ccf-a294-8ea48842458b.jpg"
                    alt="Feedback de Thaís Silva"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/01294f2a-cfc8-4011-9fca-524f4f6e614c.png"
                        alt="Thaís Silva"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Thaís Silva</p>
                      <p className="text-sm text-gray-600">Cliente Verificado</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    &quot;Simplesmente incrível! Registrar gastos pelo WhatsApp é muito prático e rápido.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] bg-gray-100">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/98f8e1c5-fabf-4fac-a1bd-6584f690ba83.jpg"
                    alt="Feedback adicional"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/82f83f2a-643e-4ec8-ae9c-b1512391edc7.png"
                        alt="Cliente"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Felipe Costa</p>
                      <p className="text-sm text-gray-600">Cliente Verificado</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    &quot;Os gráficos são incríveis! Consigo visualizar exatamente para onde vai meu dinheiro.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ASSINATURA - Pronto para transformar suas finanças? */}
      <section id="precos" className="container mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Título e Subtítulo */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pronto para transformar suas finanças?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Junte-se a milhares de pessoas que já estão no controle total do seu dinheiro.
            </p>
          </div>

          {/* Card de Preço Principal */}
          <Card className="border-2 border-[#3aae4d] shadow-2xl overflow-hidden mb-12">
            <CardContent className="p-8 md:p-12">
              {/* Preço com Destaque */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl md:text-3xl text-gray-500 line-through">R$ 149,90</span>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    80% OFF
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-gray-700 text-2xl">por apenas</span>
                  <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e]">R$ 29,90</span>
                </div>
                <p className="text-gray-600 text-lg mt-2">pagamento único</p>
              </div>

              {/* Lista de Benefícios */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3aae4d] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    <strong>Perfil Pessoal e Empresarial</strong> incluídos
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3aae4d] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    <strong>Perfil Casal</strong> - Compartilhe com seu cônjuge
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3aae4d] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Todas funcionalidades incluídas
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3aae4d] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Assistente WhatsApp inteligente
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3aae4d] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Suporte prioritário vitalício
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3aae4d] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Todas atualizações futuras incluídas
                  </span>
                </div>
              </div>

              {/* Botão de Compra - Mobile Otimizado */}
              <Button 
                asChild
                size="lg" 
                className="w-full bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white text-lg sm:text-xl py-6 sm:py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Garantir Minha Vaga Agora
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Mockup do Produto com Efeitos */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3aae4d]/10 via-[#2d8a3e]/10 to-[#3aae4d]/10 blur-3xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="https://meorganizy.com/assets/images/mockup-celular-new-CtR_P0dU.webp"
                  alt="Mockup do Organizy"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(min-width: 1024px) 900px, (min-width: 768px) 700px, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Texto de Valor */}
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              Quanto vale a paz de ter suas finanças organizadas e finalmente saber para onde seu dinheiro está indo?
            </p>
          </div>

          {/* Seção de Garantia */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-2 border-[#3aae4d]/30 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Ícone de Escudo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#3aae4d] to-[#2d8a3e] rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Conteúdo da Garantia */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Teste o Organizy por 7 dias completos sem nenhum risco.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Se por qualquer motivo você não ficar 100% satisfeito com a plataforma, basta enviar um email dentro dos primeiros 7 dias e restituiremos todo o seu investimento, sem perguntas, sem burocracia.
                </p>
              </div>
            </div>

            {/* Badge de Segurança */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
                <Lock className="w-6 h-6 text-[#3aae4d]" />
                <span className="text-lg font-semibold text-gray-900">100% Seguro e Garantido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Mockup Estilizada */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Badge e Título */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg">
                PERGUNTAS FREQUENTES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Tire suas dúvidas
              </h2>
              <p className="text-xl text-gray-600">
                Tudo o que você precisa saber sobre o Axis Finance App
              </p>
            </div>

            {/* Accordion Estilizado */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-[#3aae4d]/10">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    Por que não usar planilhas do Excel ou Google Sheets?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Planilhas funcionam, mas exigem muito trabalho manual e conhecimento técnico. O Axis automatiza tudo: categorização inteligente, gráficos em tempo real, lembretes automáticos e até assistente no WhatsApp. Você economiza horas toda semana e ainda tem insights profissionais que planilhas não oferecem.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    Funciona no celular? E se eu quiser usar no computador?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Funciona perfeitamente em ambos! Você pode acessar pelo celular, tablet ou computador. Seus dados ficam sincronizados em todos os dispositivos automaticamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    Meus dados financeiros estão seguros?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Sim! Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos padrões de segurança. Seus dados são privados e jamais compartilhados com terceiros.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    É difícil de usar? Preciso entender de finanças?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Não! O Axis Finance foi criado justamente para quem não tem tempo ou paciência com planilhas. É simples como enviar uma mensagem no WhatsApp. A inteligência artificial cuida de tudo automaticamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    Como funciona o assistente WhatsApp?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Você conversa naturalmente pelo WhatsApp como se fosse com um amigo. Envie &apos;gastei 50 reais no mercado&apos; e pronto! O assistente registra, categoriza e ainda pode enviar relatórios quando você pedir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-gray-200 pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    Vale a pena o investimento? Vou economizar dinheiro?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Sim! Nossos usuários economizam em média 30% nos gastos mensais apenas por terem clareza de para onde vai o dinheiro. O investimento se paga em poucos dias.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="pb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#3aae4d] transition-colors">
                    Vocês oferecem suporte? E se eu tiver dúvidas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    Sim! Temos suporte via WhatsApp e email. Nossa equipe está sempre pronta para ajudar você a aproveitar ao máximo o Axis Finance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA Final no FAQ */}
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 mb-6">
                Ainda tem dúvidas? Fale com a gente!
              </p>
              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#3aae4d] to-[#2d8a3e] hover:from-[#2d8a3e] hover:to-[#3aae4d] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Axis Finance App. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
