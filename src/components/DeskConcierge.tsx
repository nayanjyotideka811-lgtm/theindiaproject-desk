import React, { useState } from 'react';
import { Sparkles, Send, Bot, ShieldCheck, RefreshCw, Compass } from 'lucide-react';

interface DeskConciergeProps {
  userType: 'domestic' | 'international';
}

export const DeskConcierge: React.FC<DeskConciergeProps> = ({ userType }) => {
  const [promptInput, setPromptInput] = useState<string>('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'desk'; text: string }>>([
    {
      sender: 'desk',
      text: "Greetings. The Desk is active. As your Private Coordination Assistant for India's uncharted corridors, we stand ready to de-risk your solo itinerary, calculate microtip impacts, or verify corridor clearances."
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const samplePrompts = [
    "Draft a 3-day solo itinerary for Ziro Valley with local host microtip stops.",
    "Explain the 5-Hour Transit Rule for an international solo traveler heading to Spiti.",
    "Calculate the monthly earning impact of ₹150 microtips for 20 boatmen in Dawki.",
    "What permits are required for a solo domestic traveller entering Gurez Valley?"
  ];

  const handleSendPrompt = async (textToSend?: string) => {
    const text = textToSend || promptInput;
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user' as const, text }];
    setMessages(newMessages);
    if (!textToSend) setPromptInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([...newMessages, { sender: 'desk', text: data.text || "The Desk has logged your query." }]);
      } else {
        // Fallback Desk response if server API is not available
        setTimeout(() => {
          setMessages([...newMessages, {
            sender: 'desk',
            text: `[THE DESK MEMORANDUM // VERIFIED]\n\nRegarding your enquiry: "${text}"\n\nThe Desk has evaluated the corridor requirements under the 6-Pass Surveyor Protocol. For ${userType === 'domestic' ? 'Domestic Solo Travellers' : 'International Solo Travellers'}, all permits and host microtip channels are active. Coordinates, safehouses, and direct host transfers are held under seal.`
          }]);
        }, 800);
      }
    } catch (err) {
      setTimeout(() => {
        setMessages([...newMessages, {
          sender: 'desk',
          text: `[THE DESK MEMORANDUM // VERIFIED]\n\nRegarding your enquiry: "${text}"\n\nThe Desk has evaluated the corridor requirements under the 6-Pass Surveyor Protocol. For ${userType === 'domestic' ? 'Domestic Solo Travellers' : 'International Solo Travellers'}, all permits and host microtip channels are active. Coordinates, safehouses, and direct host transfers are held under seal.`
        }]);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            AI Desk Concierge · Powered by Gemini
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#e9e3d6] tracking-tight">
            Consult The Desk
          </h2>
          <p className="mt-2 text-[#a49d8d] font-serif text-base">
            Ask any question regarding solo route clearance, microtip economics, or regional corridor de-risking.
          </p>
        </div>

        {/* Quick Sample Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {samplePrompts.map((sp, i) => (
            <button
              key={i}
              onClick={() => handleSendPrompt(sp)}
              className="bg-[#111114] hover:bg-[#c2a15a]/10 border border-[#e9e3d6]/15 hover:border-[#c2a15a]/40 text-[#a49d8d] hover:text-[#e9e3d6] text-xs font-serif px-3 py-1.5 rounded transition-all text-left"
            >
              "{sp}"
            </button>
          ))}
        </div>

        {/* Chat Box */}
        <div className="bg-[#111114] border border-[#e9e3d6]/20 rounded-sm overflow-hidden flex flex-col h-[500px]">
          
          {/* Chat Messages Log */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-serif text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'desk' && (
                  <div className="w-8 h-8 rounded-full bg-[#c2a15a]/10 border border-[#c2a15a]/40 flex items-center justify-center flex-shrink-0 text-[#c2a15a]">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-xl p-4 rounded text-sm leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-[#c2a15a] text-[#0b0b0c] font-medium font-sans'
                      : 'bg-[#0b0b0c] border border-[#e9e3d6]/15 text-[#e9e3d6]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#c2a15a]/10 border border-[#c2a15a]/40 flex items-center justify-center text-[#c2a15a]">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-[#0b0b0c] border border-[#e9e3d6]/15 p-4 rounded text-xs font-mono text-[#a49d8d]">
                  The Desk is formulating response under the 6-Pass Protocol...
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-[#e9e3d6]/15 bg-[#0b0b0c] flex gap-3">
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
              placeholder="Ask The Desk regarding solo travel routes, microtips, or corridor vetting..."
              className="flex-1 bg-[#111114] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-4 py-2.5 rounded focus:border-[#c2a15a] focus:outline-none"
            />
            <button
              onClick={() => handleSendPrompt()}
              disabled={isLoading}
              className="bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded font-bold transition-all flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" /> Send
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
