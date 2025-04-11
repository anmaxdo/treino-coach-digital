
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ChatBotWindow from "./ChatBotWindow";
import { cn } from "@/lib/utils";

const ChatBotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <ChatBotWindow onClose={() => setIsChatOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          isChatOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-trainer hover:bg-trainer-dark"
        )}
      >
        {isChatOpen ? (
          <X className="text-white" size={26} />
        ) : (
          <MessageCircle className="text-white animate-pulse-slow" size={26} />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBotButton;
