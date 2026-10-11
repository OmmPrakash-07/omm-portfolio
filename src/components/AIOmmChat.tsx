
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey! 👋 I'm AI Omm, your portfolio assistant. Ask me about Omm's projects, skills, technologies, or development journey.",
};

const SUGGESTED_QUESTIONS = [
  "Tell me about Omm",
  "Show me his projects",
  "What technologies does he use?",
];

export default function AIOmmChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function sendMessage(
    event?: FormEvent<HTMLFormElement>,
    suggestedQuestion?: string
  ) {
    event?.preventDefault();

    const content = (suggestedQuestion ?? input).trim();

    if (!content || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content,
    };

    const conversation = [...messages, userMessage];

    setMessages(conversation);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-omm/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversation.slice(-8),
        }),
      });

      const data: { answer?: string; error?: string } =
        await response.json();

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "Unable to get a response.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer! },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] sm:bottom-7 sm:right-7">
      {isOpen && (
        <section
          aria-label="AI Omm chat"
          className="mb-4 flex h-[min(600px,calc(100dvh-120px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b12] text-white shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-violet-600/20 to-cyan-500/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/15">
                <Bot size={24} className="text-violet-300" />
              </div>

              <div>
                <h2 className="font-semibold tracking-wide">AI Omm</h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-white/55">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Portfolio assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Omm chat"
              className="rounded-xl p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto p-4"
            aria-live="polite"
          >
            <div className="flex items-center gap-2 text-xs text-white/35">
              <Sparkles size={13} />
              AI-powered portfolio guide
            </div>

            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-violet-600 text-white"
                      : "rounded-bl-md border border-white/10 bg-white/[0.06] text-white/85"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(undefined, question)}
                    className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-left text-xs text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-white/50">
                <LoaderCircle
                  size={16}
                  className="animate-spin text-violet-300"
                />
                AI Omm is thinking...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={(event) => void sendMessage(event)}
            className="border-t border-white/10 bg-black/20 p-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 transition focus-within:border-violet-400/50">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                aria-label="Message AI Omm"
                maxLength={1200}
                disabled={isLoading}
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/35 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-white/30">
              AI-generated responses · Please verify important details
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close AI Omm" : "Open AI Omm"}
        aria-expanded={isOpen}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-[0_8px_35px_rgba(124,58,237,0.45)] transition duration-300 hover:scale-105 hover:shadow-[0_8px_45px_rgba(124,58,237,0.65)]"
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <MessageCircle size={25} />
        )}
      </button>
    </div>
  );
}
