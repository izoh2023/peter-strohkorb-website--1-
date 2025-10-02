import { Button } from "@/components/ui/button"
import { User, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export function AdminHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin" className="text-2xl font-bold text-primary">
            Admin Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
