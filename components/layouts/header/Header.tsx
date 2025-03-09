import { Button } from "@/components/ui/button";
import { History, CreditCard } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-24 w-full items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold text-sky-500">ほま寿司</h1>
        <div className="ml-2 rounded-md border border-black-200 bg-white px-2 py-1 text-sm text-black-500">
          <span>1卓</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="gap-1 border-gray-200 bg-white px-4 py-5 text-gray-700 hover:bg-gray-50 hover:text-gray-800"
        >
          <History className="h-4 w-4" />
          <span>注文履歴</span>
        </Button>
        <Button
          variant="default"
          size="sm"
          className="gap-1 bg-sky-500 px-4 py-5 hover:bg-sky-600"
        >
          <CreditCard className="h-4 w-4" />
          <span>お会計</span>
        </Button>
      </div>
    </header>
  );
}
