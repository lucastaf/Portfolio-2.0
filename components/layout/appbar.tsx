"use client";
import ContextMenu from "./context-menu";
import LanguageSelector from "./language-selector";

export default function AppBar() {
  return (
    <div className="py-4 w-full flex justify-center h-15 fixed z-999">
      <div
        className="backdrop-blur-md mx-32 z-1000 w-full flex items-center justify-between py-4 px-4 h-10 border border-gray-600 opacity-80 
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
