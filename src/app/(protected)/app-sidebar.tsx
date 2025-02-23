"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const items = [
  {
    title: "ControlHub",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "InsightAI",
    url: "/iq",
    icon: Bot,
  },
  {
    title: "NexusMeet",
    url: "/meetings",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

const projects = [
  {
    name: "Project-1",
  },
  {
    name:"Project-2",
  },
  {
    name:"Project-3",
  }
]

export function AppSidebar() {
  const pathname = usePathname();
  const {open} = useSidebar()
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src='/3.png' alt='logo' width={60} height={60}/>
          {open &&(
          <h1 className="text-xl font-extrabold text-primary/80 tracking-wide uppercase italic">
          Hyperion
          </h1>
          )}
        </div>
        </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          {
                            "!bg-primary !text-white": pathname === item.url,
                          },
                          "list-none",
                        )}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
            <SidebarGroupLabel>
              Innovation Hub
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                  {projects.map(project => {
                    return(
                      <SidebarMenuItem key= {project.name}>
                        <SidebarMenuButton asChild>
                        <div>
                          <div className={ cn(
                            'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',{
                              'bg-primary text-white': true
                              // 'bg-primary text-white': project.id === project.id
                            }
                          )}>
                             {project.name[0]}
                          </div>
                          <span>{project.name}</span>
                        </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                  <div className="h-2"></div>
                  {open && (
                  <SidebarMenuItem>
                  <Link href='/create'>
                  <Button variant={'outline'} className="w-fit">
                    <Plus/>
                    Create Project
                  </Button>
                  </Link>
                </SidebarMenuItem>
                  )}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}
