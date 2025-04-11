
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ChatBotWindowProps {
  onClose: () => void;
}

type MessageType = {
  id: string;
  content: string;
  isBot: boolean;
  options?: { text: string; value: string }[];
};

const ChatBotWindow = ({ onClose }: ChatBotWindowProps) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Predefined responses
  const WELCOME_MESSAGE = "Olá! Sou o Treinador, seu assistente de desempenho. Como posso te ajudar hoje?";
  const WELCOME_OPTIONS = [
    { 
      text: "Analisar meu desempenho", 
      value: "desempenho" 
    },
    { 
      text: "Recomendar conteúdo", 
      value: "conteudo" 
    }
  ];
  
  const PERFORMANCE_ANALYSIS = `
    Baseado na análise do seu desempenho recente:
    
    **Pontos fortes:**
    • Excelente consistência nas atividades
    • Bom progresso em exercícios de força
    
    **Pontos fracos:**
    • Intervalos de descanso muito longos
    • Falta de variedade nos treinos

    Gostaria de uma recomendação de conteúdo para melhorar algum desses aspectos?
  `;
  
  const CONTENT_RECOMMENDATION = `
    Recomendações de conteúdo personalizado:
    
    **Para aprimorar seus pontos fortes:**
    • Treinamento Avançado de Força: Aprenda técnicas para maximizar seus ganhos
    • Consistência e Disciplina: Como manter a motivação a longo prazo
    
    **Para melhorar seus pontos fracos:**
    • Guia de Otimização de Descanso: Encontre o equilíbrio ideal
    • Treinamento Variado: 10 maneiras de diversificar seus exercícios
    
    Deseja mais detalhes sobre algum desses conteúdos?
  `;

  // Generate a random ID for messages
  const generateId = () => Math.random().toString(36).substring(2, 9);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    // Add a small delay to make it feel more natural
    const timer = setTimeout(() => {
      setMessages([
        {
          id: generateId(),
          content: WELCOME_MESSAGE,
          isBot: true,
          options: WELCOME_OPTIONS
        }
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle sending a message
  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: generateId(),
      content: text,
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate "typing" with a slight delay
    setTimeout(() => {
      let responseMessage: MessageType;

      // Determine response based on input
      if (text.toLowerCase().includes("desempenho") || text === "desempenho") {
        responseMessage = {
          id: generateId(),
          content: PERFORMANCE_ANALYSIS,
          isBot: true
        };
      } else if (text.toLowerCase().includes("conteudo") || text.toLowerCase().includes("conteúdo") || text === "conteudo") {
        responseMessage = {
          id: generateId(),
          content: CONTENT_RECOMMENDATION,
          isBot: true
        };
      } else {
        responseMessage = {
          id: generateId(),
          content: "Posso ajudar com análise de desempenho ou recomendações de conteúdo. Em qual você está interessado?",
          isBot: true,
          options: WELCOME_OPTIONS
        };
      }

      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  // Handle clicking a suggestion chip
  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[550px] flex flex-col overflow-hidden border border-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-trainer to-trainer-dark p-4 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 bg-white border-2 border-white shadow-md">
            <span className="text-trainer font-bold text-lg">T</span>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg">Treinador</h3>
            <p className="text-xs text-white/80">Seu assistente de desempenho</p>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <motion.div 
            key={message.id} 
            className={cn("flex", !message.isBot && "justify-end")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className={cn(
                "max-w-[85%] rounded-2xl p-4",
                message.isBot 
                  ? "bg-white shadow-md border border-gray-100" 
                  : "bg-trainer text-white"
              )}
            >
              <div 
                className="whitespace-pre-line text-sm" 
                dangerouslySetInnerHTML={{ 
                  __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>') 
                }} 
              />
              
              {/* Option chips */}
              {message.options && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {message.options.map((option) => (
                    <Button 
                      key={option.value}
                      variant="outline"
                      size="sm"
                      className="bg-trainer-light text-trainer hover:bg-trainer hover:text-white transition-colors duration-300 rounded-full text-xs shadow-sm border-transparent"
                      onClick={() => handleOptionClick(option.value)}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <Separator />
      
      {/* Input area */}
      <div className="p-4 bg-white flex items-center space-x-2">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Digite sua mensagem..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          className="flex-1 rounded-full border-gray-200 focus-visible:ring-trainer focus-visible:ring-offset-1 focus-visible:ring-offset-trainer/10"
        />
        <Button 
          size="icon"
          variant="ghost" 
          className={cn(
            "text-trainer hover:text-white hover:bg-trainer rounded-full transition-colors duration-300 shadow-sm",
            inputValue.trim() ? "opacity-100" : "opacity-50"
          )}
          onClick={() => handleSendMessage()}
          disabled={!inputValue.trim()}
        >
          <Send size={18} />
        </Button>
      </div>
    </motion.div>
  );
};

export default ChatBotWindow;
