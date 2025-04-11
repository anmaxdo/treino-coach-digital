
import ChatBotButton from "@/components/ChatBot/ChatBotButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-trainer-light/30 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-trainer-dark">Treinador Digital</h1>
        <p className="text-xl text-gray-600 mb-8">
          Bem-vindo ao seu assistente pessoal de treinamento e desenvolvimento.
          Clique no botão de chat no canto inferior direito para começar!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-trainer mb-3">Análise de Desempenho</h2>
            <p className="text-gray-600">
              Receba insights detalhados sobre seus pontos fortes e áreas para melhoria,
              com base nos seus dados de atividade.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-trainer mb-3">Conteúdo Personalizado</h2>
            <p className="text-gray-600">
              Recomendações de conteúdo adaptadas ao seu perfil para ajudar 
              você a atingir seus objetivos de forma mais eficiente.
            </p>
          </div>
        </div>
      </div>
      
      {/* Chatbot Button Component */}
      <ChatBotButton />
    </div>
  );
};

export default Index;
