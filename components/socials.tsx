import Link from 'next/link';
import { Twitter, MessageCircle, Github } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="fixed right-0 top-1/4 transform -translate-y-1/2 z-50">
      <div className="flex flex-col border border-zinc-800 bg-black/50 backdrop-blur-sm rounded-l-lg">
        <Link 
          href="https://twitter.com/NexisNetwork" 
          target="_blank"
          className="p-3 hover:bg-zinc-800/50 transition-colors border-b border-zinc-800"
        >
          <Twitter className="w-5 h-5 text-white" />
        </Link>
        <Link 
          href="https://t.me/NexisNetwork" 
          target="_blank"
          className="p-3 hover:bg-zinc-800/50 transition-colors border-b border-zinc-800"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </Link>
        <Link 
          href="https://discord.gg/NexisNetwork" 
          target="_blank"
          className="p-3 hover:bg-zinc-800/50 transition-colors border-b border-zinc-800"
        >
          <FaDiscord className="w-5 h-5 text-white" />
        </Link>
        <Link 
          href="https://github.com/NexisNetwork" 
          target="_blank"
          className="p-3 hover:bg-zinc-800/50 transition-colors"
        >
          <Github className="w-5 h-5 text-white" />
        </Link>
      </div>
    </div>
  );
}
