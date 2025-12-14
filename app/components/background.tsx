import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(at_73%_40%,#fffef7_0%,_transparent_60%),radial-gradient(at_97%_0%,#e4dbffeb_0%,_transparent_40%),radial-gradient(at_74%_64%,#fffef2_0%,_transparent_50%),radial-gradient(at_18%_5%,#e4dbffeb_0%,_transparent_40%),radial-gradient(at_8%_80%,#fffef2_0%,_transparent_60%),radial-gradient(at_0%_25%,#e9fcf7_0%,_transparent_30%),radial-gradient(at_85%_98%,#fffbea_0%,_transparent_30%)] dark:bg-[radial-gradient(at_73%_40%,#23132b_0%,_transparent_60%),radial-gradient(at_97%_0%,#3a2086eb_0%,_transparent_40%),radial-gradient(at_74%_64%,#1b0924_0%,_transparent_50%),radial-gradient(at_18%_5%,#09020e_0%,_transparent_40%),radial-gradient(at_8%_80%,#0f0514_0%,_transparent_60%),radial-gradient(at_0%_25%,#3a2066_0%,_transparent_30%),radial-gradient(at_85%_98%,#0f0514_0%,_transparent_30%)]" />
      {children}
    </div>
  );
}
