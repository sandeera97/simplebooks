"use client"
import React, { ReactNode, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | undefined>(
    undefined
  )
  const isMobile = useIsMobile()

  useEffect(() => {
    const checkSidebarState = () => {
      const sidebarState = localStorage.getItem("sidebar-state")
      if (sidebarState === "open") {
        setIsSidebarOpen(true)
      } else if (sidebarState === "closed") {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(!isMobile)
      }
    }

    checkSidebarState()

    window.addEventListener("storage", checkSidebarState)

    const handleSidebarToggle = (e: CustomEvent) => {
      setIsSidebarOpen(e.detail.isOpen)
    }

    window.addEventListener(
      "sidebar-toggle" as keyof WindowEventMap,
      handleSidebarToggle as EventListener
    )

    return () => {
      window.removeEventListener("storage", checkSidebarState)
      window.removeEventListener(
        "sidebar-toggle" as keyof WindowEventMap,
        handleSidebarToggle as EventListener
      )
    }
  }, [isMobile])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobile, isSidebarOpen])

  if (typeof isSidebarOpen !== "boolean") {
    return null
  }

  return (
    <div className="flex min-h-screen font-poppins bg-white">
      {/* Only show hamburger menu when sidebar is closed on mobile */}
      {isMobile && !isSidebarOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={() => {
            const newState = !isSidebarOpen
            setIsSidebarOpen(newState)
            localStorage.setItem("sidebar-state", newState ? "open" : "closed")
            const event = new CustomEvent("sidebar-toggle", {
              detail: { isOpen: newState },
            })
            window.dispatchEvent(event)
          }}>
          <Menu className="h-6 w-6" />
        </Button>
      )}
      <Sidebar isOpen={isSidebarOpen} />
      <main
        className={`flex-1 transition-all duration-300 
          ${isSidebarOpen && !isMobile ? "ml-64" : !isMobile ? "ml-20" : "ml-0"}
          ${
            isMobile
              ? isSidebarOpen
                ? "opacity-25"
                : "p-6 pt-20"
              : "p-8 pt-16"
          }
        `}>
        {children}
      </main>
    </div>
  )
}

export default Layout
