
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
            transition={{ duration: 0.2 }}
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
          "w-14 h-14 rounded-full flex items-center justify-center shadow-lg",
          isChatOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-trainer hover:bg-trainer-dark"
        )}
      >
        {isChatOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white animate-pulse-slow" size={24} />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBotButton;
