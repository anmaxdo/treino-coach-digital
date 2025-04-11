
import { motion } from "framer-motion";
import { ArrowRight, BarChartBig, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBotButton from "@/components/ChatBot/ChatBotButton";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-trainer-light/30 p-4">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-trainer to-trainer-dark bg-clip-text text-transparent">Treinador Digital</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bem-vindo ao seu assistente pessoal de treinamento e desenvolvimento.
            Clique no botão de chat no canto inferior direito para começar!
          </p>
          
          <Button className="bg-trainer hover:bg-trainer-dark text-white rounded-full px-6 py-6 text-lg font-medium mt-4 group">
            Conheça mais recursos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-trainer-light flex items-center justify-center mb-4">
                  <BarChartBig className="text-trainer" size={24} />
                </div>
                <CardTitle className="text-2xl font-bold text-trainer">Análise de Desempenho</CardTitle>
                <CardDescription className="text-gray-500">
                  Visualize seu progresso e identifique oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Receba insights detalhados sobre seus pontos fortes e áreas para melhoria,
                  com base nos seus dados de atividade e progresso ao longo do tempo.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-trainer-light flex items-center justify-center mb-4">
                  <BookOpen className="text-trainer" size={24} />
                </div>
                <CardTitle className="text-2xl font-bold text-trainer">Conteúdo Personalizado</CardTitle>
                <CardDescription className="text-gray-500">
                  Material adaptado ao seu perfil e objetivos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  Recomendações de conteúdo adaptadas especificamente ao seu perfil para ajudar 
                  você a atingir seus objetivos de forma mais eficiente e direcionada.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Chatbot Button Component */}
      <ChatBotButton />
    </div>
  );
};

export default Index;
