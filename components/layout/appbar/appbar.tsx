"use client";
import ContextMenu from "./context-menu";
import LanguageSelector from "./language-selector";

export default function AppBar() {
  return (
    <div className="py-4 w-full flex justify-center fixed z-99 backdrop-blur-md mask-[linear-gradient(to_bottom,black,black_75%,transparent)]">
      <div
        className="backdrop-blur-md mx-32 z-100 w-full flex items-center justify-between py-4 px-4 h-10 border border-gray-600 opacity-80 
        hover:opacity-100 hover:backdrop-blur-none hover:bg-background rounded-lg transition-all"
      >
        Lucas Rauch
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ContextMenu />
        </div>
      </div>
    </div>
  );
}
