import { Github } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-2xl mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold">
              Quiz Polski
            </span>
          </a>
        </div>
        <nav className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/turalowski"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit my GitHub profile</p>
              </TooltipContent>
            </Tooltip>

            <Button variant="ghost" className="ml-2" asChild>
              <a
                href="https://www.youtube.com/watch?v=H4d5emqwpao&t=2s&ab_channel=NatanMartins"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium"
              >
                TH
              </a>
            </Button>
          </TooltipProvider>
        </nav>
      </div>
    </header>
  );
} 